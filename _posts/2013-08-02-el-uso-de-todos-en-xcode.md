---
id: 166
title: El uso de TODOs en xCode
date: 2013-08-02T22:43:00+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=166
permalink: /blog/el-uso-de-todos-en-xcode/
wp-syntax-cache-content:
  - |
    a:3:{i:1;s:796:"
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>1
    2
    3
    </pre></td><td class="code"><pre class="objc" style="font-family:monospace;"><span style="color: #11740a; font-style: italic;">//TODO: directiva para mostrar los &quot;to do&quot; en la jump bar</span>
    <span style="color: #11740a; font-style: italic;">//FIXME: indicar zona donde arreglar un bug</span>
    <span style="color: #11740a; font-style: italic;">//???:  y //!!!: indicar zona para examinar en profundidad (no muy usada)</span></pre></td></tr></table><p class="theCode" style="display:none;">//TODO: directiva para mostrar los &quot;to do&quot; en la jump bar
    //FIXME: indicar zona donde arreglar un bug
    //???:  y //!!!: indicar zona para examinar en profundidad (no muy usada)</p></div>
    ;i:2;s:396:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>4
    </pre></td><td class="code"><pre class="objc" style="font-family:monospace;"><span style="color: #6e371a;">#warning // TODO: aparecerá como un warning al compilar</span></pre></td></tr></table><p class="theCode" style="display:none;">#warning // TODO: aparecerá como un warning al compilar</p></div>
    ;i:3;s:2136:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="line_numbers"><pre>1
    2
    3
    4
    </pre></td><td class="code"><pre class="bash" style="font-family:monospace;"><span style="color: #007800;">KEYWORDS</span>=<span style="color: #ff0000;">&quot;TODO|FIXME|\?\?\?:|\!\!\!:&quot;</span>
    <span style="color: #c20cb9; font-weight: bold;">find</span> <span style="color: #ff0000;">&quot;<span style="color: #007800;">${SRCROOT}</span>&quot;</span> \<span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #660033;">-name</span> <span style="color: #ff0000;">&quot;*.h&quot;</span> <span style="color: #660033;">-or</span> <span style="color: #660033;">-name</span> <span style="color: #ff0000;">&quot;*.m&quot;</span> \<span style="color: #7a0874; font-weight: bold;">&#41;</span> <span style="color: #660033;">-print0</span> <span style="color: #000000; font-weight: bold;">|</span> \
    <span style="color: #c20cb9; font-weight: bold;">xargs</span> <span style="color: #660033;">-0</span> <span style="color: #c20cb9; font-weight: bold;">egrep</span> <span style="color: #660033;">--with-filename</span> <span style="color: #660033;">--line-number</span> <span style="color: #660033;">--only-matching</span> <span style="color: #ff0000;">&quot;(<span style="color: #007800;">$KEYWORDS</span>).*<span style="color: #000099; font-weight: bold;">\$</span>&quot;</span> <span style="color: #000000; font-weight: bold;">|</span> \
    <span style="color: #c20cb9; font-weight: bold;">perl</span> <span style="color: #660033;">-p</span> <span style="color: #660033;">-e</span> <span style="color: #ff0000;">&quot;s/(<span style="color: #007800;">$KEYWORDS</span>)/ warning: <span style="color: #000099; font-weight: bold;">\$</span>1/&quot;</span></pre></td></tr></table><p class="theCode" style="display:none;">KEYWORDS=&quot;TODO|FIXME|\?\?\?:|\!\!\!:&quot;
    find &quot;${SRCROOT}&quot; \( -name &quot;*.h&quot; -or -name &quot;*.m&quot; \) -print0 | \
    xargs -0 egrep --with-filename --line-number --only-matching &quot;($KEYWORDS).*\$&quot; | \
    perl -p -e &quot;s/($KEYWORDS)/ warning: \$1/&quot;</p></div>
    ";}
image: /wp-content/uploads/2013/08/xcode.png
categories:
  - Blog
tags:
  - iOS
  - Objective C
  - organización
  - programación
  - xCode
---
<p style="text-align: justify;">
  Hace poco comencé un nuevo proyecto en iOS y después de llevar tiempo utilizando IntelliJ echaba de menos tener la posibilidad de tener organizados en un solo sitio los TODOs de la aplicación.
</p>

<p style="text-align: justify;">
  En IntelliJ es inmediato el acceso a todos los TODO, incluso al hacer commits al servidor de repositorio te muestra avisos sobre los TODO pendientes. En cambio en xCode esto no esta tan visible.
</p>

<p style="text-align: justify;">
  En  xCode disponemos de tres opciones. Por una lado opción sencilla es hacer uso de la directiva <span style="color: #993300;">#pragma mark<span style="color: #333333;">.</span></span> Esta directiva se encarga de separar los métodos de una clase en bloques agrupados por utilidades. De esta forma es mucho mas fácil navegar a través de clases inmensas con miles de delegados y protocolos. En la &#8220;jumpbar&#8221; de xCode (barra superior de xCode con el path de los archivos) además de ver los métodos por bloques podemos ver los TODO pendientes.
</p>

<p style="text-align: justify;">
  <a href="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-04-at-12.41.05.png"><img class="aligncenter size-full wp-image-173" alt="Screen Shot 2013-08-04 at 12.41.05" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-04-at-12.41.05.png?resize=253%2C91" width="253" height="91" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  Ademas de la posibilidad del TODO, xCode proporciona otras directivas que también se muestran en la jump bar:
</p>

<pre lang="objc" line="1">//TODO: directiva para mostrar los "to do" en la jump bar
//FIXME: indicar zona donde arreglar un bug
//???:  y //!!!: indicar zona para examinar en profundidad (no muy usada)</pre>

<p style="text-align: justify;">
  Una segunda opción para resaltar los TODO es simplemente añadir la directiva <span style="color: #993300;">#warning</span> delante de los TODO que tengas en tu código. El problema de esta opción es que no puedes añadir tus comentarios al final de una línea de código.
</p>

<pre lang="objc" line="4">#warning // TODO: aparecerá como un warning al compilar</pre>

<p style="text-align: justify;">
  Finalmente la tercera opción disponible es generar un script personalizado que se ejecute en el momento de compilación y muestre los TODOs como warnings. La ventaja de esta tercera opción es que no es necesario añadir la directiva &#8220;warning&#8221;, por lo que puedes poner los TODOs en cualquier parte de tu código. Para crear este script, en la ventana de configuración del proyecto selecciona <strong>Target > Build Phases > presiona Add Build Phase (abajo a la derecha) > Add Run Script > selecciona el tipo como bin/sh y copia el siguiente código en la ventana del script:</strong>
</p>

<pre lang="bash" line="1">KEYWORDS="TODO|FIXME|\?\?\?:|\!\!\!:"
find "${SRCROOT}" \( -name "*.h" -or -name "*.m" \) -print0 | \
xargs -0 egrep --with-filename --line-number --only-matching "($KEYWORDS).*\$" | \
perl -p -e "s/($KEYWORDS)/ warning: \$1/"</pre>

<p style="text-align: justify;">
  Con este script nos aparecerán directamente en la ventana de compilación como &#8220;warnings&#8221; del proyecto todos los TODO:, FIXME:, ???: y !!!: incluidos en nuestro proyecto.
</p>

<p style="text-align: justify;">
  <a href="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-04-at-12.40.40.png"><img class="aligncenter size-full wp-image-174" alt="Screen Shot 2013-08-04 at 12.40.40" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/Screen-Shot-2013-08-04-at-12.40.40.png?resize=298%2C105" width="298" height="105" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  Gracias a estos pequeños trucos se acabó el dejar de tener TODOs olvidados en lo más profundo de las clases de tus proyectos.
</p>