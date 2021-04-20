Lab decouverte kafka,zk et akhq
Creer les topics dans le tools


Contexte:
https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/



docker-compose up -d

Se connecter dans le container `tools``

docker exec -it tools bash

kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions --replication-factor 1 --partitions 1

- Pourquoi le replication factor de 1 ?
- Pourquoi le partition de 1 ?
- Pourquoi le bootstrap-server ?

