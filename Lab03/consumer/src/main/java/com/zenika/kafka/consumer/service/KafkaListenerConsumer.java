package com.zenika.kafka.consumer.service;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@Slf4j
@Profile("listener")
public class KafkaListenerConsumer {

    @Value("${application.waiting-time}")
    private Duration waitingTime;

    @SneakyThrows
    @KafkaListener(topics = "${application.topic}", clientIdPrefix = "listener")
    public void consume(ConsumerRecord<String, String> data) {
        log.info("#### -> Consumed message with the easy listener -> topic:{} partition:{} offset:{} key:{}", data.topic(), data.partition(), data.offset(), data.key());
        Thread.sleep(waitingTime.toMillis());
        if (data.offset() % 2 == 0) {
            log.warn("Offset is odd generate error in order to write to DLT topic");
            throw new RuntimeException("Fake Exception");
        }
    }

    // id - When provided, this value will override the group id property in the consumer factory configuration
    @KafkaListener(id = "custom-spring-listener-dlt-group-id", topics = "${application.topic}.DLT")
    public void dltListen(String dltMessage) {
        log.error("Received from DLT: {}", dltMessage);
    }

}