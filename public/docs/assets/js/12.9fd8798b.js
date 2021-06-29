(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lab06-kafka-connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab06-kafka-connect"}},[s._v("#")]),s._v(" Lab06 - Kafka connect")]),s._v(" "),a("ul",[a("li",[s._v("Checkout de la branche "),a("code",[s._v("step06")])])]),s._v(" "),a("p",[s._v("Demarrer le container "),a("code",[s._v("kafka-connect")]),s._v(" au sein du réseau existant")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose -f docker-compose-connect.yml up -d\n")])])]),a("h2",{attrs:{id:"_1-installer-le-connecteur-mqtt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-installer-le-connecteur-mqtt"}},[s._v("#")]),s._v(" 1. Installer le connecteur MQTT")]),s._v(" "),a("p",[s._v("Se placer dans le container "),a("code",[s._v("connect")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it connect "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[s._v("Installer le connector MQTT")]),s._v(" "),a("p",[a("em",[s._v("/!\\ License")]),s._v(" : https://docs.confluent.io/kafka-connect-mqtt/current/index.html#license")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("confluent-hub "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-prompt confluentinc/kafka-connect-mqtt:latest\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),a("p",[s._v("Redemarrer connect")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker restart connect\n")])])]),a("h2",{attrs:{id:"_2-creer-les-topics-necessaires-au-connecteur-mqtt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-creer-les-topics-necessaires-au-connecteur-mqtt"}},[s._v("#")]),s._v(" 2. Creer les topics nécessaires au connecteur MQTT")]),s._v(" "),a("p",[s._v("Nous utiliserons un topic "),a("code",[s._v("vehicle-positions-connect")]),s._v("  pour notre connecteur.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it tools "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nkafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions-connect --replication-factor "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --partitions "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),a("h2",{attrs:{id:"_3-configuration-du-connecteur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration-du-connecteur"}},[s._v("#")]),s._v(" 3. configuration du connecteur")]),s._v(" "),a("h3",{attrs:{id:"creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[s._v("#")]),s._v(" Création")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -X POST --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@./mqtt-source.json"')]),s._v(" http://localhost:8083/connectors\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt-source"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connector.class"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.confluent.connect.mqtt.MqttSourceConnector"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt.server.uri"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssl://mqtt.hsl.fi:8883"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt.topics"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hfp/v2/journey/ongoing/vp/#"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt.qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka.topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vehicle-positions-connect"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks.max"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"confluent.topic.bootstrap.servers"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka:9092"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt-source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("%\n")])])]),a("h3",{attrs:{id:"lister"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lister"}},[s._v("#")]),s._v(" Lister")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:8083/connectors\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt-source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("%\n")])])]),a("h3",{attrs:{id:"statut"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statut"}},[s._v("#")]),s._v(" Statut")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:8083/connectors/mqtt-source/status\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt-source"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connector"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RUNNING"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"worker_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connect:8083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(":0,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RUNNING"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"worker_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connect:8083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("%\n")])])]),a("h2",{attrs:{id:"_4-visualiser-le-contenu-du-topic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-visualiser-le-contenu-du-topic"}},[s._v("#")]),s._v(" 4. Visualiser le contenu du topic")]),s._v(" "),a("h3",{attrs:{id:"binaire-kafka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binaire-kafka"}},[s._v("#")]),s._v(" Binaire Kafka")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it tools "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nkafka-console-consumer --topic vehicle-positions-connect --from-beginning --bootstrap-server kafka:9092\nexit`\n")])])]),a("h3",{attrs:{id:"akhq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#akhq"}},[s._v("#")]),s._v(" AKHQ")]),s._v(" "),a("p",[a("code",[s._v("http://localhost:8080/ui/server/topic/vehicle-positions-connect/data?sort=Oldest&partition=All")])]),s._v(" "),a("h2",{attrs:{id:"_5-suppression-du-connecteur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-suppression-du-connecteur"}},[s._v("#")]),s._v(" 5. suppression du connecteur")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -v -X DELETE http://localhost:8083/connectors/mqtt-source\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v(" No Content\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" Date: Tue, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":50:50 GMT\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" Server: Jetty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.4")]),s._v(".38.v20210224"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);