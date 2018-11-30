---
id: 319
title: MQTT el protocolo para IoT
date: 2017-07-13T15:05:29+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=319
permalink: /blog/mqtt-el-protocolo-para-iot/
image: /wp-content/uploads/2017/07/mqtt-diagram-539x297.png
categories:
  - Blog
tags:
  - Comunicaciones
  - Electrónica
  - IoT
  - MQTT
  - Protocolos
  - Sensores
---
<p style="text-align: justify;">
  Aunque MQTT es un protocolo creado en 1999, con la revolución de Internet of Things ha ganado en popularidad en el mercado. MQTT son las siglas Message Queue Telemetry Transport, se trata de un protocolo de comunicaciones para el envío de pequeños mensajes montado sobre TCP/IP. El protocolo, está especialmente diseñado para aplicaciones que requieren muy poco ancho de banda y que simplemente quieren enviar o recibir un mensaje sencillo.
</p>

<p style="text-align: justify;">
  MQTT funciona basado en un patrón publicador/suscriptor, donde siempre tiene que haber un nodo central en la red (el broker) que se encarga de centralizar y gestionar todas las suscripciones y las publicaciones. Además MQTT dispone de funcionalidades interesantes como cifrado de mensajes vía http, o asegurar la calidad de servicio con tres niveles diferentes (QoS 0-3). En el nivel más básico simplemente se publican los mensajes y en el nivel 3 se establece un mecanismo bidireccional para garantizar que los receptores como emisor están enterados de que la comunicación fue sin problemas.
</p>

A la hora de trabajar es muy sencillo, simplemente hay 5 métodos para ejecutar: **Connect** y **Disconnect**, para darse de alta como cliente en el broker y darse de baja. **Subscribe** a un topic, que permite recibir todo lo que se publica bajo determinado tema. **UnSubscribe** del topic, que deja de escuchar los eventos de un topic y **Publish** un mensaje bajo un topic determinado.

<p style="text-align: justify;">
  Los topics o temas son los diferentes canales en los que se publican los datos y a los que los diferentes receptores deben suscribirse. Estos topics tienen una estrcutura tipo url donde se van generando niveles con barras. Por ejemplo unos topic válidos podría ser <strong>casa/salon/humedad</strong> o <strong>casa/salon/temperatura</strong>.
</p>

<p style="text-align: justify;">
  Lo interesante de los topics reside en la posibilidad de usar wildcards, de manera que un cliente que quiera suscribirse a los datos que emiten los sensores del salón podría hacer algo tal que <strong>casa/salon/# (wildcard multinivel)</strong>, suscribíendose de esta forma a todos los sensores que están disponibles en esa habitación. Otro ejemplo de wildcar podría ser un suscriptor que quiere solo escuchar a todos los sensores de temperatura de la casa, en ese caso usaría algo tal que:  <strong>casa/+/temperatura (wildcard un solo nivel)</strong>
</p>

<p style="text-align: justify;">
  Para entender un poco más la potencialidad de MQTT, En el siguiente diagrama se muestra una arquitectura de ejemplo:
</p>

[<img class="aligncenter size-medium wp-image-320" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/mqtt-diagram.png?resize=300%2C232" alt="" width="300" height="232" srcset="https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/mqtt-diagram.png?resize=300%2C232 300w, https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/mqtt-diagram.png?w=539 539w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i1.wp.com/rdiaz.es/wp-content/uploads/2017/07/mqtt-diagram.png)

<p style="text-align: justify;">
  En esta arquitectura, suponemos que tenemos sensores de temperatura en el dormitorio y el salón, así como un aire acondicionado en cada habitación. En este caso se podría por medio de la lectura de los sensores de temperatura, el aire acondicionado podría decidir si activarse o no suscribiéndose a los correspondientes topics. Por otro lado el aire acondicionado podría ser activado manualmente desde una aplicación móvil si ésta publicara en el topic correspondiente donde está escuchando el aire acondicionado.
</p>

<p style="text-align: justify;">
  En la arquitectura de ejemplo también suponemos que la puerta y luz del garaje están conectados, de manera que se pueden controlar remotamente o de manera conjunta, por ejemplo encendiendo la luz del garaje cuando se abre o cierra la puerta. O bien incluso controlar la apertura o cierre de la puerta del garaje desde una aplicación móvil.
</p>

<p style="text-align: justify;">
  Actualmente existen clientes de MQTT compatibles con los frameworks y lenguajes de programación más comunes por lo que se está facilitando la creación de un ecosistema de aplicaciones móviles y aplicaciones web que interactúan con brokers MQTT y que pueden servir para mostrar un resumen de los datos capturados,  creación gráficas con históricos, procesado de datos, control remoto de dispositivos, etc&#8230;
</p>

<p style="text-align: justify;">
  Esta entrada he querido dar una idea básica general de que es MQTT. En próximas entradas comentaré más en profundidad algunas implementaciones prácticas de MQTT en las que estoy trabajando sobre el ESP8266 y se podrá ver como es muy sencillo montar una arquitectura compleja en casa con muy poco esfuerzo.
</p>