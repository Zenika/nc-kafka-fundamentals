package com.zenika.kafka.producer.service.template;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.Duration;

@Service
@RequiredArgsConstructor
@Profile("kafka-template")
public class VehiclePositionProducerWithTemplate {

    private final KafkaTemplate<String, String> template;

    @Value("${application.waiting-time}")
    private Duration waitingTime;

    @Value("${application.topic}")
    private String topic;

    @PostConstruct
    public void initSubscription() {
        SubscriberWithTemplate subscriberWithTemplate = new SubscriberWithTemplate(template, waitingTime, topic);
        subscriberWithTemplate.start();
    }
}