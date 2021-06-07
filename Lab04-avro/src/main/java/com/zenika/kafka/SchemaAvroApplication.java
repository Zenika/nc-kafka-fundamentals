package com.zenika.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;

@SpringBootApplication
public class SchemaAvroApplication {

    @Value("${application.producer.topic}")
    private String topic;


    public static void main(String[] args) {
        SpringApplication.run(SchemaAvroApplication.class, args);
    }


    @Bean
    NewTopic schemaAvroTopic() {
        return TopicBuilder.name(topic).partitions(1).replicas(1).build();
    }
}
