# Lab02 - Consumer

- Présenter le projet spring boot
    * La configuation présente dans le fichier application.properties
    * L'auto configuration de `ConsumerFactory<String, String> `

- Compléter la méthode `KafkaRestConsumer#consume()``
    * createConsumer
    * consumer close
    * subscribe on topic
    * poll and for each 
    * send from emitter
    * close again

- Faire la démo avec le front http://localhost:8091

- Expliquer, jouer avec le wait, expliquer lag dans akhq, montrer le topic __consumer_offset
