var store = {};store['es'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            this.use(lunr.es);

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"ADVERTENCIAS", 
body:" advertencias " });
this.add({id:2, 
title:"ADVERTENCIAS Y MEDIDAS DE SEGURIDAD IMPORTANTES", 
body:" advertencias y medidas de seguridad importantes lea atentamente todas las instrucciones antes utilizar esta unidad para evitar lesiones personales o daños la unidad. para preguntas adicionales, comuníquese su representante ventas personal fábrica. guarde referencias futuras. riesgo descarga eléctrica si se usa o manipula incorrectamente. equipo energizado: choque eléctrico y peligro explosión. peligro no sumergir en agua u otros líquidos. mantener ambiente seco. el dispositivo es apto para salpicaduras y resistente la lluvia. no  opere en ambientes inflamables o explosivos. no opere en clima inclemente. la unidad puede sufrir daños graves durante los huracanes. retire paneles solares y almacénelos acuerdo las instrucciones. no opere si la unidad está dañada alguna manera, incluyendo: elementos electrónicos suelto o los cables carga están deshilachados y\/o expuestos. no sobrecargue el sistema conectando aparatos que hayan sido aprobados para funcionamiento nominal. no coloque objetos extraños dentro las tomas corriente. no desarmar. no hay partes reparables por el usuario. garantía anulada si sello se rompe. contacte al fabricante para todas las reparaciones. precauciÓn no utilizar para operar ningún equipo médico soporte vital. consulte su médico antes usar dispositivos cpap u otros equipos médicos qui sean soporte vital. no utilice cargas superiores 1500w para inversol 1500 y 1500+ o 3000w 3000 3000+ por riesgo daño al inversor. no se recomienda  su uso por debajo 32° f (0° c) o encima 140° (60° c). coloque el módulo control fuera la luz solar directa para evitar sobrecalentamiento. lea atentamente este manual del usuario antes operar su generador inversol. " });
this.add({id:3, 
title:"INTRODUCCIÓN", 
body:" introducciÓn " });
this.add({id:4, 
title:"¡Bienvenidos!", 
body:" ¡bienvenidos! gracias por elegir inversol como su generador solar portátil y costo eficiente. usted ha elegido una marca diseñada la más alta consideración calidad, seguridad rendimiento técnico. nuestras unidades incluyen componentes grado industrial, lo último en técnicas diseño producción. esperamos que disfrute conveniencia confiabilidad nueva unidad. los clave cada modelo incluyen: paneles solares módulo control banco baterías. según el seleccionado, unidad suplirá las necesidades básicas energía; refrigerador, luces led, abanicos,  computadoras portátiles televisores. " });
this.add({id:5, 
title:"GENERADORES SOLARES VS. GENERADORES DE GAS", 
body:" generadores solares vs. de gas si bien ambas tecnologías usan inversores para transformar la energía y hacer funcionar los electrodomésticos, generadores gasolina pueden ser clasificados una carga específica, 1500 vatios, por ejemplo, deben proporcionar enseres esa cantidad nominal. los solares, el contrario, proporcionan potencia hast la  nominel del inversor. esto significa que su unidad puede menos energía que capacidad las horas reales disponibles están determinadas paneles solares módulos batería conectados. " });
this.add({id:6, 
title:"LISTA DE COMPONENTES", 
body:" lista de componentes " });
this.add({id:7, 
title:"CONOZCA SU MODELO INVERSOL", 
body:" conozca su modelo inversol lista componentes modelo: 1500 1500+ 3000 3000+ paneles solares incluidos (capacidad máxima panel) 1 (320 w *) 390 w 1 (320 w *) 780 w 2 (640 w *) 1560 w 2 (640 w *) 2080 w inversor energia 1 1 2 2 controlador solar mppt 2 2 4 4 salidas gfci 110 vac 2 2 4 4 capacidad batería 1200 wh 2400 wh 2400 wh 4800 wh capacidad utilizable 1125 wh 1200 wh 1200 wh 2400 wh cables 1 x cable conexión al panel 1 x cable conexión al panel 1 x cable conexión al panel 1 x cable conexión al panel 1 x cable conexión la batería capacidad sobretensión 3000 w max 3000 w max 6000 w max 6000 w max carga continua 1500 w 1500 w 3000 w 3000 w # máx. módulos batería 0 0 4 6 # máx. paneles solares 0 1 2 3 * voltaje nominal puede variar; sujeto a cambio sin previo aviso. " });
this.add({id:8, 
title:"Especificaciones técnicas", 
body:" especificaciones técnicas especificaciones por modelo 1500 1500 3000 3000+ inversor salida ca ca 120 v, 60 hz, 12,5 a continuo, 24 máx. potencia activa nominal 1500w potencia aparente nominal 1500 va ca 120 v, 60 hz, 12,5 a continuo, 24 máx. potencia activa nominal 1500w potencia aparente nominal 1500 va ca 120v, 60hz, 25a cont, 54a max potencia activa nominal 3000w potencia aparente nominal 3000 va ca 120v, 60hz, 25a cont, 54a max potencia activa nominal 3000w potencia aparente nominal 3000 va clasificación interna del cargador ca entrada ca salida carga cd 120 vca, 60 hz, 0.35 a máx. 12 vcd, 3.5 a nominal 120 vca, 60 hz, 0.7 a máx. 24 vcd, 3.6 a nominal 120 vca, 60 hz, 0.7 a máx. 24 vcd, 3.6 a nominal 120 vca, 60 hz, 0.7 a máx. 24 v cc, 3.6 a nominal clasificación del cargador solar entrada carga cd potencia carga cd 150 vcd máx., 37.5acd corriente máx corto circuito 390w máx 150 vcd máx., 37.5 cd corriente máx corto circuito 780w máx 150 vcd máx., 37.5 cc corriente máx corto circuito 1,560w máx 150 vcd máx., 50 cc corriente máx corto circuito 2.080w máx especificaciones la batería tipo batería 1 x 12v agm ácido plomo sellado, ciclo profundo derramable* 2 x 12v agm ácido plomo sellado, ciclo profundo derramable* 2 x 12v agm ácido plomo sellado, ciclo profundo derramable* 2 x 24 v lifepo 4 * Ácido plomo sellado agm ciclo profundo derramable nota: las especificaciones estÁn sujetas a cambios sin previo aviso " });
this.add({id:9, 
title:"VISTA FRONTAL SERIE 1500", 
body:" vista frontal serie 1500 " });
this.add({id:10, 
title:"VISTA TRASERA SERIE 1500", 
body:" vista trasera serie 1500 " });
this.add({id:11, 
title:"VISTA FRONTAL SERIE 3000", 
body:" vista frontal serie 3000 " });
this.add({id:12, 
title:"VISTA TRASERA SERIE 3000", 
body:" vista trasera serie 3000 " });
this.add({id:13, 
title:"INSTALACIÓN", 
body:" instalaciÓn la instalación inicial su generador inversol y breve adiestramiento sobre cómo operar la unidad serán realizadas por técnico calificado. referirse guía instalación rápida  incluida para obtener más información relacionada la configuración. las siguientes instrucciones están destinadas ayudar en el almacenamiento y la reinstalación, si fuera necesario. instalaciÓn del generador solar inversol: coloque los paneles solares en lugar que reciba la luz solar más directa durante el transcurso del día. los deben ser asegurados para evitar daños y\/o lesiones personales. si usa soporte panel (opcional), asegúrese que el kit tierra sea instalado apropiadamente la varilla tierra. conecte el cable del panel solar mc4 los conectores. si solo se utilizará panel, conéctelo conectores “m1” y “f1”. pase el cable la ubicación deseada del generador, preferiblemente en interior o área sombra constante, y conéctelo al puerto apropiado. *opcional* los módulos batería adicionales (adquiridos por separado) deben estar menos 3 pies (1 m) del generador. el acceso los conectores debe tener obstáculos. conecte el generador módulo usando cable provisto.\n*no aplica al modelo 1500* en la pantalla del controlador solar, verifique que el sistema esté cargando las baterías. espere 10 segundos para que el sistema calibre su configuración antes enchufar cualquier enser o dispositivo. verifique la carga las baterías antes usar energía del sistema. " });
this.add({id:14, 
title:"DESMONTAJE Y ALMACENAMIENTO", 
body:" desmontaje y almacenamiento las unidades están diseñadas para ser portátiles y fáciles almacenar en casos mal tiempo o cuando se usan. almacenamiento de su generador solar inversol: apague y desconecte todos los aparatos conectados la unidad. coloque el controlador potencia en la posición off. usando la herramienta provista (figura a), desconecte el cable que va al (los) panel(es) solar(es) y luego desde módulo control. esto se puede hacer en cualquier orden. desconecte los módulos batería adicionales (si están conectados). vuelva colocar las tapas en los conectores módulos. refiérase la sección mantenimiento batería. se recomienda que los paneles se almacenen en lugar seguro para minimizar la posibilidad daños mientras estén uso. los cables también deben enrollarse y almacenarse en lugar seguro hasta que se necesiten. figura a " });
this.add({id:15, 
title:"EXPANSIÓN MODULAR DE UNIDADES", 
body:" expansiÓn modular de unidades " });
this.add({id:16, 
title:"AUMENTAR LA CAPACIDAD DE LA UNIDAD", 
body:" aumentar la capacidad de unidad serie 1500 la serie 1500 es modular. no se pueden agregar módulos batería estas unidades. sin embargo, el 1500+ tiene la capacidad manejar segundo panel solar. serie 3000 la serie 3000 es modular, lo que significa son diseñados para expandir su sistema después la compra. se pueden agregar paneles y\/o baterías añadir potencia. instalaciÓn de baterÍas adicionales a la serie 3000: los módulos batería se pueden conectar entre sí para extender la capacidad general. coloque los módulos la batería dentro radio 3 pies (1 m) unidad. conecte el primer módulo batería la unidad través del cable suministrado. conecte cualquier módulo batería adicional en el primer conectado utilizando cable la y designados puertos conexión. estarán vinculados entre sí.  consulte la sección \"ampliación serie 3000\". instalaciÓn de paneles solares adicionales: se pueden agregar paneles solares para aumentar la cantidad energía solar capturada. la adicionales depende controladores instalados. cada controlador puede manejar dos 320w (72 celdas). el enchufe circular en el cable conexión del panel se conecta la unidad. en otro extremo hay juego +\/- conectores para los 1500+ o dos juegos serie 3000; estos coinciden paneles solares. coloque el (los) panel(es) solar(es) adicional(es) muyt cerca del panel existente modo que quede bajo la sombra objetos su alrededor. los paneles se conectarán por parejas y luego al cable conexión del panel. cada conjunto conectores +\/- en el puede soportar 2 paneles. una vez que los conectores del panel estén conectados cable, conecte el cable conexión al puerto solar (página 8, n.4) en la parte posterior unidad. divisores cable opcionales disponibles para su compra. " });
this.add({id:17, 
title:"CONEXIÓN DE PANELES ADICIONALES", 
body:" conexiÓn de paneles adicionales conexiÓn apropiada de los paneles solares *el diagrama muestra como conectar los paneles en serie. panel 1 y panel 2 componen grupo; 3 4 segundo grupo. un tercer puede añadirse la serie cada grupo solo para el modelo 3000+. " });
this.add({id:18, 
title:"EXPANDIENDO EL 1500+", 
body:" expandiendo el 1500+ diagrama para ilustrar la expansiÓn estos dos diagramas son simples ilustraciones cómo expandir las unidades inversol. refiérase la sección \"conexión paneles adicionales\" para ver los puntos conexión +\/- y como enlazar al capacidad unidad. **recordatorio: el modelo 1500 no se puede expandir. " });
this.add({id:19, 
title:"EXPANDIENDO LA SERIE 3000", 
body:" expandiendo la serie 3000 diagrama para ilustrar la expansiÓn " });
this.add({id:20, 
title:"OPERACIÓN DEL SISTEMA", 
body:" operaciÓn del sistema " });
this.add({id:21, 
title:"CONTROLADOR DE POTENCIA SERIE 1500", 
body:" controlador de potencia serie 1500 la unidad está lista para usarse una vez que el panel solar esté instalado y conectado al generador. use el controlador potencia (figura b) para controlar la salida unidad. el interruptor giratorio alterna entre apagado y encendido. ***para que los paneles solares puedan cargar las baterías, la unidad debe estar en modo encendido. las baterías se cargarán apagado.*** modo encendido para usar el generador, encienda interruptor. si el usuario intenta exceder límite potencia, interruptor circuito se disparará (figura c, 1) y deberá reiniciarse. dispara, abra módulo control gire controlador potencia apagado. luego, vuelva colocar indicador amarillo en su lugar. se escuchará clic cuando reincie. modo auxiliar cuando la unidad se almacene por largos períodos tiempo, y esté conectada ningún panel solar, es altamente recomendado usar el mantenedor batería auxiliar. para hacer esto, gire controlador alimentación al modo apagado luego, simplemente conecte cable ca del módulo una toma que funcione. el auxiliar mantendrá las baterías completamente cargadas en preparación para próxima vez sean necesarias. " });
this.add({id:22, 
title:"1500 PANEL DE CONTROL", 
body:" 1500 panel de control " });
this.add({id:23, 
title:"CONTROLADOR DE POTENCIA SERIE 3000", 
body:" controlador de potencia serie 3000 la unidad está lista para usarse una vez el panel solar instalado y conectado al generador. la salida potencia la unidad se puede controlar el controlador (figura d). el interruptor giratorio alterna entre los dos modos operacionales unidad. gire dentro del módulo control hacia modo ahorro o impulso. ***para que los paneles solares puedan cargar las baterías, la unidad debe estar en modo ahorro o impulso. las baterías cargan apagado.*** modo ahorro el modo ahorro (posición 1 en el interruptor giratorio) limita consumo energía. operar la unidad extiende tiempo funcionamiento las baterías, lo cual es ideal para usar cuando clima pronostica cielos nublados. se recomienda este asegurar preservación duración batería uso durante noche (consulte sección \"uso y tiempos ejecución\"). si el usuario intenta exceder límite potencia, interruptor 1 se disparará (figura e) y deberá reiniciarse. dispara, abra módulo control gire controlador potencia la posición apagado. a continuación, vuelva colocar indicador amarillo en su lugar; producirá clic cuando restablezca interruptor. modo impulso el modo impulso (posición 2 en el interruptor giratorio) permite uso la capacidad total del inversor. sin embargo, operar unidad disminuye tiempo ejecución general las baterías (ver sección \"uso y tiempos ejecución\"). si el usuario excede límite potencia, interruptor 2 se disparará (figura d) y deberá reiniciarse. este dispara, entonces la cantidad energía utilizada supera capacidad del inversor. desconecte todos los electrodomésticos, luego gire botón control apagado. para restablecer automático, presione indicador amarillo hasta que encaje en su lugar. modo auxiliar cuando la unidad se almacene por largos períodos tiempo, y esté conectada ningún panel solar, es altamente recomendado usar el mantenedor batería auxiliar. para hacer esto, gire controlador alimentación al modo apagado luego simplemente conecte cable ca del módulo una toma que funcione. el auxiliar mantendrá las baterías completamente cargadas en preparación para próxima vez sean necesarias. " });
this.add({id:24, 
title:"3000 PANEL DE CONTROL", 
body:" 3000 panel de control " });
this.add({id:25, 
title:"PANTALLA DEL CONTROLADOR SOLAR", 
body:" pantalla del controlador solar las unidades inversol vienen controladores solares incorporados y una pantalla mt50 fácil usar para ver el estado del sistema. los usuarios pueden recorrer las diferentes pantallas. la controlador mostrará la salida actual panel(es), carga baterías, energía total capturada día mes, otra información diversa " });
this.add({id:26, 
title:"PANTALLA DE MONITOREO", 
body:" pantalla de monitoreo la pantalla monitorización del controlador solar permite al usuario descifrar el estado la unidad través iconos. " });
this.add({id:27, 
title:"MONITOREO EN TIEMPO REAL", 
body:" monitoreo en tiempo real hay 14 páginas que los usuarios pueden ver para repasar la operación sistema. utilice las flechas pantalla del controlador solar circular través páginas. " });
this.add({id:28, 
title:"CÁLCULO DE LA CARGA DEL DISPOSITIVO", 
body:" cÁlculo de la carga del dispositivo " });
this.add({id:29, 
title:"CÁLCULO DE LA CARGA DEL DISPOSITIVO", 
body:" cÁlculo de la carga del dispositivo cÓmo calcular quÉ enseres utilizar " });
this.add({id:30, 
title:"COMPARANDO EJEMPLOS DE CARGAS", 
body:" comparando ejemplos de cargas ejemplo de pareo enseres los modelos inversol son recomendados para utilizarse ciertos productos o cargas (si requieren más corriente la que unidad puede proveer). este límite aplica al número total dispositivos que se pueden conectar. la serie 3000 ofrece el modo ahorro\/impulso. *este tabla ilustra el número estimado horas que funcionará la unidad una batería cargada 100%, antes se agote completamente si prede recargar. " });
this.add({id:31, 
title:"TIEMPO DE EJECUCIÓN PROMEDIO", 
body:" tiempo de ejecuciÓn promedio ¿cÓmo combinar enseres afecta el tiempo de ejecuciÓn? la siguiente tabla ilustra combinaciones comunes y cómo el pareo impactará tiempo ejecución estimado cada unidad estándar. las horas están basadas en una carga batería 100% sin añadirle otra cargo adicional  (por ejemplo, durante la noche o porque haya varios días nublados).* *valores estimados solamente; tiempos pueden variar. " });
this.add({id:32, 
title:"MANTENIMIENTO DE BATERÍA", 
body:" mantenimiento de baterÍa su dispositivo tiene una batería interna, extraíble y recargable. no intente quitar la batería, ya que puede dañar el dispositivo. la batería cargarse y descargar más 500 veces, pero eventualmente necesitará ser reemplazada. en este caso, póngase en contacto fábrica para obtener servicio. mantenimiento de carga se incluye cargador\/mantenedor batería. están diseñados para cargar baterías sobre enchufe ca y\/o suministrar una pequeña hilo cantidfad electricidad las mantenerlas completamente cargadas. al usar mantenedor, podrá extender la vida sus baterías; dependiendo del uso, correctamente conservadas pueden durar más 5 años. recomendaciones para el almacenamiento a largo plazo una batería plomo sellada puede almacenarse hasta 2 años sin uso. durante ese período, es vital verificar el voltaje y cárgala cuando baje al 23v. la carga baja aumenta la posibilidad sulfatación. mejor temperatura para almacenamiento 77° f (25° c). permitida oscila entre –4° 122° (–20° c 50° fin de vida \/ reciclaje devuelva siempre sus productos electrónicos, baterías y materiales embalaje usados los puntos recogida específicos. las baterías deben colocarse en la basura. no desmonte la unidad.   la garantía se anulará si la cubierta abre por una persona autorizada. para apoyo técnico, contacte fábrica. " });
this.add({id:33, 
title:"SOLUCIÓN DE PROBLEMAS", 
body:" soluciÓn de problemas soluciÓn a posibles problemas sÍntoma posible causa posible soluciÓn no hay corriente no hay salida energía pantalla controlador solar apagada unidad apagada gire el controlador potencia la posición ahorro sin energía potencia pantalla controlado solar encendida disparó el interruptor los interruptores se dispararán como resultado consumo excesivo energía. considere girar el botón hacia la posición impulso o desconecte enseres alto consumo antes reinciar interruptor. problemas de carga pantalla controlador solar muestra voltaje bajo\/corriente procedente la matriz fv baja (\"0.0a, 0.0v\")\nrecepción radiación solar. asegúrese que los paneles solares están conectados y hay obstrucciones para reciban la luz del sol. verifique superficie está limpia. " });
this.add({id:34, 
title:"SERVICIO AL CLIENTE Y APOYO TÉCNICO", 
body:" servicio al cliente y apoyo tÉcnico garantÍa para el período garantía que se detalla continuación, y comenzando registro exitoso la unidad, inversol garantiza su generador estará libre defectos material mano obra según especifica en tabla abajo incluida. inversol, discreción, reparará o reemplazará cualquier parte que, una vaz evaluada, inspeccionada probada por encuentre defectuosa. la garantía cubre arañazos, decoloración debido al uso, alteraciones, incendios e inundaciones, mal uso y falta seguimiento las instrucciones cuidado mantenimiento. garantía (años) 2 5 garantía incluye piezas y labor piezas limitadas solamente apoyo tÉcnico para informar problema, contace el servicio atención al cliente inversol. resolver problemas manera eficiente, abrir una solicitud apoyo técnico, se le asignará y proporcionará número caso. conserve use este caso para facilitar futuras comunicaciones nosotros sobre asunto. nuestros ingenieros técnico altamente capacitados están disponibles durante horas laorables. polÍtica de devoluciÓn\/cambio si tiene algún problema su unidad, comuníquese el servicio al cliente. si, después hablar representante servicio, se considera que la unidad funciona o mal, una autorización devolución materiales (rma) será emitida. el producto debe devolverse inversol dentro los 14 días hábiles partir la fecha emisión rma para recibir una unidad reemplazo. la reemplazo puede ser nueva o reacondicionada, y el diseño comparable. estará sujeta al resto del período garantía. " });
this.add({id:35, 
title:"inverSOL", 
body:" inversol ventas, servicio y manufactura: 1 ave. ponce leon, esq. georgetti urb. billy suarez, caguas, puerto rico 00725 ingeniería: 11 centre park, rochester, ny 14614 internet: inversolpr.com tienda en internet: https:\/\/inversolpr.com\/shop servicio al cliente: 1.888.803.2202 facebook.com\/inversolpr twitter.com\/inversolpr " });
this.add({id:36, 
title:"[en] Thank You", 
body:" [en] thank you en inversol, llc, estamos comprometidos el bienestar nuestros clientes y, mediante la utilización formas renovables energía. fomentamos conservación recursos naturales. gracias por elegir generadores solares portátiles como su solución energía respaldo emergencia. " });

        store['es'][1]= {
        'title': "ADVERTENCIAS",
        'href': 'UUID-0dbb71a8-5549-90ce-f0e1-a0f73d401f87.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ ADVERTENCIAS"
                , 'snippet': ''
            
        };
        
        

        store['es'][2]= {
        'title': "ADVERTENCIAS Y MEDIDAS DE SEGURIDAD IMPORTANTES",
        'href': 'UUID-df047601-129f-c424-e413-622374699079.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ ADVERTENCIAS \/ ADVERTENCIAS Y MEDIDAS DE SEGURIDAD IMPORTANTES"
                , 'snippet': ''
            
        };
        
        

        store['es'][3]= {
        'title': "INTRODUCCIÓN",
        'href': 'UUID-de9253d1-f7e8-7b41-e79a-f75854891a8e.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN"
                , 'snippet': ''
            
        };
        
        

        store['es'][4]= {
        'title': "¡Bienvenidos!",
        'href': 'UUID-903e5a5c-196e-f52f-7702-587bc5656790.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ ¡Bienvenidos!"
                , 'snippet': ''
            
        };
        
        

        store['es'][5]= {
        'title': "GENERADORES SOLARES VS. GENERADORES DE GAS",
        'href': 'UUID-bfa7a5ca-3b76-e699-4191-12758d13c07b.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ GENERADORES SOLARES VS. GENERADORES DE GAS"
                , 'snippet': ''
            
        };
        
        

        store['es'][6]= {
        'title': "LISTA DE COMPONENTES",
        'href': 'UUID-a2720a0d-d2ac-41cc-def3-03ddca7720ed.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ LISTA DE COMPONENTES"
                , 'snippet': ''
            
        };
        
        

        store['es'][7]= {
        'title': "CONOZCA SU MODELO INVERSOL",
        'href': 'UUID-4366caf0-7a74-52f7-2e1c-c06e164d7d46.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ CONOZCA SU MODELO INVERSOL"
                , 'snippet': ''
            
        };
        
        

        store['es'][8]= {
        'title': "Especificaciones técnicas",
        'href': 'UUID-7ced57ad-0d10-2cd0-95f7-3ec6e90f5b75.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ Especificaciones técnicas"
                , 'snippet': ''
            
        };
        
        

        store['es'][9]= {
        'title': "VISTA FRONTAL SERIE 1500",
        'href': 'UUID-27187777-ffd1-4dbd-b44c-b8d44bddd3e6.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ VISTA FRONTAL SERIE 1500"
                , 'snippet': ''
            
        };
        
        

        store['es'][10]= {
        'title': "VISTA TRASERA SERIE 1500",
        'href': 'UUID-3a440793-1f17-de53-5144-e49458ec57c6.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ VISTA TRASERA SERIE 1500"
                , 'snippet': ''
            
        };
        
        

        store['es'][11]= {
        'title': "VISTA FRONTAL SERIE 3000",
        'href': 'UUID-fc836c3f-f844-e582-dfa7-04aef501a752.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ VISTA FRONTAL SERIE 3000"
                , 'snippet': ''
            
        };
        
        

        store['es'][12]= {
        'title': "VISTA TRASERA SERIE 3000",
        'href': 'UUID-b56b5b76-8488-2480-47ef-091230c16b36.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ VISTA TRASERA SERIE 3000"
                , 'snippet': ''
            
        };
        
        

        store['es'][13]= {
        'title': "INSTALACIÓN",
        'href': 'UUID-03c69541-3244-b5d7-0f2c-3119eebcdc16.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ INSTALACIÓN"
                , 'snippet': ''
            
        };
        
        

        store['es'][14]= {
        'title': "DESMONTAJE Y ALMACENAMIENTO",
        'href': 'UUID-72010668-af2a-7b35-0a56-67a2b10f4b68.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ INTRODUCCIÓN \/ DESMONTAJE Y ALMACENAMIENTO"
                , 'snippet': ''
            
        };
        
        

        store['es'][15]= {
        'title': "EXPANSIÓN MODULAR DE UNIDADES",
        'href': 'UUID-57f8823f-f82a-afe7-a16c-c337158c0bf8.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ EXPANSIÓN MODULAR DE UNIDADES"
                , 'snippet': ''
            
        };
        
        

        store['es'][16]= {
        'title': "AUMENTAR LA CAPACIDAD DE LA UNIDAD",
        'href': 'UUID-4898f226-aecf-f020-12ed-18c54e88463a.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ EXPANSIÓN MODULAR DE UNIDADES \/ AUMENTAR LA CAPACIDAD DE LA UNIDAD"
                , 'snippet': ''
            
        };
        
        

        store['es'][17]= {
        'title': "CONEXIÓN DE PANELES ADICIONALES",
        'href': 'UUID-0910a3ed-7eac-7174-aea2-82cf419ced28.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ EXPANSIÓN MODULAR DE UNIDADES \/ CONEXIÓN DE PANELES ADICIONALES"
                , 'snippet': ''
            
        };
        
        

        store['es'][18]= {
        'title': "EXPANDIENDO EL 1500+",
        'href': 'UUID-512647fe-08a5-40c7-6cb2-a943734f3850.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ EXPANSIÓN MODULAR DE UNIDADES \/ EXPANDIENDO EL 1500+"
                , 'snippet': ''
            
        };
        
        

        store['es'][19]= {
        'title': "EXPANDIENDO LA SERIE 3000",
        'href': 'UUID-b35a8412-b9ab-847b-d5cf-6a0a3cc221b5.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ EXPANSIÓN MODULAR DE UNIDADES \/ EXPANDIENDO LA SERIE 3000"
                , 'snippet': ''
            
        };
        
        

        store['es'][20]= {
        'title': "OPERACIÓN DEL SISTEMA",
        'href': 'UUID-289892c1-239f-59a6-3689-1b88fde46ca2.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA"
                , 'snippet': ''
            
        };
        
        

        store['es'][21]= {
        'title': "CONTROLADOR DE POTENCIA SERIE 1500",
        'href': 'UUID-8f1cf0f1-2c00-f365-70bd-0fc73c50382c.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CONTROLADOR DE POTENCIA SERIE 1500"
                , 'snippet': ''
            
        };
        
        

        store['es'][22]= {
        'title': "1500 PANEL DE CONTROL",
        'href': 'UUID-f50caa6d-942c-7b3d-7316-799822bc6471.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ 1500 PANEL DE CONTROL"
                , 'snippet': ''
            
        };
        
        

        store['es'][23]= {
        'title': "CONTROLADOR DE POTENCIA SERIE 3000",
        'href': 'UUID-7e1bb0b6-c072-569b-1c63-5e3ae86e6322.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CONTROLADOR DE POTENCIA SERIE 3000"
                , 'snippet': ''
            
        };
        
        

        store['es'][24]= {
        'title': "3000 PANEL DE CONTROL",
        'href': 'UUID-e52dc496-2423-6302-bc4a-4336af11c904.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ 3000 PANEL DE CONTROL"
                , 'snippet': ''
            
        };
        
        

        store['es'][25]= {
        'title': "PANTALLA DEL CONTROLADOR SOLAR",
        'href': 'UUID-85c56cbb-3080-b9ca-873a-971e4e5ecaa2.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ PANTALLA DEL CONTROLADOR SOLAR"
                , 'snippet': ''
            
        };
        
        

        store['es'][26]= {
        'title': "PANTALLA DE MONITOREO",
        'href': 'UUID-77e3288c-6d10-3a71-bb5d-82067aacdc8f.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ PANTALLA DE MONITOREO"
                , 'snippet': ''
            
        };
        
        

        store['es'][27]= {
        'title': "MONITOREO EN TIEMPO REAL",
        'href': 'UUID-fa69473f-ab28-3307-3753-21fc5eb542b5.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ MONITOREO EN TIEMPO REAL"
                , 'snippet': ''
            
        };
        
        

        store['es'][28]= {
        'title': "CÁLCULO DE LA CARGA DEL DISPOSITIVO",
        'href': 'UUID-060fc370-845b-1cab-7b15-2a569efab6d2.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CÁLCULO DE LA CARGA DEL DISPOSITIVO"
                , 'snippet': ''
            
        };
        
        

        store['es'][29]= {
        'title': "CÁLCULO DE LA CARGA DEL DISPOSITIVO",
        'href': 'UUID-11963775-ee29-fb3c-d842-976142d5d3a3.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CÁLCULO DE LA CARGA DEL DISPOSITIVO \/ CÁLCULO DE LA CARGA DEL DISPOSITIVO"
                , 'snippet': ''
            
        };
        
        

        store['es'][30]= {
        'title': "COMPARANDO EJEMPLOS DE CARGAS",
        'href': 'UUID-f80591b9-61fd-a90a-e843-88590dc706a0.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CÁLCULO DE LA CARGA DEL DISPOSITIVO \/ COMPARANDO EJEMPLOS DE CARGAS"
                , 'snippet': ''
            
        };
        
        

        store['es'][31]= {
        'title': "TIEMPO DE EJECUCIÓN PROMEDIO",
        'href': 'UUID-62eec07b-2df8-3897-1622-6a1f56d171e6.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ CÁLCULO DE LA CARGA DEL DISPOSITIVO \/ TIEMPO DE EJECUCIÓN PROMEDIO"
                , 'snippet': ''
            
        };
        
        

        store['es'][32]= {
        'title': "MANTENIMIENTO DE BATERÍA",
        'href': 'UUID-06c3bebb-77da-6767-0d06-84bee4c75817.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ OPERACIÓN DEL SISTEMA \/ MANTENIMIENTO DE BATERÍA"
                , 'snippet': ''
            
        };
        
        

        store['es'][33]= {
        'title': "SOLUCIÓN DE PROBLEMAS",
        'href': 'UUID-fe5bd327-e7a4-e90c-815e-7ae16fa9e126.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ SOLUCIÓN DE PROBLEMAS"
                , 'snippet': ''
            
        };
        
        

        store['es'][34]= {
        'title': "SERVICIO AL CLIENTE Y APOYO TÉCNICO",
        'href': 'UUID-198594fc-d9c6-6b84-dc54-82b6445784d0.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ SERVICIO AL CLIENTE Y APOYO TÉCNICO"
                , 'snippet': ''
            
        };
        
        

        store['es'][35]= {
        'title': "inverSOL",
        'href': 'UUID-5f88be8c-4a6c-647d-9059-ff39121079ee.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ inverSOL"
                , 'snippet': ''
            
        };
        
        

        store['es'][36]= {
        'title': "[en] Thank You",
        'href': 'UUID-d86e8446-fd4c-824e-fea2-b301d68a3ca9.html'
        
            , 'breadcrumbs': "MANUAL DEL USUARIO DEL CONTROLADOR SOLAR \/ [en] Thank You"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        