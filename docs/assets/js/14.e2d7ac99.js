(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lab06-kafka-connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab06-kafka-connect"}},[t._v("#")]),t._v(" Lab06 - Kafka connect")]),t._v(" "),a("h2",{attrs:{id:"rappel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rappel"}},[t._v("#")]),t._v(" Rappel")]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"lab06.connect.png",alt:"lab06"}})]),t._v(" "),a("h2",{attrs:{id:"kafka-connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-connect"}},[t._v("#")]),t._v(" Kafka Connect")]),t._v(" "),a("ul",[a("li",[a("p",[t._v('Kafka Connect est un composant open source d\'Apache Kafka qui permets de créer des "connecteurs".')])]),t._v(" "),a("li",[a("p",[t._v("Il existe deux modes de fonctionnement pour les connecteurs :")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Source")]),t._v(' : Le principe est "d\'écouter" les événements produits dans un système (exemple : mongodb, jira) et de produire des records correspondants dans Kafka.')]),t._v(" "),a("li",[a("strong",[t._v("Sink")]),t._v(" : Le connecteur consomme les records d'un topic Kafka et viens produire dans un système (exemple : s3, elastic) les événements correspondants")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"kafka-connect.png",alt:"kafka-connect.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Kafka Connect comprend une API REST pour créer, modifier et supprimer la configuration d'un connecteur.")])]),t._v(" "),a("li",[a("p",[t._v("Confluent propose un "),a("a",{attrs:{href:"https://www.confluent.io/hub/",target:"_blank",rel:"noopener noreferrer"}},[t._v("large choix de connecteurs"),a("OutboundLink")],1),t._v(" supportant divers systèmes.")])])]),t._v(" "),a("h2",{attrs:{id:"preparer-le-projet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparer-le-projet"}},[t._v("#")]),t._v(" Préparer le projet")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("⚠️ Checkout de la branche "),a("code",[t._v("step03")]),t._v(" ⚠️.")])]),t._v(" "),a("li",[a("p",[t._v("Se placer dans le répertoire "),a("code",[t._v("Lab06-kconnect")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Démarrer le conteneur "),a("code",[t._v("kafka-connect")]),t._v(" au sein du réseau existant.")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker-compose -f docker-compose-connect.yml up -d\n")])])]),a("h2",{attrs:{id:"_1-installer-le-connecteur-mqtt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-installer-le-connecteur-mqtt"}},[t._v("#")]),t._v(" 1. Installer le connecteur MQTT")]),t._v(" "),a("ul",[a("li",[t._v("Se placer dans le conteneur "),a("code",[t._v("connect")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it connect "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Installer le connecteur MQTT")])]),t._v(" "),a("p",[a("em",[t._v("⚠️\nLicense")]),t._v(" : "),a("a",{attrs:{href:"https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("confluent-hub "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-prompt confluentinc/kafka-connect-mqtt:latest\n")])])]),a("ul",[a("li",[t._v("Quitter le conteneur et redémarrer le conteneur "),a("code",[t._v("connect")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker restart connect\n")])])]),a("h2",{attrs:{id:"_2-creer-les-topics-necessaires-au-connecteur-mqtt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-creer-les-topics-necessaires-au-connecteur-mqtt"}},[t._v("#")]),t._v(" 2. Creer les topics nécessaires au connecteur MQTT")]),t._v(" "),a("p",[t._v("Nous utiliserons un topic "),a("code",[t._v("vehicle-positions-connect")]),t._v(" pour notre connecteur.")]),t._v(" "),a("ul",[a("li",[t._v("Se connecter dans le conteneur "),a("code",[t._v("tools")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it tools "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Créer le topic nécessaire")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-connect --replication-factor "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --partitions "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-configuration-du-connecteur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration-du-connecteur"}},[t._v("#")]),t._v(" 3. configuration du connecteur")]),t._v(" "),a("h3",{attrs:{id:"creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[t._v("#")]),t._v(" Création")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -X POST --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@./mqtt-source.json"')]),t._v(" http://connect:8083/connectors\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt-source"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connector.class"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.confluent.connect.mqtt.MqttSourceConnector"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt.server.uri"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssl://mqtt.hsl.fi:8883"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt.topics"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hfp/v2/journey/ongoing/vp/#"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt.qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka.topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vehicle-positions-connect"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks.max"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confluent.topic.bootstrap.servers"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka:9092"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt-source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("%\n")])])]),a("h3",{attrs:{id:"lister"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lister"}},[t._v("#")]),t._v(" Lister")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://connect:8083/connectors\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt-source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("%\n")])])]),a("h3",{attrs:{id:"statut"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statut"}},[t._v("#")]),t._v(" Statut")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://connect:8083/connectors/mqtt-source/status\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt-source"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connector"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RUNNING"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect:8083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(":0,"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RUNNING"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect:8083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("%\n")])])]),a("h2",{attrs:{id:"_4-visualiser-le-contenu-du-topic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-visualiser-le-contenu-du-topic"}},[t._v("#")]),t._v(" 4. Visualiser le contenu du topic")]),t._v(" "),a("h3",{attrs:{id:"binaire-kafka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binaire-kafka"}},[t._v("#")]),t._v(" Binaire Kafka")]),t._v(" "),a("ul",[a("li",[t._v("Se connecter dans le conteneur "),a("code",[t._v("tools")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it tools "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Créer un consumer avec la command line")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kafka-console-consumer --topic vehicle-positions-connect --from-beginning --bootstrap-server kafka:9092\n")])])]),a("h3",{attrs:{id:"akhq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#akhq"}},[t._v("#")]),t._v(" AKHQ")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("le\ntopic "),a("code",[t._v("vehicle-positions-connect")]),t._v(" "),a("a",{attrs:{href:"http://akhq:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://akhq:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v('les connecteurs "\nKafka-Connect" '),a("a",{attrs:{href:"http://akhq:8080/ui/server/connect/connect",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://akhq:8080/ui/server/connect/connect"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"_5-suppression-du-connecteur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-suppression-du-connecteur"}},[t._v("#")]),t._v(" 5. suppression du connecteur")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -X DELETE http://connect:8083/connectors/mqtt-source\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v(" No Content\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Date: Tue, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(":50:50 GMT\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Server: Jetty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.4")]),t._v(".38.v20210224"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);