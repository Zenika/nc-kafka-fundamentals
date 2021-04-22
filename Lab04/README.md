# Lab04 - Schema Registry

- Ajoutez le container Schema registry 

```console
docker-compose -f docker-compose-schema.yml up -d
```

- Expliquer le principe d'utiliser AVRO (RPC et Sérialisation)

- Présenter le projet spring

- Expliquer le plugin maven avro, les classes générées

- L'utilisation du POJO

- Montrer dans akhq le schéma stocké côté schema registry

- Quel code à compléter pour le live coding ?

- Pour builder et démarrer le container 

```console
docker build -t vp-avro-producer .
docker run --name vp-avro-producer --network=tz-kafka-network -d vp-avro-producer
```
