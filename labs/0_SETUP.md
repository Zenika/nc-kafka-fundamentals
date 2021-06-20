# Présentation et Installation

- Clone du repository GIT et checkout de la branche `step01`

```console
git clone https://github.com/Zenika/nc-kafka-fundamentals && git checkout step01
```

- Setup de la stack docker

```console
docker-compose up -d
```

- Check de l'état de la stack avec akhq `http://localhost:8080/`

- Exposer les containers, ajouter dans votre fichier `/etc/hosts` (linux & osx) :

```
127.0.0.1 kafka
127.0.0.1 kz
127.0.0.1 schema-registry 
127.0.0.1 connect
```