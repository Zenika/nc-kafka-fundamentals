# Présentation et Installation

## TODO

- ajouter un slide sur la représentation de 3 broker avec 3 partitions
- préciser c'est quoi un segement, file system, etfc.
- montrer avec 2 shell procuder / consumer mais aussi en mode avec un shell -> mode asynchrone
- dire aux marketing de communiquer sur les prérequis du workshop sur le chan 

## Pré-requis

### Docker et Docker Compose

- Docker version 19.03.15 ou supérieure (MacOSX, Linux ou Windows 10).
- Docker Compose version 1.20.0 ou supérieure (MacOSX, Linux ou Windows 10).

Vous pouvez vérifier la version de Docker et de Docker Compose que vous avez installée avec les commandes suivantes à
partir de votre terminal:

```shell
docker --version
```

```shell
docker-compose --version
```

> L'installation de Docker pour Mac ou Windows installera également Docker Compose. Si Docker est déjà installé, vous devez vérifier que Docker Compose version 1.20.0 ou supérieure est installé. Sinon, nous vous recommandons d'installer une version plus récente de Docker.

### Java

Java 11 ou supérieure (MacOSX, Linux ou Windows 10).

Vous pouvez vérifier la version de Java que vous avez installée avec les commandes suivantes à partir de votre terminal:

```shell
java --version
```

### Un IDE "digne de ce nom"

- [VSCode](https://code.visualstudio.com/) avec les plugins nécessaires pour executer et debugger une application Java / Spring Boot, pour plus d'informations: [https://code.visualstudio.com/docs/languages/java](https://code.visualstudio.com/docs/languages/java)
- [Intellij](https://www.jetbrains.com/fr-fr/idea/) correctement configuré pour executer et debugger une application Java / Spring Boot

### Hardware

Il est nécessaire d'allouer 2 GO de RAM à docker pour démarrer l'ensemble de la stack.

## Setup

- ⚠️ Clone du repository GIT et checkout de la branche `step01` ⚠️.

```bash
git clone https://github.com/Zenika/nc-kafka-fundamentals && git checkout step01
```

- Setup de la stack docker

```bash
docker-compose up -d
```

- Pour vérifier que l'ensemble fonctionne:

```bash
docker-compose ps 
Name               Command               State                    Ports                  
-----------------------------------------------------------------------------------------
akhq    docker-entrypoint.sh ./akhq      Up      0.0.0.0:8080->8080/tcp,:::8080->8080/tcp
kafka   /etc/confluent/docker/run        Up      0.0.0.0:9092->9092/tcp,:::9092->9092/tcp
tools   bash -c echo Waiting for K ...   Up      9092/tcp                                
zk      /etc/confluent/docker/run        Up      2181/tcp, 2888/tcp, 3888/tcp  
```


- Exposer les conteneurs au sein de votre OS en ajoutant dans votre fichier `/etc/hosts`

    * OSX/Linux : `/etc/hosts` (ouvrir en tant qu'administrateur)
    * Windows : `C:\Windows\System32\drivers\etc\hosts`

```
127.0.0.1 akhq
127.0.0.1 kafka
127.0.0.1 schema-registry 
127.0.0.1 connect
```

- Grace à cette exposition vous pouvez accéder aux différents conteneurs en utilisant les noms d'hôtes des conteneurs,
  exemple:
    - `http://akhq:8080/` pour akhq ou précédemment vous y avez accéder avec l'url `http://localhost:8080/`
    - `kafka:9092` pour accéder à votre broker kafka
    - etc.

## Le petit mot de vos "speakers"

Adrien Wattez

Consultant & Formateur @ Zenika Rennes

<img src="adrien.png" alt="adrien" width="200"/>

<div style="text-align: right">
Mickael Boixiere

Consultant & Formateur @ Zenika Rennes

<img src="mickael.jpg" alt="mickael" width="200"/>
</div>

## Un peu d'histoire et de contexte

- 2009 : début du projet (opensourcé par Linkedin)
- 2011 : première version publique
- 2012 : incubation par Apache
- 2014 : création de Confluent

Kafka est gratuit et open-source. Confluent vend des solutions d’hébergement (cloud et on-premise), des outils, du
support et des formations.

![Confluent](confluent.png)

C'est pourquoi nous utilisons des images `confluentinc` durant ce workshop : `confluentinc/cp-zookeeper` et `confluentinc/cp-kafka`.

## Sommaire

![Sommaire](sommaire.png)
