# Lab01 - Decouverte kafka,zk et akhq

## Setup

- Clone du repository GIT 

```console
git clone https://github.com/Zenika/nc-kafka-fundamentals
```

- Setup de la stack docker

```console
docker-compose up -d
```

- Check de l'état de la stack avec akhq http://localhost:8080/

- Exposer les containers, ajouter dans `/etc/hosts` :

```
127.0.0.1 kafka
127.0.0.1 zk
```

## Premier pas

- Création d'un topic via le container tools
> Attention le broker ne permets pas la création de topic à la volé

Se connecter dans le container `tools``

```console
docker exec -it tools bash

kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic demo --replication-factor 1 --partitions 1
```

* Pourquoi le replication factor de 1 ?
* Pourquoi le partition de 1 ?
* Pourquoi le bootstrap-server ?


- Checker en CLI que le topic à été créé

```console
kafka-topics list --bootstrap-server kafka:9092
```
> Checker également côté akhq

- Démarrer un producer en CLI

```console
kafka-console-producer --broker-list kafka:9092 --topic vehicle-positions
```

- Démarrer un consumer en CLI

```console
kafka-console-consumer --bootstrap-server kafka:9092 --topic demo --from-beginning
```
> Vérifier le lag et l'existance du consumer group via akhq