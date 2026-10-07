export interface GameTranslation {
  title: string;
  tagline: string;
  category: string;
  previewAlt: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface TranslationSchema {
  meta: {
    siteTitle: string;
    siteDescription: string;
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    contactTitle: string;
    contactDescription: string;
    keywords: string;
  };
  common: {
    skipToContent: string;
    brandTagline: string;
    brandAria: string;
    brandHomeAria: string;
    languageSelectorLabel: string;
    cookedWithLove: string;
    forWebGamers: string;
    allRightsReserved: string;
    independentDeploymentNote: string;
    returnHome: string;
    breadcrumbHome: string;
  };
  nav: {
    games: string;
    why: string;
    about: string;
    playNow: string;
  };
  hero: {
    badge: string;
    badgeHighlight: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    descriptionBrand: string;
    ctaExplore: string;
    ctaWhy: string;
    propFreeTitle: string;
    propFreeDesc: string;
    propInstallTitle: string;
    propInstallDesc: string;
    propDeviceTitle: string;
    propDeviceDesc: string;
    propBreakTitle: string;
    propBreakDesc: string;
  };
  gamesSection: {
    badge: string;
    title: string;
    subtitle: string;
    expectTitle: string;
    playAction: string;
    playAria: string;
    teaserBadge: string;
    teaserTitle: string;
    teaserDesc: string;
    teaserPrototyping: string;
    teaserWebFirst: string;
    teaserNoBloat: string;
  };
  games: {
    moodyman: GameTranslation;
    mancala: GameTranslation;
  };
  whySection: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  aboutSection: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  footer: {
    aboutText: string;
    gamesHeading: string;
    allGames: string;
    siteHeading: string;
    aboutLink: string;
    privacyLink: string;
    contactLink: string;
  };
  privacyPage: {
    breadcrumb: string;
    badge: string;
    title: string;
    lastUpdated: string;
    section1Title: string;
    section1Text: string;
    section2Title: string;
    section2Text: string;
    section3Title: string;
    section3Text: string;
    section4Title: string;
    section4Text: string;
    section5Title: string;
    section5Text: string;
  };
  contactPage: {
    breadcrumb: string;
    badge: string;
    title: string;
    subtitle: string;
    bugTitle: string;
    bugSubtitle: string;
    bugDesc: string;
    formTitle: string;
    formSubtitle: string;
    formSuccess: string;
    labelName: string;
    placeholderName: string;
    labelTopic: string;
    topicGeneral: string;
    topicMoodyMan: string;
    topicMancala: string;
    labelEmail: string;
    placeholderEmail: string;
    labelMessage: string;
    placeholderMessage: string;
    btnSubmit: string;
    btnSending: string;
    errorAlert: string;
  };
}

