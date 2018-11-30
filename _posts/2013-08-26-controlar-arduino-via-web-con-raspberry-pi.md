---
id: 214
title: Controlar Arduino via Web con Raspberry Pi
date: 2013-08-26T09:40:44+00:00
author: admin
layout: post
guid: http://rdiaz.es/?p=214
permalink: /blog/controlar-arduino-via-web-con-raspberry-pi/
wp-syntax-cache-content:
  - |
    a:5:{i:1;s:473:"
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="code"><pre class="bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">apt-get</span> <span style="color: #660033;">-y</span> <span style="color: #c20cb9; font-weight: bold;">install</span> lighttpd</pre></td></tr></table><p class="theCode" style="display:none;">sudo apt-get -y install lighttpd</p></div>
    ;i:2;s:6016:
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
    24
    25
    26
    27
    28
    29
    30
    31
    32
    </pre></td><td class="code"><pre class="bash" style="font-family:monospace;">server.modules = <span style="color: #7a0874; font-weight: bold;">&#40;</span>
    <span style="color: #ff0000;">&quot;mod_access&quot;</span>,
    <span style="color: #ff0000;">&quot;mod_alias&quot;</span>,
    <span style="color: #ff0000;">&quot;mod_compress&quot;</span>,
    <span style="display:block;background-color: #ffc;">        <span style="color: #ff0000;">&quot;mod_cgi&quot;</span>,</span>        <span style="color: #ff0000;">&quot;mod_redirect&quot;</span>,
    <span style="color: #666666; font-style: italic;">#       &quot;mod_rewrite&quot;,</span>
    <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    &nbsp;
    server.document-root        = <span style="color: #ff0000;">&quot;/var/www&quot;</span>
    server.upload-dirs          = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;/var/cache/lighttpd/uploads&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    server.errorlog             = <span style="color: #ff0000;">&quot;/var/log/lighttpd/error.log&quot;</span>
    server.pid-file             = <span style="color: #ff0000;">&quot;/var/run/lighttpd.pid&quot;</span>
    server.username             = <span style="color: #ff0000;">&quot;www-data&quot;</span>
    server.groupname            = <span style="color: #ff0000;">&quot;www-data&quot;</span>
    server.port                 = <span style="color: #000000;">8080</span>
    &nbsp;
    <span style="display:block;background-color: #ffc;"><span style="color: #007800;">$HTTP</span><span style="color: #7a0874; font-weight: bold;">&#91;</span><span style="color: #ff0000;">&quot;url&quot;</span><span style="color: #7a0874; font-weight: bold;">&#93;</span> =~ <span style="color: #ff0000;">&quot;/cgi-bin/&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#123;</span></span><span style="display:block;background-color: #ffc;">      cgi.assign = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;.py&quot;</span> = <span style="color: #ff0000;">&quot;/usr/bin/python&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span></span><span style="display:block;background-color: #ffc;"><span style="color: #7a0874; font-weight: bold;">&#125;</span></span>&nbsp;
    index-file.names            = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;index.php&quot;</span>, <span style="color: #ff0000;">&quot;index.html&quot;</span>, <span style="color: #ff0000;">&quot;index.lighttpd.html&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    url.access-deny             = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;~&quot;</span>, <span style="color: #ff0000;">&quot;.inc&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    static-file.exclude-extensions = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;.php&quot;</span>, <span style="color: #ff0000;">&quot;.pl&quot;</span>, <span style="color: #ff0000;">&quot;.fcgi&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    &nbsp;
    compress.cache-dir          = <span style="color: #ff0000;">&quot;/var/cache/lighttpd/compress/&quot;</span>
    compress.filetype           = <span style="color: #7a0874; font-weight: bold;">&#40;</span> <span style="color: #ff0000;">&quot;application/javascript&quot;</span>, <span style="color: #ff0000;">&quot;text/css&quot;</span>, <span style="color: #ff0000;">&quot;text/html&quot;</span>, <span style="color: #ff0000;">&quot;text/plain&quot;</span> <span style="color: #7a0874; font-weight: bold;">&#41;</span>
    &nbsp;
    <span style="color: #666666; font-style: italic;"># default listening port for IPv6 falls back to the IPv4 port</span>
    include_shell <span style="color: #ff0000;">&quot;/usr/share/lighttpd/use-ipv6.pl &quot;</span> + server.port
    include_shell <span style="color: #ff0000;">&quot;/usr/share/lighttpd/create-mime.assign.pl&quot;</span>
    include_shell <span style="color: #ff0000;">&quot;/usr/share/lighttpd/include-conf-enabled.pl&quot;</span></pre></td></tr></table><p class="theCode" style="display:none;">server.modules = (
    &quot;mod_access&quot;,
    &quot;mod_alias&quot;,
    &quot;mod_compress&quot;,
    &quot;mod_cgi&quot;,
    &quot;mod_redirect&quot;,
    #       &quot;mod_rewrite&quot;,
    )
    
    server.document-root        = &quot;/var/www&quot;
    server.upload-dirs          = ( &quot;/var/cache/lighttpd/uploads&quot; )
    server.errorlog             = &quot;/var/log/lighttpd/error.log&quot;
    server.pid-file             = &quot;/var/run/lighttpd.pid&quot;
    server.username             = &quot;www-data&quot;
    server.groupname            = &quot;www-data&quot;
    server.port                 = 8080
    
    $HTTP[&quot;url&quot;] =~ &quot;/cgi-bin/&quot; {
    cgi.assign = ( &quot;.py&quot; = &quot;/usr/bin/python&quot; )
    }
    
    index-file.names            = ( &quot;index.php&quot;, &quot;index.html&quot;, &quot;index.lighttpd.html&quot; )
    url.access-deny             = ( &quot;~&quot;, &quot;.inc&quot; )
    static-file.exclude-extensions = ( &quot;.php&quot;, &quot;.pl&quot;, &quot;.fcgi&quot; )
    
    compress.cache-dir          = &quot;/var/cache/lighttpd/compress/&quot;
    compress.filetype           = ( &quot;application/javascript&quot;, &quot;text/css&quot;, &quot;text/html&quot;, &quot;text/plain&quot; )
    
    # default listening port for IPv6 falls back to the IPv4 port
    include_shell &quot;/usr/share/lighttpd/use-ipv6.pl &quot; + server.port
    include_shell &quot;/usr/share/lighttpd/create-mime.assign.pl&quot;
    include_shell &quot;/usr/share/lighttpd/include-conf-enabled.pl&quot;</p></div>
    ;i:3;s:3102:
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
    </pre></td><td class="code"><pre class="python" style="font-family:monospace;"><span style="color: #ff7700;font-weight:bold;">import</span> <span style="color: #dc143c;">cgi</span>
    <span style="color: #ff7700;font-weight:bold;">import</span> serial
    <span style="color: #ff7700;font-weight:bold;">import</span> <span style="color: #dc143c;">time</span>
    &nbsp;
    arguments <span style="color: #66cc66;">=</span> <span style="color: #dc143c;">cgi</span>.<span style="color: black;">FieldStorage</span><span style="color: black;">&#40;</span><span style="color: black;">&#41;</span>
    ser<span style="color: #66cc66;">=</span>serial.<span style="color: black;">Serial</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'/dev/ttyACM0'</span><span style="color: #66cc66;">,</span><span style="color: #ff4500;">9600</span><span style="color: black;">&#41;</span>
    <span style="color: #ff7700;font-weight:bold;">if</span> <span style="color: #483d8b;">'status'</span> <span style="color: #ff7700;font-weight:bold;">in</span> arguments:
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'sts'</span><span style="color: black;">&#41;</span>
    <span style="color: #ff7700;font-weight:bold;">print</span><span style="color: black;">&#40;</span>ser.<span style="color: #dc143c;">readline</span><span style="color: black;">&#40;</span><span style="color: black;">&#41;</span><span style="color: black;">&#41;</span>
    <span style="color: #ff7700;font-weight:bold;">else</span>:
    &nbsp;
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span>arguments<span style="color: black;">&#91;</span><span style="color: #483d8b;">'port'</span><span style="color: black;">&#93;</span>.<span style="color: black;">value</span><span style="color: black;">&#41;</span>
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span>arguments<span style="color: black;">&#91;</span><span style="color: #483d8b;">'value'</span><span style="color: black;">&#93;</span>.<span style="color: black;">value</span><span style="color: black;">&#41;</span>
    ser.<span style="color: black;">write</span><span style="color: black;">&#40;</span><span style="color: #483d8b;">'sts'</span><span style="color: black;">&#41;</span>
    <span style="color: #ff7700;font-weight:bold;">print</span><span style="color: black;">&#40;</span>ser.<span style="color: #dc143c;">readline</span><span style="color: black;">&#40;</span><span style="color: black;">&#41;</span><span style="color: black;">&#41;</span></pre></td></tr></table><p class="theCode" style="display:none;">import cgi
    import serial
    import time
    
    arguments = cgi.FieldStorage()
    ser=serial.Serial('/dev/ttyACM0',9600)
    if 'status' in arguments:
    ser.write('sts')
    print(ser.readline())
    else:
    
    ser.write(arguments['port'].value)
    ser.write(arguments['value'].value)
    ser.write('sts')
    print(ser.readline())</p></div>
    ;i:4;s:17439:
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
    24
    25
    26
    27
    28
    29
    30
    31
    32
    33
    34
    35
    36
    37
    38
    39
    40
    41
    42
    43
    44
    45
    46
    47
    48
    49
    50
    51
    52
    53
    54
    55
    56
    57
    58
    59
    60
    61
    62
    63
    64
    65
    66
    67
    68
    69
    70
    71
    72
    73
    74
    75
    76
    77
    78
    79
    80
    81
    82
    83
    84
    85
    86
    87
    88
    89
    90
    </pre></td><td class="code"><pre class="javascript" style="font-family:monospace;"> &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;es&quot;&gt;
    &lt;head&gt;
    &lt;title&gt;Arduino Port Control&lt;/title&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot; &gt;&lt;/script&gt;
    &lt;style type=&quot;text/css&quot;&gt;
    .unknowStatus{background-color:#6c6d6f; width:45px; height:45px;margin:1px; float:left;}
    .disabled {background-color:#932626; width:45px; height:45px;margin:1px; float:left;}
    .enabled {background-color:#36ab36; width:45px; height:45px; margin:1px; float:left;}
    &nbsp;
    &lt;/style&gt;
    &lt;/head&gt;
    &nbsp;
    &lt;body&gt;
    <span style="color: #339933;">&lt;</span>script type<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;text/javascript&quot;</span><span style="color: #339933;">&gt;</span>
    <span style="color: #000066; font-weight: bold;">function</span> successResponse<span style="color: #009900;">&#40;</span>data<span style="color: #339933;">,</span> textStatus<span style="color: #339933;">,</span> jqXHR<span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port13'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #009900;">&#40;</span>data<span style="color: #009900;">&#91;</span><span style="color: #CC0000;">0</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #3366CC;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">:</span><span style="color: #3366CC;">'enabled'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port12'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #009900;">&#40;</span>data<span style="color: #009900;">&#91;</span><span style="color: #CC0000;">1</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #3366CC;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">:</span><span style="color: #3366CC;">'enabled'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port11'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #009900;">&#40;</span>data<span style="color: #009900;">&#91;</span><span style="color: #CC0000;">2</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #3366CC;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">:</span><span style="color: #3366CC;">'enabled'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port10'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #009900;">&#40;</span>data<span style="color: #009900;">&#91;</span><span style="color: #CC0000;">3</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #3366CC;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">:</span><span style="color: #3366CC;">'enabled'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port09'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #009900;">&#40;</span>data<span style="color: #009900;">&#91;</span><span style="color: #CC0000;">4</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">==</span><span style="color: #3366CC;">'0'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">?</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">:</span><span style="color: #3366CC;">'enabled'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
    &nbsp;
    <span style="color: #000066; font-weight: bold;">function</span> errorResponse<span style="color: #009900;">&#40;</span>data<span style="color: #339933;">,</span> textStatus<span style="color: #339933;">,</span> jqXHR<span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port13'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'unknowStatus'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port12'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'unknowStatus'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port11'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'unknowStatus'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port10'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'unknowStatus'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port09'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;class&quot;</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'unknowStatus'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
    &nbsp;
    $<span style="color: #009900;">&#40;</span>document<span style="color: #009900;">&#41;</span>.<span style="color: #660066;">ready</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#update'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
    $.<span style="color: #660066;">ajax</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span>
    url<span style="color: #339933;">:</span>   <span style="color: #3366CC;">'http://192.168.2.5:8080/cgi-bin/arduino.py?port='</span><span style="color: #339933;">+</span>$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#port'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">val</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">+</span><span style="color: #3366CC;">'&amp;value='</span><span style="color: #339933;">+</span>$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'#value'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">val</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
    type<span style="color: #339933;">:</span>  <span style="color: #3366CC;">'get'</span><span style="color: #339933;">,</span>
    success<span style="color: #339933;">:</span>  successResponse<span style="color: #339933;">,</span>
    error<span style="color: #339933;">:</span> errorResponse
    &nbsp;
    <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    &nbsp;
    $.<span style="color: #660066;">ajax</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span>
    url<span style="color: #339933;">:</span>   <span style="color: #3366CC;">'http://192.168.2.5:8080/cgi-bin/arduino.py?status=1'</span><span style="color: #339933;">,</span>
    type<span style="color: #339933;">:</span>  <span style="color: #3366CC;">'get'</span><span style="color: #339933;">,</span>
    success<span style="color: #339933;">:</span> successResponse<span style="color: #339933;">,</span>
    error<span style="color: #339933;">:</span> errorResponse
    <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    &nbsp;
    &nbsp;
    <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #339933;">&lt;/</span>script<span style="color: #339933;">&gt;</span>
    &lt;h1&gt;Port Control&lt;/h1&gt;
    &lt;select id=&quot;port&quot;&gt;
    &lt;option value=&quot;09&quot;&gt;Port 9&lt;/option&gt;
    &lt;option value=&quot;10&quot;&gt;Port 10&lt;/option&gt;
    &lt;option value=&quot;11&quot;&gt;Port 11&lt;/option&gt;
    &lt;option value=&quot;12&quot;&gt;Port 12&lt;/option&gt;
    &lt;option value=&quot;13&quot;&gt;Port 13&lt;/option&gt;
    &lt;/select&gt;
    &lt;select id=&quot;value&quot;&gt;
    &lt;option value=&quot;1&quot;&gt;On&lt;/option&gt;
    &lt;option value=&quot;0&quot;&gt;Off&lt;/option&gt;
    &lt;/select&gt;
    &lt;button id=&quot;update&quot;&gt;Update&lt;/button&gt;
    &lt;h1&gt;Port Status&lt;/h1&gt;
    &lt;table border=&quot;1&quot;&gt;
    &lt;tr&gt;
    &lt;td&gt;Port 13&lt;/td&gt;
    &lt;td&gt;Port 12&lt;/td&gt;
    &lt;td&gt;Port 11&lt;/td&gt;
    &lt;td&gt;Port 10&lt;/td&gt;
    &lt;td&gt;Port 09&lt;/td&gt;
    &nbsp;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;&lt;div id=&quot;port13&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port12&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port11&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port10&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port09&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
    &lt;/body&gt;
    &lt;/html&gt;</pre></td></tr></table><p class="theCode" style="display:none;"> &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;es&quot;&gt;
    &lt;head&gt;
    &lt;title&gt;Arduino Port Control&lt;/title&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js&quot; &gt;&lt;/script&gt;
    &lt;style type=&quot;text/css&quot;&gt;
    .unknowStatus{background-color:#6c6d6f; width:45px; height:45px;margin:1px; float:left;}
    .disabled {background-color:#932626; width:45px; height:45px;margin:1px; float:left;}
    .enabled {background-color:#36ab36; width:45px; height:45px; margin:1px; float:left;}
    
    &lt;/style&gt;
    &lt;/head&gt;
    
    &lt;body&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
    function successResponse(data, textStatus, jqXHR)
    {
    $('#port13').attr(&quot;class&quot;, (data[0]=='0')?'disabled':'enabled');
    $('#port12').attr(&quot;class&quot;, (data[1]=='0')?'disabled':'enabled');
    $('#port11').attr(&quot;class&quot;, (data[2]=='0')?'disabled':'enabled');
    $('#port10').attr(&quot;class&quot;, (data[3]=='0')?'disabled':'enabled');
    $('#port09').attr(&quot;class&quot;, (data[4]=='0')?'disabled':'enabled');
    }
    
    function errorResponse(data, textStatus, jqXHR)
    {
    $('#port13').attr(&quot;class&quot;, 'unknowStatus');
    $('#port12').attr(&quot;class&quot;, 'unknowStatus');
    $('#port11').attr(&quot;class&quot;, 'unknowStatus');
    $('#port10').attr(&quot;class&quot;, 'unknowStatus');
    $('#port09').attr(&quot;class&quot;, 'unknowStatus');
    }
    
    $(document).ready(function()
    {
    $('#update').click(function()
    {
    $.ajax({
    url:   'http://192.168.2.5:8080/cgi-bin/arduino.py?port='+$('#port').val()+'&amp;value='+$('#value').val(),
    type:  'get',
    success:  successResponse,
    error: errorResponse
    
    });
    });
    
    $.ajax({
    url:   'http://192.168.2.5:8080/cgi-bin/arduino.py?status=1',
    type:  'get',
    success: successResponse,
    error: errorResponse
    });
    
    
    });
    &lt;/script&gt;
    &lt;h1&gt;Port Control&lt;/h1&gt;
    &lt;select id=&quot;port&quot;&gt;
    &lt;option value=&quot;09&quot;&gt;Port 9&lt;/option&gt;
    &lt;option value=&quot;10&quot;&gt;Port 10&lt;/option&gt;
    &lt;option value=&quot;11&quot;&gt;Port 11&lt;/option&gt;
    &lt;option value=&quot;12&quot;&gt;Port 12&lt;/option&gt;
    &lt;option value=&quot;13&quot;&gt;Port 13&lt;/option&gt;
    &lt;/select&gt;
    &lt;select id=&quot;value&quot;&gt;
    &lt;option value=&quot;1&quot;&gt;On&lt;/option&gt;
    &lt;option value=&quot;0&quot;&gt;Off&lt;/option&gt;
    &lt;/select&gt;
    &lt;button id=&quot;update&quot;&gt;Update&lt;/button&gt;
    &lt;h1&gt;Port Status&lt;/h1&gt;
    &lt;table border=&quot;1&quot;&gt;
    &lt;tr&gt;
    &lt;td&gt;Port 13&lt;/td&gt;
    &lt;td&gt;Port 12&lt;/td&gt;
    &lt;td&gt;Port 11&lt;/td&gt;
    &lt;td&gt;Port 10&lt;/td&gt;
    &lt;td&gt;Port 09&lt;/td&gt;
    
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;&lt;div id=&quot;port13&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port12&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port11&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port10&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;td&gt;&lt;div id=&quot;port09&quot; class=&quot;unknowStatus&quot;&gt;&lt;/div&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
    &lt;/body&gt;
    &lt;/html&gt;</p></div>
    ;i:5;s:519:
    <div class="wp_syntax" style="position:relative;"><table><tr><td class="code"><pre class="bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">chmod</span> <span style="color: #000000;">777</span> <span style="color: #000000; font-weight: bold;">/</span>dev<span style="color: #000000; font-weight: bold;">/</span>ttyACM0</pre></td></tr></table><p class="theCode" style="display:none;">sudo chmod 777 /dev/ttyACM0</p></div>
    ";}
image: /wp-content/uploads/2013/08/arduino.jpg
categories:
  - Blog
tags:
  - arduino
  - Control
  - Domótica
  - Electrónica
  - Internet
  - programación
  - raspberry pi
---
<p style="text-align: justify;">
  En la última entrada comenté <a title="Comunicación entre Raspberry PI y Arduino por USB" href="http://rdiaz.es/blog/comunicacion-entre-raspberry-pi-y-arduino-por-usb/">como llevar a cabo la conexión entre el Raspberry Pi y Arduino.</a> Una vez completada la conexión entre ambos dispositivos a través de USB, en esta entrada vamos a ver como podemos acceder a nuestro Arduino a través de una página web alojada en nuestro Raspberry Pi.
</p>

<p style="text-align: justify;">
  Para comenzar lo primero que tenemos que hacer es instalar un servidor web en nuestro Raspberry Pi. En mi caso he instalado lightttpd, para ellos simplemente ejecutamos el siguiente comando:
</p>

<pre lang="bash">sudo apt-get -y install lighttpd</pre>

<p style="text-align: justify;">
  Una vez instalado el servidor web, este se iniciará y accediendo a la ip de nuestro Raspberry, obtendremos una web como la siguiente:
</p>

<p style="text-align: justify;">
  <a href="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png"><img class="aligncenter size-medium wp-image-215" alt="lightttpd" src="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png?resize=300%2C165" width="300" height="165" srcset="https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png?resize=300%2C165 300w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png?resize=1024%2C566 1024w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png?resize=540%2C297 540w, https://i2.wp.com/rdiaz.es/wp-content/uploads/2013/08/lightttpd.png?w=1242 1242w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
</p>

<p style="text-align: justify;">
  Ahora vamos a ver como podemos hacer que nuestro servidor web pueda ejecutar archivos python. Para ello tenemos que habilitar el soporte Cgi-bin en nuestro servidor web. Para ello, tenemos que editar el siguiente archivo: /etc/lighttpd/lighttpd.conf. Dentro del mismo añadimos las líneas resaltadas (El resto del archivo en tu caso puede ser diferente):
</p>

<pre lang="bash" line="1" highlight="5,18,19,20">server.modules = (
        "mod_access",
        "mod_alias",
        "mod_compress",
        "mod_cgi",
        "mod_redirect",
#       "mod_rewrite",
)

server.document-root        = "/var/www"
server.upload-dirs          = ( "/var/cache/lighttpd/uploads" )
server.errorlog             = "/var/log/lighttpd/error.log"
server.pid-file             = "/var/run/lighttpd.pid"
server.username             = "www-data"
server.groupname            = "www-data"
server.port                 = 8080

$HTTP["url"] =~ "/cgi-bin/" {
      cgi.assign = ( ".py" = "/usr/bin/python" )
}

index-file.names            = ( "index.php", "index.html", "index.lighttpd.html" )
url.access-deny             = ( "~", ".inc" )
static-file.exclude-extensions = ( ".php", ".pl", ".fcgi" )

compress.cache-dir          = "/var/cache/lighttpd/compress/"
compress.filetype           = ( "application/javascript", "text/css", "text/html", "text/plain" )

# default listening port for IPv6 falls back to the IPv4 port
include_shell "/usr/share/lighttpd/use-ipv6.pl " + server.port
include_shell "/usr/share/lighttpd/create-mime.assign.pl"
include_shell "/usr/share/lighttpd/include-conf-enabled.pl"</pre>

<p style="text-align: justify;">
  Básicamente lo que hacemos es añadir el modulo de cgi (línea 5) y luego indicamos en que carpeta están disponibles los scripts del sistema que se pueden ejecutar desde la red. En mi caso es una carpeta que se llama cgi-bin dentro de la carpeta donde van alojados los archivos html (por defecto /var/www/).
</p>

<p style="text-align: justify;">
  Llegados a este punto ya tienes todo configurado para empezar a controlar tu Arduino a través de internet. Solo tenemos que crearnos una página web y los correspondientes scripts en python.
</p>

<p style="text-align: justify;">
  En el Arduino he cargado un programa muy similar al que usé en el ejemplo anterior, con la diferencia que de cada vez que se escribe en un puerto, se devuelve una cadena codificada de unos y ceros con el estado resultante de los puertos después de haber cambiado el estado. Este es el enlace al archivo.
</p>

<p style="text-align: justify;">
  El script en python que controla todo el sistema es el siguiente:
</p>

<pre lang="python" line="1">import cgi
import serial
import time

arguments = cgi.FieldStorage()
ser=serial.Serial('/dev/ttyACM0',9600)
if 'status' in arguments:
	ser.write('sts')
	print(ser.readline())
else:

	ser.write(arguments['port'].value)
	ser.write(arguments['value'].value)
	ser.write('sts')
	print(ser.readline())</pre>

<p style="text-align: justify;">
  El script es bastante sencillo, simplemente con la librería CGI leemos los diferentes parámetros de la URL y los enviamos vía USB (puerto serie) al arduino. Si el comando es status, simplemente pedimos al arduino que nos informe sobre el estado actual de los puertos sin llevar a cabo ningún cambio.
</p>

<p style="text-align: justify;">
  Finalmente solo tenemos que crearnos una web donde mostrar toda la información y poder actuar sobre los puertos. En mi caso me he creado la siguiente web:
</p>

[<img class="aligncenter size-full wp-image-220" alt="ArduinoWeb" src="https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/ArduinoWeb1.png?resize=292%2C278" width="292" height="278" data-recalc-dims="1" />](https://i1.wp.com/rdiaz.es/wp-content/uploads/2013/08/ArduinoWeb1.png)

<p style="text-align: justify;">
  El fuente de esta página se muestra a continuación:
</p>

<pre lang="javascript" line="1"  escaped="true">




	
	

<h1>
  Port Control
</h1>
	

<select id="port">
		&lt;option value="09">Port 9&lt;/option>
  		&lt;option value="10">Port 10&lt;/option>
  		&lt;option value="11">Port 11&lt;/option>
  		&lt;option value="12">Port 12&lt;/option>
  		&lt;option value="13">Port 13&lt;/option>
  	</select>
  	<select id="value">
		&lt;option value="1">On&lt;/option>
  		&lt;option value="0">Off&lt;/option>
  	</select>
  	<button id="update">Update</button>
  	

<h1>
  Port Status
</h1>
  	

<table border="1">
  <tr>
    <td>
      Port 13
    </td>
    			
    
    <td>
      Port 12
    </td>
    			
    
    <td>
      Port 11
    </td>
    			
    
    <td>
      Port 10
    </td>
    			
    
    <td>
      Port 09
    </td>
    			
    		
  </tr>
  		
  
  <tr>
    <td>
      <div id="port13" class="unknowStatus">
        
      </div>
    </td>
    			
    
    <td>
      <div id="port12" class="unknowStatus">
        
      </div>
    </td>
    			
    
    <td>
      <div id="port11" class="unknowStatus">
        
      </div>
    </td>
    			
    
    <td>
      <div id="port10" class="unknowStatus">
        
      </div>
    </td>
    			
    
    <td>
      <div id="port09" class="unknowStatus">
        
      </div>
    </td>
    		
  </tr>	
  	
</table>


</pre>

<p style="text-align: justify;">
  El código de la página es bastante simple, simplemente por medio de jQuery, hacemos una llamada AJAX al script python alojado dentro de la carpeta cgi-bin indicándole los parámetros que queremos cambiar. Una vez obtenemos la respuesta simplemente actualizamos los colores de los diferentes divs gracias a jQuery utilizando la información proporcionada en la respuesta del script python. De esta forma tenemos una realimentación real del estado del puerto de nuestro Arduino una vez hemos cambiado los valores.
</p>

<p style="text-align: justify;">
  Antes de terminar la entrada simplemente comentar algunos problemas con los que me he encontrado:
</p>

<p style="text-align: justify;">
  1) Cuando ya tenía el script python hecho, al ejecutar el script desde la consola del raspberry funcionaba todo correctamente pero al intentar ejecutarlo desde la web, se ejecutaba pero no cambiaba el estado del puerto. Esto se debe porque el script ejecutado desde cgi-bin no tiene permiso de escritura sobre el dispositivo serie del arduino. La solución más rápida y chapucera fue simplemente darle permisos de escritura/lectura y ejecución a todo el mundo sobre el dispositivo serie por medio del siguiente comando:
</p>

<pre lang="bash">sudo chmod 777 /dev/ttyACM0</pre>

<p style="text-align: justify;">
  2) Cuando ya podía escribir sobre el puerto serie desde la web, el otro problema que me apareció fue que cada vez que escribía en el puerto serie, se reiniciaba el arduino. <a href="http://playground.arduino.cc/Main/DisablingAutoResetOnSerialConnection" target="_blank">Para solucionar esto siguiendo este hilo</a>. Simplemente tuve que añadir un condensador (en mi caso lo que tenía a mano 47uF) entre el pin reset del arduino y GND. De esta forma se evita que se reinicie el arduino cada vez que se ejecuta el script CGI-BIN.
</p>

<p style="text-align: justify;">
  con esto ya tenemos a nuestro Arduino accesible desde internet por medio de una web de control alojada en nuestro Raspberry PI abriendo una nueva puerta al control de nuestros dispositivos domóticos o aplicaciones de control a través de internet.
</p>