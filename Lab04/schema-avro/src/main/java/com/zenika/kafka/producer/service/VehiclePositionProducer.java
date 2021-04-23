package com.zenika.kafka.producer.service;

import com.zenika.kafka.common.model.PositionKey;
import com.zenika.kafka.common.model.PositionValue;
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

    @Value("${application.producer.topic}")
    private String topic;

    @PostConstruct
    public void initSubscription() {
        Subscriber subscriber = new Subscriber(topic);
        subscriber.start();
    }
}