package com.zenika.kafka.producer.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zenika.kafka.common.model.PositionKey;
import com.zenika.kafka.common.model.PositionValue;
import com.zenika.kafka.producer.model.VehiclePositionJson;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
public class Subscriber implements MqttCallback {

    private static final int QOS = 1;
    private static final String HOST = "ssl://mqtt.hsl.fi:8883";
    private static final String CLIENT_ID = "MQTT-Java-Example-Avro";
    private static final String TOPIC = "/hfp/v2/journey/ongoing/vp/#";

    private final Producer<PositionKey, PositionValue> producer;
    private final String kafkaTopic;

    public void start() {
        final MqttConnectOptions conOpt = new MqttConnectOptions();
        conOpt.setCleanSession(true);
        conOpt.setMaxInflight(1);

        final String uuid = UUID.randomUUID().toString().replace("-", "");

        final String clientIdMqtt = CLIENT_ID + "-" + uuid;
        try (MqttClient client = new MqttClient(HOST, clientIdMqtt, new MemoryPersistence())) {

            client.setCallback(this);
            client.connect(conOpt);
            client.subscribe(TOPIC, QOS);

        } catch (MqttException exception) {
            if (exception.getReasonCode() == 32100) {
                log.warn("Useless error {}", exception.getLocalizedMessage());
            } else {
                log.error("Unable to initialize", exception);
            }
        }

    }

    @Override
    public void connectionLost(Throwable cause) {
        log.error("Connection lost", cause);
    }

    @Override
    public void deliveryComplete(IMqttDeliveryToken token) {
        log.info("DeliveryComplete token:{}", token);
    }

    @Override
    public void messageArrived(String topic, MqttMessage message) {
        log.info("[{}] {}", topic, new String(message.getPayload()));
        final PositionValue value = getPositionValue(message.getPayload());
        final PositionKey key = new PositionKey(topic);
        final ProducerRecord<PositionKey, PositionValue> record = new ProducerRecord<>(kafkaTopic, key, value);
        producer.send(record);
    }

    @SneakyThrows
    private PositionValue getPositionValue(byte[] payload) {
        ObjectMapper mapper = new ObjectMapper();
        String json = new String(payload);
        VehiclePositionJson pos = mapper.readValue(json, VehiclePositionJson.class);
        VehiclePositionJson.VehicleValuesJson vv = pos.VP;

        return new PositionValue(vv.desi, vv.dir, vv.oper, vv.veh, vv.tst,
                vv.tsi, vv.spd, vv.hdg, vv.lat, vv.longitude, vv.acc, vv.dl,
                vv.odo, vv.drst, vv.oday, vv.jrn, vv.line, vv.start, vv.loc,
                vv.stop, vv.route, vv.occu, vv.seq);
    }
}
