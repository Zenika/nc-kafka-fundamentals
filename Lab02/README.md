# Lab02 - Producer

- Créer un topic `vehicle-positions`

```console
kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions --replication-factor 1 --partitions 1
```

- Présenter le projet spring boot
    * La configuation présente dans le fichier application.properties
    * L'auto configuration de `ProducerFactory<String, String>` 
    * Le client mqtt qui scrap les events de digitransit

- Compléter la métode `Subscriber#messageArrived()` afin de produire des events

- Checker dans akhq que des messages arrivent bien