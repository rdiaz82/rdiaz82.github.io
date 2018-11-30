---
id: 348
title: Programador para ESP8266
date: 2017-07-30T13:45:52+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=348
permalink: /blog/programador-para-esp8266/
image: /wp-content/uploads/2017/07/IMG_20170730_125833-540x297.jpg
categories:
  - Blog
tags:
  - Electrónica
  - ESP8266
  - IoT
  - programación
  - programador
---
<p style="text-align: justify;">
  Debido al pequeño tamaño del ESP8266-E1 a la hora de programar el proceso no es tan intuitivo como en arduino que simplemente conectando el arduino al USB todo funciona sin problemas. En el caso del ESP8266 necesitamos un conversor de niveles desde USB a 3.3V. En internet puedes encontrar muchísimos de estos conversores. Yo utilizo el siguiente:
</p>

<p style="text-align: justify;">
  <a href="https://es.aliexpress.com/item/Free-shipping-FT232RL-FT232-FTDI-USB-3-3V-5-5V-to-TTL-Serial-Adapter-Module-Mini/32697434241.html?spm=a2g0s.9042311.0.0.4Xtg4f">Enlace al conversor en aliexpress</a>
</p>

<p style="text-align: justify;">
  Con el conversor usb a 3.3V lo que vamos a conseguir es adaptar los niveles de tensión del puerto serie al nivel de tensión adecuado al ESP8266 (3.3V). El siguiente paso es preparar al microcontrolador para entrar en modo programación y programarlo vía puerto serie. Para este propósito podemos conectar los pines necesarios usando una protoboard o crearnos un pequeño programador para que la programación sea &#8220;plug&play&#8221;.
</p>

<p style="text-align: justify;">
  En la siguiente figura se muestra el esquemático del programador. Como se observa los pines de reset y GPIO0 se conectan mediante pulsadores. En el caso del reset, el pin está conectado a VCC por medio de una resistencia de pull-up y en el caso de GPIO0 lo que hace el pulsador es forzarlo a GND.
</p>

<p style="text-align: justify;">
  <a href="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/programmer.png"><img class="aligncenter size-medium wp-image-350" src="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/programmer.png?resize=300%2C194" alt="" width="300" height="194" srcset="https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/programmer.png?resize=300%2C194 300w, https://i0.wp.com/rdiaz.es/wp-content/uploads/2017/07/programmer.png?w=665 665w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  Un detalle importante cuando se trabaja con el ESP8266 es la alimentación. En mi caso he tenido bastantes problemas con obtener los 3.3V directamente desde el conversor USB. A pesar de tener un modo de 3.3V lo que he hecho ha sido tomar el pin de 5V y por medio de 2 diodos hacer una caída de tensión de 1.4V, obteniendo así una alimentación de 3.6V.
</p>

<p style="text-align: justify;">
  En la siguiente figura el montaje del programador ya hecho sobre una pcb de prototipado.
</p>

<p style="text-align: justify;">
  <a href="https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg"><img class="aligncenter size-medium wp-image-351" src="https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg?resize=280%2C300" alt="" width="280" height="300" srcset="https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg?resize=280%2C300 280w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg?resize=768%2C824 768w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg?resize=954%2C1024 954w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2017/07/IMG_20170730_125833.jpg?w=2000 2000w" sizes="(max-width: 280px) 100vw, 280px" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  A la hora de programar es muy sencillo. Colocas el ESP01 que quieres programar en el socket, se presionan el reset y el pulsador de flash a la vez durante par de segundos. Se suelta el pulsador del reset mientras se mantiene pulsado el de flasheo y finalmente se suelta el pulsador de flasheo. Eso mete al microcontrolador en modo programación y ya en el IDE que utilices para programar puedes lanzar el volcado de tu código.
</p>