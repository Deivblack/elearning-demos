/* Prime Choice outbound — UI + lesson copy: es / zh (简体) / en */
(function (global) {
  const UI = {
    es: {
      docTitle: 'Prime Choice — Onboarding Outbound',
      hudBrand: 'Prime Choice · Outbound',
      langLabel: 'Idioma',
      badgeDemo: 'Piloto · ~20 min',
      welcomeHi: 'Bienvenido/a a',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: 'Outbound',
      welcomeSub: 'Aprende el piso de shipping / sort & load: seguridad, cinta por colores, contenerización y más. Gana XP, cierra misiones y guarda tu resultado.',
      firstNamePh: 'Nombre',
      lastNamePh: 'Apellido',
      startBtn: '¡Empezar misiones!',
      pathSafety: '1 Seguridad',
      pathProcess: '2 Proceso',
      pathBelt: '3 Cinta',
      pathContainer: '4 Contenedor',
      pathMore: '5 Más',
      needName: 'Escribe tu nombre y apellido para empezar.',
      guideDefault: 'Tu guía',
      guideMissions: 'Completa las misiones en orden. Cada una cierra con trivia y suma puntos.',
      guideMissionsNamed: 'Hola {name}. Completa las 5 misiones en orden. Cada trivia suma XP.',
      hello: 'Hola, {name}',
      missionsTitle: 'Tu ruta de entrenamiento',
      missionsSub: 'Cinta primero (varios días / ~1 semana, sin escanear solo) → luego contenedor → luego más.',
      xpCompleteMission: '+{xp} XP al completar misión',
      stepOf: '{num} · Paso {cur} de {total}',
      trivia: 'Trivia',
      backMap: '← Mapa',
      next: 'Siguiente →',
      closeModule: '✓ Cerrar módulo',
      backToMap: 'Volver al mapa',
      answerToContinue: 'Responde para continuar',
      completedTag: 'Completada',
      triviaXpTag: '{n} trivia XP',
      continueBtn: 'Continuar →',
      xpAccum: 'XP acumulados',
      resultsGuide: '¡Listo! Tu avance quedó guardado en este navegador para el piloto.',
      resultsIcon: '🏁',
      resultsTitle: 'Onboarding completado',
      resultsSub: 'Felicitaciones, {name}. Completaste la ruta outbound.',
      xpTotal: 'XP total',
      triviaCorrect: 'Trivia correctas',
      modulesLabel: 'Módulos',
      scoreboardTitle: 'SCOREBOARD POR MÓDULO',
      pts: '{n} pts',
      certTitle: 'Registro de piloto',
      certLine: '{name} · {when} · {xp} XP · duración {duration}',
      anotherTry: 'Otro intento',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: 'Nuevo en piso',
      level1: 'Cinta en marcha',
      level2: 'Listo para scan',
      level3: 'Outbound sólido'
    },
    zh: {
      docTitle: 'Prime Choice — 出库入职培训',
      hudBrand: 'Prime Choice · 出库',
      langLabel: '语言',
      badgeDemo: '试点 · 约20分钟',
      welcomeHi: '欢迎来到',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: '出库 Outbound',
      welcomeSub: '学习出库现场：安全、传送带分色、装箱扫描和更多职责。赚取 XP，完成任务并保存你的成绩。',
      firstNamePh: '名',
      lastNamePh: '姓',
      startBtn: '开始任务！',
      pathSafety: '1 安全',
      pathProcess: '2 流程',
      pathBelt: '3 传送带',
      pathContainer: '4 装箱',
      pathMore: '5 更多',
      needName: '请填写姓名后再开始。',
      guideDefault: '你的向导',
      guideMissions: '按顺序完成任务。每关结束有小测验，答对加分。',
      guideMissionsNamed: '你好，{name}。按顺序完成 5 个任务。小测验可加 XP。',
      hello: '你好，{name}',
      missionsTitle: '你的培训路线',
      missionsSub: '先传送带（几天到约1周，不要独自扫描）→ 再装箱 → 再更多职责。',
      xpCompleteMission: '完成任务 +{xp} XP',
      stepOf: '{num} · 第 {cur} / {total} 步',
      trivia: '小测验',
      backMap: '← 任务图',
      next: '下一步 →',
      closeModule: '✓ 完成本关',
      backToMap: '返回任务图',
      answerToContinue: '请先答题再继续',
      completedTag: '已完成',
      triviaXpTag: '测验 {n} XP',
      continueBtn: '继续 →',
      xpAccum: '累计 XP',
      resultsGuide: '完成了！你的成绩已保存在本浏览器，供试点使用。',
      resultsIcon: '🏁',
      resultsTitle: '入职培训已完成',
      resultsSub: '恭喜，{name}。你已完成出库培训路线。',
      xpTotal: '总 XP',
      triviaCorrect: '测验正确',
      modulesLabel: '模块',
      scoreboardTitle: '各模块得分',
      pts: '{n} 分',
      certTitle: '试点记录',
      certLine: '{name} · {when} · {xp} XP · 用时 {duration}',
      anotherTry: '再试一次',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: '现场新人',
      level1: '传送带上手',
      level2: '可学扫描',
      level3: '出库扎实'
    },
    en: {
      docTitle: 'Prime Choice — Outbound Onboarding',
      hudBrand: 'Prime Choice · Outbound',
      langLabel: 'Language',
      badgeDemo: 'Pilot · ~20 min',
      welcomeHi: 'Welcome to',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: 'Outbound',
      welcomeSub: 'Learn the shipping / sort & load floor: safety, color sorting on the belt, containerization, and more. Earn XP, finish missions, and save your result.',
      firstNamePh: 'First name',
      lastNamePh: 'Last name',
      startBtn: 'Start missions!',
      pathSafety: '1 Safety',
      pathProcess: '2 Process',
      pathBelt: '3 Belt',
      pathContainer: '4 Container',
      pathMore: '5 More',
      needName: 'Enter your first and last name to start.',
      guideDefault: 'Your guide',
      guideMissions: 'Complete missions in order. Each one ends with trivia and adds points.',
      guideMissionsNamed: 'Hi {name}. Finish all 5 missions in order. Trivia adds XP.',
      hello: 'Hi, {name}',
      missionsTitle: 'Your training path',
      missionsSub: 'Belt first (several days / ~1 week, no solo scan) → then container → then more.',
      xpCompleteMission: '+{xp} XP when you finish the mission',
      stepOf: '{num} · Step {cur} of {total}',
      trivia: 'Trivia',
      backMap: '← Map',
      next: 'Next →',
      closeModule: '✓ Close module',
      backToMap: 'Back to map',
      answerToContinue: 'Answer to continue',
      completedTag: 'Done',
      triviaXpTag: '{n} trivia XP',
      continueBtn: 'Continue →',
      xpAccum: 'XP total so far',
      resultsGuide: 'Done! Your progress is saved in this browser for the pilot.',
      resultsIcon: '🏁',
      resultsTitle: 'Onboarding complete',
      resultsSub: 'Nice work, {name}. You finished the outbound path.',
      xpTotal: 'Total XP',
      triviaCorrect: 'Trivia correct',
      modulesLabel: 'Modules',
      scoreboardTitle: 'SCOREBOARD BY MODULE',
      pts: '{n} pts',
      certTitle: 'Pilot record',
      certLine: '{name} · {when} · {xp} XP · time {duration}',
      anotherTry: 'Try again',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: 'New on floor',
      level1: 'Belt in progress',
      level2: 'Ready for scan',
      level3: 'Solid outbound'
    }
  };

  /* Mission content per language — warehouse floor tone */
  const MISSIONS = {
    es: [
      {
        id: 'm-seguridad',
        icon: '🛡️',
        color: 'rgba(56,189,248,.2)',
        num: 'MISIÓN 01',
        title: '3 reglas de seguridad',
        desc: 'Personas y montacargas, no trepar, avisar si duele.',
        xp: 100,
        time: '~4 min',
        guide: 'Estas 3 frases salvan turnos. Memorízalas.',
        badge: { icon: '🛡️', title: 'Piso seguro', desc: 'Sabes las 3 reglas: mirada, no trepar, avisar.' },
        steps: [
          {
            type: 'info',
            title: 'Las 3 reglas (piso)',
            guide: 'Una frase cada una. Igual en cartel y en el piso.',
            blocks: [
              { h: '🛡️ 3 reglas de seguridad — Prime Choice', p: 'Pocas, fáciles de recordar, iguales en todo el warehouse.' },
              {
                grid: [
                  { icon: '👀', t: '1. Personas y montacargas: no se mezclan', d: 'Camina por pasillos de gente. Antes de cruzar: contacto visual y espera señal. No pases debajo de carga levantada.' },
                  { icon: '🚫', t: '2. No trepes ni te subas', d: 'No trepar gaylords, pallets inestables, carritos ni bordes de dock. Si hay que alcanzar arriba → pide ayuda.' },
                  { icon: '✋', t: '3. Si duele o no es seguro: paras y avisas', d: 'No ignores un golpe, corte o “casi”. Paras, avisas al TL. Nadie te castiga por avisar.' },
                  { icon: '⏱️', t: 'Versión 10 segundos', d: '1) Mirada con el montacargas. 2) No te subas. 3) Si duele, avisas.' }
                ]
              },
              { highlight: 'Buddy / TL: estas reglas van en el tour del día 1. Avisar temprano evita que el riesgo se quede.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Seguridad',
            guide: 'Elige la respuesta correcta para cerrar el módulo.',
            question: 'Antes de cruzar frente a un montacargas, ¿qué haces?',
            options: [
              'Corres rápido para no atrasar la línea',
              'Contacto visual con el operador y esperas señal',
              'Pasas debajo de la carga si va alto',
              'Sigues sin mirar si el pasillo “parece libre”'
            ],
            correct: 1,
            feedback: {
              ok: 'Correcto. Mirada + señal. El montacargas tiene preferencia de espacio.',
              fail: 'Recuerda la regla 1: contacto visual y espera señal. Personas y montacargas no se mezclan.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · Avisar',
            guide: 'Última pregunta de seguridad.',
            question: 'Te das un golpe o casi hay un accidente. ¿Qué haces?',
            options: [
              'Sigues para no perder tiempo',
              'Paras y avisas al TL',
              'Solo lo cuentas al final del turno si duele mucho',
              'Lo escondes para no “quedar mal”'
            ],
            correct: 1,
            feedback: {
              ok: 'Exacto. Si duele o no es seguro: paras y avisas. Esconderlo daña al equipo.',
              fail: 'Regla 3: paras y avisas al TL. Nadie te castiga por avisar.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-proceso',
        icon: '🗺️',
        color: 'rgba(13,148,136,.25)',
        num: 'MISIÓN 02',
        title: 'Mapa del proceso outbound',
        desc: 'De packing a trailer: banda → carritos → scan → carga.',
        xp: 80,
        time: '~3 min',
        guide: 'Primero el mapa mental. Después entramos a cada etapa.',
        badge: { icon: '🗺️', title: 'Mapa claro', desc: 'Entiendes el flujo packing → outbound → carga.' },
        steps: [
          {
            type: 'info',
            title: 'Flujo en una mirada',
            guide: 'Mismos pasos de día y de noche.',
            blocks: [
              { h: '🗺️ Proceso outbound', p: 'Después de packing: shipping / sort & load.' },
              {
                flow: [
                  'Juntar paquetes de la banda',
                  'Surtir a carritos por color (carrier)',
                  'Cambiar carrito lleno por vacío',
                  'Estación: label + escanear → gaylord / apilar',
                  'Cerrar contenedor → entrega a carga',
                  'Carga: escanear al trailer por carrier'
                ]
              },
              { highlight: 'Ruta de entrenamiento (no saltar): cinta varios días → contenerización/scan → más responsabilidades.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Orden',
            guide: '¿Recuerdas el orden?',
            question: '¿Cuál es el orden correcto de entrenamiento?',
            options: [
              'Escanear el día 1, luego colores',
              'Cinta (colores) → contenerización/scan → más',
              'Carga al trailer primero, luego cinta',
              'Rotar las 4 estaciones el primer día'
            ],
            correct: 1,
            feedback: {
              ok: 'Sí. Primero colores sólidos en cinta; luego contenedor; luego más.',
              fail: 'No adelantes el scan. Primero cinta (días / ~1 semana), después contenerización.'
            },
            xp: 20
          }
        ]
      },
      {
        id: 'm-cinta',
        icon: '📦',
        color: 'rgba(245,158,11,.2)',
        num: 'MISIÓN 03',
        title: 'Cinta y colores',
        desc: 'Días 1–~7: surtir por color con buddy. Sin escanear solo.',
        xp: 120,
        time: '~5 min',
        guide: 'Aquí empiezas. Varios días en cinta. No escaneas solo todavía.',
        badge: { icon: '📦', title: 'Colores listos', desc: 'Sabes carriers, carritos y la regla de no adivinar.' },
        steps: [
          {
            type: 'info',
            title: 'Colores = carriers',
            guide: 'Memoriza la tabla. Está en la pared de la banda.',
            blocks: [
              { h: '📦 Cinta — surtido por color', p: 'Día 1 y varios días / hasta ~1 semana: solo colores con buddy. No escanear ni contenedorizar el día 1.' },
              {
                colors: [
                  { bg: 'rgba(34,197,94,.25)', bd: 'rgba(34,197,94,.5)', name: 'Verde', sub: 'USPS' },
                  { bg: 'rgba(244,63,94,.25)', bd: 'rgba(244,63,94,.5)', name: 'Rojo', sub: 'Swift' },
                  { bg: 'rgba(56,189,248,.25)', bd: 'rgba(56,189,248,.5)', name: 'Azul', sub: 'Speedex' },
                  { bg: 'rgba(249,115,22,.28)', bd: 'rgba(249,115,22,.55)', name: 'Naranja', sub: 'Uni Uni' },
                  { bg: 'rgba(255,255,255,.08)', bd: 'rgba(255,255,255,.12)', name: 'Carrito aparte', sub: 'Cajas grandes USPS' }
                ]
              },
              { highlight: 'Gofo: color / estación por definir — no inventar color hasta que entre.' },
              {
                grid: [
                  { icon: '🤝', t: 'Buddy nombrado', d: 'Si te trabas, buscas al buddy; si no está, al TL. No te quedes parado sin decir.' },
                  { icon: '❓', t: 'Si dudas del carrier', d: 'No adivines. Pregunta o regresa el paquete a la línea.' },
                  { icon: '🚫', t: 'Sin scan solo', d: 'Escaneo viene después, cuando el TL diga. No el día 4–5 si aún confundes colores.' },
                  { icon: '🚦', t: 'Semáforo TL', d: '🟢 sigue en cinta / listo para contenedor · 🟡 más ayuda en cinta · 🔴 riesgo' }
                ]
              }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Color',
            guide: 'Carrier correcto = menos reclamos después.',
            question: 'El carrito rojo es para…',
            options: ['USPS', 'Swift', 'Speedex', 'Uni Uni'],
            correct: 1,
            feedback: {
              ok: 'Rojo = Swift. Verde USPS, azul Speedex, naranja Uni Uni.',
              fail: 'Rojo es Swift. Repasa la tabla de colores.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · No solo scan',
            guide: 'Regla clave del piloto.',
            question: 'En tus primeros días en cinta, ¿puedes escanear solo?',
            options: [
              'Sí, desde el día 1 para “aprender más rápido”',
              'No: varios días / ~1 semana en cinta con buddy; scan después cuando el TL diga',
              'Sí, si ya hiciste 4 días aunque confundes colores',
              'Solo de noche'
            ],
            correct: 1,
            feedback: {
              ok: 'Correcto. Primero colores sólidos. Contenerización (y scan) viene después del semáforo 🟢 en cinta.',
              fail: 'No adelantes el scan. Cinta primero, con buddy, sin escanear solo.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-contenedor',
        icon: '📥',
        color: 'rgba(167,139,250,.22)',
        num: 'MISIÓN 04',
        title: 'Contenerización y scan',
        desc: 'Label → escanear → gaylord / apilar. Día 1 de scan con buddy.',
        xp: 120,
        time: '~4 min',
        guide: 'Solo cuando ya estás 🟢 en colores. Orden: label → scan → meter.',
        badge: { icon: '📥', title: 'Scan con orden', desc: 'Sin escanear, no entra. Una estación primero.' },
        steps: [
          {
            type: 'info',
            title: 'Label → scan → meter',
            guide: 'El error grave: meter sin escanear.',
            blocks: [
              { h: '📥 Contenerización', p: 'Cuando el TL marca 🟢 en cinta → pasas a la estación del carrier.' },
              {
                flow: [
                  'Pega / coloca el label del contenedor',
                  'Escanea el paquete',
                  'Mételo: gaylord (~400–550) o apilar cajas grandes'
                ]
              },
              {
                grid: [
                  { icon: '🧑‍🏫', t: 'Día 1 de scan', d: 'Con buddy o TL. No solo el primer día de scan.' },
                  { icon: '📍', t: 'Una estación', d: 'Primero 1 carrier. No rotar las 4 el primer día.' },
                  { icon: '🔀', t: 'Carrier equivocado', d: 'Regresa a la línea o pásalo al de ese carrier. Nunca “ya mételo”.' },
                  { icon: '⚠️', t: 'Sin escanear, no entra', d: 'Ni al gaylord, ni al stack, ni al trailer.' }
                ]
              },
              { highlight: 'Cajas grandes USPS van al flujo de apilado / carrito aparte — no mezclar con el gaylord chico si así está armado el turno.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Orden de estación',
            guide: 'Orden fijo en la estación.',
            question: 'En la estación del carrier, el orden correcto es…',
            options: [
              'Meter → escanear → label',
              'Label → escanear → meter',
              'Escanear al trailer → meter al gaylord',
              'Meter sin label si el carrito ya está lleno'
            ],
            correct: 1,
            feedback: {
              ok: 'Label → scan → meter. Sin escanear, no entra.',
              fail: 'Orden: label del contenedor → escanear → meter.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · Error grave',
            guide: 'Esto duele en calidad y reclamos.',
            question: '¿Cuál es un error grave en contenerización?',
            options: [
              'Preguntar al buddy si dudas',
              'Meter al gaylord sin escanear',
              'Empezar en una sola estación',
              'Pedir ayuda el día 1 de scan'
            ],
            correct: 1,
            feedback: {
              ok: 'Meter sin escanear (o escanear mal) es error grave.',
              fail: 'El error grave es meter sin escanear. Preguntar y pedir ayuda está bien.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-mas',
        icon: '🚀',
        color: 'rgba(244,63,94,.18)',
        num: 'MISIÓN 05',
        title: 'Más responsabilidades',
        desc: 'Swap a cargo, cerrar contenedor, luego carga/handover.',
        xp: 100,
        time: '~4 min',
        guide: 'Cuando ya manejas contenedor. El TL asigna según el volumen.',
        badge: { icon: '🚀', title: 'Más a cargo', desc: 'Sabes swap, cerrar y la idea de carga por carrier.' },
        steps: [
          {
            type: 'info',
            title: 'Swap, cerrar, carga',
            guide: 'Semana 2–4 según el turno. No el día 1 de cinta.',
            blocks: [
              { h: '🚀 Más responsabilidades', p: '' },
              {
                grid: [
                  { icon: '🔄', t: 'Cambio de carrito a cargo', d: 'Carrito lleno → vacío en la banda; lleno a la estación. No dejes la banda sin vacío si sigue cayendo producto.' },
                  { icon: '🔒', t: 'Cerrar contenedor', d: 'Cuando gaylord/stack esté completo, cierra según la práctica del turno y entrega a carga.' },
                  { icon: '🚚', t: 'Carga / handover', d: 'Elige load/ship del carrier → escanear cada paquete al cargar → trailer de ese carrier. No mezclar carriers.' },
                  { icon: '📅', t: '~30 días', d: 'Trabajas solo en tu rol, calidad aceptable, sabes a quién avisar (buddy → TL).' }
                ]
              },
              { highlight: '3 errores que no se perdonan: color/carrier equivocado · meter sin escanear · ignorar seguridad (montacargas, trepar, no avisar).' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Carga',
            guide: 'Última trivia del piloto.',
            question: 'En carga al trailer, ¿qué debes respetar?',
            options: [
              'Mezclar carriers si el trailer tiene espacio',
              'Escanear cada paquete y cargar por carrier',
              'Saltar el scan si el gaylord ya estaba cerrado',
              'Cargar sin buddy el día 1 de cinta'
            ],
            correct: 1,
            feedback: {
              ok: 'Escanear cada paquete al cargar, trailer por carrier. Sin mezclar.',
              fail: 'Carga: escanear cada paquete y no mezclar carriers en el mismo trailer.'
            },
            xp: 30
          }
        ]
      }
    ],

    zh: [
      {
        id: 'm-seguridad',
        icon: '🛡️',
        color: 'rgba(56,189,248,.2)',
        num: '任务 01',
        title: '三条安全规则',
        desc: '人与叉车分开、不要攀爬、疼了或不安全就报告。',
        xp: 100,
        time: '约4分钟',
        guide: '三句话，好记。班上天天用。',
        badge: { icon: '🛡️', title: '现场安全', desc: '记住三条：对视、不爬、报告。' },
        steps: [
          {
            type: 'info',
            title: '三条规则（现场）',
            guide: '每条一句话。海报和现场说法一样。',
            blocks: [
              { h: '🛡️ 三条安全规则 — Prime Choice', p: '少而清楚，整个仓库说法一致。' },
              {
                grid: [
                  { icon: '👀', t: '1. 人与叉车分开', d: '走人行通道。过路先与司机对视，等信号。不要从抬起的货物下面穿过。' },
                  { icon: '🚫', t: '2. 不要攀爬', d: '不要爬大箱、不稳托盘、推车或月台边。够不到就找人或用工具。' },
                  { icon: '✋', t: '3. 疼了或不安全：停下并报告', d: '磕碰、割伤或“差点出事”都不要硬撑。停下，告诉组长（TL）。报告不会受罚。' },
                  { icon: '⏱️', t: '十秒版', d: '1）和叉车对视。2）不要爬。3）疼了就报告。' }
                ]
              },
              { highlight: '带教 / 组长：第1天参观就要讲这三条。早报告，风险才不会留在现场。' }
            ]
          },
          {
            type: 'quiz',
            title: '小测验 · 安全',
            guide: '选正确答案完成本关。',
            question: '从叉车前方穿过之前，你应该怎么做？',
            options: [
              '快跑过去，别耽误流水线',
              '与司机对视，并等待信号',
              '货物抬得高就从下面钻过去',
              '通道“看起来空”就直接走'
            ],
            correct: 1,
            feedback: {
              ok: '正确。对视 + 等信号。叉车优先占空间。',
              fail: '记住第1条：对视并等信号。人与叉车不要混在一起。'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: '小测验 · 报告',
            guide: '安全最后一题。',
            question: '你磕碰了，或差点出事。该怎么做？',
            options: [
              '继续干，别耽误时间',
              '停下并告诉组长（TL）',
              '等交班时疼得厉害再说',
              '瞒着，怕显得不好'
            ],
            correct: 1,
            feedback: {
              ok: '对。疼了或不安全就停下并报告。隐瞒会害团队。',
              fail: '第3条：停下并告诉组长。报告不会受罚。'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-proceso',
        icon: '🗺️',
        color: 'rgba(13,148,136,.25)',
        num: '任务 02',
        title: '出库流程地图',
        desc: '从打包到拖车：传送带 → 分色车 → 扫描 → 装车。',
        xp: 80,
        time: '约3分钟',
        guide: '先建立整体图，再学每一段。',
        badge: { icon: '🗺️', title: '流程清楚', desc: '理解：打包 → 出库 → 装车。' },
        steps: [
          {
            type: 'info',
            title: '一眼看懂流程',
            guide: '白班夜班步骤相同。',
            blocks: [
              { h: '🗺️ 出库流程', p: '打包之后：shipping / sort & load。' },
              {
                flow: [
                  '从传送带收包裹',
                  '按颜色（承运商）分到推车',
                  '满车换成空车',
                  '工位：贴标签 + 扫描 → 大箱 / 堆叠',
                  '封箱 → 交给装车',
                  '装车：按承运商扫进拖车'
                ]
              },
              { highlight: '培训路线（不要跳）：传送带几天 → 装箱/扫描 → 更多职责。' }
            ]
          },
          {
            type: 'quiz',
            title: '小测验 · 顺序',
            guide: '还记得顺序吗？',
            question: '正确的培训顺序是？',
            options: [
              '第1天就扫描，再学分色',
              '传送带（分色）→ 装箱/扫描 → 更多',
              '先装拖车，再学传送带',
              '第1天就轮换四个工位'
            ],
            correct: 1,
            feedback: {
              ok: '对。先把分色做稳，再装箱，再加职责。',
              fail: '不要提前独立扫描。先传送带（几天到约1周），再装箱。'
            },
            xp: 20
          }
        ]
      },
      {
        id: 'm-cinta',
        icon: '📦',
        color: 'rgba(245,158,11,.2)',
        num: '任务 03',
        title: '传送带与颜色',
        desc: '第1～约7天：跟人带学分色。不要独自扫描。',
        xp: 120,
        time: '约5分钟',
        guide: '从这里开始。传送带几天。现在还不要独自扫描。',
        badge: { icon: '📦', title: '分色过关', desc: '知道承运商、推车颜色，不会就问。' },
        steps: [
          {
            type: 'info',
            title: '颜色 = 承运商',
            guide: '记住这张表。贴在传送带旁墙上。',
            blocks: [
              { h: '📦 传送带 — 按颜色分车', p: '第1天以及随后几天到约1周：只跟人带学分色。第1天不扫描、不装箱。' },
              {
                colors: [
                  { bg: 'rgba(34,197,94,.25)', bd: 'rgba(34,197,94,.5)', name: '绿', sub: 'USPS' },
                  { bg: 'rgba(244,63,94,.25)', bd: 'rgba(244,63,94,.5)', name: '红', sub: 'Swift' },
                  { bg: 'rgba(56,189,248,.25)', bd: 'rgba(56,189,248,.5)', name: '蓝', sub: 'Speedex' },
                  { bg: 'rgba(249,115,22,.28)', bd: 'rgba(249,115,22,.55)', name: '橙', sub: 'Uni Uni' },
                  { bg: 'rgba(255,255,255,.08)', bd: 'rgba(255,255,255,.12)', name: '另车', sub: 'USPS 大件' }
                ]
              },
              { highlight: 'Gofo：颜色/工位待定 — 上线前不要自己编颜色。' },
              {
                grid: [
                  { icon: '🤝', t: '指定带教', d: '卡住先找带教；带教不在找组长。不要闷着站着。' },
                  { icon: '❓', t: '不确定承运商', d: '不要猜。问人，或把包裹放回线边。' },
                  { icon: '🚫', t: '不要独自扫描', d: '扫描要等组长说可以。颜色还混就不要第4～5天硬扫。' },
                  { icon: '🚦', t: '组长信号灯', d: '🟢 继续传送带/可转装箱 · 🟡 传送带再帮几天 · 🔴 风险/安全问题' }
                ]
              }
            ]
          },
          {
            type: 'quiz',
            title: '小测验 · 颜色',
            guide: '分对承运商，后面少返工。',
            question: '红色推车对应哪个承运商？',
            options: ['USPS', 'Swift', 'Speedex', 'Uni Uni'],
            correct: 1,
            feedback: {
              ok: '红 = Swift。绿 USPS，蓝 Speedex，橙 Uni Uni。',
              fail: '红是 Swift。再看一眼颜色表。'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: '小测验 · 不要独自扫描',
            guide: '试点关键规则。',
            question: '传送带头几天，可以独自扫描吗？',
            options: [
              '可以，第1天就扫，学得更快',
              '不可以：传送带跟几天到约1周；组长说了再学扫描',
              '可以，只要干了4天，颜色混也没关系',
              '只有夜班可以'
            ],
            correct: 1,
            feedback: {
              ok: '正确。先把分色做稳。装箱（和扫描）要等传送带绿灯。',
              fail: '不要提前独自扫描。先传送带，有人带。'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-contenedor',
        icon: '📥',
        color: 'rgba(167,139,250,.22)',
        num: '任务 04',
        title: '装箱与扫描',
        desc: '贴标 → 扫描 → 大箱/堆叠。扫描第1天必须有人带。',
        xp: 120,
        time: '约4分钟',
        guide: '分色绿灯后才来。顺序：贴标 → 扫描 → 放入。',
        badge: { icon: '📥', title: '扫描有序', desc: '不扫不进箱。先做一个工位。' },
        steps: [
          {
            type: 'info',
            title: '贴标 → 扫描 → 放入',
            guide: '严重错误：不扫就往里塞。',
            blocks: [
              { h: '📥 装箱', p: '组长给传送带绿灯后，再到对应承运商工位。' },
              {
                flow: [
                  '贴上 / 放好容器标签',
                  '扫描包裹',
                  '放入：大箱（约400–550）或大件堆叠'
                ]
              },
              {
                grid: [
                  { icon: '🧑‍🏫', t: '扫描第1天', d: '必须有带教或组长。不要第一天独自扫。' },
                  { icon: '📍', t: '一个工位', d: '先做一个承运商。第一天不要轮四个站。' },
                  { icon: '🔀', t: '承运商错了', d: '退回分拣线，或交给对应同事。绝不“先塞进去再说”。' },
                  { icon: '⚠️', t: '不扫不进', d: '大箱、堆叠、拖车都不能例外。' }
                ]
              },
              { highlight: 'USPS 大件走堆叠/另车流程 — 不要和大箱小件混在一起（按当班安排）。' }
            ]
          },
          {
            type: 'quiz',
            title: '小测验 · 工位顺序',
            guide: '工位顺序固定。',
            question: '在承运商工位，正确顺序是？',
            options: [
              '放入 → 扫描 → 贴标',
              '贴标 → 扫描 → 放入',
              '先扫进拖车 → 再放大箱',
              '车满了可以不贴标直接塞'
            ],
            correct: 1,
            feedback: {
              ok: '贴标 → 扫描 → 放入。不扫不进。',
              fail: '顺序：容器标签 → 扫描 → 放入。'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: '小测验 · 严重错误',
            guide: '这会伤质量和客诉。',
            question: '装箱时哪个是严重错误？',
            options: [
              '不确定就问带教',
              '不扫描就放进大箱',
              '先只做一个工位',
              '扫描第1天请人帮忙'
            ],
            correct: 1,
            feedback: {
              ok: '不扫描（或扫错）就放进箱，是严重错误。',
              fail: '严重错误是不扫就放。问人和求助是对的。'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-mas',
        icon: '🚀',
        color: 'rgba(244,63,94,.18)',
        num: '任务 05',
        title: '更多职责',
        desc: '换车、封箱，之后按需要装车交接。',
        xp: 100,
        time: '约4分钟',
        guide: '会装箱之后。组长按货量安排。',
        badge: { icon: '🚀', title: '职责加码', desc: '知道换车、封箱和按承运商装车。' },
        steps: [
          {
            type: 'info',
            title: '换车、封箱、装车',
            guide: '大约第2～4周，看班次。不是传送带第1天。',
            blocks: [
              { h: '🚀 更多职责', p: '' },
              {
                grid: [
                  { icon: '🔄', t: '负责换车', d: '满车送工位，空车补回传送带。货还在掉时，不要让带上没空车。' },
                  { icon: '🔒', t: '封箱', d: '大箱/堆叠装满后，按当班做法封好，交给装车。' },
                  { icon: '🚚', t: '装车 / 交接', d: '选该承运商的 load/ship → 装时逐件扫描 → 装进该承运商拖车。不要混承运商。' },
                  { icon: '📅', t: '约30天', d: '能独立做本岗，质量可接受，知道找谁（带教 → 组长）。' }
                ]
              },
              { highlight: '三条不能碰的红线：分错颜色/承运商 · 不扫就进箱 · 忽视安全（叉车、攀爬、不报告）。' }
            ]
          },
          {
            type: 'quiz',
            title: '小测验 · 装车',
            guide: '试点最后一题。',
            question: '装拖车时必须遵守什么？',
            options: [
              '拖车有空就混装不同承运商',
              '逐件扫描，并按承运商装车',
              '大箱已封就可以跳过扫描',
              '传送带第1天就可以没人带去装车'
            ],
            correct: 1,
            feedback: {
              ok: '装时逐件扫描，按承运商装拖车。不要混装。',
              fail: '装车：逐件扫描，同一拖车不要混承运商。'
            },
            xp: 30
          }
        ]
      }
    ],

    en: [
      {
        id: 'm-seguridad',
        icon: '🛡️',
        color: 'rgba(56,189,248,.2)',
        num: 'MISSION 01',
        title: '3 safety rules',
        desc: 'People vs forklifts, no climbing, report if it hurts.',
        xp: 100,
        time: '~4 min',
        guide: 'Three short lines. Memorize them.',
        badge: { icon: '🛡️', title: 'Safe floor', desc: 'You know the 3: eye contact, no climb, report.' },
        steps: [
          {
            type: 'info',
            title: 'The 3 rules (floor)',
            guide: 'One line each. Same on the poster and on the floor.',
            blocks: [
              { h: '🛡️ 3 safety rules — Prime Choice', p: 'Few rules, easy to remember, same across the warehouse.' },
              {
                grid: [
                  { icon: '👀', t: '1. People and forklifts stay apart', d: 'Walk pedestrian aisles. Before crossing: eye contact and wait for a signal. Never walk under a raised load.' },
                  { icon: '🚫', t: '2. Do not climb', d: 'No climbing gaylords, unstable pallets, carts, or dock edges. Need something high? Ask for help.' },
                  { icon: '✋', t: '3. If it hurts or feels unsafe: stop and tell', d: 'Do not ignore a hit, cut, or near-miss. Stop and tell the TL. Nobody punishes you for reporting.' },
                  { icon: '⏱️', t: '10-second version', d: '1) Eye contact with the forklift. 2) Do not climb. 3) If it hurts, tell someone.' }
                ]
              },
              { highlight: 'Buddy / TL: teach these on the day-1 tour. Early reports stop risk from staying on the floor.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Safety',
            guide: 'Pick the right answer to close the module.',
            question: 'Before you cross in front of a forklift, what do you do?',
            options: [
              'Run fast so you do not slow the line',
              'Make eye contact with the operator and wait for a signal',
              'Walk under the load if it is high enough',
              'Keep going if the aisle “looks clear”'
            ],
            correct: 1,
            feedback: {
              ok: 'Right. Eye contact + signal. The forklift gets space priority.',
              fail: 'Rule 1: eye contact and wait for a signal. People and forklifts stay apart.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · Report',
            guide: 'Last safety question.',
            question: 'You get hit — or almost have an accident. What do you do?',
            options: [
              'Keep working so you do not lose time',
              'Stop and tell the TL',
              'Only mention it at end of shift if it really hurts',
              'Hide it so you do not “look bad”'
            ],
            correct: 1,
            feedback: {
              ok: 'Yes. If it hurts or feels unsafe: stop and tell. Hiding it hurts the team.',
              fail: 'Rule 3: stop and tell the TL. Nobody punishes you for reporting.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-proceso',
        icon: '🗺️',
        color: 'rgba(13,148,136,.25)',
        num: 'MISSION 02',
        title: 'Outbound process map',
        desc: 'Packing to trailer: belt → carts → scan → load.',
        xp: 80,
        time: '~3 min',
        guide: 'Get the map first. Then we go stage by stage.',
        badge: { icon: '🗺️', title: 'Clear map', desc: 'You see packing → outbound → load.' },
        steps: [
          {
            type: 'info',
            title: 'Flow at a glance',
            guide: 'Same steps day and night.',
            blocks: [
              { h: '🗺️ Outbound process', p: 'After packing: shipping / sort & load.' },
              {
                flow: [
                  'Gather packages from the belt',
                  'Sort into carts by color (carrier)',
                  'Swap a full cart for an empty one',
                  'Station: label + scan → gaylord / stack',
                  'Close container → hand off to load',
                  'Load: scan to trailer by carrier'
                ]
              },
              { highlight: 'Training path (do not skip): belt for several days → containerization/scan → more responsibility.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Order',
            guide: 'Remember the order?',
            question: 'What is the correct training order?',
            options: [
              'Scan on day 1, then learn colors',
              'Belt (colors) → containerization/scan → more',
              'Load the trailer first, then the belt',
              'Rotate all 4 stations on day 1'
            ],
            correct: 1,
            feedback: {
              ok: 'Yes. Solid colors on the belt first; then container; then more.',
              fail: 'Do not jump ahead to scan. Belt first (days / ~1 week), then containerization.'
            },
            xp: 20
          }
        ]
      },
      {
        id: 'm-cinta',
        icon: '📦',
        color: 'rgba(245,158,11,.2)',
        num: 'MISSION 03',
        title: 'Belt and colors',
        desc: 'Days 1–~7: sort by color with a buddy. No solo scan.',
        xp: 120,
        time: '~5 min',
        guide: 'You start here. Several days on the belt. No solo scanning yet.',
        badge: { icon: '📦', title: 'Colors ready', desc: 'You know carriers, carts, and “don’t guess”.' },
        steps: [
          {
            type: 'info',
            title: 'Colors = carriers',
            guide: 'Memorize the chart. It is on the wall by the belt.',
            blocks: [
              { h: '📦 Belt — sort by color', p: 'Day 1 and several days / up to ~1 week: colors only with a buddy. No scan or containerization on day 1.' },
              {
                colors: [
                  { bg: 'rgba(34,197,94,.25)', bd: 'rgba(34,197,94,.5)', name: 'Green', sub: 'USPS' },
                  { bg: 'rgba(244,63,94,.25)', bd: 'rgba(244,63,94,.5)', name: 'Red', sub: 'Swift' },
                  { bg: 'rgba(56,189,248,.25)', bd: 'rgba(56,189,248,.5)', name: 'Blue', sub: 'Speedex' },
                  { bg: 'rgba(249,115,22,.28)', bd: 'rgba(249,115,22,.55)', name: 'Orange', sub: 'Uni Uni' },
                  { bg: 'rgba(255,255,255,.08)', bd: 'rgba(255,255,255,.12)', name: 'Separate cart', sub: 'Large USPS boxes' }
                ]
              },
              { highlight: 'Gofo: color / station TBD — do not invent a color before it launches.' },
              {
                grid: [
                  { icon: '🤝', t: 'Named buddy', d: 'If you get stuck, find your buddy; if not there, the TL. Do not stand silent.' },
                  { icon: '❓', t: 'Unsure of carrier', d: 'Do not guess. Ask, or return the package to the line.' },
                  { icon: '🚫', t: 'No solo scan', d: 'Scanning comes later, when the TL says so. Not on day 4–5 if colors still mix.' },
                  { icon: '🚦', t: 'TL traffic light', d: '🟢 stay on belt / ready for container · 🟡 more help on belt · 🔴 risk' }
                ]
              }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Color',
            guide: 'Right carrier = fewer claims later.',
            question: 'The red cart is for…',
            options: ['USPS', 'Swift', 'Speedex', 'Uni Uni'],
            correct: 1,
            feedback: {
              ok: 'Red = Swift. Green USPS, blue Speedex, orange Uni Uni.',
              fail: 'Red is Swift. Check the color chart again.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · No solo scan',
            guide: 'Key pilot rule.',
            question: 'In your first days on the belt, can you scan alone?',
            options: [
              'Yes, from day 1 to “learn faster”',
              'No: several days / ~1 week on the belt with a buddy; scan later when the TL says',
              'Yes, after 4 days even if colors still confuse you',
              'Only on night shift'
            ],
            correct: 1,
            feedback: {
              ok: 'Correct. Solid colors first. Containerization (and scan) wait for 🟢 on the belt.',
              fail: 'Do not jump to solo scan. Belt first, with a buddy.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-contenedor',
        icon: '📥',
        color: 'rgba(167,139,250,.22)',
        num: 'MISSION 04',
        title: 'Containerization and scan',
        desc: 'Label → scan → gaylord / stack. Day-1 scan with a buddy.',
        xp: 120,
        time: '~4 min',
        guide: 'Only after you are 🟢 on colors. Order: label → scan → place.',
        badge: { icon: '📥', title: 'Scan in order', desc: 'No scan, no in. One station first.' },
        steps: [
          {
            type: 'info',
            title: 'Label → scan → place',
            guide: 'The bad error: place without scanning.',
            blocks: [
              { h: '📥 Containerization', p: 'When the TL marks 🟢 on the belt → move to that carrier’s station.' },
              {
                flow: [
                  'Put on / place the container label',
                  'Scan the package',
                  'Place it: gaylord (~400–550) or stack large boxes'
                ]
              },
              {
                grid: [
                  { icon: '🧑‍🏫', t: 'Day-1 scan', d: 'With buddy or TL. Not alone on first scan day.' },
                  { icon: '📍', t: 'One station', d: 'Start with 1 carrier. Do not rotate all 4 on day 1.' },
                  { icon: '🔀', t: 'Wrong carrier', d: 'Return to the sort line or hand it to that carrier’s person. Never “just put it in”.' },
                  { icon: '⚠️', t: 'No scan, no in', d: 'Not into the gaylord, stack, or trailer.' }
                ]
              },
              { highlight: 'Large USPS boxes go to the stack / separate-cart flow — do not mix with the small gaylord if that is how the shift is set up.' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Station order',
            guide: 'Fixed order at the station.',
            question: 'At the carrier station, the correct order is…',
            options: [
              'Place → scan → label',
              'Label → scan → place',
              'Scan to trailer → place in gaylord',
              'Place without a label if the cart is already full'
            ],
            correct: 1,
            feedback: {
              ok: 'Label → scan → place. No scan, no in.',
              fail: 'Order: container label → scan → place.'
            },
            xp: 25
          },
          {
            type: 'quiz',
            title: 'Trivia · Bad error',
            guide: 'This hurts quality and claims.',
            question: 'Which is a serious error in containerization?',
            options: [
              'Asking your buddy when unsure',
              'Putting a package in the gaylord without scanning',
              'Starting at one station only',
              'Asking for help on day-1 scan'
            ],
            correct: 1,
            feedback: {
              ok: 'Placing without a scan (or a bad scan) is a serious error.',
              fail: 'The serious error is placing without scanning. Asking for help is good.'
            },
            xp: 25
          }
        ]
      },
      {
        id: 'm-mas',
        icon: '🚀',
        color: 'rgba(244,63,94,.18)',
        num: 'MISSION 05',
        title: 'More responsibility',
        desc: 'Cart swap, close container, then load/handover.',
        xp: 100,
        time: '~4 min',
        guide: 'After you can handle container work. The TL assigns by volume.',
        badge: { icon: '🚀', title: 'More ownership', desc: 'You know swap, close, and load by carrier.' },
        steps: [
          {
            type: 'info',
            title: 'Swap, close, load',
            guide: 'About weeks 2–4 by shift. Not belt day 1.',
            blocks: [
              { h: '🚀 More responsibility', p: '' },
              {
                grid: [
                  { icon: '🔄', t: 'Own the cart swap', d: 'Full cart → station; empty cart back to the belt. Do not leave the belt without an empty if product keeps coming.' },
                  { icon: '🔒', t: 'Close the container', d: 'When the gaylord/stack is full, close it the way your shift does, then hand off to load.' },
                  { icon: '🚚', t: 'Load / handover', d: 'Pick that carrier’s load/ship → scan each package while loading → trailer for that carrier. Do not mix carriers.' },
                  { icon: '📅', t: '~30 days', d: 'You work your role alone, quality is OK, you know who to ask (buddy → TL).' }
                ]
              },
              { highlight: 'Three non-negotiables: wrong color/carrier · place without scan · ignore safety (forklifts, climbing, not reporting).' }
            ]
          },
          {
            type: 'quiz',
            title: 'Trivia · Load',
            guide: 'Last trivia of the pilot.',
            question: 'When loading the trailer, what must you respect?',
            options: [
              'Mix carriers if the trailer has space',
              'Scan each package and load by carrier',
              'Skip the scan if the gaylord was already closed',
              'Load alone on belt day 1'
            ],
            correct: 1,
            feedback: {
              ok: 'Scan each package while loading, trailer by carrier. No mixing.',
              fail: 'Load: scan each package and do not mix carriers on the same trailer.'
            },
            xp: 30
          }
        ]
      }
    ]
  };

  const LANGS = [
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' }
  ];

  function t(lang, key, vars) {
    const dict = UI[lang] || UI.es;
    let s = dict[key] != null ? dict[key] : (UI.es[key] || key);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      });
    }
    return s;
  }

  function missions(lang) {
    return MISSIONS[lang] || MISSIONS.es;
  }

  global.PCI18n = { UI, MISSIONS, LANGS, t, missions };
})(typeof window !== 'undefined' ? window : globalThis);
