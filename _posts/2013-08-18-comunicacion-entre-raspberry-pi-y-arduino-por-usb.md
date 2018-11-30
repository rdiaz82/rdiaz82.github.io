---
id: 192
title: Comunicación entre Raspberry PI y Arduino por USB
date: 2013-08-18T15:39:36+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=192
permalink: /blog/comunicacion-entre-raspberry-pi-y-arduino-por-usb/
wp-syntax-cache-content:
  - |
    a:4:{i:1;s:9660:"
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    22
    23
    </pre></td><td class="code"><pre class="java" style="font-family:monospace;"><span style="color: #000066; font-weight: bold;">char</span> incomingData<span style="color: #339933;">;</span>
    <span style="color: #003399;">String</span> receivedCommand<span style="color: #339933;">;</span>
    &nbsp;
    <span style="color: #000066; font-weight: bold;">int</span> stringToNumber<span style="color: #009900;">&#40;</span><span style="color: #003399;">String</span> thisString<span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    <span style="color: #000066; font-weight: bold;">int</span> i, value, length<span style="color: #339933;">;</span>
    length <span style="color: #339933;">=</span> thisString.<span style="color: #006633;">length</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #000066; font-weight: bold;">char</span> blah<span style="color: #009900;">&#91;</span><span style="color: #009900;">&#40;</span>length<span style="color: #339933;">+</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">for</span><span style="color: #009900;">&#40;</span>i<span style="color: #339933;">=</span><span style="color: #cc66cc;">0</span><span style="color: #339933;">;</span> i<span style="color: #339933;">&amp;</span>lt<span style="color: #339933;">;</span>length<span style="color: #339933;">;</span> i<span style="color: #339933;">++</span><span style="color: #009900;">&#41;</span>     <span style="color: #009900;">&#123;</span>       blah<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span> <span style="color: #339933;">=</span> thisString.<span style="color: #006633;">charAt</span><span style="color: #009900;">&#40;</span>i<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    <span style="color: #009900;">&#125;</span>    blah<span style="color: #009900;">&#91;</span>i<span style="color: #009900;">&#93;</span><span style="color: #339933;">=</span><span style="color: #cc66cc;">0</span><span style="color: #339933;">;</span>    value <span style="color: #339933;">=</span> atoi<span style="color: #009900;">&#40;</span>blah<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    <span style="color: #000000; font-weight: bold;">return</span> value<span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">void</span> setup<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>    Serial.<span style="color: #006633;">begin</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">9600</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    Serial.<span style="color: #006633;">println</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">&quot;Arduino Ready&quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    pinMode<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">13</span>, OUTPUT<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    pinMode<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">12</span>, OUTPUT<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    pinMode<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">11</span>, OUTPUT<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    pinMode<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">10</span>, OUTPUT<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    pinMode<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">9</span>, OUTPUT<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">void</span> loop<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>    <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>Serial.<span style="color: #006633;">available</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&amp;</span>gt<span style="color: #339933;">;</span> <span style="color: #cc66cc;">0</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    incomingData <span style="color: #339933;">=</span> Serial.<span style="color: #006633;">read</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    receivedCommand<span style="color: #339933;">+=</span>incomingData<span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>receivedCommand.<span style="color: #006633;">length</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">==</span><span style="color: #cc66cc;">3</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    digitalWrite<span style="color: #009900;">&#40;</span>stringToNumber<span style="color: #009900;">&#40;</span>receivedCommand.<span style="color: #006633;">substring</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">0</span>,<span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>,<span style="color: #009900;">&#40;</span>receivedCommand<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">2</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #0000ff;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span>LOW<span style="color: #339933;">:</span>HIGH<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    Serial.<span style="color: #006633;">print</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">&quot;pin: &quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    Serial.<span style="color: #006633;">print</span><span style="color: #009900;">&#40;</span>receivedCommand.<span style="color: #006633;">substring</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">0</span>,<span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    Serial.<span style="color: #006633;">print</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">&quot; at level: &quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    Serial.<span style="color: #006633;">println</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#40;</span>receivedCommand<span style="color: #009900;">&#91;</span><span style="color: #cc66cc;">2</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #0000ff;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #0000ff;">&quot;LOW&quot;</span><span style="color: #339933;">:</span><span style="color: #0000ff;">&quot;HIGH&quot;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    receivedCommand<span style="color: #339933;">=</span><span style="color: #0000ff;">&quot;&quot;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
    <span style="color: #009900;">&#125;</span>
    <span style="color: #009900;">&#125;</span></pre></td></tr></table><p class="theCode" style="display:none;">char incomingData;
    String receivedCommand;
    
    int stringToNumber(String thisString)
    {
    int i, value, length;
    length = thisString.length();
    char blah[(length+1)];
    for(i=0; i&amp;lt;length; i++)     {       blah[i] = thisString.charAt(i);    }    blah[i]=0;    value = atoi(blah);    return value; } void setup() {    Serial.begin(9600);    Serial.println(&quot;Arduino Ready&quot;);    pinMode(13, OUTPUT);    pinMode(12, OUTPUT);    pinMode(11, OUTPUT);    pinMode(10, OUTPUT);    pinMode(9, OUTPUT); } void loop() {    if (Serial.available() &amp;gt; 0)
    {
    incomingData = Serial.read();
    receivedCommand+=incomingData;
    if (receivedCommand.length()==3)
    {
    digitalWrite(stringToNumber(receivedCommand.substring(0,2)),(receivedCommand[2]=='0')?LOW:HIGH);
    Serial.print(&quot;pin: &quot;);
    Serial.print(receivedCommand.substring(0,2));
    Serial.print(&quot; at level: &quot;);
    Serial.println((receivedCommand[2]=='0')?&quot;LOW&quot;:&quot;HIGH&quot;);
    receivedCommand=&quot;&quot;;
    }
    }
    }</p></div>
    ;i:2;s:427:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>1
    </pre></td><td class="code"><pre class="bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">apt-get install</span> python-serial</pre></td></tr></table><p class="theCode" style="display:none;">sudo apt-get install python-serial</p></div>
    ;i:3;s:495:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>2
    </pre></td><td class="code"><pre class="bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">ls</span> <span style="color: #000000; font-weight: bold;">/</span>dev<span style="color: #000000; font-weight: bold;">/</span>tty<span style="color: #000000; font-weight: bold;">*</span></pre></td></tr></table><p class="theCode" style="display:none;">ls /dev/tty*</p></div>
    ;i:4;s:2085:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>1
    2
    3
    4
    5
    6
    7
    8
    9
    </pre></td><td class="code"><pre class="python" style="font-family:monospace;"><span style="color: #ff7700;font-weight:bold;">import</span> serial
    <span style="color: #ff7700;font-weight:bold;">import</span> <span style="color: #dc143c;">time</span>
    ser<span style="color: #66cc66;">=</span>serial.<span style="color: black;">Serial</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'/dev/ttyACM0'</span><span style="color: #66cc66;">,</span><span style="color: #ff4500;">9600</span><span style="color: black;">&#41;</span>
    <span style="color: #ff7700;font-weight:bold;">while</span> <span style="color: #ff4500;">1</span>:
    <span style="color: #ff7700;font-weight:bold;">print</span><span style="color: black;">&#40;</span>ser.<span style="color: #dc143c;">readline</span><span style="color: black;">&#40;</span><span style="color: black;">&#41;</span><span style="color: black;">&#41;</span>
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'091'</span><span style="color: black;">&#41;</span>
    <span style="color: #dc143c;">time</span>.<span style="color: black;">sleep</span><span style="color: black;">&#40;</span><span style="color: #ff4500;">1</span><span style="color: black;">&#41;</span>
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'090'</span><span style="color: black;">&#41;</span>
    <span style="color: #dc143c;">time</span>.<span style="color: black;">sleep</span><span style="color: black;">&#40;</span><span style="color: #ff4500;">1</span><span style="color: black;">&#41;</span></pre></td></tr></table><p class="theCode" style="display:none;">import serial
    import time
    ser=serial.Serial('/dev/ttyACM0',9600)
    while 1:
    print(ser.readline())
    ser.write('091')
    time.sleep(1)
    ser.write('090')
    time.sleep(1)</p></div>
    ";}
image: /wp-content/uploads/2013/08/arduino.jpg
categories:
  - Blog
tags:
  - arduino
  - processing
  - programación
  - python
  - raspberry pi
---
<p style="text-align: justify;">
  Raspberry Pi es una plataforma a tener en cuenta para el desarrollo de aplicaciones domóticas y de control. Sin embargo, Raspberry PI tiene una pequeña limitación en cuanto al número de entradas/salidas disponibles así como problemas relacionados con los tiempos de respuestas que se consiguen programando en python.
</p>

<p style="text-align: justify;">
  Una posible solución a esta limitación puede ser combinar el Raspberry Pi con Arduino y relegar todo el control hardware al Arduino y utilizar el Raspberry como controlador maestro. En esta entrada voy a hacer un simple ejemplo en que conecto mi Raspberry Pi con un Arduino a través de USB y mi Raspberry controla los puertos de salida del Arduino a través de comunicación serie.
</p>

<p style="text-align: justify;">
  Para ello, lo primero que vamos a hacer es crear un programa para nuestro Arduino que simplemente lee información del puerto serie y en función de la información leída actúa sobre los puertos (9 &#8211; 13) del Arduino poniendo a nivel alto o a nivel bajo. El programa que utilizamos se muestra a continuación.
</p>

<pre lang="java" line="1">char incomingData;
String receivedCommand;

int stringToNumber(String thisString) 
{
   int i, value, length;
   length = thisString.length();
   char blah[(length+1)];
   for(i=0; i&lt;length; i++)     {       blah[i] = thisString.charAt(i);    }    blah[i]=0;    value = atoi(blah);    return value; } void setup() {    Serial.begin(9600);    Serial.println("Arduino Ready");    pinMode(13, OUTPUT);    pinMode(12, OUTPUT);    pinMode(11, OUTPUT);    pinMode(10, OUTPUT);    pinMode(9, OUTPUT); } void loop() {    if (Serial.available() &gt; 0) 
   {
       incomingData = Serial.read();
       receivedCommand+=incomingData;
       if (receivedCommand.length()==3)
       {
         digitalWrite(stringToNumber(receivedCommand.substring(0,2)),(receivedCommand[2]=='0')?LOW:HIGH);
         Serial.print("pin: ");
         Serial.print(receivedCommand.substring(0,2));
         Serial.print(" at level: ");
         Serial.println((receivedCommand[2]=='0')?"LOW":"HIGH");
         receivedCommand="";
       }
   }  
}</pre>

<p style="text-align: justify;">
  Veamos en detalle que hace este código. Primero declaramos algunas variables globales (líneas 1-2) luego nos encontramos con una función para convertir de String a int (lineas 4-16). Esta función la he conseguido desde <a href="http://forums.adafruit.com/viewtopic.php?f=25&t=25264#p130095" target="_blank">este hilo</a>. Luego llegamos a la función de configuración de Arduino donde inicializamos el puerto serie y configuramos los puertos del 9 al 13 como salidas digitales (Lineas 18-27). Finalmente llegamos a la función loop (Lineas 29-45).
</p>

<p style="text-align: justify;">
  La función loop escucha continuamente al puerto serie, y espera hasta recibir 3 caracteres. Una vez recibidos 3 caracteres simplemente divide la cadena de la siguiente forma: Los dos primeros caracteres codifican el puerto sobre el que quieres actuar y el tercer carácter codifica el estado que quieres fijar a ese puerto. Por ejemplo &#8220;121&#8221; sería poner el puerto 12 a nivel alto y por ejemplo &#8220;090&#8221; seria forzar un nivel bajo en el puerto 9.
</p>

<p style="text-align: justify;">
  Con esto ya terminamos el trabajo en el lado del Arduino. vamos ahora a trabajar en el lado del Raspberry. En este caso lo primero que tenemos que hacer es instalar las librerías para el control del puerto serie desde python. Para ellos ejecutamos el siguiente comando desde consola en nuestro Raspberry Pi:
</p>

<pre lang="bash" line="1">sudo apt-get install python-serial</pre>

<p style="text-align: justify;">
  Con esto ya tenemos listo nuestro Raspberry Pi para trabajar con el puerto serie desde python. Lo único que nos queda es determinar que puerto utiliza nuestro Arduino cuando esta conectado al Raspberry Pi. Para ello antes de conectar el Arduino ejecutamos el siguiente comando
</p>

<pre lang="bash" line="2">ls /dev/tty*</pre>

<p style="text-align: justify;">
  Y veremos que nos proporciona un listado de diferentes dispositivos. Luego simplemente conectamos el Arduino, volvemos a ejecutar el comando y veremos como aparecerá un dispositivo adicional. Nuestro Arduino!! En mi caso mi arduino aparece como: <strong>/dev/ttyACM0</strong>.
</p>

<p style="text-align: justify;">
  Con nuestro arduino identificado solamente tenemos que irnos a python y escribir el programa para controlar nuestro Arduino. en mi caso he hecho un ejemplo muy sencillo, mi código simplemente enciende y apaga el pin 9 cada segundo y a su vez también lee la información de realimentación que proporciona Arduino cuando cambia el estado del pin:
</p>

<pre lang="python" line="1">import serial
import time
ser=serial.Serial('/dev/ttyACM0',9600)
while 1:
        print(ser.readline())
        ser.write('091')
        time.sleep(1)
        ser.write('090')
        time.sleep(1)</pre>

<p style="text-align: justify;">
  Como resultado si todo funciona correctamente podemos obtener algo como la siguiente imagen en la consola de nuestro Raspberry Pi.
</p>

<p style="text-align: justify;">
  <a href="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.21.35.png"><img class="aligncenter size-medium wp-image-199" alt="ScreenShot" src="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.21.35.png?resize=300%2C252" width="300" height="252" srcset="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.21.35.png?resize=300%2C252 300w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.21.35.png?w=559 559w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  Con estos sencillos pasos ya tenemos los dos dispositivos conectados y compartiendo información entre ellos. Llegados a este punto todavía podemos ir más allá y hacer que nuestro Raspberry pueda ser controlado a través de internet y de esa forma poder acceder a nuestro Arduino de forma totalmente remota, pero eso será ya el tema de otra entrada.
</p>