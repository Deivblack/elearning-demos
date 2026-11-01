/* Prime Choice outbound — UI + lessons: es / zh (简体) / en */
(function (global) {
  const UI = {
    es: {
      docTitle: 'Prime Choice — Onboarding Outbound',
      hudBrand: 'Prime Choice · Outbound',
      langLabel: 'Idioma',
      badgeDemo: 'Piloto · ~10 min',
      welcomeHi: 'Bienvenido/a a',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: 'Outbound',
      welcomeSub: 'Seguridad, cinta por colores y contenedor. Gana XP con misiones cortas.',
      firstNamePh: 'Nombre',
      lastNamePh: 'Apellido',
      startBtn: '¡Empezar!',
      pathSafety: '1 Seguridad',
      pathProcess: '2 Proceso',
      pathBelt: '3 Cinta',
      pathContainer: '4 Contenedor',
      pathMore: '5 Más',
      needName: 'Escribe tu nombre y apellido para empezar.',
      guideDefault: 'Tu guía',
      guideMissions: 'Completa las misiones. Puedes repetir: se guarda tu mejor puntaje.',
      guideMissionsNamed: 'Hola {name}. 5 misiones · puedes reintentar · mejor puntaje cuenta.',
      hello: 'Hola, {name}',
      missionsTitle: 'Tu ruta',
      missionsSub: 'Cinta primero (varios días, sin escanear solo) → contenedor → más.',
      xpCompleteMission: '+{xp} XP al completar',
      stepOf: '{num} · Paso {cur}/{total}',
      trivia: 'Trivia',
      activity: 'Actividad',
      backMap: '← Mapa',
      next: 'Siguiente →',
      closeModule: '✓ Cerrar módulo',
      backToMap: 'Volver al mapa',
      answerToContinue: 'Responde para continuar',
      completedTag: 'Hecha',
      retryTag: 'Reintentar',
      bestTag: 'Mejor {n}',
      triviaXpTag: '{n} XP',
      continueBtn: 'Continuar →',
      xpAccum: 'XP acumulados',
      resultsGuide: 'Listo. Tu avance quedó en este navegador (piloto).',
      resultsTitle: 'Onboarding completado',
      resultsSub: 'Felicitaciones, {name}. Completaste la ruta outbound.',
      xpTotal: 'XP total',
      triviaCorrect: 'Aciertos',
      modulesLabel: 'Módulos',
      scoreboardTitle: 'MEJOR POR MÓDULO',
      pts: '{n} pts',
      certTitle: 'Registro de piloto',
      certLine: '{name} · {when} · {xp} XP · {duration}',
      anotherTry: 'Otro intento',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: 'Nuevo en piso',
      level1: 'Cinta en marcha',
      level2: 'Listo para scan',
      level3: 'Outbound sólido',
      tapColor: 'Toca el color del carrito',
      orderHint: 'Toca los pasos en orden',
      orderReset: 'Reiniciar orden',
      scenePrompt: '¿Cuál está MAL?',
      correctShort: '¡Bien!',
      wrongShort: 'Intenta de nuevo'
    },
    zh: {
      docTitle: 'Prime Choice — 出库入职培训',
      hudBrand: 'Prime Choice · 出库',
      langLabel: '语言',
      badgeDemo: '试点 · 约10分钟',
      welcomeHi: '欢迎来到',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: '出库',
      welcomeSub: '安全、传送带分色、装箱。短任务赚 XP。',
      firstNamePh: '名',
      lastNamePh: '姓',
      startBtn: '开始！',
      pathSafety: '1 安全',
      pathProcess: '2 流程',
      pathBelt: '3 传送带',
      pathContainer: '4 装箱',
      pathMore: '5 更多',
      needName: '请填写姓名后再开始。',
      guideDefault: '你的向导',
      guideMissions: '完成任务。可以重试，保留最高分。',
      guideMissionsNamed: '你好，{name}。5 个任务 · 可重试 · 记最高分。',
      hello: '你好，{name}',
      missionsTitle: '培训路线',
      missionsSub: '先传送带（几天，不要独自扫描）→ 装箱 → 更多。',
      xpCompleteMission: '完成 +{xp} XP',
      stepOf: '{num} · {cur}/{total}',
      trivia: '小测验',
      activity: '练习',
      backMap: '← 任务图',
      next: '下一步 →',
      closeModule: '✓ 完成本关',
      backToMap: '返回',
      answerToContinue: '请先完成再继续',
      completedTag: '已完成',
      retryTag: '重试',
      bestTag: '最高 {n}',
      triviaXpTag: '{n} XP',
      continueBtn: '继续 →',
      xpAccum: '累计 XP',
      resultsGuide: '完成了。成绩保存在本浏览器（试点）。',
      resultsTitle: '培训完成',
      resultsSub: '恭喜，{name}。出库路线已完成。',
      xpTotal: '总 XP',
      triviaCorrect: '答对',
      modulesLabel: '模块',
      scoreboardTitle: '各模块最高分',
      pts: '{n} 分',
      certTitle: '试点记录',
      certLine: '{name} · {when} · {xp} XP · {duration}',
      anotherTry: '再试一次',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: '现场新人',
      level1: '传送带上手',
      level2: '可学扫描',
      level3: '出库扎实',
      tapColor: '点选推车颜色',
      orderHint: '按顺序点步骤',
      orderReset: '重排',
      scenePrompt: '哪一个是错的？',
      correctShort: '对！',
      wrongShort: '再试'
    },
    en: {
      docTitle: 'Prime Choice — Outbound Onboarding',
      hudBrand: 'Prime Choice · Outbound',
      langLabel: 'Language',
      badgeDemo: 'Pilot · ~10 min',
      welcomeHi: 'Welcome to',
      welcomeBrand: 'Prime Choice',
      welcomeSubBrand: 'Outbound',
      welcomeSub: 'Safety, belt colors, containers. Short missions. Earn XP.',
      firstNamePh: 'First name',
      lastNamePh: 'Last name',
      startBtn: 'Start!',
      pathSafety: '1 Safety',
      pathProcess: '2 Process',
      pathBelt: '3 Belt',
      pathContainer: '4 Container',
      pathMore: '5 More',
      needName: 'Enter first and last name to start.',
      guideDefault: 'Your guide',
      guideMissions: 'Finish missions. You can retry — best score is kept.',
      guideMissionsNamed: 'Hi {name}. 5 missions · retry OK · best score counts.',
      hello: 'Hi, {name}',
      missionsTitle: 'Your path',
      missionsSub: 'Belt first (days, no solo scan) → container → more.',
      xpCompleteMission: '+{xp} XP when done',
      stepOf: '{num} · {cur}/{total}',
      trivia: 'Trivia',
      activity: 'Try it',
      backMap: '← Map',
      next: 'Next →',
      closeModule: '✓ Finish module',
      backToMap: 'Back to map',
      answerToContinue: 'Answer to continue',
      completedTag: 'Done',
      retryTag: 'Retry',
      bestTag: 'Best {n}',
      triviaXpTag: '{n} XP',
      continueBtn: 'Continue →',
      xpAccum: 'XP so far',
      resultsGuide: 'Done. Saved in this browser for the pilot.',
      resultsTitle: 'Onboarding complete',
      resultsSub: 'Nice work, {name}. Outbound path finished.',
      xpTotal: 'Total XP',
      triviaCorrect: 'Correct',
      modulesLabel: 'Modules',
      scoreboardTitle: 'BEST BY MODULE',
      pts: '{n} pts',
      certTitle: 'Pilot record',
      certLine: '{name} · {when} · {xp} XP · {duration}',
      anotherTry: 'Try again',
      locked: '🔒',
      play: '▶️',
      done: '✅',
      level0: 'New on floor',
      level1: 'Belt in progress',
      level2: 'Ready for scan',
      level3: 'Solid outbound',
      tapColor: 'Tap the cart color',
      orderHint: 'Tap the steps in order',
      orderReset: 'Reset',
      scenePrompt: 'Which is WRONG?',
      correctShort: 'Nice!',
      wrongShort: 'Try again'
    }
  };

  /* Shared color options (labels localized per mission step) */
  function colorOpts(lang) {
    const L = {
      es: [
        { id: 'green', hex: '#22C55E', label: '🟢 Verde', sub: 'USPS' },
        { id: 'red', hex: '#F43F5E', label: '🔴 Rojo', sub: 'Swift' },
        { id: 'blue', hex: '#38BDF8', label: '🔵 Azul', sub: 'Speedex' },
        { id: 'orange', hex: '#F97316', label: '🟠 Naranja', sub: 'Uni Uni' }
      ],
      zh: [
        { id: 'green', hex: '#22C55E', label: '🟢 绿', sub: 'USPS' },
        { id: 'red', hex: '#F43F5E', label: '🔴 红', sub: 'Swift' },
        { id: 'blue', hex: '#38BDF8', label: '🔵 蓝', sub: 'Speedex' },
        { id: 'orange', hex: '#F97316', label: '🟠 橙', sub: 'Uni Uni' }
      ],
      en: [
        { id: 'green', hex: '#22C55E', label: '🟢 Green', sub: 'USPS' },
        { id: 'red', hex: '#F43F5E', label: '🔴 Red', sub: 'Swift' },
        { id: 'blue', hex: '#38BDF8', label: '🔵 Blue', sub: 'Speedex' },
        { id: 'orange', hex: '#F97316', label: '🟠 Orange', sub: 'Uni Uni' }
      ]
    };
    return L[lang] || L.es;
  }

  function buildMissions(lang) {
    const C = colorOpts(lang);
    const redIdx = C.findIndex((c) => c.id === 'red');
    const greenIdx = C.findIndex((c) => c.id === 'green');

    const copy = {
      es: {
        m1: {
          title: '3 reglas de seguridad',
          desc: 'Mirada · no trepar · avisar.',
          guide: '3 frases. Memorízalas.',
          badge: { icon: '🛡️', title: 'Piso seguro', desc: 'Mirada, no trepar, avisar.' },
          infoTitle: 'Las 3 reglas',
          infoGuide: 'Iconos + una línea cada una.',
          blocks: [
            { h: '🛡️ Seguridad en piso', p: '' },
            {
              grid: [
                { icon: '👀', t: '1. Mirada con el montacargas', d: 'Contacto visual. Espera señal.' },
                { icon: '🚫', t: '2. No te subas', d: 'No trepes gaylords, carritos ni dock.' },
                { icon: '✋', t: '3. Si duele, avisas', d: 'Paras y avisas al TL.' },
                { icon: '📦', t: 'Buddy / TL', d: 'Día 1: estas 3 en el tour.' }
              ]
            }
          ],
          sceneTitle: 'Seguridad: ¿cuál está mal?',
          sceneGuide: 'Toca la escena incorrecta.',
          scenePrompt: '¿Cuál está MAL?',
          scenes: [
            { icon: '👀🚜', label: 'Mira al operador y espera', wrong: false },
            { icon: '🧗📦', label: 'Se sube al gaylord', wrong: true }
          ],
          sceneOk: 'Bien. No trepar.',
          sceneFail: 'Esa está bien. La mala es trepar.',
          q1Title: 'Trivia · Cruce',
          q1: 'Antes de cruzar frente a un montacargas…',
          q1opts: ['Corres sin mirar', 'Contacto visual y esperas señal', 'Pasas debajo de la carga', 'Sigues si “parece libre”'],
          q1ok: 'Correcto: mirada + señal.',
          q1fail: 'Regla 1: contacto visual y espera señal.',
          q1correct: 1
        },
        m2: {
          title: 'Mapa outbound',
          desc: 'Banda → carritos → scan → carga.',
          guide: 'Mapa corto. Luego ordena.',
          badge: { icon: '🗺️', title: 'Mapa claro', desc: 'Sabes el flujo outbound.' },
          infoTitle: 'Flujo',
          infoGuide: 'Mismos pasos día y noche.',
          blocks: [
            { h: '🗺️ Outbound', p: '' },
            {
              flow: [
                '📦 Banda',
                '🎨 Carritos por color',
                '🔄 Cambiar carrito',
                '🏷️ Label + scan',
                '🔒 Cerrar → carga',
                '🚚 Trailer por carrier'
              ]
            },
            { highlight: 'Entrena: cinta (días) → contenedor → más. No saltes.' }
          ],
          orderTitle: 'Ordena el entrenamiento',
          orderGuide: 'Toca en orden.',
          orderPrompt: '¿En qué orden aprendes?',
          orderItems: ['Cinta / colores', 'Contenedor + scan', 'Más responsabilidades'],
          orderOk: 'Sí: cinta → contenedor → más.',
          orderFail: 'Primero cinta, luego scan, luego más.',
          qTitle: 'Trivia · Orden',
          q: 'Orden correcto de entrenamiento:',
          qopts: [
            'Scan día 1, luego colores',
            'Cinta → contenedor/scan → más',
            'Trailer primero',
            '4 estaciones el día 1'
          ],
          qok: 'Cinta primero.',
          qfail: 'No adelantes el scan.',
          qcorrect: 1
        },
        m3: {
          title: 'Cinta y colores',
          desc: 'Colores con buddy. Sin scan solo.',
          guide: 'Memoriza colores. Toca el correcto.',
          badge: { icon: '📦', title: 'Colores listos', desc: 'Sabes carriers y carritos.' },
          infoTitle: 'Colores = carriers',
          infoGuide: 'Tabla de pared.',
          blocks: [
            { h: '📦 Cinta', p: 'Varios días: solo colores con buddy. Sin escanear solo.' },
            {
              colors: C.map((c) => ({ bg: c.hex + '40', bd: c.hex, name: c.label, sub: c.sub }))
            },
            {
              grid: [
                { icon: '🤝', t: 'Buddy', d: 'Si dudas, pregunta.' },
                { icon: '🚫', t: 'Sin scan solo', d: 'Scan cuando diga el TL.' }
              ]
            }
          ],
          colorTitle: 'Color: Swift',
          colorGuide: 'Carrier → carrito.',
          colorPrompt: 'Swift va en…',
          colorCorrect: redIdx,
          colorOk: 'Rojo = Swift.',
          colorFail: 'Swift es rojo.',
          color2Title: 'Color: USPS',
          color2Prompt: 'USPS va en…',
          color2Correct: greenIdx,
          color2Ok: 'Verde = USPS.',
          color2Fail: 'USPS es verde.',
          qTitle: 'Trivia · Scan',
          q: '¿Puedes escanear solo los primeros días?',
          qopts: [
            'Sí, día 1',
            'No: varios días en cinta con buddy; scan después',
            'Sí tras 4 días aunque confundes colores',
            'Solo de noche'
          ],
          qok: 'Cinta primero.',
          qfail: 'Sin scan solo al inicio.',
          qcorrect: 1
        },
        m4: {
          title: 'Contenedor y scan',
          desc: 'Label → scan → meter.',
          guide: 'Orden fijo en la estación.',
          badge: { icon: '📥', title: 'Scan con orden', desc: 'Sin escanear, no entra.' },
          infoTitle: 'En la estación',
          infoGuide: 'Una estación primero.',
          blocks: [
            { h: '📥 Contenerización', p: '' },
            { flow: ['🏷️ Label', '📷 Scan', '📥 Meter (gaylord / apilar)'] },
            {
              grid: [
                { icon: '🧑‍🏫', t: 'Día 1 scan', d: 'Con buddy.' },
                { icon: '⚠️', t: 'Sin scan ≠ entra', d: 'Nunca “ya mételo”.' }
              ]
            }
          ],
          orderTitle: 'Ordena la estación',
          orderGuide: 'Toca en orden correcto.',
          orderPrompt: 'Orden en la estación:',
          orderItems: ['Label', 'Escanear', 'Meter'],
          orderOk: 'Label → scan → meter.',
          orderFail: 'Primero label, luego scan, luego meter.',
          qTitle: 'Trivia · Error',
          q: 'Error grave:',
          qopts: [
            'Preguntar al buddy',
            'Meter sin escanear',
            'Empezar en una estación',
            'Pedir ayuda día 1'
          ],
          qok: 'Meter sin escanear es grave.',
          qfail: 'Lo grave: meter sin scan.',
          qcorrect: 1
        },
        m5: {
          title: 'Más responsabilidades',
          desc: 'Swap, cerrar, carga.',
          guide: 'Después del contenedor.',
          badge: { icon: '🚀', title: 'Más a cargo', desc: 'Swap, cerrar, carga por carrier.' },
          infoTitle: 'Siguiente nivel',
          infoGuide: 'Cuando ya manejas contenedor.',
          blocks: [
            { h: '🚀 Más', p: '' },
            {
              grid: [
                { icon: '🔄', t: 'Cambiar carrito', d: 'Lleno → estación; vacío a la banda.' },
                { icon: '🔒', t: 'Cerrar', d: 'Luego a carga.' },
                { icon: '🚚', t: 'Carga', d: 'Scan cada paquete · un carrier.' },
                { icon: '📅', t: '~30 días', d: 'Solo en tu rol; avisa buddy → TL.' }
              ]
            },
            { highlight: 'No: mal color · meter sin scan · ignorar seguridad.' }
          ],
          sceneTitle: 'Carga: ¿cuál está mal?',
          sceneGuide: 'Toca la mala.',
          scenePrompt: 'En carga, ¿cuál está MAL?',
          scenes: [
            { icon: '📷📦🚚', label: 'Scan cada paquete · un carrier', wrong: false },
            { icon: '🔀🚚', label: 'Mezcla carriers en el trailer', wrong: true }
          ],
          sceneOk: 'No mezclar carriers.',
          sceneFail: 'Lo malo es mezclar carriers.',
          qTitle: 'Trivia · Carga',
          q: 'En carga debes…',
          qopts: [
            'Mezclar si hay espacio',
            'Escanear cada paquete y cargar por carrier',
            'Saltar scan si el gaylord ya cerró',
            'Cargar solo el día 1 de cinta'
          ],
          qok: 'Scan + por carrier.',
          qfail: 'Scan cada uno; sin mezclar.',
          qcorrect: 1
        }
      },
      zh: {
        m1: {
          title: '三条安全规则',
          desc: '对视 · 不爬 · 报告。',
          guide: '三句话。',
          badge: { icon: '🛡️', title: '现场安全', desc: '对视、不爬、报告。' },
          infoTitle: '三条规则',
          infoGuide: '图标 + 一句话。',
          blocks: [
            { h: '🛡️ 现场安全', p: '' },
            {
              grid: [
                { icon: '👀', t: '1. 和叉车对视', d: '对视，等信号。' },
                { icon: '🚫', t: '2. 不要爬', d: '不爬大箱、推车、月台边。' },
                { icon: '✋', t: '3. 疼了就报告', d: '停下告诉组长。' },
                { icon: '📦', t: '带教 / 组长', d: '第1天就要讲。' }
              ]
            }
          ],
          sceneTitle: '安全：哪个是错的？',
          sceneGuide: '点错误的场景。',
          scenePrompt: '哪一个是错的？',
          scenes: [
            { icon: '👀🚜', label: '看司机并等待', wrong: false },
            { icon: '🧗📦', label: '爬上大箱', wrong: true }
          ],
          sceneOk: '对。不要爬。',
          sceneFail: '错的是攀爬。',
          q1Title: '小测验 · 过路',
          q1: '从叉车前穿过之前…',
          q1opts: ['不看就跑', '对视并等信号', '从货物下钻', '看起来空就走'],
          q1ok: '对视 + 等信号。',
          q1fail: '第1条：对视等信号。',
          q1correct: 1
        },
        m2: {
          title: '出库流程',
          desc: '传送带 → 分色 → 扫描 → 装车。',
          guide: '先看图，再排序。',
          badge: { icon: '🗺️', title: '流程清楚', desc: '知道出库流程。' },
          infoTitle: '流程',
          infoGuide: '白班夜班一样。',
          blocks: [
            { h: '🗺️ 出库', p: '' },
            {
              flow: ['📦 传送带', '🎨 按颜色分车', '🔄 换车', '🏷️ 贴标+扫描', '🔒 封箱→装车', '🚚 按承运商装拖车']
            },
            { highlight: '培训：传送带（几天）→ 装箱 → 更多。不要跳。' }
          ],
          orderTitle: '排出培训顺序',
          orderGuide: '按顺序点。',
          orderPrompt: '学习顺序？',
          orderItems: ['传送带 / 分色', '装箱 + 扫描', '更多职责'],
          orderOk: '传送带 → 装箱 → 更多。',
          orderFail: '先传送带，再扫描，再更多。',
          qTitle: '小测验 · 顺序',
          q: '正确培训顺序：',
          qopts: ['第1天扫描再分色', '传送带 → 装箱/扫描 → 更多', '先装拖车', '第1天轮四个工位'],
          qok: '先传送带。',
          qfail: '不要提前扫描。',
          qcorrect: 1
        },
        m3: {
          title: '传送带与颜色',
          desc: '跟人带分色。不要独自扫描。',
          guide: '记颜色，点正确的。',
          badge: { icon: '📦', title: '分色过关', desc: '知道承运商颜色。' },
          infoTitle: '颜色 = 承运商',
          infoGuide: '墙上的表。',
          blocks: [
            { h: '📦 传送带', p: '几天：只跟人带分色。不要独自扫描。' },
            { colors: C.map((c) => ({ bg: c.hex + '40', bd: c.hex, name: c.label, sub: c.sub })) },
            {
              grid: [
                { icon: '🤝', t: '带教', d: '不确定就问。' },
                { icon: '🚫', t: '不要独自扫', d: '等组长说可以。' }
              ]
            }
          ],
          colorTitle: '颜色：Swift',
          colorGuide: '承运商 → 推车。',
          colorPrompt: 'Swift 是…',
          colorCorrect: redIdx,
          colorOk: '红 = Swift。',
          colorFail: 'Swift 是红色。',
          color2Title: '颜色：USPS',
          color2Prompt: 'USPS 是…',
          color2Correct: greenIdx,
          color2Ok: '绿 = USPS。',
          color2Fail: 'USPS 是绿色。',
          qTitle: '小测验 · 扫描',
          q: '头几天可以独自扫描吗？',
          qopts: ['可以，第1天', '不可以：传送带跟几天；之后再扫', '干了4天就能扫', '只有夜班可以'],
          qok: '先分色。',
          qfail: '开始不要独自扫。',
          qcorrect: 1
        },
        m4: {
          title: '装箱与扫描',
          desc: '贴标 → 扫描 → 放入。',
          guide: '工位顺序固定。',
          badge: { icon: '📥', title: '扫描有序', desc: '不扫不进。' },
          infoTitle: '在工位',
          infoGuide: '先做一个工位。',
          blocks: [
            { h: '📥 装箱', p: '' },
            { flow: ['🏷️ 贴标', '📷 扫描', '📥 放入（大箱/堆叠）'] },
            {
              grid: [
                { icon: '🧑‍🏫', t: '扫描第1天', d: '必须有人带。' },
                { icon: '⚠️', t: '不扫不进', d: '绝不“先塞再说”。' }
              ]
            }
          ],
          orderTitle: '排出工位顺序',
          orderGuide: '按正确顺序点。',
          orderPrompt: '工位顺序：',
          orderItems: ['贴标', '扫描', '放入'],
          orderOk: '贴标 → 扫描 → 放入。',
          orderFail: '先贴标，再扫，再放。',
          qTitle: '小测验 · 错误',
          q: '严重错误是：',
          qopts: ['问带教', '不扫描就放进大箱', '只做一个工位', '第1天请人帮忙'],
          qok: '不扫就放是严重错误。',
          qfail: '严重错误：不扫就放。',
          qcorrect: 1
        },
        m5: {
          title: '更多职责',
          desc: '换车、封箱、装车。',
          guide: '会装箱之后。',
          badge: { icon: '🚀', title: '职责加码', desc: '换车、封箱、按承运商装。' },
          infoTitle: '下一阶段',
          infoGuide: '装箱稳定后。',
          blocks: [
            { h: '🚀 更多', p: '' },
            {
              grid: [
                { icon: '🔄', t: '换车', d: '满车去工位；空车回传送带。' },
                { icon: '🔒', t: '封箱', d: '再交装车。' },
                { icon: '🚚', t: '装车', d: '逐件扫 · 一个承运商。' },
                { icon: '📅', t: '约30天', d: '能独立；找带教→组长。' }
              ]
            },
            { highlight: '红线：分错色 · 不扫就进 · 忽视安全。' }
          ],
          sceneTitle: '装车：哪个是错的？',
          sceneGuide: '点错误的。',
          scenePrompt: '装车时哪一个是错的？',
          scenes: [
            { icon: '📷📦🚚', label: '逐件扫描 · 一个承运商', wrong: false },
            { icon: '🔀🚚', label: '拖车里混装承运商', wrong: true }
          ],
          sceneOk: '不要混承运商。',
          sceneFail: '错的是混装。',
          qTitle: '小测验 · 装车',
          q: '装车时必须：',
          qopts: ['有空就混装', '逐件扫描并按承运商装', '封好就能跳过扫描', '传送带第1天独自装'],
          qok: '扫描 + 按承运商。',
          qfail: '逐件扫；不要混。',
          qcorrect: 1
        }
      },
      en: {
        m1: {
          title: '3 safety rules',
          desc: 'Look · don’t climb · tell.',
          guide: '3 short lines.',
          badge: { icon: '🛡️', title: 'Safe floor', desc: 'Look, don’t climb, tell.' },
          infoTitle: 'The 3 rules',
          infoGuide: 'Icons + one line each.',
          blocks: [
            { h: '🛡️ Floor safety', p: '' },
            {
              grid: [
                { icon: '👀', t: '1. Eye contact', d: 'Look at forklift. Wait for signal.' },
                { icon: '🚫', t: '2. Don’t climb', d: 'No gaylords, carts, or dock edges.' },
                { icon: '✋', t: '3. If it hurts, tell', d: 'Stop. Tell the TL.' },
                { icon: '📦', t: 'Buddy / TL', d: 'Day 1 tour: these 3.' }
              ]
            }
          ],
          sceneTitle: 'Safety: which is wrong?',
          sceneGuide: 'Tap the bad scene.',
          scenePrompt: 'Which is WRONG?',
          scenes: [
            { icon: '👀🚜', label: 'Looks + waits', wrong: false },
            { icon: '🧗📦', label: 'Climbs the gaylord', wrong: true }
          ],
          sceneOk: 'Right — don’t climb.',
          sceneFail: 'The bad one is climbing.',
          q1Title: 'Trivia · Crossing',
          q1: 'Before crossing a forklift…',
          q1opts: ['Run without looking', 'Eye contact and wait', 'Walk under the load', 'Go if it “looks clear”'],
          q1ok: 'Look + wait.',
          q1fail: 'Rule 1: eye contact and wait.',
          q1correct: 1
        },
        m2: {
          title: 'Outbound map',
          desc: 'Belt → carts → scan → load.',
          guide: 'Short map. Then order it.',
          badge: { icon: '🗺️', title: 'Clear map', desc: 'You know the flow.' },
          infoTitle: 'Flow',
          infoGuide: 'Same day and night.',
          blocks: [
            { h: '🗺️ Outbound', p: '' },
            {
              flow: ['📦 Belt', '🎨 Color carts', '🔄 Swap cart', '🏷️ Label + scan', '🔒 Close → load', '🚚 Trailer by carrier']
            },
            { highlight: 'Train: belt (days) → container → more. Don’t skip.' }
          ],
          orderTitle: 'Order the training',
          orderGuide: 'Tap in order.',
          orderPrompt: 'Learn in which order?',
          orderItems: ['Belt / colors', 'Container + scan', 'More responsibility'],
          orderOk: 'Belt → container → more.',
          orderFail: 'Belt first, then scan, then more.',
          qTitle: 'Trivia · Order',
          q: 'Correct training order:',
          qopts: ['Scan day 1, then colors', 'Belt → container/scan → more', 'Trailer first', 'All 4 stations day 1'],
          qok: 'Belt first.',
          qfail: 'Don’t jump to scan.',
          qcorrect: 1
        },
        m3: {
          title: 'Belt & colors',
          desc: 'Colors with buddy. No solo scan.',
          guide: 'Learn colors. Tap the right one.',
          badge: { icon: '📦', title: 'Colors ready', desc: 'You know cart colors.' },
          infoTitle: 'Colors = carriers',
          infoGuide: 'Wall chart.',
          blocks: [
            { h: '📦 Belt', p: 'Several days: colors with buddy only. No solo scan.' },
            { colors: C.map((c) => ({ bg: c.hex + '40', bd: c.hex, name: c.label, sub: c.sub })) },
            {
              grid: [
                { icon: '🤝', t: 'Buddy', d: 'Unsure? Ask.' },
                { icon: '🚫', t: 'No solo scan', d: 'Scan when TL says.' }
              ]
            }
          ],
          colorTitle: 'Color: Swift',
          colorGuide: 'Carrier → cart.',
          colorPrompt: 'Swift goes in…',
          colorCorrect: redIdx,
          colorOk: 'Red = Swift.',
          colorFail: 'Swift is red.',
          color2Title: 'Color: USPS',
          color2Prompt: 'USPS goes in…',
          color2Correct: greenIdx,
          color2Ok: 'Green = USPS.',
          color2Fail: 'USPS is green.',
          qTitle: 'Trivia · Scan',
          q: 'Solo scan in the first days?',
          qopts: [
            'Yes, day 1',
            'No: days on belt with buddy; scan later',
            'Yes after 4 days even if colors mix',
            'Night only'
          ],
          qok: 'Belt first.',
          qfail: 'No solo scan at the start.',
          qcorrect: 1
        },
        m4: {
          title: 'Container & scan',
          desc: 'Label → scan → put.',
          guide: 'Fixed station order.',
          badge: { icon: '📥', title: 'Scan in order', desc: 'No scan, no in.' },
          infoTitle: 'At the station',
          infoGuide: 'One station first.',
          blocks: [
            { h: '📥 Container', p: '' },
            { flow: ['🏷️ Label', '📷 Scan', '📥 Put (gaylord / stack)'] },
            {
              grid: [
                { icon: '🧑‍🏫', t: 'Day-1 scan', d: 'With buddy.' },
                { icon: '⚠️', t: 'No scan = no in', d: 'Never “just put it”.' }
              ]
            }
          ],
          orderTitle: 'Order the station',
          orderGuide: 'Tap correct order.',
          orderPrompt: 'Station order:',
          orderItems: ['Label', 'Scan', 'Put in'],
          orderOk: 'Label → scan → put.',
          orderFail: 'Label, then scan, then put.',
          qTitle: 'Trivia · Error',
          q: 'Serious error:',
          qopts: ['Ask buddy', 'Put in without scanning', 'Start at one station', 'Ask help day 1'],
          qok: 'No scan → put is bad.',
          qfail: 'Bad: put without scan.',
          qcorrect: 1
        },
        m5: {
          title: 'More responsibility',
          desc: 'Swap, close, load.',
          guide: 'After container work.',
          badge: { icon: '🚀', title: 'More ownership', desc: 'Swap, close, load by carrier.' },
          infoTitle: 'Next level',
          infoGuide: 'When container is solid.',
          blocks: [
            { h: '🚀 More', p: '' },
            {
              grid: [
                { icon: '🔄', t: 'Swap cart', d: 'Full → station; empty to belt.' },
                { icon: '🔒', t: 'Close', d: 'Then to load.' },
                { icon: '🚚', t: 'Load', d: 'Scan each · one carrier.' },
                { icon: '📅', t: '~30 days', d: 'Solo on your role; buddy → TL.' }
              ]
            },
            { highlight: 'Don’t: wrong color · no-scan put · ignore safety.' }
          ],
          sceneTitle: 'Load: which is wrong?',
          sceneGuide: 'Tap the bad one.',
          scenePrompt: 'At load, which is WRONG?',
          scenes: [
            { icon: '📷📦🚚', label: 'Scan each · one carrier', wrong: false },
            { icon: '🔀🚚', label: 'Mix carriers in trailer', wrong: true }
          ],
          sceneOk: 'Don’t mix carriers.',
          sceneFail: 'Mixing carriers is wrong.',
          qTitle: 'Trivia · Load',
          q: 'At load you must…',
          qopts: [
            'Mix if space',
            'Scan each package and load by carrier',
            'Skip scan if gaylord closed',
            'Load alone on belt day 1'
          ],
          qok: 'Scan + by carrier.',
          qfail: 'Scan each; no mixing.',
          qcorrect: 1
        }
      }
    }[lang];

    const t = copy;
    return [
      {
        id: 'm-seguridad',
        icon: '🛡️',
        color: 'rgba(56,189,248,.2)',
        num: lang === 'zh' ? '任务 01' : lang === 'en' ? 'MISSION 01' : 'MISIÓN 01',
        title: t.m1.title,
        desc: t.m1.desc,
        xp: 100,
        time: '~2 min',
        guide: t.m1.guide,
        badge: t.m1.badge,
        steps: [
          { type: 'info', title: t.m1.infoTitle, guide: t.m1.infoGuide, blocks: t.m1.blocks },
          {
            type: 'scene',
            title: t.m1.sceneTitle,
            guide: t.m1.sceneGuide,
            prompt: t.m1.scenePrompt,
            scenes: t.m1.scenes,
            xp: 25,
            feedback: { ok: t.m1.sceneOk, fail: t.m1.sceneFail }
          },
          {
            type: 'quiz',
            title: t.m1.q1Title,
            guide: '',
            question: t.m1.q1,
            options: t.m1.q1opts,
            correct: t.m1.q1correct,
            xp: 25,
            feedback: { ok: t.m1.q1ok, fail: t.m1.q1fail }
          }
        ]
      },
      {
        id: 'm-proceso',
        icon: '🗺️',
        color: 'rgba(13,148,136,.25)',
        num: lang === 'zh' ? '任务 02' : lang === 'en' ? 'MISSION 02' : 'MISIÓN 02',
        title: t.m2.title,
        desc: t.m2.desc,
        xp: 80,
        time: '~2 min',
        guide: t.m2.guide,
        badge: t.m2.badge,
        steps: [
          { type: 'info', title: t.m2.infoTitle, guide: t.m2.infoGuide, blocks: t.m2.blocks },
          {
            type: 'order',
            title: t.m2.orderTitle,
            guide: t.m2.orderGuide,
            prompt: t.m2.orderPrompt,
            items: t.m2.orderItems,
            xp: 25,
            feedback: { ok: t.m2.orderOk, fail: t.m2.orderFail }
          },
          {
            type: 'quiz',
            title: t.m2.qTitle,
            guide: '',
            question: t.m2.q,
            options: t.m2.qopts,
            correct: t.m2.qcorrect,
            xp: 20,
            feedback: { ok: t.m2.qok, fail: t.m2.qfail }
          }
        ]
      },
      {
        id: 'm-cinta',
        icon: '📦',
        color: 'rgba(245,158,11,.2)',
        num: lang === 'zh' ? '任务 03' : lang === 'en' ? 'MISSION 03' : 'MISIÓN 03',
        title: t.m3.title,
        desc: t.m3.desc,
        xp: 120,
        time: '~2 min',
        guide: t.m3.guide,
        badge: t.m3.badge,
        steps: [
          { type: 'info', title: t.m3.infoTitle, guide: t.m3.infoGuide, blocks: t.m3.blocks },
          {
            type: 'color',
            title: t.m3.colorTitle,
            guide: t.m3.colorGuide,
            prompt: t.m3.colorPrompt,
            options: C,
            correct: t.m3.colorCorrect,
            xp: 25,
            feedback: { ok: t.m3.colorOk, fail: t.m3.colorFail }
          },
          {
            type: 'color',
            title: t.m3.color2Title,
            guide: t.m3.colorGuide,
            prompt: t.m3.color2Prompt,
            options: C,
            correct: t.m3.color2Correct,
            xp: 25,
            feedback: { ok: t.m3.color2Ok, fail: t.m3.color2Fail }
          },
          {
            type: 'quiz',
            title: t.m3.qTitle,
            guide: '',
            question: t.m3.q,
            options: t.m3.qopts,
            correct: t.m3.qcorrect,
            xp: 25,
            feedback: { ok: t.m3.qok, fail: t.m3.qfail }
          }
        ]
      },
      {
        id: 'm-contenedor',
        icon: '📥',
        color: 'rgba(167,139,250,.22)',
        num: lang === 'zh' ? '任务 04' : lang === 'en' ? 'MISSION 04' : 'MISIÓN 04',
        title: t.m4.title,
        desc: t.m4.desc,
        xp: 120,
        time: '~2 min',
        guide: t.m4.guide,
        badge: t.m4.badge,
        steps: [
          { type: 'info', title: t.m4.infoTitle, guide: t.m4.infoGuide, blocks: t.m4.blocks },
          {
            type: 'order',
            title: t.m4.orderTitle,
            guide: t.m4.orderGuide,
            prompt: t.m4.orderPrompt,
            items: t.m4.orderItems,
            xp: 25,
            feedback: { ok: t.m4.orderOk, fail: t.m4.orderFail }
          },
          {
            type: 'quiz',
            title: t.m4.qTitle,
            guide: '',
            question: t.m4.q,
            options: t.m4.qopts,
            correct: t.m4.qcorrect,
            xp: 25,
            feedback: { ok: t.m4.qok, fail: t.m4.qfail }
          }
        ]
      },
      {
        id: 'm-mas',
        icon: '🚀',
        color: 'rgba(244,63,94,.18)',
        num: lang === 'zh' ? '任务 05' : lang === 'en' ? 'MISSION 05' : 'MISIÓN 05',
        title: t.m5.title,
        desc: t.m5.desc,
        xp: 100,
        time: '~2 min',
        guide: t.m5.guide,
        badge: t.m5.badge,
        steps: [
          { type: 'info', title: t.m5.infoTitle, guide: t.m5.infoGuide, blocks: t.m5.blocks },
          {
            type: 'scene',
            title: t.m5.sceneTitle,
            guide: t.m5.sceneGuide,
            prompt: t.m5.scenePrompt,
            scenes: t.m5.scenes,
            xp: 25,
            feedback: { ok: t.m5.sceneOk, fail: t.m5.sceneFail }
          },
          {
            type: 'quiz',
            title: t.m5.qTitle,
            guide: '',
            question: t.m5.q,
            options: t.m5.qopts,
            correct: t.m5.qcorrect,
            xp: 30,
            feedback: { ok: t.m5.qok, fail: t.m5.qfail }
          }
        ]
      }
    ];
  }

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
    return buildMissions(lang || 'es');
  }

  global.PCI18n = { UI, LANGS, t, missions, buildMissions };
})(typeof window !== 'undefined' ? window : globalThis);
