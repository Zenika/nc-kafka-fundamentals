# Lab06 - Kafka connect

## Rappel

<p style="text-align:center">
<img src="lab06.connect.png" alt="lab06" />
</p>

## Kafka Connect

- Kafka Connect est un composant open source d'Apache Kafka qui permet de créer des "connecteurs". 

- Il existe deux modes de fonctionnement pour les connecteurs :
    - **Source** : Le principe est "d'écouter" les événements produits dans un système (exemple : mongodb, jira) 
      et de produire des records correspondants dans Kafka.
    - **Sink** : Le connecteur consomme les records d'un topic Kafka et vient produire dans un système 
      (exemple : s3, elastic) les événements correspondants.

![kafka-connect.png](kafka-connect.png)

- Kafka Connect comprend une API REST pour créer, modifier et supprimer la configuration d'un connecteur.

- Confluent propose un [large choix de connecteurs](https://www.confluent.io/hub/) supportant divers systèmes.

## Préparer le projet

- ⚠️ Checkout de la branche `step03` ⚠️.

- Se placer dans le répertoire `Lab06-kconnect`.

- Démarrer le conteneur `kafka-connect` au sein du réseau existant.

```bash
docker-compose -f docker-compose-connect.yml up -d
```

## 1. Installer le connecteur MQTT

- Se placer dans le conteneur `connect`

```bash
docker exec -it connect bash
```

- Installer le connecteur MQTT

_⚠️ License_ : [https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license](https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license)

```bash
confluent-hub install --no-prompt confluentinc/kafka-connect-mqtt:latest
```

- Quitter le conteneur et redémarrer le conteneur `connect`

```bash
docker restart connect
```

## 2. Creer les topics nécessaires au connecteur MQTT

Nous utiliserons un topic `vehicle-positions-connect` pour notre connecteur.

- Se connecter dans le conteneur `tools`

```bash
docker exec -it tools bash
```

- Créer le topic nécessaire

```bash
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-connect --replication-factor 1 --partitions 1
```

## 3. Configuration du connecteur

### Création

```bash
curl -s -X POST --data "@./mqtt-source.json" http://connect:8083/connectors
{"name":"mqtt-source","config":{"connector.class":"io.confluent.connect.mqtt.MqttSourceConnector","mqtt.server.uri":"ssl://mqtt.hsl.fi:8883","mqtt.topics":"/hfp/v2/journey/ongoing/vp/#","mqtt.qos":"1","kafka.topic":"vehicle-positions-connect","tasks.max":"1","confluent.topic.bootstrap.servers":"kafka:9092","name":"mqtt-source"},"tasks":[],"type":"source"}%
```

### Lister

```bash
curl http://connect:8083/connectors
["mqtt-source"]%
```

### Statut

```bash
curl http://connect:8083/connectors/mqtt-source/status
{"name":"mqtt-source","connector":{"state":"RUNNING","worker_id":"connect:8083"},"tasks":[{"id":0,"state":"RUNNING","worker_id":"connect:8083"}],"type":"source"}%
```

## 4. Visualiser le contenu du topic

### Binaires Kafka

- Se connecter dans le conteneur `tools`

```bash
docker exec -it tools bash
```

- Créer un consumer avec la command line

```bash
kafka-console-consumer --topic vehicle-positions-connect --from-beginning --bootstrap-server kafka:9092
```

### AKHQ

- le topic `vehicle-positions-connect` [http://akhq:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All](http://akhq:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All)

- les connecteurs "Kafka-Connect" [http://akhq:8080/ui/server/connect/connect](http://akhq:8080/ui/server/connect/connect)

## 5. suppression du connecteur

```bash
curl -v -X DELETE http://connect:8083/connectors/mqtt-source
...
< HTTP/1.1 204 No Content
< Date: Tue, 20 Apr 2021 19:50:50 GMT
< Server: Jetty(9.4.38.v20210224)
```
