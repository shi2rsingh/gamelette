import type { TranslationSchema } from '../types';

export const frFR: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — Jeux par navigateur gratuits | Moody Man & Mancala',
    siteDescription:
      'Jouez gratuitement à des jeux de navigateur instantanés sur Gamelette. Retrouvez Moody Man (jeu du pendu) et Mancala (jeu de stratégie traditionnel) sans téléchargement ni inscription.',
    homeTitle: 'Gamelette — Jeux par navigateur gratuits | Moody Man & Mancala',
    homeDescription:
      'Découvrez des jeux de navigateur gratuits et instantanés sur Gamelette. Accueil de Moody Man (pendu revisité) et Mancala (jeu de semis classique). Plaisir immédiat, zéro installation.',
    privacyTitle: 'Politique de confidentialité — Gamelette',
    privacyDescription: 'Informations sur la politique de confidentialité de Gamelette et de sa collection de jeux.',
    contactTitle: 'Contact — Gamelette',
    contactDescription: 'Coordonnées et formulaire de contact pour Gamelette.',
    keywords:
      'jeux par navigateur, jeux web gratuits, jeux en ligne, moody man, mancala, jeu du pendu, jeux de société, bantumi, jeux occasionnels, jeu instantané, jeux sans téléchargement',
  },
  common: {
    skipToContent: 'Passer au contenu principal',
    brandTagline: 'Jeux Web de Poche',
    brandAria: 'Accueil Gamelette - Jeux par navigateur gratuits',
    brandHomeAria: 'Accueil Gamelette',
    languageSelectorLabel: 'Choisir la langue',
    cookedWithLove: 'Cuisiné avec',
    forWebGamers: 'pour les joueurs du web partout dans le monde',
    allRightsReserved: 'Gamelette. Tous droits réservés.',
    independentDeploymentNote:
      'Déploiement indépendant : les sous-domaines des jeux fonctionnent séparément de ce domaine racine.',
    returnHome: '← Retour à l’accueil Gamelette',
    breadcrumbHome: 'Accueil',
  },
  nav: {
    games: 'Les Jeux',
    why: 'Pourquoi Gamelette',
    about: 'À propos',
    playNow: 'Jouer maintenant',
  },
  hero: {
    badge: 'Une recette fraîche pour le jeu web',
    badgeHighlight: 'Gratuit & Instantané',
    titleLine1: 'Jeux Web Bouchées Doubles.',
    titleLine2: 'Mijotés pour le Plaisir Rapide.',
    description:
      'Bienvenue sur Gamelette — une sélection soignée de jeux par navigateur légers et sans contrainte. Aucun lanceur lourd, aucun paiement caché, aucune installation. Cliquez et jouez directement dans votre navigateur.',
    descriptionBrand: 'Gamelette',
    ctaExplore: 'Découvrir les jeux',
    ctaWhy: 'Pourquoi "Gamelette" ?',
    propFreeTitle: '100% Gratuit',
    propFreeDesc: 'Aucun frais caché',
    propInstallTitle: 'Zéro Installation',
    propInstallDesc: 'Se lance dans un onglet',
    propDeviceTitle: 'Multi-appareils',
    propDeviceDesc: 'Mobile, tablette & PC',
    propBreakTitle: 'Pauses Rapides',
    propBreakDesc: 'Prêt à jouer',
  },
  gamesSection: {
    badge: '🎮 Disponibles maintenant',
    title: 'Tout Chaud Sorti de la Poêle',
    subtitle:
      'Choisissez un jeu ci-dessous pour démarrer sans attendre. Chacun fonctionne sur son propre sous-domaine avec un chargement ultra-rapide.',
    expectTitle: 'Au programme :',
    playAction: 'Jouer à {title}',
    playAria: 'Jouer à {title} maintenant sur {subdomain} (s’ouvre dans un nouvel onglet)',
    teaserBadge: 'D’autres jeux mijotent sur le feu',
    teaserTitle: 'D’autres jeux mijotent sur le feu',
    teaserDesc:
      'Nous préparons de nouveaux jeux taillés pour le web. Au menu : puzzles de mots légers, défis spatiaux et classiques au tour par tour, conçus selon la même exigence de simplicité.',
    teaserPrototyping: 'En prototypage',
    teaserWebFirst: 'Toujours web-first',
    teaserNoBloat: 'Aucun téléchargement superflu',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: 'Jeu de devinette de mots avec modes & catégories variés',
      category: 'Jeu de mots',
      previewAlt: 'Illustration du jeu Moody Man et personnages expressifs',
      description:
        'Une version moderne du jeu classique du pendu. Testez votre vocabulaire à travers des thèmes variés, battez le chronomètre et gardez le contrôle des humeurs.',
      tags: ['Jeu de mots', 'Modes multiples', 'Solo & détente', 'Parties rapides'],
      features: [
        'Plusieurs catégories thématiques et niveaux de difficulté',
        'Clavier virtuel interactif et prise en charge des claviers physiques',
        'Animations d’humeurs expressives et effets sonores soignés',
        'Fonctionne instantanément sur smartphones, tablettes et ordinateurs',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: 'Le grand classique tactique de semis et capture',
      category: 'Jeu de société & stratégie',
      previewAlt: 'Plateau en bois et fosses de jeu du Mancala',
      description:
        'Le jeu de stratégie millénaire réinventé pour le web contemporain. Égrenez vos graines dans les fosses en bois, capturez les pièces adverses et maîtrisez ce duel intemporel.',
      tags: ['Stratégie classique', 'Tour par tour', 'IA ou 2 Joueurs', 'Jeu ancestral'],
      features: [
        'Règles authentiques de Bantumi / Mancala avec mécanisme de semis',
        'Adversaire IA intelligent en solo ou mode passe-et-joue à deux',
        'Esthétique soignée en bois avec animations fluides des pierres',
        'Chargement immédiat grâce aux technologies web, sans installation',
      ],
    },
  },
  whySection: {
    badge: '⚡ Pensé pour le plaisir instantané',
    title: 'Pourquoi jouer sur Gamelette ?',
    subtitle:
      'Les jeux web ne devraient jamais nécessiter des gigaoctets de stockage ou des inscriptions fastidieuses. Voici comment nous préservons rapidité et convivialité.',
    card1Title: 'Jeu instantané au navigateur',
    card1Desc:
      'Ouvrez un lien et la partie commence immédiatement. Pas d’installations, pas de mises à jour interminables et aucun espace disque encombré.',
    card2Title: 'Adapté & Accessible',
    card2Desc:
      'Que vous jouiez à la souris et au clavier sur grand écran ou du bout des doigts sur votre smartphone, l’expérience s’adapte parfaitement.',
    card3Title: 'Sous-domaines dédiés',
    card3Desc:
      'Chaque jeu est isolé sur son propre sous-domaine pour des performances optimales et des déploiements totalement indépendants du hub central.',
  },
  aboutSection: {
    badge: '🍳 L’histoire derrière le nom',
    title: 'Qu’est-ce que Gamelette ?',
    subtitle:
      'Un savoureux mélange entre « game » (jeu) et « omelette » — simple, réconfortant et servi bien chaud.',
    card1Title: 'La Philosophie de l’Omelette',
    card1Desc:
      'Une excellente omelette ne requiert aucune complexité superflue : de bons ingrédients, une poêle bien chaude et deux minutes de cuisson. Nous pensons que les jeux décontractés doivent offrir la même simplicité. Pour une pause de cinq minutes entre deux tâches, inutile de subir d’interminables barres de téléchargement ou des pop-ups intrusives.',
    card2Title: 'Conçu pour le Web Ouvert',
    card2Desc:
      'Nos jeux s’appuient sur les standards du web pour tourner avec fluidité sur tous les navigateurs récents. Gamelette constitue le hub d’accueil sur gamelette.com, tandis que chaque jeu vit sur son sous-domaine dédié (moodyman.gamelette.com et mancala.gamelette.com).',
    card3Title: 'Respect de votre temps',
    card3Desc:
      'Tous les jeux de Gamelette sont gratuits. Nous nous concentrons entièrement sur le plaisir de jeu et la clarté visuelle afin de vous offrir des parties sans distraction.',
  },
  footer: {
    aboutText:
      'Gamelette est une collection de poche de jeux par navigateur gratuits conçus pour les pauses quotidiennes. Mitonnée avec passion, zéro installation requise.',
    gamesHeading: 'Jeux',
    allGames: 'Tous les jeux',
    siteHeading: 'Site & Mentions',
    aboutLink: 'À propos de Gamelette',
    privacyLink: 'Politique de confidentialité',
    contactLink: 'Nous contacter',
  },
  privacyPage: {
    breadcrumb: 'Politique de confidentialité',
    badge: '📋 Données & Confidentialité',
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : Octobre 2026',
    section1Title: '1. Présentation générale',
    section1Text:
      'Gamelette (gamelette.com) est un portail web libre proposant des liens vers des jeux de navigateur légers. Nous croyons en une conception respectueuse de la vie privée : vous pouvez explorer le catalogue et jouer directement sans créer de compte.',
    section2Title: '2. Données personnelles',
    section2Text:
      'Gamelette ne vous demande pas votre nom, votre adresse email, votre localisation géographique ou vos informations de paiement pour consulter ce site ou jouer aux jeux.',
    section3Title: '3. Sous-domaines indépendants des jeux',
    section3Text:
      'Les jeux proposés (notamment moodyman.gamelette.com et mancala.gamelette.com) sont hébergés sur des sous-domaines indépendants. La progression (scores ou réglages) peut être enregistrée localement dans le stockage de votre navigateur (LocalStorage) sur votre appareil et n’est pas transmise à des serveurs centraux.',
    section4Title: '4. Hébergement et journaux d’accès',
    section4Text:
      'Comme pour la quasi-totalité des sites déployés sur Netlify, des journaux techniques classiques (adresse IP, user-agent, URL demandée) peuvent être traités temporairement par l’infrastructure à des fins de sécurité et de performances.',
    section5Title: '5. Contact',
    section5Text:
      'Pour toute question concernant cette déclaration de confidentialité, vous pouvez nous écrire via notre page Contact.',
  },
  contactPage: {
    breadcrumb: 'Contact',
    badge: '📬 Assistance & Échanges',
    title: 'Entrer en contact',
    subtitle:
      'Une remarque sur Moody Man ou Mancala ? Une idée de nouveau jeu à mitonner ? Vos retours sont toujours les bienvenus.',
    bugTitle: 'Signalement de bugs',
    bugSubtitle: 'Problème technique ou retour de jeu',
    bugDesc:
      'Merci d’indiquer le nom du jeu (Moody Man ou Mancala) ainsi que votre navigateur et appareil.',
    formTitle: 'Envoyer un message',
    formSubtitle: 'Nous lisons chaque message avec attention et répondons sous quelques jours.',
    formSuccess: 'Message envoyé ! Merci pour votre message, nous vous répondrons bientôt.',
    labelName: 'Votre Nom',
    placeholderName: 'ex. Camille',
    labelTopic: 'Sujet / Jeu',
    topicGeneral: 'Gamelette (Général)',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: 'Votre Email',
    placeholderEmail: 'camille@example.com',
    labelMessage: 'Message / Suggestion de jeu',
    placeholderMessage: 'Partagez vos impressions ou proposez une idée...',
    btnSubmit: 'Envoyer le message',
    btnSending: 'Envoi en cours…',
    errorAlert: 'Une erreur est survenue lors de l’envoi. Veuillez réessayer ultérieurement.',
  },
};

