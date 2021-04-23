package com.zenika.kafka.producer.service;

import lombok.RequiredArgsConstructor;
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
    private static final String CLIENT_ID = "MQTT-Java-Example";
    private static final String TOPIC = "/hfp/v2/journey/ongoing/vp/#";

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
        final String value = new String(message.getPayload());
        log.info("Message arrived: [{}] {}", topic, value);
    }
}
