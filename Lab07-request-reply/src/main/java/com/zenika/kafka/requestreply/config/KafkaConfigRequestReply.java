package com.zenika.kafka.requestreply.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.requestreply.ReplyingKafkaTemplate;

@Configuration
public class KafkaConfigRequestReply {
    /*
     * Client side (sending record with reply)
     * Spring provides a ReplyingKafkaTemplate <K, V, R>, which offers a return object or a reply object once the message is consumed by the kafka listener from another side.
     */
    // ReplyingKafkaTemplate is not autoconfigure
    // ConcurrentKafkaListenerContainerFactory is autoconfigure
    // ProducerFactory is autoconfigure
    @Bean
    public ReplyingKafkaTemplate<String, String, String> replyingKafkaTemplate(ProducerFactory<String, String> pf,
                                                                               ConcurrentKafkaListenerContainerFactory<String, String> factory) {
        ConcurrentMessageListenerContainer<String, String> replyContainer = factory.createContainer("response");
        replyContainer.getContainerProperties().setGroupId("client-side-replyto-group-id");
        return new ReplyingKafkaTemplate<>(pf, replyContainer);
    }

    /*
     * Server side: @KafkaListener with @sendto
     * We also need to define a KafkaTemplate bean, which is used as the reply template with producer factory having data type: ProducerFactory<K, V>. This template is set as the reply template of ConcurrentKafkaListenerContainerFactory (which is the expecting String as a return type from the listener).
     */
    @Bean
    public KafkaTemplate<String, String> templateListenerWithReply(ProducerFactory<String, String> pf,
                                                       ConcurrentKafkaListenerContainerFactory<String, String> factory) {
        // Create a new standard kafkaTemplate
        KafkaTemplate<String, String> kafkaTemplate = new KafkaTemplate<>(pf);
        // add it to factory
        factory.setReplyTemplate(kafkaTemplate);
        return kafkaTemplate;
    }


    /*
     * Topic creation part
     */
    @Bean
    public NewTopic request() {
        return TopicBuilder.name("request").partitions(1).replicas(1).build();
    }

    @Bean
    public NewTopic response() {
        return TopicBuilder.name("response").partitions(1).replicas(1).build();
    }

}
