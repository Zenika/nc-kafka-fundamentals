# Lab03 - Consumer

## Rappel

<p style="text-align:center">
<img src="lab03.png" alt="lab03" />
</p>

## Préparer le projet

- ⚠️ Checkout de la branche `step03` ⚠️.

- Se placer dans le répertoire `Lab03-consumer`

## Un peu de code

- Au sein de ce lab nous utilisons [spring-kafka](https://spring.io/projects/spring-kafka) pour dialoguer avec Kafka au
  sein de l'écosystème Spring Boot.

- Nous allons découvrir en substance, comment recevoir / consommer un message à l'aide de Spring Kafka. Pour plus de
  documentations :
  [https://docs.spring.io/spring-kafka/reference/html/#receiving-messages](https://docs.spring.io/spring-kafka/reference/html/#receiving-messages)

- En effet pour consommer un message vous disposez de plusieurs façons de faire avec Spring Kafka:
    - en utilisant
      un `Consumer` [https://kafka.apache.org/26/javadoc/index.html?org/apache/kafka/clients/consumer/KafkaConsumer.html](https://kafka.apache.org/26/javadoc/index.html?org/apache/kafka/clients/consumer/KafkaConsumer.html)
    - en utilisant une annotation listener (pour masquer une certaine
      complexité) `KafkaListener` [https://docs.spring.io/spring-kafka/api/org/springframework/kafka/annotation/KafkaListener.html](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/annotation/KafkaListener.html)

### Utilisation de l'API `Consumer`

- Explorer le projet Spring Boot `Lab03-consumer`
    * La configuration présente dans le fichier `application.properties`
    * L'auto-configuration de `ConsumerFactory<String, String>`

- Compléter la méthode `KafkaRestConsumer#consume()`

> Indices:
>    * _create consumer_
>    * _consumer close_
>    * _subscribe on topic_
>    * _poll and for each_
>    * _send from emitter_
>    * _close again_

### Utilisation de l'annotation `KafkaListener`

- Annotation `@KafkaListener`
    * Le `@KafkaListener` est une annotation pour désigner une méthode comme écouteur/consumer.

- Principe de Dead-Letter Topic (DLT)
    * Vous pouvez configurer un handler (ex : `SeekToCurrentErrorHandler`) avec un récupérateur d'enregistrements
      lorsque le nombre maximal d'échecs est atteint pour un record
    * Spring-Kafka fournit également le `DeadLetterPublishingRecoverer`, qui publie le message d'échec dans un autre
      topic
    * cf. [KafkaConfigListener](./consumer/src/main/java/com/zenika/kafka/consumer/config/KafkaConfigListener.java)

- Pour utiliser l'annotation `@KafkaListener` et le principe de Dead-Letter Topic, il faut activer le profil
  Spring `listener`, le listener sur le topic `vehicle-positions` va générer une exception sur tous les records ayant un
  **offset pair**, pour rediriger ce record sur une DLT `vehicle-positions.DLT`.
    * cf. [KafkaListenerConsumer](./consumer/src/main/java/com/zenika/kafka/consumer/service/KafkaListenerConsumer.java)

### Démarrer votre application en local

- Jouer avec le `wait`, vérifier le lag dans akhq, afficher le topic `__consumer_offset`

- Pour builder et démarrer le conteneur

```bash
docker build -t vp-consumer .
docker run --name vp-consumer --network=tz-kafka-network -d vp-consumer
```

### Démarrer votre application en local

- Il s'agit d'un projet Maven qui dispose d'un wrapper `mvnw` et du plugin `spring-boot-maven-plugin`, vous pouvez
  démarrer votre application spring en local à l'aide de la commande suivante :

> Se placer dans le bon répertoire `Lab03-consumer`

```shell
./mvnw spring-boot:run
```

- Visualiser la consommation des messages sur l'url suivante : [http://localhost:8091](http://localhost:8091)

> * Que voyez-vous sur l'IHM ?
> * Observez AKHQ [http://akhq:8080/](http://akhq:8080/ui/server/topic) ?
> * Que représente le lag dans AKHQ ?

![lag.png](lag.png)

## Packager votre application avec Docker

- Pour builder et démarrer le conteneur

> Se placer dans le bon répertoire `Lab03-consumer`

```bash
docker build -t vp-consumer .
```

```bash
docker run --name vp-consumer --network=tz-kafka-network -p 8091:8091 -d vp-consumer
```

- Pour démarrer votre conteneur avec le profile `listener`

```bash
docker run --name vp-consumer --network=tz-kafka-network -p 8091:8091 -e "SPRING_PROFILES_ACTIVE=listener" -d vp-consumer
```

> Supprimer le conteneur si déjà présent
> ```bash
> docker container stop vp-consumer
> docker container rm vp-consumer
>  ```

## Solution

Vous vous doutez que pour disposer des solutions de la `step03`, il vous suffit de️ checkout la branche `step04` 😊