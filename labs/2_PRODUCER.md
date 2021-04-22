# Lab02 - Producer

- Checkout de la branche `step02`
  
- Au sein de ce lab nous utilisons [spring-kafka](https://spring.io/projects/spring-kafka) pour dialoguer avec Kafka au
  sein de l'écosystème Spring Boot.

- Créer un topic `vehicle-positions` en CLI si celui-ci n'est pas déjà présent.

```console
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions --replication-factor 1 --partitions 1
```

- Présenter le projet spring boot
    * La configuation présente dans le fichier application.properties
    * L'auto configuration de `ProducerFactory<String, String>` en lien avec les properties
    * Le client mqtt qui scrap les évènements
      de [Digitransit](https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/)

  > En effet, Spring Boot fournit une configuration automatique pour Kafka via la classe `KafkaAutoConfiguration` ([javadoc](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/kafka/KafkaAutoConfiguration.html))
  . Lorsque vous utilisez `@EnableAutoConfiguration` ou `@SpringBootApplication`, Spring boot configure automatiquement Kafka pour vous.  
  `KafkaAutoConfiguration` autoconfigure pour vous (serializer `String` par défaut) les beans suivants :
  > * `kafkaAdmin`
  > * `kafkaJaasInitializer`
  > * `kafkaTransactionManager`
  > * `kafkaProducerFactory`
  > * `kafkaConsumerFactory`
  > * `kafkaProducerListener`
  > * `kafkaTemplate`


- Compléter la métode `Subscriber#messageArrived()` afin de produire des evenements

- Checker dans akhq que des messages sont produits

- Pour builder et démarrer le container

```console
docker build -t vp-producer .
docker run --name vp-producer --network=tz-kafka-network -d vp-producer
```

- Utilisation du profil spring `kafka-template`, plutôt que de s'appuyer sur le `kafkaProducerFactory`, on peut utiliser
  le bean `kafkaTemplate`
  * Le `KafkaTemplate` wraps un producer et fournit des méthodes pratiques pour envoyer des données aux topics Kafka.
  * Consulter la [Javadoc](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/core/KafkaTemplate.html) pour plus d'informations.

- Pour démarrer votre container avec le profile `kafka-template`

```bash
# Supprimer le container si déjà présent
docker container stop vp-producer
docker container rm vp-producer
docker run --name vp-producer --network=tz-kafka-network -e "SPRING_PROFILES_ACTIVE=kafka-template" -d vp-producer
```