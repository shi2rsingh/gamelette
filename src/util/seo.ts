export function getHomePageSchema(siteUrl = 'https://gamelette.com') {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Gamelette',
        description:
          'Free, lightweight browser games with zero downloads or sign-ups. Home of Moody Man and Mancala.',
        inLanguage: 'en-US',
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
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: 'Gamelette — Free Browser Games | Moody Man & Mancala',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        description:
          'Play free, easy-to-play browser games at Gamelette. Featuring Moody Man (hangman word guessing) and Mancala (classic sow-and-capture board game).',
        inLanguage: 'en-US',
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#gamelist`,
        name: 'Featured Browser Games',
        description: 'Instant, free browser games playable directly on Gamelette subdomains.',
        numberOfItems: 2,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': ['VideoGame', 'WebApplication'],
              name: 'Moody Man',
              url: 'https://moodyman.gamelette.com',
              image: `${siteUrl}/images/moodyman/icon-512.png`,
              description:
                'A hangman-style word guessing game with multiple categories and difficulty modes. Test your vocabulary and beat the timer.',
              applicationCategory: 'GameApplication',
              gamePlatform: 'Web Browser',
              operatingSystem: 'Any modern browser (Chrome, Safari, Firefox, Edge)',
              genre: ['Word Puzzle', 'Hangman', 'Casual Game'],
              inLanguage: 'en',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': ['VideoGame', 'WebApplication'],
              name: 'Mancala',
              url: 'https://mancala.gamelette.com',
              image: `${siteUrl}/images/mancala/icon-512.png`,
              description:
                'The classic sow-and-capture strategy board game. Strategically distribute seeds and outsmart the AI or play with a friend.',
              applicationCategory: 'GameApplication',
              gamePlatform: 'Web Browser',
              operatingSystem: 'Any modern browser (Chrome, Safari, Firefox, Edge)',
              genre: ['Board Game', 'Strategy Game', 'Turn-Based Strategy'],
              inLanguage: 'en',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            },
          },
        ],
      },
    ],
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
  siteUrl = 'https://gamelette.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}
