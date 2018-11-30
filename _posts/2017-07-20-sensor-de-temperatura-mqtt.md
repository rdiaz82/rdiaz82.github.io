---
id: 329
title: Sensor de temperatura MQTT
date: 2017-07-20T10:00:43+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=329
permalink: /blog/sensor-de-temperatura-mqtt/
image: /wp-content/uploads/2017/07/IMG_20170709_231313-540x297.jpg
categories:
  - Blog
tags:
  - ESP8266
  - IoT
  - MQTT
  - programación
  - Sensores
---
<p style="text-align: justify;">
  Como ya comenté en la entrada anterior, MQTT abre una gran cantidad de posibilidades a la hora de implementar aplicaciones de IoT. En este caso voy a hablar de una de las primera implementaciones con MQTT que he realizado en casa. Se trata de un sensor de temperatura sobre un ESP8266 con un DHT22.
</p>

<p style="text-align: justify;">
  En la siguiente figura se muestra el esquemático de conexionado. Como puede observarse el conexionado es muy sencillo. Simplemente los pines 1 y 3 conectados a Vcc para alimentar el chip y activar el chip. El pin 8 conectado a gnd y el pin 7 donde se conecta el sensor. Por otro lado para poder alimentar el ESP8266 con un adaptador de tensión de 5V
</p>

<p style="text-align: justify;">
  <a href="https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/schematics.png"><img class="aligncenter size-medium wp-image-336" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/schematics.png?resize=300%2C198" alt="" width="300" height="198" srcset="https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/schematics.png?resize=300%2C198 300w, https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/schematics.png?resize=162%2C108 162w, https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/schematics.png?w=564 564w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  En cuanto al código que está ejecutando el ESP8266, es un código bastante sencillo. Simplemente se conecta a la WiFi, una vez conectado a la WiFi se conecta al broker de MQTT y publica las medidas de temperatura y humedad en los topics adecuados. El código completo está disponible para su descarga en el <a href="https://github.com/rdiaz82/dht22_mqtt">repositorio de github</a>:
</p>

<p style="text-align: justify;">
  A la hora de montar el sensor como va a estar en el exterior, he encontrado una caja de luz estanca y como primera aproximación simplemente puse el sensor en el frontal con el circuito en el interior, tal y como se muestra en la siguiente imagen.
</p>

[<img class="aligncenter size-medium wp-image-333" src="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?resize=300%2C225" alt="" width="300" height="225" srcset="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?resize=300%2C225 300w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?resize=768%2C576 768w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?resize=1024%2C768 1024w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?w=2000 2000w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg?w=3000 3000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170709_231313.jpg)

<p style="text-align: justify;">
  El problema de esta primera implementación es que al funcionar, el ESP8266 y el regulador de tensión se calientan un poco y hace que la temperatura que mide el sensor no sea la correcta. Cuando lo probé, la temperatura en la habitación estaba sobre los 23ºC y al cabo de 15 minutos el sensor estaba midiendo una temperatura alrededor de los 28ºC.
</p>

<p style="text-align: justify;">
  Para solucionar el problema hice una pequeña base de plástico para separar el sensor del cuerpo de la caja donde esta el microcontrolador. Después del cambio de estructura todo quedó funcionando sin problemas. Actualmente está reportando la temperatura con un intervalo de 4 min. En la siguiente imagen se muestra el sensor modificado ya situado en la ubicación final y una captura de pantalla de un cliente MQTT para android (<a href="https://play.google.com/store/apps/details?id=net.routix.mqttdash&hl=es">MQTT Dash</a>) con la medida ya capturada por el sensor.
</p>

[<img class="aligncenter size-medium wp-image-343" src="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png?resize=300%2C187" alt="" width="300" height="187" srcset="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png?resize=300%2C187 300w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png?resize=768%2C478 768w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png?resize=1024%2C637 1024w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png?w=2000 2000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/Screenshot_20170719-233725-1.png)

<p style="text-align: justify;">
  Esta ubicación creo que terminaré cambiándola porque como se ve en la imagen se encuentra en el alféizar de una ventana pequeña y al tratarse de una zona de paso de corriente de aire entre el exterior y el interior de la casa he detectado variaciones en la medida del sensor si la ventana está abierta o está cerrada. He detectado una variación de temperatura de unos 2 grados de diferencia y de un 5% en la humedad. Intentaré llevarme el sensor a un lugar aislado de la luz directa del sol a la sombra y donde no se vea afectado por corrientes de aire procedentes del interior de la casa.
</p>