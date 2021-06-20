# Lab01 - Découverte kafka, zk et akhq

## Premier pas

- Création d'un topic via le container tools
> Attention le broker ne permet pas la création de topic à la volée `KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'false'`

Se connecter dans le container `tools` et créer un topic en CLI

```console
docker exec -it tools bash

kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic demo --replication-factor 1 --partitions 1
```

* Pourquoi le replication factor de 1 ?
* Pourquoi le partition de 1 ?
* Pourquoi le bootstrap-server ?

- Verifier avec la CLI le topic créé

```console
kafka-topics --list --bootstrap-server kafka:9092
```
> Checker également côté akhq

- Démarrer un producer en CLI

```console
kafka-console-producer --broker-list kafka:9092 --topic demo
```

- Démarrer un consumer en CLI

```console
kafka-console-consumer --bootstrap-server kafka:9092 --topic demo --from-beginning
```
> Consulter le lag et l'existence du consumer-group via akhq