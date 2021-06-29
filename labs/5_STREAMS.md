# Lab05 - Kafka Streams

## Rappel

<p style="text-align:center">
<img src="lab05.png" alt="lab05" />
</p>

## Kafka Streams

- Kafka Streams est une API pour la création d'applications et de microservices, où les données d'entrée et de sortie
  sont stockées dans des clusters Kafka.

![kk-streams.png](kk-streams.png)

- Kafka Streams est sous licence Apache 2.0

- Kafka Streams est la bibliothèque de stream processing proposée par Apache Kafka. Elle permet la transformation à la
  volé de flux continus. Avec cette bibliothèque il est possible d’atteindre de très faibles latences. Elle permet tous
  types de transformations (filtres, aggrégations, jointures etc).

> - Élastique, hautement évolutif, tolérant aux pannes.
> - Déployer sur des conteneurs, des machines virtuelles, du bare metal, du cloud etc.
> - Également viable pour les cas d'utilisation petits, moyens et grands.
> - Entièrement intégré avec Kafka-Security.
> - Écrire des applications Java standard.
> - Sémantique "Exactly-Once".
> - Aucune brique externe requise.

## Préparer le projet et le topic Kafka

- ⚠️ Checkout de la branche `step05` ⚠️.
  
- Se placer dans le repertoire `Lab05-kstream`

- Explorer le projet Spring Boot `Lab05-kstream`
    * La configuation présente dans le fichier `application.properties`
    * Le `StreamBuilder`

// FIXME
-----------

la topology (affichage avec [https://zz85.github.io/kafka-streams-viz/](https://zz85.github.io/kafka-streams-viz/))

- Compléter le code pour réalier un filtrage des données

- Compléter le code pour réalier un mapping des données sur le type LightPositionValue

- Parcourir les méthodes de Stream exposées par l'API

### Démarrer votre application en local

-Il s'agit d'un projet Maven qui dispose d'un wrapper `mvnw` et du plugin `spring-boot-maven-plugin`, vous pouvez
démarrer votre application spring en local à l'aide de la commande suivante:

> Se placer dans le bon répertoire `Lab05-kstream`

```shell
./mvnw spring-boot:run
```

- Visualiser la modifications des messages sur AKHQ: [http://akhq:8080/](http://akhq:8080/)

## Packager votre application avec Docker

- Pour builder et démarrer le conteneur

> Se placer dans le bon répertoire `Lab05-kstream`

```bash
docker build -t vp-kstream .
```

```bash
docker run --name vp-kstream --network=tz-kafka-network -d vp-kstream
```

## Solution

Vous vous doutez que pour disposer des solutions de la `step05`, il vous suffit de️ checkout la branche `step06` 😊
