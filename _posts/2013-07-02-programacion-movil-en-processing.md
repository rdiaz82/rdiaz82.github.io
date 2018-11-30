---
id: 125
title: Programación móvil en Processing
date: 2013-07-02T20:41:47+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=125
permalink: /blog/programacion-movil-en-processing/
wp-syntax-cache-content:
  - |
    a:1:{i:1;s:1040:"
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="code"><pre class="java" style="font-family:monospace;"><span style="color: #000066; font-weight: bold;">void</span> draw<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    stroke<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">0</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    strokeWeight<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    line<span style="color: #009900;">&#40;</span>pmouseX,pmouseY,mouseX,mouseY<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span></pre></td></tr></table><p class="theCode" style="display:none;">void draw()
    {
    stroke(0);
    strokeWeight(2);
    line(pmouseX,pmouseY,mouseX,mouseY);
    }</p></div>
    ";}
image: /wp-content/uploads/2013/07/processing_image.png
categories:
  - Blog
tags:
  - android
  - interactivo
  - movil
  - multimedia
  - processing
  - programación
---
<p style="text-align: justify;">
  Tiempo atrás estuve viendo algo de processing cuando comencé a programar con Arduino. Desde ese momento, processing ha seguido evolucionando y actualmente incluso proporciona soporte para Android. El desarrollo en processing es muy sencillo, tiene una sintaxis muy parecida a java y es un lenguaje muy potente a nivel de gráfico e interactivo.
</p>

<p style="text-align: justify;">
  Una vez descargado processing, el editor es muy sencillo, nada de IDE espectacular, prácticamente es un editor de texto con coloreado de sintaxis. Lo realmente importante es lo que escribimos en el editor. A continuación pongo un ejemplo de como crear un &#8220;Paint&#8221; para android con 3 líneas de código (aunque podría decirse que se hace en una línea de código).
</p>

<pre lang="java">void draw()
{
   stroke(0);
   strokeWeight(2);
   line(pmouseX,pmouseY,mouseX,mouseY);
}</pre>

<p style="text-align: justify;">
  En android el evento mouse es interpretado cuando tocas la pantalla, y este simple programa va pintando en pantalla donde vas tocando, pudiendo dibujar en tu móvil:
</p>

<p style="text-align: justify;">
  <a href="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/07/Screenshot_2013-07-01-21-49-45.png"><img class="aligncenter size-medium wp-image-131" alt="Screenshot_2013-07-01-21-49-45" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/07/Screenshot_2013-07-01-21-49-45.png?resize=168%2C300" width="168" height="300" srcset="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/07/Screenshot_2013-07-01-21-49-45.png?resize=168%2C300 168w, https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/07/Screenshot_2013-07-01-21-49-45.png?resize=576%2C1024 576w, https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/07/Screenshot_2013-07-01-21-49-45.png?w=720 720w" sizes="(max-width: 168px) 100vw, 168px" data-recalc-dims="1" /></a>
</p>