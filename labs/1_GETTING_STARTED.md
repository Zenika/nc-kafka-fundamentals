# Lab01 - Découverte Kafka, Zookeeper et AKHQ

## Rappel

<p style="text-align:center">
<img src="lab01.png" alt="lab01" />
</p>

> * Pourquoi Zookeeper ?
> * La fameuse KIP-500 : [https://issues.apache.org/jira/browse/KAFKA-9119](https://issues.apache.org/jira/browse/KAFKA-9119)

## Topic / Partition / Segment

![Topic etc.](lab01.topic.png)

- **Topic** : vue abstraite d'un ensemble de partitions qui vont idéalement contenir un ensemble de record d'un même
  type.
- **Partition** : permets de répartir les records en plusieurs espaces (partition) ce qui permets la scabilité de
  consommation et de production.
- **Segment** : une partition est répartie en plusieurs fichiers sur le disque, les records sont ajoutés au fil de l'eau

## Premier pas

- Création d'un topic via le conteneur `tools`

> Attention le broker ne permet pas la création de topic à la volée `KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'false'`

Se connecter dans le conteneur `tools` et créer un topic à l'aide de la ligne de commande

```bash
docker exec -it tools bash
```

```bash
# Dans le conteneur tools
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic demo --replication-factor 1 --partitions 1
```

> * Pourquoi le replication factor de 1 ?
> * Pourquoi le partition de 1 ?
> * Pourquoi le bootstrap-server ?

- Verifier avec la CLI le topic créé

```bash
kafka-topics --list --bootstrap-server kafka:9092
```

- Démarrer un producer à l'aide de la ligne de commande

```bash
kafka-console-producer --broker-list kafka:9092 --topic demo
```

- Démarrer un consumer à l'aide de la ligne de commande

```bash
kafka-console-consumer --bootstrap-server kafka:9092 --topic demo --from-beginning
```

<p style="text-align:center">
<img src="topic.png" alt="topic" />
</p>

> * Pourquoi le `--from-beginning` ?

## AKHQ (anciennement KafkaHQ)

- Pour consulter AKHQ en local [http://akhq:8080/](http://akhq:8080/)

- Produit local Ch'ti !

- Développé par `@tchiotludo`

- Wep App open source qui expose une interface permettant :
    - Monitorer son cluster (broker, topics, consumer group, etc.)
    - Visualiser le contenu de la schéma registry
    - Lire / Écrire de la donnée
    - etc.

![akhq](akhq.svg)
![akhq broker](akhq_broker.png)
![akhq topic](akhq_topic.png)

## Topic Partition avec replication factor à 3

![Topic etc.](lab01.topic.replication.png)