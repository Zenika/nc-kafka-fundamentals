# Lab04 - Schema Registry

- Checkout de la branche `step04`
  
- Ajoutez le container Schema registry 

```console
docker-compose -f docker-compose-schema.yml up -d
```

- Expliquer le principe d'utiliser AVRO (RPC et Sérialisation)

- Présenter le projet Spring
  * `consumer`
  * `producer`
  * `src/main/avro`

- Expliquer le plugin maven avro, les classes générées
  * `mvn clean compile`
  *  POJO générés cf. `target/generated-sources/avro`

- L'utilisation du POJO

- Montrer dans akhq les schémas stockés côté schema registry

- Pour builder et démarrer le container 

```console
docker build -t vp-avro-producer .
docker run --name vp-avro-producer --network=tz-kafka-network -d vp-avro-producer
```
