package com.zenika.kafka.producer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@RequiredArgsConstructor
@Profile("!kafka-template")
public class VehiclePositionProducer {


    private final ProducerFactory<String, String> producerFactory;

    @Value("${application.topic}")
    private String topic;

    @PostConstruct
    public void initSubscription() {
        Subscriber subscriber = new Subscriber(producerFactory.createProducer(), topic);
        subscriber.start();
    }
//        ProducerFactory from spring-kafka is similar to :
//
//        Properties settings = new Properties();
//        settings.put(ProducerConfig.CLIENT_ID_CONFIG, "vp-producer");
//        settings.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka:9092");
//        settings.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
//        settings.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
//
//        final KafkaProducer<String, String> producer = new KafkaProducer<>(settings);
}