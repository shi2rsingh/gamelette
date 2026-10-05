export interface Game {
  id: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  subdomain: string;
  category: string;
  icon: string;
  previewImage: string;
  previewAlt: string;
  tags: string[];
  features: string[];
  badgeColor: string;
  themeGlow: string;
}

export const games: Game[] = [
  {
    id: 'moodyman',
    title: 'Moody Man',
    tagline: 'Word Guessing with Multiple Categories & Modes',
    description:
      'A fresh take on the classic hangman word-guessing game. Test your vocabulary across varied categories, beat the countdown, and keep the moods in check.',
    url: 'https://moodyman.gamelette.com',
    subdomain: 'moodyman.gamelette.com',
    category: 'Word Puzzle',
    icon: '/images/moodyman/icon-192.png',
    previewImage: '/images/moodyman/banner.png',
    previewAlt: 'Moody Man game illustration and moody characters',
    tags: ['Word Puzzle', 'Multiple Modes', 'Solo & Casual', 'Quick Rounds'],
    features: [
      'Multiple themed categories and varying word difficulties',
      'On-screen interactive keyboard plus physical keyboard support',
      'Expressive character mood animations and sound effects',
      'Runs instantly on mobile phones, tablets, and desktop browsers',
    ],
    badgeColor: 'badge-secondary',
    themeGlow: 'from-amber-400/20 via-orange-400/10 to-transparent',
  },
  {
    id: 'mancala',
    title: 'Mancala',
    tagline: 'The Classic Sow-and-Capture Board Game',
    description:
      'The ancient strategy board game reimagined for the web. Sow seeds through wooden pits, capture your opponent’s pieces, and master the timeless tactical rhythm.',
    url: 'https://mancala.gamelette.com',
    subdomain: 'mancala.gamelette.com',
    category: 'Strategy Board Game',
    icon: '/images/mancala/icon-192.png',
    previewImage: '/images/mancala/screenshot-desktop.png',
    previewAlt: 'Mancala game wooden board and stone pits interface',
    tags: ['Classic Strategy', 'Turn-Based', 'AI or 2-Player', 'Ancient Board'],
    features: [
      'Authentic Bantumi / Mancala rules with sow-and-capture mechanics',
      'Smart AI opponent for solo play or pass-and-play for two',
      'Clean wooden board aesthetics with smooth stone movements',
      'Instant loading via web standards with zero install needed',
    ],
    badgeColor: 'badge-accent',
    themeGlow: 'from-amber-600/20 via-yellow-500/10 to-transparent',
  },
];
