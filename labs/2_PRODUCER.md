# Lab02 - Producer

## Rappel

<p style="text-align:center">
<img src="lab02.png" alt="lab02" />
</p>

## Digitransit

[https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/](https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/)

La plupart des véhicules situés en **Finlande 🇫🇮** produisent des événements comprenant entre autres leurs statuts et
leurs positions, une fois par seconde. Ce qui permet de facilement tracer leurs positions et de réaliser des exemples
concrets dans un environment proche IOT.

![digitransit](digitransit.svg)

### Consommation de la file MQTT Digitransit vers Kafka

<p style="text-align:center">
<img src="lab02.mqtt.png" alt="lab02.mqtt" />
</p>

## Un record

<p style="text-align:center">
<img src="record.png" alt="record" />
</p>

## Préparer le projet et le topic Kafka

- ⚠️ Checkout de la branche `step02` ⚠️.

- Se placer dans le répertoire `Lab02-producer`.

- Créer un topic `vehicle-positions` en CLI si celui-ci n'est pas déjà présent.

> ⚠️ Pensez à être présent dans le conteneur `tools`

```bash
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions --replication-factor 1 --partitions 1
```

## Un peu de code

- Au sein de ce lab nous utilisons [spring-kafka](https://spring.io/projects/spring-kafka) pour dialoguer avec Kafka au
  sein de l'écosystème Spring Boot.

- Nous allons découvrir sommairement, comment produire / envoyer un message à l'aide de Spring Kafka. Pour plus de
  documentations :
  [https://docs.spring.io/spring-kafka/reference/html/#sending-messages](https://docs.spring.io/spring-kafka/reference/html/#sending-messages)

- En effet pour produire un message vous disposez de plusieurs façons de le réaliser avec Spring Kafka :
    - en utilisant
      un `Producer` [https://kafka.apache.org/26/javadoc/index.html?org/apache/kafka/clients/producer/KafkaProducer.html](https://kafka.apache.org/26/javadoc/index.html?org/apache/kafka/clients/producer/KafkaProducer.html)
    - en utilisant un wrapper (pour masquer une certaine
      complexité) `KafkaTemplate` [https://docs.spring.io/spring-kafka/api/org/springframework/kafka/core/KafkaTemplate.html](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/core/KafkaTemplate.html)

### Utilisation de l'API `Producer`

- Explorer le projet Spring Boot `Lab02-producer`
    * La configuration présente dans le fichier `application.properties`
    * L'auto-configuration de `ProducerFactory<String, String>` en lien avec les properties
    * Le client mqtt qui récupère les évènements
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

- Compléter la méthode `Subscriber#messageArrived()` afin de produire des évènements

- Pour un `Producer` en mode `Vanilla Java` vous pouvez vous inspirer de ce tutorial rédigé par Confluent  
  [https://kafka-tutorials.confluent.io/creating-first-apache-kafka-producer-application/kafka.html](https://kafka-tutorials.confluent.io/creating-first-apache-kafka-producer-application/kafka.html)

- Verifier dans AKHQ que des messages sont
  produits [http://akhq:8080/ui/server/topic/vehicle-positions](http://akhq:8080/ui/server/topic/vehicle-positions)

### Utilisation de l'API `KafkaTemplate`

- Utilisation du profil spring `kafka-template`, plutôt que de s'appuyer sur le `kafkaProducerFactory`, on peut utiliser
  le bean `kafkaTemplate`
    * Le `KafkaTemplate` wrap un producer et fournit des méthodes pratiques pour produire des records sur les topics
      Kafka.
    * Consulter la [Javadoc](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/core/KafkaTemplate.html)
      pour plus d'informations.

- Compléter la méthode `SubscriberWithTemplate#messageArrived()` afin de produire des évènements

- Vous pouvez vous inspirer de ce tutorial de
  Baeldung: [https://www.baeldung.com/spring-kafka](https://www.baeldung.com/spring-kafka)

### Démarrer votre application en local

- Il s'agit d'un projet Maven qui dispose d'un wrapper `mvnw` et du plugin `spring-boot-maven-plugin`, vous pouvez
  démarrer votre application spring en local à l'aide de la commande suivante :

> Se placer dans le bon répertoire `Lab02-producer`

```shell
./mvnw spring-boot:run
```

## Packager votre application avec Docker

- Pour builder et démarrer le conteneur

> Se placer dans le bon répertoire `Lab02-producer`

```bash
docker build -t vp-producer .
```

```bash
docker run --name vp-producer --network=tz-kafka-network -d vp-producer
```

- Pour démarrer votre conteneur avec le profil `kafka-template`

```bash
docker run --name vp-producer --network=tz-kafka-network -e "SPRING_PROFILES_ACTIVE=kafka-template" -d vp-producer
```

> Supprimer le conteneur si déjà présent
> ```bash
> docker container stop vp-producer
> docker container rm vp-producer
>  ```

## Solution

Vous vous doutez que pour disposer des solutions de la `step02`, il vous suffit de️ checkout la branche `step03` 😊