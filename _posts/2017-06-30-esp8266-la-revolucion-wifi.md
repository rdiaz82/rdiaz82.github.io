---
id: 296
title: ESP8266 la revolución WiFi
date: 2017-06-30T00:20:19+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=296
permalink: /blog/esp8266-la-revolucion-wifi/
image: /wp-content/uploads/2017/06/ESP8266-538x297.jpg
categories:
  - Blog
tags:
  - Electrónica
  - ESP8266
  - IoT
---
<p style="text-align: justify;">
Desde la llegada al mercado de todo el ecosistema arduino en sus diferentes variantes, cualquier aficionado a la electrónica es capaz de llevar a cabo todo tipo de proyectos. El principal problema de las soluciones arduinos es la necesidad de accesorios para proporcionar conectividad de red o modelos específicos como el arduino yun.
</p>

<p style="text-align: justify;">
  Desde hace no mucho tiempo se ha popularizado el ESP8266. Una solución completa de microcontrolador con una pila TCP/IP completa WiFi desarrollado por la empresa china Espressif. Se trata de un chip con conectividad WiFi como ya comentaba, soporte para encriptación WEP y WPA, 16 puertos GPIO, SPI, I2C, conversor analógico digital de 10 bits y UART.  Estamos hablando de tener todo lo necesario para prácticamente cualquier aplicación en un único chip y a un precio prácticamente regalado, ya que se pueden conseguir dependiendo la versión entre 2 y 4€.
</p>

<p style="text-align: left;">
  Espressif proporciona un SDK para desarrollar aplicaciones sobre el microcontrolador y dispone de muchas alternativas a la hora de programar. Las más comunes son:
</p>

<p style="text-align: justify;">
  <a href="https://github.com/nodemcu/nodemcu-firmware">NodeMcu</a>: Es un firmware que soporta aplicaciones desarrolladas en LUA.
</p>

<p style="text-align: justify;">
  <a href="https://github.com/esp8266/Arduino">Arduino</a>: Nos permite ejecutar código arduino dentro del ESP8266, lo que nos da una ventaja enorme porque podemos aprovechar prácticamente todos los códigos que ya teníamos hechos para arduino.
</p>

<p style="text-align: justify;">
  <a class="external text" href="http://docs.micropython.org/en/latest/esp8266/esp8266/tutorial/intro.html" rel="nofollow">MicroPython</a>: es un port de micropython adaptado al ESP8266
</p>

<p style="text-align: justify;">
  <a class="external text" href="https://www.espruino.com/" rel="nofollow">Espruino</a>: Que permite desarrollar en javascript para el ESP8266.
</p>

<p style="text-align: justify;">
  <a class="external text" href="https://github.com/SuperHouse/esp-open-rtos" rel="nofollow">ESP-Open-RTOS</a>: Que implementa un RTOS para el ESP8266.
</p>

<p style="text-align: justify;">
  Las versiones más comunes del chip son: la ESP-01, es la versión más pequeña y dispone de 2 puertos GPIO y no dispone de control de puerto serie/usb. el ESP-12 que ya tiene disponibles todos los pins del chip y tampoco dispone de control de puerto serie/usb y el NodeMcu-v3 que integra el ESP8266 con un controlador de puerto serie/usb y un regulador de tensión.
</p>

<p style="text-align: justify;">
  Debido a las prestaciones que presenta y las posibilidades de conectividad este chip se está convirtiendo en una opción muy válida para casi cualquier tipo de aplicación IoT. En próximas entradas iré hablando más en detalle de aplicaciones concretas y algunos consejos a la hora de utilizar este chip.
</p>
