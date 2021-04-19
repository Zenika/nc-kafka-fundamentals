package com.zenika.kafka.producer.service;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@Slf4j
public class KafkaListenerConsumer {
    @Value("${application.waiting-time}")
    private Duration waitingTime;

    @SneakyThrows
    @KafkaListener(topics = "${application.topic}", groupId = "example-spring-listener")
    public void consume(String message) {
        log.info(String.format("#### -> Consumed message with the easy listener -> %s", message));
        Thread.sleep(waitingTime.toMillis());
    }
}