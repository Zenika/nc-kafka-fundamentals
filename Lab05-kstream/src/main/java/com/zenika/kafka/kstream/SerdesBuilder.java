package com.zenika.kafka.kstream;

import com.zenika.kafka.common.model.PositionValue;
import io.confluent.kafka.streams.serdes.avro.SpecificAvroSerde;
import org.apache.avro.specific.SpecificRecord;

import java.util.HashMap;
import java.util.Map;

import static io.confluent.kafka.serializers.AbstractKafkaSchemaSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG;

public class SerdesBuilder {

    public static <T extends SpecificRecord> SpecificAvroSerde<T> build(String schemaRegistryUrl, boolean isKey) {
        final SpecificAvroSerde<T> serde = new SpecificAvroSerde<>();
        Map<String, String> config = new HashMap<>();
        config.put(SCHEMA_REGISTRY_URL_CONFIG, schemaRegistryUrl);
        serde.configure(config, isKey);
        return serde;
    }
}
