package com.zenika.kafka.kstream;

import com.zenika.kafka.common.model.LightPositionValue;
import com.zenika.kafka.common.model.PositionKey;
import com.zenika.kafka.common.model.PositionValue;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.Consumed;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Produced;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.regex.Pattern;

import static io.confluent.kafka.serializers.AbstractKafkaSchemaSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG;

@Component
@Slf4j
public class VPKStream {

    @Value("${application.kafka.kstream.bootstrap-servers}")
    private String bootstrapServer;
    @Value("${application.kafka.kstream.schema.registry.url}")
    private String schemaRegistryUrl;
    @Value("${application.kafka.kstream.client-id}")
    private String clientId;
    @Value("${application.kafka.kstream.application-id}")
    private String applicationId;
    @Value("${application.input-topic}")
    private String inputTopic;
    @Value("${application.output-filtered-topic}")
    private String outputFilteredTopic;
    @Value("${application.output-light-topic}")
    private String outputLightTopic;

    private KafkaStreams filterKStreams;
    private KafkaStreams mappingKStreams;

    @PostConstruct
    public void startFilterStream() {

        log.info("Starting Filtering Kafka Streams");

        final StreamsBuilder builder = new StreamsBuilder();

        // TODO read avro partition

        // TODO Apply filter operation on oper (22 Nobina Finland Oy) citeria

        // TODO Output data

        // print topology
        printTopology(builder.build());

        filterKStreams = new KafkaStreams(builder.build(), buildProperties("filter"));
        filterKStreams.start();

        log.info("Kafka Filtering Streams is started.");
    }

    @PostConstruct
    public void startLightMappingStream() {
        log.info("Starting Light Mapping Kafka Streams");

        final StreamsBuilder builder = new StreamsBuilder();

        // TODO read avro partition

        // TODO Apply mapping to LightPositionValue

        // TODO Output data

        // print topology
        printTopology(builder.build());

        mappingKStreams = new KafkaStreams(builder.build(), buildProperties("mapping"));
        mappingKStreams.start();

        log.info("Kafka Light Mapping Streams is started.");
    }

    @PreDestroy
    public void onStop() {
        log.info("Stopping Kafka Streams...");
        filterKStreams.close();
        mappingKStreams.close();
    }

    private Properties buildProperties(String streamName) {
        // config
        final Properties configs = new Properties();

        // Kafka connection configuration
        configs.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);

        // SerDes configuration
        configs.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, SpecificAvroSerde.class);
        configs.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.StringSerde.class);

        // Schema registry configuration
        configs.put(SCHEMA_REGISTRY_URL_CONFIG, schemaRegistryUrl);

        // Is equivalent of client.id for consumer & producer
        configs.put(StreamsConfig.CLIENT_ID_CONFIG, String.format("%s-%s", streamName, clientId));

        // Is equivalent of group.id for consumer & producer
        configs.put(StreamsConfig.APPLICATION_ID_CONFIG, String.format("%s-%s", streamName, applicationId));

        // This setting helps to identify the offset from where the consumer starts reading the data. Here are the options :
        //  * earliest: automatically reset the offset to the earliest offset
        //  * latest: automatically reset the offset to the latest offset
        //  * none: throw exception to the consumer if no previous offset is found for the consumer’s group
        //  * anything else: throw exception to the consumer.
        configs.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

        return configs;
    }

    private void printTopology(Topology topology) {
        log.info(topology.describe().toString());
    }
}
