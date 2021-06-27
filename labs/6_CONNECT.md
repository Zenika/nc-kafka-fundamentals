# Lab06 - Kafka connect

## Rappel

<p style="text-align:center">
<img src="lab06.connect.png" alt="lab06" />
</p>

## Kafka Connect

- Kafka Connect est un composant open source d'Apache Kafka.

- Vous pouvez créer un "connecteur" avec l'API Kafka Connect, qui permet de créer facilement des producer ou des
  consumer Kafka tolérants aux pannes pour diffuser des données entrant (**"source"**) et sortant (**"sink"**) de Kafka.

![kafka-connect.png](kafka-connect.png)

- Kafka Connect comprend une API REST pour créer, modifier et supprimer la configuration d'un connecteur.

## Préparer le projet

- ⚠️ Checkout de la branche `step03` ⚠️.

- Se placer dans le repertoire `Lab06-kconnect`.

- Demarrer le conteneur `kafka-connect` au sein du réseau existant.

```bash
docker-compose -f docker-compose-connect.yml up -d
```

## 1. Installer le connecteur MQTT

Se placer dans le conteneur `connect`

```bash
docker exec -it connect bash
```

Installer le connecteur MQTT

_⚠️ License_ : [https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license](https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license)

```bash
confluent-hub install --no-prompt confluentinc/kafka-connect-mqtt:latest
exit
```

Redemarrer connect

```bash
docker restart connect
```

## 2. Creer les topics nécessaires au connecteur MQTT

Nous utiliserons un topic `vehicle-positions-connect`  pour notre connecteur.

```bash
docker exec -it tools bash
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-connect --replication-factor 1 --partitions 1
exit
```

## 3. configuration du connecteur

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

### Binaire Kafka

```bash
docker exec -it tools bash
kafka-console-consumer --topic vehicle-positions-connect --from-beginning --bootstrap-server kafka:9092
exit`
```

### AKHQ

`http://localhost:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All`

## 5. suppression du connecteur

```bash
curl -v -X DELETE http://connect:8083/connectors/mqtt-source
...
< HTTP/1.1 204 No Content
< Date: Tue, 20 Apr 2021 19:50:50 GMT
< Server: Jetty(9.4.38.v20210224)
```

## Solution

Vous vous doutez que pour disposer des solutions de la `step06`, il vous suffit de️ checkout la branche `step07` 😊