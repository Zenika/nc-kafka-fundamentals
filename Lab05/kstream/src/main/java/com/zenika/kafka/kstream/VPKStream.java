package com.zenika.kafka.kstream;

import com.zenika.kafka.common.model.PositionKey;
import com.zenika.kafka.common.model.PositionValue;
import io.confluent.kafka.serializers.AbstractKafkaSchemaSerDeConfig;
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

    private KafkaStreams kafkaStreams;

    @PostConstruct
    public void startFilterStream() {

        log.info("Starting Filtering Kafka Streams");

        final StreamsBuilder builder = new StreamsBuilder();

        // read avro partition
        final KStream<PositionKey, PositionValue> avroToAvroStream = builder.stream(
                Pattern.compile(inputTopic),
                Consumed.with(
                        positionKeySerde(buildProperties()),
                        positionValueSerde(buildProperties())
                )
        );

        // Apply filter operation on oper (22 Nobina Finland Oy) citeria
        KStream<PositionKey, PositionValue> filter = avroToAvroStream.filter(
                (readOnlyKey, value) -> value.getOper() == 22
//                (readOnlyKey, value) -> true
        );

        // Output data
        filter.to(outputFilteredTopic, Produced.with(
                positionKeySerde(buildProperties()),
                positionValueSerde(buildProperties()))
        );

        // print topology
        printTopology(builder.build());

        kafkaStreams = new KafkaStreams(builder.build(), buildProperties());
        kafkaStreams.start();

        log.info("Kafka Filtering Streams is started.");

        // 2 - map on Light position value
        //        KStream<String, PositionValue> map = avroToAvroStream.mapValues((readOnlyKey, value) -> {
//            return new PositionValue();
//        });

        // 3 - last data for all oper with compaction topic (bonus)
        // create ktable with last positions
        // expose KTable with REst

    }

    @PreDestroy
    public void onStop() {
        log.info("Stopping Kafka Streams...");
        kafkaStreams.close();
    }

    private SpecificAvroSerde<PositionKey> positionKeySerde(final Properties envProps) {
        final SpecificAvroSerde<PositionKey> serde = new SpecificAvroSerde<>();
        Map<String, String> config = new HashMap<>();
        config.put(SCHEMA_REGISTRY_URL_CONFIG, envProps.getProperty("schema.registry.url"));
        serde.configure(config, true);
        return serde;
    }

    private SpecificAvroSerde<PositionValue> positionValueSerde(final Properties envProps) {
        final SpecificAvroSerde<PositionValue> serde = new SpecificAvroSerde<>();
        Map<String, String> config = new HashMap<>();
        config.put(SCHEMA_REGISTRY_URL_CONFIG, envProps.getProperty("schema.registry.url"));
        serde.configure(config, false);
        return serde;
    }


    private Properties buildProperties() {
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
        configs.put(StreamsConfig.CLIENT_ID_CONFIG, clientId);

        // Is equivalent of group.id for consumer & producer
        configs.put(StreamsConfig.APPLICATION_ID_CONFIG, applicationId);

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
