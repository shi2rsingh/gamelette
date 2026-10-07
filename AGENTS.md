# AGENTS.md

Repository guidance and architectural context for AI coding agents working on `Gamelette` (`gamelette.com`).

---

## 🍳 Project Overview

**Gamelette** (`gamelette.com`) is the curated home and landing hub for lightweight browser games. The name is a playful spin on **game + omelette** — fresh, bite-sized web games cooked up for quick breaks with zero install friction.

The site is currently the entry point for two games:
1. **Moody Man**: Hangman-style word guessing game with multiple categories and difficulty modes.
   - Hosted at: `https://moodyman.gamelette.com`
   - Repo: `code/moody-man` (React PWA)
2. **Mancala (Bantumi)**: The classic ancient sow-and-capture strategy board game.
   - Hosted at: `https://mancala.gamelette.com`
   - Repo: `flutter/mancala` (Flutter / Web)

> **Important**: Gamelette does not rebuild, bundle, or iframe embed either game. The landing page acts strictly as the hub and links out to their respective subdomains.

---

## ⚡ Tech Stack

- **Framework**: Astro 7 (Static Site Generation / SSG)
- **Package Manager**: **`pnpm`** (Always use `pnpm` for installs, builds, and development commands)
- **Styling**:
  - **Tailwind CSS 4** (via `@tailwindcss/vite`)
  - **daisyUI 5** (CSS-first component library with custom gamelette palette)
- **Sitemap & SEO**: `@astrojs/sitemap` integration for automatic `sitemap-index.xml` and `sitemap-0.xml` generation
- **Type Safety**: TypeScript & `@astrojs/check`
- **Hosting Target**: Netlify (configured in `netlify.toml`)

---

## 📦 Package Management & CLI Commands

Always use **`pnpm`** in this repository:

| Action | Command |
| :--- | :--- |
| **Install Dependencies** | `pnpm install` |
| **Run Dev Server** | `pnpm run dev` (or `pnpm dev`) |
| **Type Check Diagnostics** | `pnpm exec astro check` |
| **Production Build** | `pnpm run build` (`astro check && astro build`) |
| **Preview Static Build** | `pnpm run preview` |

---

## 🌐 Netlify Deployment Setup

Netlify deployment is managed via `netlify.toml`:

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[dev]
  command = "pnpm run dev"
  framework = "vite"
```

### Domain & Subdomain Decoupling
- **Root Domain (`gamelette.com`)**: Deployed from this repository to Netlify.
- **Subdomains (`moodyman.gamelette.com`, `mancala.gamelette.com`)**: Hosted and deployed independently. Do not map wildcard CNAMEs to the root site that would conflict with the games.

---

## 📁 Repository Structure

```text
code/gamelette/
├── package.json               # Scripts and dependencies (pnpm)
├── astro.config.mjs           # Astro configuration (i18n routing, Tailwind Vite plugin, sitemap)
├── tsconfig.json              # Strict TypeScript settings
├── netlify.toml               # Netlify configuration (pnpm commands & headers)
├── AGENTS.md                  # This file
├── README.md                  # User-facing documentation
├── public/
│   ├── favicon.svg            # Custom skillet + yolk gamepad SVG icon
│   ├── favicon.ico            # Fallback favicon
│   ├── logo.svg               # Vector brand logo mark
│   ├── og-image.svg           # Social card for OpenGraph & Twitter
│   ├── robots.txt             # Search crawler directives pointing to sitemap-index.xml
│   ├── site.webmanifest       # Web app manifest
│   └── images/
│       ├── moodyman/          # Authentic Moody Man icons & banner artwork
│       └── mancala/           # Authentic Mancala icons & board screenshots
└── src/
    ├── i18n/
    │   ├── locales.ts         # Supported locales, metadata, and default constants
    │   ├── types.ts           # TranslationSchema type interface
    │   ├── utils.ts           # Helpers: getTranslations, getLocalizedPath, getAlternateLinks
    │   └── translations/      # Dictionaries for each locale
    │       ├── en-US.ts       # English (US) — Default
    │       ├── hi-IN.ts       # हिन्दी (Hindi)
    │       ├── fr-FR.ts       # Français (French)
    │       ├── de-DE.ts       # Deutsch (German)
    │       ├── es-ES.ts       # Español (Spanish)
    │       ├── ja-JP.ts       # 日本語 (Japanese)
    │       └── zh-CN.ts       # 简体中文 (Simplified Chinese)
    ├── data/
    │   └── games.ts           # Game base data + getLocalizedGames(locale)
    ├── styles/
    │   └── global.css         # Tailwind 4, daisyUI plugin, reduced-motion & focus ring rules
    ├── util/
    │   └── seo.ts             # Localized Schema.org JSON-LD generation
    ├── layouts/
    │   └── Layout.astro       # Base layout with hreflang alternate links & localized meta
    ├── components/
    │   ├── Header.astro       # Sticky header with brand logo & navigation
    │   ├── LanguageSelector.astro # Accessible language switcher dropdown
    │   ├── Hero.astro         # Hero section with value badges
    │   ├── GameCard.astro     # Accessible game card with tags, feature bullets & play CTA
    │   ├── GamesGrid.astro    # Featured games container + "Simmering on the Stove" teaser
    │   ├── WhySection.astro   # Feature highlights (instant play, responsive, subdomains)
    │   ├── AboutSection.astro # Story of Gamelette (Game + Omelette) & architecture
    │   ├── Footer.astro       # Accessible footer with legal links and copyright
    │   └── pages/             # Shared, DRY page templates
    │       ├── HomePage.astro
    │       ├── PrivacyPage.astro
    │       └── ContactPage.astro
    └── pages/
        ├── index.astro        # Root default locale ('en-US') landing page
        ├── privacy.astro      # Root default locale ('en-US') privacy notice
        ├── contact.astro      # Root default locale ('en-US') contact channel
        └── [locale]/
            ├── index.astro    # Dynamic SSG generator for non-default locales
            ├── privacy.astro  # Dynamic SSG generator for non-default locale privacy
            └── contact.astro  # Dynamic SSG generator for non-default locale contact
```

---

## 🌍 Internationalization (i18n) Architecture

Gamelette utilizes Astro's built-in i18n routing (`astro.config.mjs`) alongside a strictly typed translation schema to support 7 locales:

| Locale Code | Language | Route Path Pattern | Default |
| :--- | :--- | :--- | :--- |
| **`en-US`** | English (US) | `/`, `/privacy`, `/contact` | **Yes (default)** |
| **`hi-IN`** | हिन्दी (Hindi) | `/hi-IN/`, `/hi-IN/privacy`, `/hi-IN/contact` | No |
| **`fr-FR`** | Français (French) | `/fr-FR/`, `/fr-FR/privacy`, `/fr-FR/contact` | No |
| **`de-DE`** | Deutsch (German) | `/de-DE/`, `/de-DE/privacy`, `/de-DE/contact` | No |
| **`es-ES`** | Español (Spanish) | `/es-ES/`, `/es-ES/privacy`, `/es-ES/contact` | No |
| **`ja-JP`** | 日本語 (Japanese) | `/ja-JP/`, `/ja-JP/privacy`, `/ja-JP/contact` | No |
| **`zh-CN`** | 简体中文 (Chinese) | `/zh-CN/`, `/zh-CN/privacy`, `/zh-CN/contact` | No |

### Routing & Static Generation Rules
1. **Unprefixed Default**: The default locale (`en-US`) is served from the root (`/`, `/privacy`, `/contact`) via `prefixDefaultLocale: false`.
2. **Prefixed Other Locales**: All other locales are mapped to `/[locale]/...` paths.
3. **DRY Page Implementation**: All page markups and forms are encapsulated inside `src/components/pages/` (`HomePage.astro`, `PrivacyPage.astro`, `ContactPage.astro`). The files under `src/pages/` and `src/pages/[locale]/` are lightweight wrappers that provide `locale` and `getStaticPaths()`.
4. **Automatic SEO & Alternates**: `Layout.astro` generates bidirectional `<link rel="alternate" hreflang="..." />` tags for all 7 locales plus `x-default`, and `@astrojs/sitemap` automatically emits reciprocal sitemap alternate links.
5. **Language Switcher**: `LanguageSelector.astro` in the header detects the current page path and redirects cleanly to the equivalent path in the selected locale (e.g. `/privacy` -> `/fr-FR/privacy`).

### Translation Best Practices
- **No Hardcoded Literals**: Never hardcode user-facing strings or labels into Astro components.
- **Strict Typing**: All translations must conform to `TranslationSchema` in `src/i18n/types.ts`. Any missing key in any language will cause `pnpm exec astro check` to fail at build time.
- **Adding a String**: When adding a new string, update `TranslationSchema` in `src/i18n/types.ts` first, then provide values in all 7 dictionaries (`en-US.ts`, `hi-IN.ts`, `fr-FR.ts`, `de-DE.ts`, `es-ES.ts`, `ja-JP.ts`, `zh-CN.ts`).

---

## 📐 Design & Accessibility Principles

1. **Brand Aesthetic**: Friendly, culinary-meets-arcade style (skillet slate, warm golden egg yolk, crisp white egg, toast/butter background).
2. **Reduced Motion**: All animations and transitions must strictly respect `@media (prefers-reduced-motion: reduce)`.
3. **Keyboard Accessibility**: Ensure `:focus-visible` styling (`outline: 3px solid #F59E0B`) remains prominent and functional for keyboard users.
4. **Honest Copy**: Do not invent fake player counts, reviews, testimonials, or features. Descriptions must accurately reflect the games.
5. **No Ad Bloat or Dark Patterns**: Preserve the clean, lightweight, instant-play ethos of Gamelette.
