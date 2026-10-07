import type { TranslationSchema } from '../types';

export const esES: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — Juegos de navegador gratis | Moody Man y Mancala',
    siteDescription:
      'Juega gratis a minijuegos instantáneos en Gamelette. Disfruta de Moody Man (el juego del ahorcado) y Mancala (juego de mesa milenario) sin descargas ni registros.',
    homeTitle: 'Gamelette — Juegos de navegador gratis | Moody Man y Mancala',
    homeDescription:
      'Juegos de navegador ligeros, gratuitos e instantáneos en Gamelette. Hogar de Moody Man y Mancala. Sin descargas, diversión al momento.',
    privacyTitle: 'Política de privacidad — Gamelette',
    privacyDescription: 'Información sobre la política de privacidad de Gamelette y su colección de juegos.',
    contactTitle: 'Contacto — Gamelette',
    contactDescription: 'Información de contacto y canal de opiniones para Gamelette.',
    keywords:
      'juegos de navegador, juegos web gratis, juegos online, moody man, mancala, juego del ahorcado, juegos de mesa, bantumi, juegos casuales, juego instantáneo, juegos sin descarga',
  },
  common: {
    skipToContent: 'Saltar al contenido principal',
    brandTagline: 'Juegos Web de Bolsillo',
    brandAria: 'Inicio de Gamelette - Juegos de navegador gratis',
    brandHomeAria: 'Inicio de Gamelette',
    languageSelectorLabel: 'Seleccionar idioma',
    cookedWithLove: 'Cocinado con',
    forWebGamers: 'para jugadores de la web en todo el mundo',
    allRightsReserved: 'Gamelette. Todos los derechos reservados.',
    independentDeploymentNote:
      'Despliegue independiente: los subdominios de cada juego funcionan de forma autónoma respecto a este dominio principal.',
    returnHome: '← Volver al inicio de Gamelette',
    breadcrumbHome: 'Inicio',
  },
  nav: {
    games: 'Los Juegos',
    why: 'Por qué Gamelette',
    about: 'Nosotros',
    playNow: 'Jugar ahora',
  },
  hero: {
    badge: 'Una receta fresca de juegos web',
    badgeHighlight: 'Gratis e Instantáneo',
    titleLine1: 'Juegos de Navegador Ligeros.',
    titleLine2: 'Preparados para Divertirse al Instante.',
    description:
      'Te damos la bienvenida a Gamelette — una cuidada selección de juegos web ligeros y sin fricción. Sin instaladores pesados, sin muros de pago y sin registros. Solo entra y juega en tu navegador.',
    descriptionBrand: 'Gamelette',
    ctaExplore: 'Explorar los juegos',
    ctaWhy: '¿Por qué "Gamelette"?',
    propFreeTitle: '100% Gratis',
    propFreeDesc: 'Sin pagos ocultos',
    propInstallTitle: 'Cero Instalación',
    propInstallDesc: 'Se abre en una pestaña',
    propDeviceTitle: 'Cualquier Dispositivo',
    propDeviceDesc: 'Móvil, tablet y PC',
    propBreakTitle: 'Pausas Rápidas',
    propBreakDesc: 'Listo para jugar',
  },
  gamesSection: {
    badge: '🎮 Disponibles ahora',
    title: 'Recién Salidos de la Sartén',
    subtitle:
      'Elige un juego a continuación para empezar directamente. Cada uno corre en su propio subdominio con carga instantánea y sin barreras.',
    expectTitle: 'Qué incluye:',
    playAction: 'Jugar a {title}',
    playAria: 'Jugar a {title} ahora en {subdomain} (se abre en nueva pestaña)',
    teaserBadge: 'Más juegos cocinándose a fuego lento',
    teaserTitle: 'Más juegos cocinándose a fuego lento',
    teaserDesc:
      'Estamos preparando nuevos juegos diseñados para la web. Pronto sumaremos pasatiempos de palabras, retos de ingenio y clásicos por turnos con la misma filosofía instantánea.',
    teaserPrototyping: 'En prototipado',
    teaserWebFirst: 'Siempre web-first',
    teaserNoBloat: 'Sin descargas innecesarias',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: 'Adivina palabras con múltiples modos y categorías',
      category: 'Juego de palabras',
      previewAlt: 'Ilustración del juego Moody Man y personajes expresivos',
      description:
        'Una visión renovada del clásico juego del ahorcado. Pon a prueba tu léxico en diversas categorías, vence al reloj y no pierdas el buen humor.',
      tags: ['Palabras', 'Varios modos', 'Individual y casual', 'Partidas rápidas'],
      features: [
        'Múltiples categorías temáticas y distintos niveles de dificultad',
        'Teclado en pantalla interactivo y soporte de teclado físico',
        'Animaciones expresivas del estado de ánimo y efectos de sonido',
        'Se ejecuta al instante en móviles, tabletas y ordenadores',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: 'El clásico juego de mesa de siembra y captura',
      category: 'Estrategia y tablero',
      previewAlt: 'Tablero de madera y fosas de juego de Mancala',
      description:
        'El milenario juego de estrategia adaptado a la web actual. Siembra fichas en los cuencos de madera, captura las piezas del rival y domina este duelo táctico.',
      tags: ['Estrategia clásica', 'Por turnos', 'Contra la IA o 2 Jugadores', 'Tablero ancestral'],
      features: [
        'Reglas auténticas de Bantumi / Mancala con mecánica de siembra',
        'Inteligencia artificial para jugar a solas o modo para dos jugadores',
        'Diseño pulido en madera con fluidas animaciones de piedras',
        'Carga instantánea mediante estándares web sin descargas',
      ],
    },
  },
  whySection: {
    badge: '⚡ Creado para la diversión rápida',
    title: '¿Por qué jugar en Gamelette?',
    subtitle:
      'Los juegos web no deberían requerir gigabytes de espacio ni registros tediosos. Así es como logramos que todo sea ágil y agradable.',
    card1Title: 'Juego directo en el navegador',
    card1Desc:
      'Abre un enlace y la partida comienza de inmediato. Sin descargas, sin esperas de actualización y sin ocupar espacio en tu dispositivo.',
    card2Title: 'Adaptable y accesible',
    card2Desc:
      'Tanto si juegas con teclado y ratón en el ordenador como si tocas la pantalla de tu móvil, la interfaz se amolda a la perfección.',
    card3Title: 'Subdominios específicos',
    card3Desc:
      'Cada juego está alojado en un subdominio dedicado para garantizar el máximo rendimiento e independencia de la página principal.',
  },
  aboutSection: {
    badge: '🍳 La historia detrás del nombre',
    title: '¿Qué es Gamelette?',
    subtitle:
      'Un juego de palabras entre «game» (juego) y «omelette» (tortilla francesa): sencillo, sustancioso y recién hecho.',
    card1Title: 'La filosofía de la tortilla',
    card1Desc:
      'Una buena tortilla no necesita complicaciones: solo buenos ingredientes, fuego vivo y un par de minutos. Creemos que los juegos casuales deben ser igual. Para una pausa de cinco minutos no tendrías por qué soportar barras de descarga interminables ni molestos anuncios.',
    card2Title: 'Creado para la web abierta',
    card2Desc:
      'Ambos juegos están desarrollados con estándares web modernos para rendir con fluidez en cualquier navegador actual. Gamelette es el punto de encuentro en gamelette.com, mientras que cada juego se despliega en su propio subdominio (moodyman.gamelette.com y mancala.gamelette.com).',
    card3Title: 'Respeto por tu tiempo',
    card3Desc:
      'Todos los títulos de Gamelette son completamente gratuitos. Nos centramos al cien por cien en la jugabilidad para que te concentres en resolver palabras o ganar partidas sin distracciones.',
  },
  footer: {
    aboutText:
      'Gamelette es una colección de bolsillo con juegos web gratuitos cocinados para desconectar unos minutos. Creado con mimo y sin instalaciones.',
    gamesHeading: 'Juegos',
    allGames: 'Todos los juegos',
    siteHeading: 'Sitio y Legal',
    aboutLink: 'Sobre Gamelette',
    privacyLink: 'Política de privacidad',
    contactLink: 'Contacto',
  },
  privacyPage: {
    breadcrumb: 'Política de privacidad',
    badge: '📋 Datos y Privacidad',
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: octubre de 2026',
    section1Title: '1. Resumen general',
    section1Text:
      'Gamelette (gamelette.com) es un portal web abierto que ofrece enlaces a juegos de navegador ligeros. Apostamos por un diseño respetuoso con la privacidad: puedes explorar el catálogo y jugar de inmediato sin registrarte.',
    section2Title: '2. Información personal',
    section2Text:
      'Gamelette no te solicita nombre, correo electrónico, ubicación física ni datos de pago para ver esta página o jugar a los juegos enlazados.',
    section3Title: '3. Subdominios de juego independientes',
    section3Text:
      'Los juegos enlazados (incluyendo moodyman.gamelette.com y mancala.gamelette.com) están alojados en subdominios independientes. El progreso de la partida (como puntuaciones o ajustes locales) puede guardarse en el almacenamiento local de tu navegador (LocalStorage) en tu propio dispositivo, sin enviarse a servidores de seguimiento.',
    section4Title: '4. Registros del servidor y alojamiento',
    section4Text:
      'Como en la inmensa mayoría de sitios alojados en plataformas como Netlify, los registros técnicos estándar (dirección IP, agente de usuario, URL solicitada) pueden procesarse de forma transitoria por seguridad y rendimiento.',
    section5Title: '5. Información de contacto',
    section5Text:
      'Si tienes alguna duda sobre esta declaración de privacidad, puedes contactarnos a través de nuestra página de Contacto.',
  },
  contactPage: {
    breadcrumb: 'Contacto',
    badge: '📬 Canal de Soporte',
    title: 'Ponte en contacto',
    subtitle:
      '¿Tienes comentarios sobre Moody Man o Mancala? ¿Se te ocurre una idea para un nuevo juego? Estaremos encantados de leerte.',
    bugTitle: 'Avisos de fallos',
    bugSubtitle: 'Errores técnicos o sugerencias de juego',
    bugDesc:
      'Por favor, indica el nombre del juego (Moody Man o Mancala) y tu navegador/dispositivo.',
    formTitle: 'Enviar un mensaje',
    formSubtitle: 'Leemos cada mensaje y procuramos responder en pocos días.',
    formSuccess: '¡Mensaje enviado! Gracias por escribirnos, responderemos en breve.',
    labelName: 'Tu nombre',
    placeholderName: 'ej. Alejandro',
    labelTopic: 'Tema / Juego',
    topicGeneral: 'Gamelette (General)',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: 'Tu correo electrónico',
    placeholderEmail: 'alejandro@ejemplo.com',
    labelMessage: 'Mensaje / Sugerencia de juego',
    placeholderMessage: 'Cuéntanos qué te parece o sugiere una idea de juego...',
    btnSubmit: 'Enviar mensaje',
    btnSending: 'Enviando…',
    errorAlert: 'Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.',
  },
};

