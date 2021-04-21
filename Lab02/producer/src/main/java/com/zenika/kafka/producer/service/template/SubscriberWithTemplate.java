package com.zenika.kafka.producer.service.template;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.springframework.kafka.core.KafkaTemplate;

import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
public class SubscriberWithTemplate implements MqttCallback {

    private static final int QOS = 1;
    private static final String HOST = "ssl://mqtt.hsl.fi:8883";
    private static final String CLIENT_ID = "MQTT-Java-Example";
    private static final String TOPIC = "/hfp/v2/journey/ongoing/vp/#";

    private final KafkaTemplate<String, String> template;
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

    public void connectionLost(Throwable cause) {
        log.error("Connection lost", cause);
    }

    public void deliveryComplete(IMqttDeliveryToken token) {
        log.info("DeliveryComplete token:{}", token);
    }

    public void messageArrived(String topic, MqttMessage message) {
        // Here topic is topic mqtt
        log.info("[{}] {}", topic, message.getPayload());
        // No need producer record
        // Here topic is topic mqtt
        template.send(kafkaTopic, topic, new String(message.getPayload()));
    }
}
