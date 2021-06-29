(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(a,t,s){"use strict";s.r(t);var e=s(44),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lab04-schema-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lab04-schema-registry"}},[a._v("#")]),a._v(" Lab04 - Schema Registry")]),a._v(" "),s("h2",{attrs:{id:"rappel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rappel"}},[a._v("#")]),a._v(" Rappel")]),a._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"lab04.png",alt:"lab04"}})]),a._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"lab04.bis.png",alt:"lab04-bis"}})]),a._v(" "),s("h2",{attrs:{id:"le-schema-registry-de-confluent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#le-schema-registry-de-confluent"}},[a._v("#")]),a._v(" Le Schema Registry de Confluent")]),a._v(" "),s("p",[a._v("Schema Registry est une couche de stockage distribuée pour les schémas qui utilise Kafka comme mécanisme de stockage\nsous-jacent.\n"),s("img",{attrs:{src:"schema-registry-and-kafka.png",alt:"schema-registry-and-kafka.png"}})]),a._v(" "),s("p",[a._v("Schema Registry est sous licence Confluent Community License.")]),a._v(" "),s("p",[a._v("Le repository Github: "),s("a",{attrs:{href:"https://github.com/confluentinc/schema-registry",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/confluentinc/schema-registry"),s("OutboundLink")],1),a._v("\n.")]),a._v(" "),s("p",[a._v("La documentation officielle de\nconfluent: "),s("a",{attrs:{href:"https://docs.confluent.io/platform/current/schema-registry/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.confluent.io/platform/current/schema-registry/index.html"),s("OutboundLink")],1),a._v("\n.")]),a._v(" "),s("h2",{attrs:{id:"preparer-le-projet-et-le-topic-kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparer-le-projet-et-le-topic-kafka"}},[a._v("#")]),a._v(" Préparer le projet et le topic Kafka")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("⚠️ Checkout de la branche "),s("code",[a._v("step04")]),a._v(" ⚠️.")])]),a._v(" "),s("li",[s("p",[a._v("Se placer dans le repertoire "),s("code",[a._v("Lab04-avro")])])]),a._v(" "),s("li",[s("p",[a._v("Demarrer le conteneur Schema registry.")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker-compose -f docker-compose-schema.yml up -d\n")])])]),s("h3",{attrs:{id:"le-topic-kafka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#le-topic-kafka"}},[a._v("#")]),a._v(" Le topic Kafka")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Au sein de ce lab nous utilisons "),s("a",{attrs:{href:"https://spring.io/projects/spring-kafka",target:"_blank",rel:"noopener noreferrer"}},[a._v("spring-kafka"),s("OutboundLink")],1),a._v(" pour dialoguer avec Kafka au\nsein de l'écosystème Spring Boot.")])]),a._v(" "),s("li",[s("p",[a._v('Spring Kafka fourni des composants qui permettent de vous "faciliter la vie", il permet de facilement créér des topics\nau sein de votre application:\n'),s("a",{attrs:{href:"https://docs.spring.io/spring-kafka/reference/html/#configuring-topics",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.spring.io/spring-kafka/reference/html/#configuring-topics"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("Le bean "),s("code",[a._v("NewTopic")]),a._v(" provoque la création du topic sur le broker; il n'est pas nécessaire si le topic existe déjà.")])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NewTopic")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("schemaAvroTopic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TopicBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("partitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("⚠️ Spring Kafka utilise l'API admin du cluster pour réaliser cette opération de création de topic. Même si vous\nspecifier "),s("code",[a._v("KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'false'")]),a._v(", le paramétrage d'un bean "),s("code",[a._v("KafkaAdmin")]),a._v(" permet de manipuler l'API\nadmin.")])]),a._v(" "),s("h2",{attrs:{id:"un-peu-de-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#un-peu-de-code"}},[a._v("#")]),a._v(" Un peu de code")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Avro a un modèle de données de type JSON, mais peut être représenté en tant que JSON ou sous une forme binaire\ncompacte. Il est livré avec un langage de description de schéma très sophistiqué qui décrit les données.")]),a._v(" "),s("ol",[s("li",[a._v("Direct Mapping vers et depuis JSON")]),a._v(" "),s("li",[a._v("Il dispose d'un format très compact.")]),a._v(" "),s("li",[a._v("C'est très rapide.")]),a._v(" "),s("li",[a._v("Vous pouvez générer des objets Java pour des événements Kafka, mais il ne nécessite pas de génération de code\nafin que les outils puissent être écrits de manière générique pour tout flux de données.")]),a._v(" "),s("li",[a._v("Il dispose d'un langage de schéma riche et extensible défini en JSON.")]),a._v(" "),s("li",[a._v("Il dispose de la meilleure notion de compatibilité pour faire évoluer vos données/schémas dans le temps.")])])]),a._v(" "),s("li",[s("p",[a._v("Pour plus d'informations sur l'usage\nd'Avro: "),s("a",{attrs:{href:"https://www.confluent.fr/blog/avro-kafka-data/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.confluent.fr/blog/avro-kafka-data/"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("Explorez le découpage projet")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("consumer")])]),a._v(" "),s("li",[s("code",[a._v("producer")])]),a._v(" "),s("li",[s("code",[a._v("src/main/avro")])])])]),a._v(" "),s("li",[s("p",[a._v("Au sein de ce projet "),s("code",[a._v("Lab04-avro")]),a._v(" nous utilisons un plugin maven nous permettant de générer nos entités métiers\nd'événements Kafka.")])])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.avro"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("avro-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.10.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("process-sources"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("schema"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("sourceDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${project.basedir}/src/main/avro/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("sourceDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("outputDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${project.basedir}/target/generated-sources/avro"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("outputDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("ul",[s("li",[a._v("Pour générer les entités, il est nécessaire d'éxecuter la phase maven "),s("code",[a._v("compile")]),a._v(" qui appliquera le "),s("code",[a._v("process-sources")]),a._v(".")])]),a._v(" "),s("blockquote",[s("p",[a._v("Se placer dans le bon répertoire "),s("code",[a._v("Lab04-avro")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./mvnw clean compile`\n")])])]),s("ul",[s("li",[s("p",[a._v("Observez les POJO générés cf. "),s("code",[a._v("target/generated-sources/avro")])])]),a._v(" "),s("li",[s("p",[a._v("Maintenant vous pouvez utiliser directement des objets java dans votre code, pas besoin de passer par un "),s("code",[a._v("String")]),a._v(",\nvous pouvez exploiter des objets complexes.")])])]),a._v(" "),s("h3",{attrs:{id:"partie-producer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partie-producer"}},[a._v("#")]),a._v(" Partie "),s("code",[a._v("Producer")])]),a._v(" "),s("blockquote",[s("p",[a._v("La classe VehiclePositionProducer.java")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProducerFactory")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" producerFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Et surtout paramétrer des clés complexes pour vos "),s("code",[a._v("Record")]),a._v(":")])]),a._v(" "),s("blockquote",[s("p",[a._v("La classe Subscriber.java")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionValue")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPositionValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPayload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),a._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProducerRecord")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("record")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ProducerRecord")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("kafkaTopic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nproducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("record")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"partie-consummer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partie-consummer"}},[a._v("#")]),a._v(" Partie "),s("code",[a._v("Consummer")])]),a._v(" "),s("blockquote",[s("p",[a._v("La classe KafkaRestConsumer.java")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Consumer")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" consumer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" kafkaConsumerFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createConsumer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConsumerRecords")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PositionValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" records "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("poll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"demarrer-votre-application-en-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demarrer-votre-application-en-local"}},[a._v("#")]),a._v(" Démarrer votre application en local")]),a._v(" "),s("p",[a._v("-Il s'agit d'un projet Maven qui dispose d'un wrapper "),s("code",[a._v("mvnw")]),a._v(" et du plugin "),s("code",[a._v("spring-boot-maven-plugin")]),a._v(", vous pouvez\ndémarrer votre application spring en local à l'aide de la commande suivante:")]),a._v(" "),s("blockquote",[s("p",[a._v("Se placer dans le bon répertoire "),s("code",[a._v("Lab04-avro")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./mvnw spring-boot:run\n")])])]),s("ul",[s("li",[a._v("Visualiser la consommation des messages sur l'url suivante: "),s("a",{attrs:{href:"http://localhost:8092",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8092"),s("OutboundLink")],1)])]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("Que voyez-vous sur l'IHM ?")]),a._v(" "),s("li",[a._v("Observez les schemas AKHQ "),s("a",{attrs:{href:"http://localhost:8080/ui/server/schema",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://akhq:8080/"),s("OutboundLink")],1),a._v(" ?")]),a._v(" "),s("li",[a._v("Ou sont stockés les schémas ?")])])]),a._v(" "),s("h2",{attrs:{id:"packager-votre-application-avec-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packager-votre-application-avec-docker"}},[a._v("#")]),a._v(" Packager votre application avec Docker")]),a._v(" "),s("ul",[s("li",[a._v("Pour builder et démarrer le conteneur")])]),a._v(" "),s("blockquote",[s("p",[a._v("Se placer dans le bon répertoire "),s("code",[a._v("Lab04-avro")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t vp-avro-producer-consumer "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run --name vp-avro-producer-consumer --network"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tz-kafka-network -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8092")]),a._v(":8092 -d vp-avro-producer-consumer\n")])])]),s("h2",{attrs:{id:"solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[a._v("#")]),a._v(" Solution")]),a._v(" "),s("p",[a._v("Vous vous doutez que pour disposer des solutions de la "),s("code",[a._v("step04")]),a._v(", il vous suffit de️ checkout la branche "),s("code",[a._v("step05")]),a._v(" 😊")])])}),[],!1,null,null,null);t.default=n.exports}}]);