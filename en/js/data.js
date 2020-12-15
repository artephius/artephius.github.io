var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"WARNINGS", 
body:" warnings " });
this.add({id:2, 
title:"IMPORTANT WARNINGS AND SAFETY MEASURES", 
body:" important warnings and safety measures read instructions thoroughly operating unit order avoid injury self, property, unit. for additional questions clarifications, contact sales representative factory. keep future reference. risk electrical shock used improperly mishandled. energized equipment: explosion hazards. danger do submerge water liquids. keep dry environment. device splashdown capable rain resistant. do operate flammable explosive environments. do operate inclement weather. unit sustain damage hurricanes. remove solar panels store accordingly. do operate unit damaged any way, including loose electronics, frayed charging cords and\/or exposed wires. do overload attaching appliances approved nominal operation. do place foreign objects inside power outlets. do disassemble. there user serviceable parts. warranty voided seal broken. contact manufacturer repairs. caution do use operate any medical life support equipment. consult physician using with cpap devices non-life support medical equipment. do use any loads 1500w inversol 1500 3000w 3000 3000+ risk damage inverter. not recommended use 32° f (0° c) 140° (60° c). place control module direct sunlight prevent overheating. please read user’s manual carefully operating inversol generator. " });
this.add({id:3, 
title:"INTRODUCTION", 
body:" introduction " });
this.add({id:4, 
title:"HELLO AND WELCOME!", 
body:" hello and welcome! thank choosing inversol cost-effective solar-powered generator. you chosen brand designed with highest regard quality, safety, technical performance. our units include industrial-grade components, latest design techniques, production commitment quality. we hope enjoy convenience reliability new unit. the key components model include: solar panels control module battery bank. depending selected, unit power basic life necessities; as, refrigerator, led lights, fans, laptops, televisions. " });
this.add({id:5, 
title:"SOLAR GENERATORS VS. GAS GENERATORS", 
body:" solar generators vs. gas while technologies use inverters convert power run appliances, gasoline generators rated specific load, 1500 watts, example, provide appliances amount. solar inverters, contrast, rated inverter load. this means unit provide power than inverter’s capability. the actual watt-hours available determined number solar panels battery modules connected. " });
this.add({id:6, 
title:"COMPONENT LIST", 
body:" component list " });
this.add({id:7, 
title:"GETTING TO KNOW YOUR INVERSOL MODEL", 
body:" getting to know your inversol model component list model: 1500 1500+ 3000 3000+ included solar panels (max panel capacity) 1 (320 w*) 390 w 1 (320 w*) 780 w 2 (640 w*) 1560 w 2 (640 w*) 2080 w power inverter 1 1 2 2 mppt solar controller 2 2 4 4 110 vac gfci outlets 2 2 4 4 battery capacity 1200 wh 2400 wh 2400 wh 4800 wh usable capacity 1125 wh 1200 wh 1200 wh 2400 wh cables 1 x panel connection cable 1 x panel connection cable 1 x panel connection cable 1 x panel connection cable 1 x battery connection cable surge capacity 3000 w max 3000 w max 6000 w max 6000 w max continuous-load output 1500 w 1500 w 3000 w 3000 w max # battery modules 0 0 4 6 max # additional panels 0 1 2 3 *nominal wattage may vary; subject to change without notice " });
this.add({id:8, 
title:"Technical Specifications", 
body:" technical specifications specifications model 1500 1500 3000 3000+ inverter ac output ac 120v, 60hz, 12.5a cont, 24a max rated active power 1500w rated apparent power 1500 va ac 120v, 60hz, 12.5a cont, 24a max rated active power 1500w rated apparent power 1500 va ac 120v, 60hz, 25a cont, 54a max rated active power 3000w rated apparent power 3000 va ac 120v, 60hz, 25a cont, 54a max rated active power 3000w rated apparent power 3000 va internal ac charger rating ac input dc charge output 120vac, 60hz, 0.35a max 12vdc, 3.5a nominal 120vac, 60hz, 0.7a max 24vdc, 3.6a nominal 120vac, 60hz, 0.7a max 24vdc, 3.6a nominal 120vac, 60hz, 0.7a max 24vdc, 3.6a nominal solar charger rating dc charge input dc charge power 150vdc max, 37.5adc short circuit current max 390w max 150vdc max, 37.5adc short circuit current max 780w max 150vdc max, 2 x 37.5adc short circuit current max 1,560w max 150vdc max, 50adc short circuit current max 2,080w max battery specifications battery type 1 x 12v non-spillable deep cycle agm sealed lead acid 2 x 12v non-spillable deep cycle agm sealed lead acid 2 x 12v non-spillable deep cycle agm sealed lead acid 2 x 24v lifepo 4 * non-spillable deep cycle agm sealed lead acid note: specifications are subject to change without notice " });
this.add({id:9, 
title:"FRONT VIEW 1500 SERIES", 
body:" front view 1500 series " });
this.add({id:10, 
title:"REAR VIEW 1500 SERIES", 
body:" rear view 1500 series " });
this.add({id:11, 
title:"FRONT VIEW 3000 SERIES", 
body:" front view 3000 series " });
this.add({id:12, 
title:"REAR VIEW 3000 SERIES", 
body:" rear view 3000 series " });
this.add({id:13, 
title:"INSTALLATION", 
body:" installation initial installation inversol generator brief training how operate unit performed qualified technician. refer quick installation guide information related setup. the following instructions intended aid storing reinstallation, necessary. installation of inversol solar generator: place solar panel(s) location receives direct sunlight course day. panels secured prevent damage and\/or personal injury. if using optional panel bracket mount, ensure ground kit installed appropriately rod. attach mc4 solar panel cable connectors. if used, connect “m1” “f1” run cable intended location generator, preferably indoors area with constant shade, plug appropriate port. *optional* additional battery modules (purchased separately) 3ft (1m) generator. access connectors need unimpeded. connect generator with module using cable provided. *not applicable 1500 model* on solar controller display, verify charging batteries. wait 10 seconds calibrate settings prior plugging any devices appliances. verify charge batteries using power system. " });
this.add({id:14, 
title:"DISMANTLING & STORAGE", 
body:" dismantling & storage units designed portable easy store cases inclement weather use. storing your inversol solar generator: turn disconnect appliances connected unit. turn power controller off position. using provided tool (figure a), disconnect cable going solar panel(s) control module. this any order. disconnect additional battery modules (if attached). re-attach caps connectors modules storage. refer section battery maintenance it recommended panel(s) stored safe place minimize possibility damage use. the cables coiled stored safe place needed. figure a " });
this.add({id:15, 
title:"MODULAR EXPANSION OF UNITS", 
body:" modular expansion of units " });
this.add({id:16, 
title:"INCREASING UNIT'S POWER CAPACITY", 
body:" increasing unit's power capacity 1500 series the 1500 series modular. battery modules added units. however, 1500+ capacity handle second solar panel. 3000 series the 3000 series modular, meaning designed accommodate expansion purchase. panels and\/or batteries added increased power. installing additional batteries to the 3000 series: battery modules connected extend overall capacity. place battery module(s) 3ft (1m) unit. connect first battery module unit provided cable. plug any additional battery modules first attached module using cable designated connection ports. they linked like daisy chain. see section “expanding 3000 series”. installing additional solar panels: solar panels added increase solar power captured. the number additional depends installed controllers. each controller handle 320w (72 cell) panels. the circular plug panel connection cable attaches unit. on end set +\/- connectors 1500+ sets 3000 series; match solar panels. place additional solar panel(s) close proximity existing panel shaded surrounding objects. panels connect pairs attach panel connection cable. each set +\/- connectors cable support 2 panels. once panel connectors attached cable connectors, plug connection solar port (page 8, #4) unit. optional cable splitters available purchase. " });
this.add({id:17, 
title:"CONNECTING ADDITIONAL PANELS", 
body:" connecting additional panels illustrating proper panel connection *the diagram shows attaching panels series. panel 1 2 comprise group; 3 4 second group. a panel added series group (for 3000+ model only). " });
this.add({id:18, 
title:"EXPANDING THE 1500+", 
body:" expanding the 1500+ diagram to illustrate expansion the diagrams (on opposite page) simplified depictions how expand inversol units. refer section \"connecting additional panels\" see +\/- connection points linking multiple panels. **reminder: 1500 model not expandable. " });
this.add({id:19, 
title:"EXPANDING THE 3000 SERIES", 
body:" expanding the 3000 series diagram to illustrate expansion " });
this.add({id:20, 
title:"SYSTEM OPERATION", 
body:" system operation " });
this.add({id:21, 
title:"POWER CONTROLLER 1500 SERIES", 
body:" power controller 1500 series the unit ready use solar panel installed connected generator. use power controller (figure b) control output unit. the rotary switch toggles off on. *** in order solar panels charge batteries, unit on mode. the batteries off mode on mode to use generator, turn switch on. if user attempts exceed power limit, circuit breaker trip (figure c, 1) need reset. trips, open control module rotate power controller off. next, push yellow indicator place, click occur auxiliary mode during periods unit stored extended periods, attached any solar panel, highly recommended use auxiliary battery maintainer. to this, rotate power controller off mode, simply plug ac cord module working outlet. auxiliary mode batteries fully charged preparation time required. " });
this.add({id:22, 
title:"1500 CONTROL PANEL", 
body:" 1500 control panel " });
this.add({id:23, 
title:"POWER CONTROLLER 3000 SERIES", 
body:" power controller 3000 series the unit ready use solar panel installed connected generator. the unit’s power output controlled using power controller (figure d). rotary switch toggles operational modes unit. rotate red inside control module save mode boost mode. *** in order solar panels charge batteries, unit save boost mode. the batteries off save mode save mode (position 1 rotary switch) limits power consumption. operating unit extends run time batteries, ideal use weather forecasts overcast skies. it recommended ensure preservation battery life overnight usage (see “usage runtimes” section). if user attempts exceed power limit, circuit breaker 1 trip (figure e) need reset. trips, open control module rotate power controller off. next, push yellow indicator place, click occur boost mode boost mode (position 2 rotary switch) allows usage inverter’s capacity. however, operating unit boost diminishes overall runtime batteries (see “usage runtimes” section). if user exceeds power limit, circuit breaker 2 trip (figure d) need reset. trips, used excess capability inverter. unplug appliances, rotate power controller off. to reset breaker, push yellow indicator clicks place. auxiliary mode during periods unit stored extended periods, attached any solar panel, highly recommended use auxiliary battery maintainer. to this, rotate power controller off mode, simply plug ac cord module working outlet. auxiliary mode batteries fully charged preparation time required. " });
this.add({id:24, 
title:"3000 CONTROL PANEL", 
body:" 3000 control panel " });
this.add({id:25, 
title:"SOLAR CONTROLLER DISPLAY", 
body:" solar controller display inversol units come with built-in solar controllers user-friendly mt50 display view system’s status. the user cycle different screens display. controller screen current output panel(s), charge status batteries, total energy captured day month, miscellaneous information. " });
this.add({id:26, 
title:"MONITORING SCREEN", 
body:" monitoring screen the solar controller display’s monitoring screen allows user decipher status unit icons. " });
this.add({id:27, 
title:"REAL-TIME MONITORING", 
body:" real-time monitoring there 14 pages users access review system’s operation. use arrow buttons solar controller display cycle pages. " });
this.add({id:28, 
title:"CALCULATING APPLIANCE LOAD", 
body:" calculating appliance load " });
this.add({id:29, 
title:"CALCULATING APPLIANCE LOAD", 
body:" calculating appliance load how to calculate what appliances use " });
this.add({id:30, 
title:"COMPARING SAMPLE LOADS", 
body:" comparing sample loads sample appliance pairings inversol models suitable use with certain products loads (if require current than unit provide.) this limit applies total number devices attached. the 3000 series offers save\/boost mode. *this chart illustrates estimated number hours unit run fully-charged battery completely drained recharging unavailable. " });
this.add({id:31, 
title:"ESTIMATED AVERAGE RUN-TIME", 
body:" estimated average run-time how combining appliances affects run-time the following chart illustrates common combinations how pairings impact estimated run-time standard unit. hours based fully charged battery with additional charge added unit (i.e. night severely overcast days). * estimated values only; times vary. " });
this.add({id:32, 
title:"BATTERY MAINTENANCE", 
body:" battery maintenance your device internal, non-removable, rechargeable battery. do attempt remove battery, damage device. the battery charged discharged 500 times, eventually need replacement. in case, contact factory service. charge maintenance a battery charger\/maintainer included. these designed charge batteries ac plug, and\/or supply small trickle electricity order fully charged. by using maintainer, able extend life batteries; depending use properly maintained than 5 years. long-term storage recommendations & concerns a sealed lead-acid battery stored 2 years use. during period, vital check voltage charge drops 23v. low increases possibility sulfation. the best temperature storage 77°f (25°c). allowable ranges –4°f 122°f (–20°c 50°c ). end of life\/recycling always return used electronic products, batteries, packaging materials dedicated collection points. batteries placed garbage. do not dismantle the unit warranty void plate opened unauthorized personnel. for technical support, contact factory. " });
this.add({id:33, 
title:"TROUBLESHOOTING", 
body:" troubleshooting solutions to possible issues symptom possible root cause possible solution no ac output no power output \/ solar controller display unit turned turn power controller save position no power output \/ solar controller display tripped breaker breakers trip result excessive power consumption. consider turning knob boost position disconnect high power devices resetting breaker charging issues solar controller display shows low voltage \/ current coming pv array low (“0.0a, 0.0v”) solar radiation received make sure solar panels connected unobstructed view sky, surface clean " });
this.add({id:34, 
title:"CUSTOMER SERVICE & SUPPORT", 
body:" customer service & support warranty for period warranty noted below, beginning successful registration unit, inversol warrants generator free defects material workmanship items set forth below. will, discretion, repair replace any part(s) which, evaluation, inspection testing inversol, defective. warranty does cover scratches, color fading usage, alterations, flood, misuse failure follow instructions care maintenance. warranty coverage (years) 2 5 warranty includes parts & labor limited parts only support to report issue, contact inversol customer service. in order efficiently resolve problems. when opening support request, case number assigned provided you. retain use facilitate future communications with regarding matter. our highly trained technical engineers deliver critical issues business hours, 9 am 5 pm, monday saturday. return\/exchange policy if experiencing any problems with unit, contact customer service. if, speaking service representative, unit deemed non-working malfunctioning, return materials authorization (rma) issued. the product returned inversol 14 business days date rma issued order receive replacement unit. the unit new refurbished comparable design. subject remainder warranty period. " });
this.add({id:35, 
title:"Contact Info", 
body:" contact info headquarters & manufacturing: 1 ave. ponce leon, esq. georgetti urb. billy suarez, caguas, puerto rico 00725 engineering: 11 centre park, rochester, ny 14614 web: inversolpr.com online shop: https:\/\/inversolpr.com\/shop customer service hotline: 1.888.803.2202 facebook.com\/inversolpr twitter.com\/inversolpr " });
this.add({id:36, 
title:"Thank You", 
body:" thank you at inversol, llc, committed well-being customers and, utilization renewable forms energy. we encourage conservation natural resources. thank choosing portable solar generators emergency backup power solution. " });

        store['en'][1]= {
        'title': "WARNINGS",
        'href': 'UUID-0dbb71a8-5549-90ce-f0e1-a0f73d401f87.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ WARNINGS"
                , 'snippet': ''
            
        };
        
        

        store['en'][2]= {
        'title': "IMPORTANT WARNINGS AND SAFETY MEASURES",
        'href': 'UUID-df047601-129f-c424-e413-622374699079.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ WARNINGS \/ IMPORTANT WARNINGS AND SAFETY MEASURES"
                , 'snippet': ''
            
        };
        
        

        store['en'][3]= {
        'title': "INTRODUCTION",
        'href': 'UUID-de9253d1-f7e8-7b41-e79a-f75854891a8e.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION"
                , 'snippet': ''
            
        };
        
        

        store['en'][4]= {
        'title': "HELLO AND WELCOME!",
        'href': 'UUID-903e5a5c-196e-f52f-7702-587bc5656790.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ HELLO AND WELCOME!"
                , 'snippet': ''
            
        };
        
        

        store['en'][5]= {
        'title': "SOLAR GENERATORS VS. GAS GENERATORS",
        'href': 'UUID-bfa7a5ca-3b76-e699-4191-12758d13c07b.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ SOLAR GENERATORS VS. GAS GENERATORS"
                , 'snippet': ''
            
        };
        
        

        store['en'][6]= {
        'title': "COMPONENT LIST",
        'href': 'UUID-a2720a0d-d2ac-41cc-def3-03ddca7720ed.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ COMPONENT LIST"
                , 'snippet': ''
            
        };
        
        

        store['en'][7]= {
        'title': "GETTING TO KNOW YOUR INVERSOL MODEL",
        'href': 'UUID-4366caf0-7a74-52f7-2e1c-c06e164d7d46.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ GETTING TO KNOW YOUR INVERSOL MODEL"
                , 'snippet': ''
            
        };
        
        

        store['en'][8]= {
        'title': "Technical Specifications",
        'href': 'UUID-7ced57ad-0d10-2cd0-95f7-3ec6e90f5b75.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ Technical Specifications"
                , 'snippet': ''
            
        };
        
        

        store['en'][9]= {
        'title': "FRONT VIEW 1500 SERIES",
        'href': 'UUID-27187777-ffd1-4dbd-b44c-b8d44bddd3e6.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ FRONT VIEW 1500 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][10]= {
        'title': "REAR VIEW 1500 SERIES",
        'href': 'UUID-3a440793-1f17-de53-5144-e49458ec57c6.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ REAR VIEW 1500 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][11]= {
        'title': "FRONT VIEW 3000 SERIES",
        'href': 'UUID-fc836c3f-f844-e582-dfa7-04aef501a752.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ FRONT VIEW 3000 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][12]= {
        'title': "REAR VIEW 3000 SERIES",
        'href': 'UUID-b56b5b76-8488-2480-47ef-091230c16b36.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ REAR VIEW 3000 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][13]= {
        'title': "INSTALLATION",
        'href': 'UUID-03c69541-3244-b5d7-0f2c-3119eebcdc16.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ INSTALLATION"
                , 'snippet': ''
            
        };
        
        

        store['en'][14]= {
        'title': "DISMANTLING & STORAGE",
        'href': 'UUID-72010668-af2a-7b35-0a56-67a2b10f4b68.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ INTRODUCTION \/ DISMANTLING & STORAGE"
                , 'snippet': ''
            
        };
        
        

        store['en'][15]= {
        'title': "MODULAR EXPANSION OF UNITS",
        'href': 'UUID-57f8823f-f82a-afe7-a16c-c337158c0bf8.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ MODULAR EXPANSION OF UNITS"
                , 'snippet': ''
            
        };
        
        

        store['en'][16]= {
        'title': "INCREASING UNIT'S POWER CAPACITY",
        'href': 'UUID-4898f226-aecf-f020-12ed-18c54e88463a.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ MODULAR EXPANSION OF UNITS \/ INCREASING UNIT'S POWER CAPACITY"
                , 'snippet': ''
            
        };
        
        

        store['en'][17]= {
        'title': "CONNECTING ADDITIONAL PANELS",
        'href': 'UUID-0910a3ed-7eac-7174-aea2-82cf419ced28.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ MODULAR EXPANSION OF UNITS \/ CONNECTING ADDITIONAL PANELS"
                , 'snippet': ''
            
        };
        
        

        store['en'][18]= {
        'title': "EXPANDING THE 1500+",
        'href': 'UUID-512647fe-08a5-40c7-6cb2-a943734f3850.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ MODULAR EXPANSION OF UNITS \/ EXPANDING THE 1500+"
                , 'snippet': ''
            
        };
        
        

        store['en'][19]= {
        'title': "EXPANDING THE 3000 SERIES",
        'href': 'UUID-b35a8412-b9ab-847b-d5cf-6a0a3cc221b5.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ MODULAR EXPANSION OF UNITS \/ EXPANDING THE 3000 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][20]= {
        'title': "SYSTEM OPERATION",
        'href': 'UUID-289892c1-239f-59a6-3689-1b88fde46ca2.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION"
                , 'snippet': ''
            
        };
        
        

        store['en'][21]= {
        'title': "POWER CONTROLLER 1500 SERIES",
        'href': 'UUID-8f1cf0f1-2c00-f365-70bd-0fc73c50382c.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ POWER CONTROLLER 1500 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][22]= {
        'title': "1500 CONTROL PANEL",
        'href': 'UUID-f50caa6d-942c-7b3d-7316-799822bc6471.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ 1500 CONTROL PANEL"
                , 'snippet': ''
            
        };
        
        

        store['en'][23]= {
        'title': "POWER CONTROLLER 3000 SERIES",
        'href': 'UUID-7e1bb0b6-c072-569b-1c63-5e3ae86e6322.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ POWER CONTROLLER 3000 SERIES"
                , 'snippet': ''
            
        };
        
        

        store['en'][24]= {
        'title': "3000 CONTROL PANEL",
        'href': 'UUID-e52dc496-2423-6302-bc4a-4336af11c904.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ 3000 CONTROL PANEL"
                , 'snippet': ''
            
        };
        
        

        store['en'][25]= {
        'title': "SOLAR CONTROLLER DISPLAY",
        'href': 'UUID-85c56cbb-3080-b9ca-873a-971e4e5ecaa2.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ SOLAR CONTROLLER DISPLAY"
                , 'snippet': ''
            
        };
        
        

        store['en'][26]= {
        'title': "MONITORING SCREEN",
        'href': 'UUID-77e3288c-6d10-3a71-bb5d-82067aacdc8f.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ MONITORING SCREEN"
                , 'snippet': ''
            
        };
        
        

        store['en'][27]= {
        'title': "REAL-TIME MONITORING",
        'href': 'UUID-fa69473f-ab28-3307-3753-21fc5eb542b5.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ REAL-TIME MONITORING"
                , 'snippet': ''
            
        };
        
        

        store['en'][28]= {
        'title': "CALCULATING APPLIANCE LOAD",
        'href': 'UUID-060fc370-845b-1cab-7b15-2a569efab6d2.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ CALCULATING APPLIANCE LOAD"
                , 'snippet': ''
            
        };
        
        

        store['en'][29]= {
        'title': "CALCULATING APPLIANCE LOAD",
        'href': 'UUID-11963775-ee29-fb3c-d842-976142d5d3a3.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ CALCULATING APPLIANCE LOAD \/ CALCULATING APPLIANCE LOAD"
                , 'snippet': ''
            
        };
        
        

        store['en'][30]= {
        'title': "COMPARING SAMPLE LOADS",
        'href': 'UUID-f80591b9-61fd-a90a-e843-88590dc706a0.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ CALCULATING APPLIANCE LOAD \/ COMPARING SAMPLE LOADS"
                , 'snippet': ''
            
        };
        
        

        store['en'][31]= {
        'title': "ESTIMATED AVERAGE RUN-TIME",
        'href': 'UUID-62eec07b-2df8-3897-1622-6a1f56d171e6.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ CALCULATING APPLIANCE LOAD \/ ESTIMATED AVERAGE RUN-TIME"
                , 'snippet': ''
            
        };
        
        

        store['en'][32]= {
        'title': "BATTERY MAINTENANCE",
        'href': 'UUID-06c3bebb-77da-6767-0d06-84bee4c75817.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ SYSTEM OPERATION \/ BATTERY MAINTENANCE"
                , 'snippet': ''
            
        };
        
        

        store['en'][33]= {
        'title': "TROUBLESHOOTING",
        'href': 'UUID-fe5bd327-e7a4-e90c-815e-7ae16fa9e126.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ TROUBLESHOOTING"
                , 'snippet': ''
            
        };
        
        

        store['en'][34]= {
        'title': "CUSTOMER SERVICE & SUPPORT",
        'href': 'UUID-198594fc-d9c6-6b84-dc54-82b6445784d0.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ CUSTOMER SERVICE & SUPPORT"
                , 'snippet': ''
            
        };
        
        

        store['en'][35]= {
        'title': "Contact Info",
        'href': 'UUID-5f88be8c-4a6c-647d-9059-ff39121079ee.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ Contact Info"
                , 'snippet': ''
            
        };
        
        

        store['en'][36]= {
        'title': "Thank You",
        'href': 'UUID-d86e8446-fd4c-824e-fea2-b301d68a3ca9.html'
        
            , 'breadcrumbs': "SOLAR CONTROLLER USER MANUAL \/ Thank You"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        