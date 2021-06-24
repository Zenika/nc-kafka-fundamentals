# Lab05 - Kafka Stream 

- Checkout de la branche `step05`
  
- Rappeler le principe de KStream (consumer et producer)

- Présenter le projet spring
    * Paroucrir les properties
    * Expliquer le Stream Builder, la topology (affichage avec https://zz85.github.io/kafka-streams-viz/)
    * Expliquer les SerDes

- Compléter le code pour réalier un filtrage des données

- Compléter le code pour réalier un mapping des données sur le type LightPositionValue

- Parcourir les méthodes de Stream exposées par l'API

- Builder et démarrer le conteneur 

```bash
docker build -t vp-kstream .
docker run --name vp-kstream --network=tz-kafka-network -d vp-kstream
```
