package com.zenika.kafka.consumer.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.listener.DeadLetterPublishingRecoverer;
import org.springframework.kafka.listener.SeekToCurrentErrorHandler;
import org.springframework.util.backoff.FixedBackOff;

@Profile("listener")
@Configuration
public class KafkaConfigListener {

    @Value("${application.topic}")
    private String topic;


    // Boot will autowire this into the container factory.
    // An error handler that seeks to the current offset for each topic in the remaining records. Used to rewind partitions after a message failure so that it can be replayed.
    @Bean
    public SeekToCurrentErrorHandler errorHandler(KafkaOperations<Object, Object> template) {
        return new SeekToCurrentErrorHandler(
                new DeadLetterPublishingRecoverer(template), new FixedBackOff(5000L, 2));
    }

    // Create  DLT topic
    // By default, the dead-letter record is sent to a topic named <originalTopic>.DLT (the original topic name suffixed with .DLT)
    @Bean
    public NewTopic dlt() {
        return TopicBuilder.name(topic + ".DLT").partitions(1).replicas(1).build();
    }

}
