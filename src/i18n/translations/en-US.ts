import type { TranslationSchema } from '../types';

export const enUS: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — Free Browser Games | Moody Man & Mancala',
    siteDescription:
      'Play free, instant browser games at Gamelette. Featuring Moody Man (hangman word guessing) and Mancala (classic board game) with zero downloads or sign-ups.',
    homeTitle: 'Gamelette — Free Browser Games | Moody Man & Mancala',
    homeDescription:
      'Play free, easy-to-play browser games at Gamelette. Home of Moody Man (hangman word guessing) and Mancala (classic sow-and-capture board game). Zero downloads, instant fun.',
    privacyTitle: 'Privacy Policy — Gamelette',
    privacyDescription: 'Privacy policy information for Gamelette and its browser games collection.',
    contactTitle: 'Contact — Gamelette',
    contactDescription: 'Contact information and feedback channel for Gamelette.',
    keywords:
      'browser games, free web games, online games, moody man, mancala, word guessing, hangman, board games, bantumi, casual games, instant play, no download games',
  },
  common: {
    skipToContent: 'Skip to main content',
    brandTagline: 'Pocket Browser Games',
    brandAria: 'Gamelette Home - Free browser games',
    brandHomeAria: 'Gamelette Home',
    languageSelectorLabel: 'Select language',
    cookedWithLove: 'Cooked with',
    forWebGamers: 'for web gamers everywhere',
    allRightsReserved: 'Gamelette. All rights reserved.',
    independentDeploymentNote:
      'Independent deployment: game subdomains operate independently from this root domain.',
    returnHome: '← Return to Gamelette Home',
    breadcrumbHome: 'Home',
  },
  nav: {
    games: 'The Games',
    why: 'Why Gamelette',
    about: 'About',
    playNow: 'Play Now',
  },
  hero: {
    badge: 'A fresh spin on web games',
    badgeHighlight: 'Free & Instant',
    titleLine1: 'Bite-Sized Browser Games.',
    titleLine2: 'Whipped Up for Quick Fun.',
    description:
      'Welcome to Gamelette — a curated home for lightweight, hassle-free web games. No heavy launchers, no paywalls, and no setup. Just click and play right in your browser.',
    descriptionBrand: 'Gamelette',
    ctaExplore: 'Explore the Games',
    ctaWhy: 'Why "Gamelette"?',
    propFreeTitle: '100% Free',
    propFreeDesc: 'No hidden paywalls',
    propInstallTitle: 'Zero Installs',
    propInstallDesc: 'Launches in tabs',
    propDeviceTitle: 'Cross-Device',
    propDeviceDesc: 'Mobile, tablet & PC',
    propBreakTitle: 'Quick Breaks',
    propBreakDesc: 'Pick up & play',
  },
  gamesSection: {
    badge: '🎮 Available Now',
    title: 'Fresh From the Skillet',
    subtitle:
      'Choose a game below to jump straight in. Each runs on its dedicated subdomain with quick load times and zero barriers.',
    expectTitle: 'What to expect:',
    playAction: 'Play {title}',
    playAria: 'Play {title} now on {subdomain} (opens in new tab)',
    teaserBadge: 'More Games Simmering on the Stove',
    teaserTitle: 'More Games Simmering on the Stove',
    teaserDesc:
      'We’re busy crafting new browser-native games to add to the menu. Expect lightweight word puzzles, spatial brain-teasers, and turn-based retro favorites cooked up with the same instant-play philosophy.',
    teaserPrototyping: 'In prototyping',
    teaserWebFirst: 'Always web-first',
    teaserNoBloat: 'Zero download bloat',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: 'Word Guessing with Multiple Categories & Modes',
      category: 'Word Puzzle',
      previewAlt: 'Moody Man game illustration and moody characters',
      description:
        'A fresh take on the classic hangman word-guessing game. Test your vocabulary across varied categories, beat the countdown, and keep the moods in check.',
      tags: ['Word Puzzle', 'Multiple Modes', 'Solo & Casual', 'Quick Rounds'],
      features: [
        'Multiple themed categories and varying word difficulties',
        'On-screen interactive keyboard plus physical keyboard support',
        'Expressive character mood animations and sound effects',
        'Runs instantly on mobile phones, tablets, and desktop browsers',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: 'The Classic Sow-and-Capture Board Game',
      category: 'Strategy Board Game',
      previewAlt: 'Mancala game wooden board and stone pits interface',
      description:
        'The ancient strategy board game reimagined for the web. Sow seeds through wooden pits, capture your opponent’s pieces, and master the timeless tactical rhythm.',
      tags: ['Classic Strategy', 'Turn-Based', 'AI or 2-Player', 'Ancient Board'],
      features: [
        'Authentic Bantumi / Mancala rules with sow-and-capture mechanics',
        'Smart AI opponent for solo play or pass-and-play for two',
        'Clean wooden board aesthetics with smooth stone movements',
        'Instant loading via web standards with zero install needed',
      ],
    },
  },
  whySection: {
    badge: '⚡ Built For Quick Fun',
    title: 'Why Play on Gamelette?',
    subtitle:
      'Web games shouldn’t require gigabytes of storage or tedious registrations. Here is how we keep things fast and enjoyable.',
    card1Title: 'Instant Browser Play',
    card1Desc:
      'Open a link and the game starts immediately. No installations, no updates to wait through, and no device storage taken up.',
    card2Title: 'Responsive & Accessible',
    card2Desc:
      'Whether you play with mouse and keyboard on desktop or tap on a smartphone screen, interfaces are designed to adapt seamlessly.',
    card3Title: 'Dedicated Subdomains',
    card3Desc:
      'Each game is decoupled on its own subdomain for maximum performance and independent deployment from the central landing page.',
  },
  aboutSection: {
    badge: '🍳 The Story Behind the Name',
    title: 'What is Gamelette?',
    subtitle:
      'A playful blend of game and omelette — simple, wholesome, and served fresh.',
    card1Title: 'The Omelette Philosophy',
    card1Desc:
      'A great omelette doesn’t need unnecessary complexity: just good ingredients, high heat, and a couple of minutes to cook. We think casual web games should feel the same way. When you want a five-minute break between tasks or a relaxing game on your commute, you shouldn’t have to sit through massive download bars, app store logins, or intrusive popups.',
    card2Title: 'Built for the Open Web',
    card2Desc:
      'Both games are engineered using web standards to run smoothly on modern mobile and desktop browsers. Gamelette acts as the central hub at gamelette.com, while each game is deployed independently on its dedicated subdomain (moodyman.gamelette.com and mancala.gamelette.com). This guarantees fast loading, clean separation, and independent releases.',
    card3Title: 'Respect for Your Time',
    card3Desc:
      'Every game in the Gamelette collection is free to play. We focus entirely on gameplay and clean interfaces so you can enjoy word puzzles or strategy matches with minimal distraction.',
  },
  footer: {
    aboutText:
      'Gamelette is a pocket collection of free browser games cooked up for quick breaks. Whipped up with care, zero installs required.',
    gamesHeading: 'Games',
    allGames: 'All Games',
    siteHeading: 'Site & Legal',
    aboutLink: 'About Gamelette',
    privacyLink: 'Privacy Policy',
    contactLink: 'Contact Us',
  },
  privacyPage: {
    breadcrumb: 'Privacy Policy',
    badge: '📋 Data & Privacy',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: October 2026',
    section1Title: '1. Overview',
    section1Text:
      'Gamelette (gamelette.com) is an open web portal providing links to lightweight browser games. We believe in privacy-conscious web design: you can browse the catalog and jump directly into games without registering an account.',
    section2Title: '2. Personal Information',
    section2Text:
      'Gamelette does not require you to provide your name, email address, physical location, or payment information to view this landing page or play the linked games.',
    section3Title: '3. Independent Game Subdomains',
    section3Text:
      'Games linked from Gamelette (including moodyman.gamelette.com and mancala.gamelette.com) are hosted on independent subdomains. Game progress (such as score or local settings) may be saved locally in your browser’s LocalStorage on your own device and is not transmitted to central tracking servers.',
    section4Title: '4. Hosting & CDN Logs',
    section4Text:
      'Like virtually all websites deployed on platforms like Netlify, standard technical request logs (IP address, user-agent, requested URL) may be processed transiently by hosting infrastructure for DDoS mitigation, performance caching, and security auditing.',
    section5Title: '5. Contact Information',
    section5Text:
      'If you have questions about this privacy statement, you can reach out via our Contact page.',
  },
  contactPage: {
    breadcrumb: 'Contact',
    badge: '📬 Support Channel',
    title: 'Get in Touch',
    subtitle:
      'Have feedback on Moody Man or Mancala? Have an idea for a new game to whip up? We’d love to hear from you.',
    bugTitle: 'Bug Reports',
    bugSubtitle: 'Game-specific glitches or feedback',
    bugDesc:
      'Please include the game title (Moody Man or Mancala) and your browser/device details.',
    formTitle: 'Send a Message',
    formSubtitle: 'We read every message and aim to reply within a few days.',
    formSuccess: "Message sent! Thanks for reaching out — we'll get back to you soon.",
    labelName: 'Your Name',
    placeholderName: 'e.g. Alex',
    labelTopic: 'Topic / Game',
    topicGeneral: 'Gamelette (General)',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: 'Your Email',
    placeholderEmail: 'alex@example.com',
    labelMessage: 'Message / Game Suggestion',
    placeholderMessage: 'Tell us what you think or suggest a game idea...',
    btnSubmit: 'Submit Message',
    btnSending: 'Sending…',
    errorAlert: 'Something went wrong sending your message. Please try again later.',
  },
};

