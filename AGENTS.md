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
├── astro.config.mjs           # Astro configuration (Tailwind Vite plugin, sitemap)
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
    ├── data/
    │   └── games.ts           # Game metadata, descriptions, features, and URLs
    ├── styles/
    │   └── global.css         # Tailwind 4, daisyUI plugin, reduced-motion & focus ring rules
    ├── layouts/
    │   └── Layout.astro       # Base layout with full OpenGraph, Twitter, and accessibility skip links
    ├── components/
    │   ├── Header.astro       # Sticky header with brand logo & navigation
    │   ├── Hero.astro         # Hero section with value badges
    │   ├── GameCard.astro     # Accessible game card with tags, feature bullets & play CTA
    │   ├── GamesGrid.astro    # Featured games container + "Simmering on the Stove" teaser
    │   ├── WhySection.astro   # Feature highlights (instant play, responsive, subdomains)
    │   ├── AboutSection.astro # Story of Gamelette (Game + Omelette) & architecture
    │   └── Footer.astro       # Accessible footer with legal links and copyright
    └── pages/
        ├── index.astro        # Landing page
        ├── privacy.astro      # Template Privacy Policy notice
        └── contact.astro      # Template Contact Us channel (contact@gamelette.com)
```

---

## 📐 Design & Accessibility Principles

1. **Brand Aesthetic**: Friendly, culinary-meets-arcade style (skillet slate, warm golden egg yolk, crisp white egg, toast/butter background).
2. **Reduced Motion**: All animations and transitions must strictly respect `@media (prefers-reduced-motion: reduce)`.
3. **Keyboard Accessibility**: Ensure `:focus-visible` styling (`outline: 3px solid #F59E0B`) remains prominent and functional for keyboard users.
4. **Honest Copy**: Do not invent fake player counts, reviews, testimonials, or features. Descriptions must accurately reflect the games.
5. **No Ad Bloat or Dark Patterns**: Preserve the clean, lightweight, instant-play ethos of Gamelette.
