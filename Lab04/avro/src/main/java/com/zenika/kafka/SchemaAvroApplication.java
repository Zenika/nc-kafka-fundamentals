package com.zenika.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@ConfigurationPropertiesScan
public class SchemaAvroApplication {

    @Value("${application.producer.topic}")
    private String topic;


    public static void main(String[] args) {
        SpringApplication.run(SchemaAvroApplication.class, args);
    }


    @Bean
    NewTopic schemaAvroTopic() {
        return new NewTopic(topic, 1, (short) 1);
    }
}
