import type { TranslationSchema } from '../types';

export const deDE: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — Kostenlose Browser-Spiele | Moody Man & Mancala',
    siteDescription:
      'Spiele kostenlose, sofort startbare Browser-Spiele auf Gamelette. Mit Moody Man (Galgenmännchen-Worträtsel) und Mancala (traditionelles Brettspiel) – ohne Download oder Registrierung.',
    homeTitle: 'Gamelette — Kostenlose Browser-Spiele | Moody Man & Mancala',
    homeDescription:
      'Entdecke kostenlose, leicht zugängliche Web-Spiele auf Gamelette. Heimat von Moody Man und Mancala. Ohne Download, sofortiger Spielspaß.',
    privacyTitle: 'Datenschutzerklärung — Gamelette',
    privacyDescription: 'Datenschutzhinweise für Gamelette und die hier verlinkten Browser-Spiele.',
    contactTitle: 'Kontakt — Gamelette',
    contactDescription: 'Kontaktinformationen und Feedback-Kanal für Gamelette.',
    keywords:
      'Browser-Spiele, kostenlose Web-Spiele, Online-Spiele, Moody Man, Mancala, Worträtsel, Galgenmännchen, Brettspiele, Bantumi, Casual Games, Sofort spielen, Spiele ohne Download',
  },
  common: {
    skipToContent: 'Zum Hauptinhalt springen',
    brandTagline: 'Kompakte Browser-Spiele',
    brandAria: 'Gamelette Startseite - Kostenlose Browser-Spiele',
    brandHomeAria: 'Gamelette Startseite',
    languageSelectorLabel: 'Sprache wählen',
    cookedWithLove: 'Zubereitet mit',
    forWebGamers: 'für Web-Gamer weltweit',
    allRightsReserved: 'Gamelette. Alle Rechte vorbehalten.',
    independentDeploymentNote:
      'Unabhängige Bereitstellung: Spiele-Subdomains laufen unabhängig von dieser Hauptdomain.',
    returnHome: '← Zurück zur Gamelette-Startseite',
    breadcrumbHome: 'Startseite',
  },
  nav: {
    games: 'Die Spiele',
    why: 'Warum Gamelette',
    about: 'Über uns',
    playNow: 'Jetzt spielen',
  },
  hero: {
    badge: 'Frischer Wind für Browser-Spiele',
    badgeHighlight: 'Kostenlos & Sofort',
    titleLine1: 'Bissfeste Browser-Spiele.',
    titleLine2: 'Zubereitet für Schnellen Spaß.',
    description:
      'Willkommen bei Gamelette — deiner kuratierten Anlaufstelle für schlanke, unkomplizierte Web-Spiele. Keine riesigen Launcher, keine Bezahlschranken und kein Setup. Einfach anklicken und direkt im Browser losspielen.',
    descriptionBrand: 'Gamelette',
    ctaExplore: 'Spiele entdecken',
    ctaWhy: 'Warum "Gamelette"?',
    propFreeTitle: '100% Kostenlos',
    propFreeDesc: 'Keine versteckten Kosten',
    propInstallTitle: 'Null Installation',
    propInstallDesc: 'Startet direkt im Tab',
    propDeviceTitle: 'Alle Geräte',
    propDeviceDesc: 'Handy, Tablet & PC',
    propBreakTitle: 'Schnelle Pausen',
    propBreakDesc: 'Direkt spielbereit',
  },
  gamesSection: {
    badge: '🎮 Jetzt verfügbar',
    title: 'Frisch aus der Pfanne',
    subtitle:
      'Wähle unten ein Spiel aus, um direkt loszulegen. Jedes Spiel läuft auf einer eigenen Subdomain mit blitzschnellen Ladezeiten.',
    expectTitle: 'Das erwartet dich:',
    playAction: '{title} spielen',
    playAria: '{title} jetzt auf {subdomain} spielen (öffnet in neuem Tab)',
    teaserBadge: 'Weitere Spiele köcheln auf dem Herd',
    teaserTitle: 'Weitere Spiele köcheln auf dem Herd',
    teaserDesc:
      'Wir tüfteln an weiteren Web-Spielen für unsere Speisekarte. Freu dich auf leichte Worträtsel, Denksportaufgaben und rundenbasierte Klassiker im selben unkomplizierten Stil.',
    teaserPrototyping: 'In Prototyping',
    teaserWebFirst: 'Immer Web-First',
    teaserNoBloat: 'Kein Download-Ballast',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: 'Worträtsel mit vielseitigen Kategorien & Modi',
      category: 'Worträtsel',
      previewAlt: 'Moody Man Spielgrafik mit animierten Charakteren',
      description:
        'Eine moderne Interpretation des klassischen Galgenmännchen-Prinzips. Teste deinen Wortschatz in verschiedenen Kategorien, schlage die Uhr und halte die Laune oben.',
      tags: ['Worträtsel', 'Mehrere Modi', 'Solo & Entspannt', 'Schnelle Runden'],
      features: [
        'Verschiedene Themenkategorien und anpassbare Schwierigkeitsgrade',
        'Interaktive Bildschirmtastatur und volle Unterstützung physischer Tastaturen',
        'Ausdrucksstarke Stimmungs-Animationen und Soundeffekte',
        'Läuft verzögerungsfrei auf Smartphones, Tablets und Desktop-Browsern',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: 'Das klassische Taktik- und Bohnenspiel',
      category: 'Strategie-Brettspiel',
      previewAlt: 'Holzbrett und Mulden des Mancala-Spiels',
      description:
        'Das Jahrtausende alte Taktikspiel neu aufgelegt für das moderne Web. Verteile Spielsteine in hölzernen Mulden, schlage gegnerische Steine und meistere den zeitlosen Rhythmus.',
      tags: ['Klassische Strategie', 'Rundenbasiert', 'KI oder 2 Spieler', 'Antikes Brettspiel'],
      features: [
        'Authentische Bantumi- / Mancala-Regeln mit klassischer Sä-Mechanik',
        'Schlaue KI für Solo-Partien oder Pass-and-Play für zwei Personen',
        'Edles Holzbrett-Design mit flüssigen Steinbewegungen',
        'Sofortiges Laden über moderne Webstandards ganz ohne Installation',
      ],
    },
  },
  whySection: {
    badge: '⚡ Für schnellen Spaß gebaut',
    title: 'Warum auf Gamelette spielen?',
    subtitle:
      'Browser-Spiele sollten weder Gigabytes an Speicherplatz noch umständliche Registrierungen erfordern. So halten wir das Erlebnis schnell und angenehm.',
    card1Title: 'Sofortspiel im Browser',
    card1Desc:
      'Link öffnen und das Spiel startet sofort. Keine Installationen, kein Warten auf Updates und kein verbrauchter Gerätespeicher.',
    card2Title: 'Responsiv & Zugänglich',
    card2Desc:
      'Egal ob mit Maus und Tastatur am Schreibtisch oder per Fingertipp unterwegs auf dem Smartphone: die Bedienung passt sich nahtlos an.',
    card3Title: 'Eigene Subdomains',
    card3Desc:
      'Jedes Spiel läuft entkoppelt auf einer eigenen Subdomain – für Spitzenleistung und unabhängige Updates getrennt von der Hauptseite.',
  },
  aboutSection: {
    badge: '🍳 Die Geschichte hinter dem Namen',
    title: 'Was ist Gamelette?',
    subtitle:
      'Ein spielerisches Wortspiel aus „Game“ (Spiel) und „Omelette“ — einfach, vollwertig und frisch serviert.',
    card1Title: 'Die Omelett-Philosophie',
    card1Desc:
      'Ein gutes Omelett braucht keinen Schnickschnack: gute Zutaten, eine heiße Pfanne und zwei Minuten Zeit. Genau so sollten sich unkomplizierte Web-Spiele anfühlen. Für eine fünfminütige Pause zwischendurch sollte niemand endlose Ladebalken oder nervige Pop-ups ertragen müssen.',
    card2Title: 'Gebaut für das offene Web',
    card2Desc:
      'Beide Spiele nutzen moderne Webstandards, um flüssig auf aktuellen Geräten zu laufen. Gamelette dient als zentrale Drehscheibe auf gamelette.com, während jedes Spiel unabhängig auf einer eigenen Subdomain bereitgestellt wird (moodyman.gamelette.com und mancala.gamelette.com).',
    card3Title: 'Respekt vor deiner Zeit',
    card3Desc:
      'Jedes Spiel in der Gamelette-Sammlung ist vollkommen kostenlos spielbar. Wir konzentrieren uns voll auf Gameplay und klare Oberflächen, damit du ohne Ablenkung spielen kannst.',
  },
  footer: {
    aboutText:
      'Gamelette ist eine kompakte Sammlung kostenloser Browser-Spiele für die kleine Auszeit zwischendurch. Mit Sorgfalt zubereitet, ohne jede Installation.',
    gamesHeading: 'Spiele',
    allGames: 'Alle Spiele',
    siteHeading: 'Rechtliches & Kontakt',
    aboutLink: 'Über Gamelette',
    privacyLink: 'Datenschutzerklärung',
    contactLink: 'Kontakt',
  },
  privacyPage: {
    breadcrumb: 'Datenschutzerklärung',
    badge: '📋 Daten & Datenschutz',
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: Oktober 2026',
    section1Title: '1. Überblick',
    section1Text:
      'Gamelette (gamelette.com) ist ein offenes Webportal mit Links zu leichtgewichtigen Browser-Spielen. Wir setzen auf datenschutzfreundliches Webdesign: Du kannst den Katalog durchstöbern und direkt spielen, ohne ein Konto anzulegen.',
    section2Title: '2. Personenbezogene Daten',
    section2Text:
      'Gamelette verlangt weder Namen, E-Mail-Adresse, Standort noch Zahlungsinformationen, um diese Landingpage anzusehen oder die verlinkten Spiele zu spielen.',
    section3Title: '3. Unabhängige Spiele-Subdomains',
    section3Text:
      'Die verlinkten Spiele (einschließlich moodyman.gamelette.com und mancala.gamelette.com) liegen auf eigenständigen Subdomains. Spielstände oder Einstellungen werden lokal im Speicher deines Browsers (LocalStorage) auf deinem eigenen Gerät abgelegt und nicht an zentrale Server übertragen.',
    section4Title: '4. Hosting & Server-Protokolle',
    section4Text:
      'Wie bei fast allen auf Plattformen wie Netlify gehosteten Webseiten können standardmäßige technische Server-Logs (IP-Adresse, User-Agent, aufgerufene URL) vorübergehend verarbeitet werden, um Sicherheit, Stabilität und Leistung zu gewährleisten.',
    section5Title: '5. Kontakt',
    section5Text:
      'Bei Fragen zu dieser Datenschutzerklärung erreichst du uns über unsere Kontaktseite.',
  },
  contactPage: {
    breadcrumb: 'Kontakt',
    badge: '📬 Feedback & Hilfe',
    title: 'Kontakt aufnehmen',
    subtitle:
      'Hast du Feedback zu Moody Man oder Mancala? Eine Spielidee für die Karte? Wir freuen uns über deine Nachricht.',
    bugTitle: 'Fehlerberichte',
    bugSubtitle: 'Technische Probleme oder Spiel-Feedback',
    bugDesc:
      'Bitte nenne den Titel des Spiels (Moody Man oder Mancala) sowie deinen Browser und dein Gerät.',
    formTitle: 'Nachricht senden',
    formSubtitle: 'Wir lesen jede Nachricht und melden uns in der Regel innerhalb weniger Tage.',
    formSuccess: 'Nachricht gesendet! Vielen Dank für deine Rückmeldung — wir antworten in Kürze.',
    labelName: 'Dein Name',
    placeholderName: 'z. B. Alex',
    labelTopic: 'Thema / Spiel',
    topicGeneral: 'Gamelette (Allgemein)',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: 'Deine E-Mail',
    placeholderEmail: 'alex@beispiel.de',
    labelMessage: 'Nachricht / Spielidee',
    placeholderMessage: 'Teile uns deine Gedanken oder eine Spielidee mit...',
    btnSubmit: 'Nachricht absenden',
    btnSending: 'Wird gesendet…',
    errorAlert: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.',
  },
};

