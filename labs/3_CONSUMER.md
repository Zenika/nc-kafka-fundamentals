# Lab03 - Consumer

- Checkout de la branche `step03`
  
- Présenter le projet spring boot
    * La configuration présente dans le fichier `application.properties`
    * L'auto configuration de `ConsumerFactory<String, String> `

- Compléter la méthode `KafkaRestConsumer#consume()``
    * _create consumer_
    * _consumer close_
    * _subscribe on topic_
    * _poll and for each_
    * _send from emitter_
    * _close again_

- Faire la démo avec le front `http://localhost:8091`

- Expliquer, jouer avec le wait, expliquer lag dans akhq, montrer le topic `__consumer_offset`

- Pour builder et démarrer le conteneur

```bash
docker build -t vp-consumer .
docker run --name vp-consumer --network=tz-kafka-network -d vp-consumer
```

- Annotation `@KafkaListener`
    * Le `@KafkaListener` est une annotation pour désigner une méthode comme écouteur/consummer.

- Principe de Dead-Letter Topic (DLT)
    * Vous pouvez configurer un handler (ex : `SeekToCurrentErrorHandler`) avec un récupérateur d'enregistrements
      lorsque le nombre maximal d'échecs est atteint pour un record
    * Spring-Kafka fournit également le `DeadLetterPublishingRecoverer`, qui publie le message d'échec dans un autre
      rubrique
    * cf. [KafkaConfigListener](./consumer/src/main/java/com/zenika/kafka/consumer/config/KafkaConfigListener.java)

- Pour utiliser l'annotation `@KafkaListener` et le principe de Dead-Letter Topic, il faut activer le profil
  Spring `listener`, le listener sur le topic `vehicle-positions` va générer une exception tous les records avec un
  offset pair, pour rediriger ce record sur une DLT `vehicle-positions.DLT`.
    * cf. [KafkaListenerConsumer](./consumer/src/main/java/com/zenika/kafka/consumer/service/KafkaListenerConsumer.java)

```bash
# Supprimer le conteneur si déjà présent
docker container stop vp-consumer
docker container rm vp-consumer
docker run --name vp-consumer --network=tz-kafka-network -e "SPRING_PROFILES_ACTIVE=listener" -d vp-consumer
```