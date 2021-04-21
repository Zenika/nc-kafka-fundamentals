package com.zenika.kafka.consumer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zenika.kafka.common.model.PositionKey;
import com.zenika.kafka.common.model.PositionValue;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.time.Duration;
import java.util.Collections;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
@RequestMapping("/api/kafka")
@Slf4j
@RequiredArgsConstructor
public class KafkaRestConsumer {
    private final ConsumerFactory<PositionKey, PositionValue> kafkaConsumerFactory;
    private final ExecutorService sseExecutorService = Executors.newCachedThreadPool();
    @Value("${application.waiting-time}")
    private Duration waitingTime;
    @Value("${application.consumer.topic}")
    private String topic;

    @GetMapping("/consume")
    public SseEmitter consume() {
        log.debug("REST request to consume records from Kafka topic");
        SseEmitter emitter = new SseEmitter(0L);
        sseExecutorService.execute(
                () -> {
                    Consumer<PositionKey, PositionValue> consumer = kafkaConsumerFactory.createConsumer("kafka-consumer-vp", "example-spring-kafka");
                    emitter.onCompletion(consumer::close);
                    consumer.subscribe(Collections.singletonList(topic));
                    boolean exitLoop = false;
                    while (!exitLoop) {
                        try {
                            ConsumerRecords<PositionKey, PositionValue> records = consumer.poll(Duration.ofSeconds(5));
                            for (ConsumerRecord<PositionKey, PositionValue> record : records) {
                                emitter.send(record.value().toString());
                                // waiting to avoid lag on front page
                                Thread.sleep(waitingTime.toMillis());
                            }
                            emitter.send(SseEmitter.event().comment(""));
                        } catch (Exception ex) {
                            log.trace("Complete with error {}", ex.getMessage(), ex);
                            emitter.completeWithError(ex);
                            exitLoop = true;
                        }
                    }
                    consumer.close();
                    emitter.complete();
                }
        );
        return emitter;
    }

}
