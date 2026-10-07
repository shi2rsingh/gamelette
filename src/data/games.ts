import { getTranslations } from '../i18n/utils';

export interface Game {
  id: 'moodyman' | 'mancala';
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
}

interface GameBaseInfo {
  id: 'moodyman' | 'mancala';
  url: string;
  subdomain: string;
  icon: string;
  previewImage: string;
}

const GAMES_BASE: GameBaseInfo[] = [
  {
    id: 'moodyman',
    url: 'https://moodyman.gamelette.com',
    subdomain: 'moodyman.gamelette.com',
    icon: '/images/moodyman/icon-192.png',
    previewImage: '/images/moodyman/banner.png',
  },
  {
    id: 'mancala',
    url: 'https://mancala.gamelette.com',
    subdomain: 'mancala.gamelette.com',
    icon: '/images/mancala/icon-192.png',
    previewImage: '/images/mancala/screenshot-desktop.png',
  },
];

export function getLocalizedGames(locale?: string): Game[] {
  const t = getTranslations(locale);
  return GAMES_BASE.map((base) => {
    const localized = t.games[base.id];
    return {
      ...base,
      title: localized.title,
      tagline: localized.tagline,
      description: localized.description,
      category: localized.category,
      previewAlt: localized.previewAlt,
      tags: localized.tags,
      features: localized.features,
    };
  });
}

export const games: Game[] = getLocalizedGames('en-US');
