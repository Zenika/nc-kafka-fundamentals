package com.zenika.kafka.requestreply.service;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.requestreply.ReplyingKafkaTemplate;
import org.springframework.kafka.requestreply.RequestReplyFuture;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.SendResult;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@Slf4j
@RequiredArgsConstructor
public class KafkaListenerRequestReply {

    private final ReplyingKafkaTemplate<String, String, String> template;

    // Starting with version 2.5, the framework will detect if these headers are missing and populate them with the topic
    // - either the topic determined from the @SendTo value or the incoming KafkaHeaders.REPLY_TOPIC header (if present).
    // It will also echo the incoming KafkaHeaders.CORRELATION_ID and KafkaHeaders.REPLY_PARTITION, if present.
    @KafkaListener(id = "server-side-replyto-group-id", topics = "request")
    @SendTo  // default REPLY_TOPIC header
    public Message<String> messageReturn(ConsumerRecord<String,String> record) {
        log.info("-- request -- headers: {}", record.headers());
        log.info("-- request -- message: {}", record.value());
        return MessageBuilder.withPayload("42")
                .setHeader(KafkaHeaders.MESSAGE_KEY, String.valueOf(42))
                .build();
    }

    @SneakyThrows
    @Scheduled(fixedRate = 15000)
    public void scheduleTaskWithFixedRate() {
        log.info("Init request-reply");
        ProducerRecord<String, String> record = new ProducerRecord<>("request", "What is the ultimate answer to the great question of life, the universe and everything?");
        RequestReplyFuture<String, String, String> replyFuture = template.sendAndReceive(record);
        SendResult<String, String> sendResult = replyFuture.getSendFuture().get(5, TimeUnit.SECONDS);
        log.info("Sent ok: {}", sendResult.getRecordMetadata());
        ConsumerRecord<String, String> consumerRecord = replyFuture.get(5, TimeUnit.SECONDS);
        log.info("-- response -- message: {}", consumerRecord.value());
        log.info("-- response -- headers: {}", consumerRecord.headers());
    }
}