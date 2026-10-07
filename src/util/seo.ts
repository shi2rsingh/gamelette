import { getTranslations, getLocalizedPath } from '../i18n/utils';
import { getLocalizedGames } from '../data/games';
import type { Locale } from '../i18n/locales';

export function getHomePageSchema(siteUrl = 'https://gamelette.com', locale: Locale = 'en-US') {
  const t = getTranslations(locale);
  const localizedGames = getLocalizedGames(locale);
  const pagePath = getLocalizedPath('/', locale);
  const pageUrl = `${siteUrl}${pagePath}`;
  const pageId = `${pageUrl}#webpage`;
  const listId = `${pageUrl}#gamelist`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Gamelette',
        description: t.meta.homeDescription,
        inLanguage: locale,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Gamelette',
        url: `${siteUrl}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.svg`,
          caption: 'Gamelette - Fresh Browser Games',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': pageId,
        url: pageUrl,
        name: t.meta.homeTitle,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        description: t.meta.homeDescription,
        inLanguage: locale,
      },
      {
        '@type': 'ItemList',
        '@id': listId,
        name: t.gamesSection.title,
        description: t.gamesSection.subtitle,
        numberOfItems: localizedGames.length,
        itemListElement: localizedGames.map((game, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': ['VideoGame', 'WebApplication'],
            name: game.title,
            url: game.url,
            image: `${siteUrl}${game.icon.replace('192', '512')}`,
            description: game.description,
            applicationCategory: 'GameApplication',
            gamePlatform: 'Web Browser',
            operatingSystem: 'Any modern browser (Chrome, Safari, Firefox, Edge)',
            genre: game.tags,
            inLanguage: locale,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          },
        })),
      },
    ],
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
  siteUrl = 'https://gamelette.com'
) {
  const base = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      let fullUrl = item.url.startsWith('http') ? item.url : `${base}${item.url}`;
      if (!fullUrl.endsWith('/') && !fullUrl.includes('#') && !fullUrl.includes('?')) {
        fullUrl += '/';
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };
}
