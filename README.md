# 🍳 Gamelette (gamelette.com)

> **Gamelette** is a playful spin on *game* + *omelette* — fresh, bite-sized browser games cooked up for quick breaks. Zero downloads, zero installations, and 100% free to play.

---

## 🎮 The Games

| Game | Category | Live URL | Subdomain |
| :--- | :--- | :--- | :--- |
| **Moody Man** | Hangman Word Puzzle | [https://moodyman.gamelette.com](https://moodyman.gamelette.com) | `moodyman.gamelette.com` |
| **Mancala** | Classic Sow-and-Capture Strategy | [https://mancala.gamelette.com](https://mancala.gamelette.com) | `mancala.gamelette.com` |

---

## 🏗️ Architecture & Independent Subdomains

- **Root Hub (`gamelette.com`)**: This static Astro project serves as the curated portal and landing page. It is intentionally decoupled from game logic and can be updated and deployed independently.
- **Moody Man (`moodyman.gamelette.com`)**: Hosted and deployed from its own repository (`code/moody-man`).
- **Mancala (`mancala.gamelette.com`)**: Hosted and deployed from its own repository (`flutter/mancala`).

---

## ⚡ Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [daisyUI v5](https://daisyui.com/)
- **Type Checking**: TypeScript & `@astrojs/check`
- **Hosting Target**: Netlify (configured via `netlify.toml`)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `20+` or `24+`
- `pnpm` (or `npm`)

### Installation & Run

```bash
# Navigate to the project directory
cd code/gamelette

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run type check and create optimized production static build
pnpm build

# Preview production build locally
pnpm preview
```

The site will be available locally at `http://localhost:4321`.

---

## 🌐 Deploying to Netlify

The repository includes a ready-to-deploy `netlify.toml` configuration:

1. **Push to Git**: Push this folder (or link this repository) to GitHub / GitLab / Bitbucket.
2. **Netlify Dashboard**:
   - Create a **New Site from Git** in Netlify.
   - Set **Base directory**: `code/gamelette` (or leave root if repo is pushed standalone).
   - Set **Build command**: `pnpm run build` (configured in `netlify.toml`).
   - Set **Publish directory**: `dist`.
3. **Domain Setup**:
   - In Netlify Site Settings > **Domain management**, add custom domain: `gamelette.com`.
   - Ensure DNS records (Apex `@` and `www`) point to Netlify.
   - Note: Do not point wildcard `*.gamelette.com` if game subdomains are hosted separately; configure CNAME records for `moodyman` and `mancala` pointing to their respective hosting targets.

---

## 📋 Placeholders & Assumptions

- **Privacy Policy (`/privacy`)**: Contains a clearly marked template notice for site administrators to customize with any future analytics or cookie provider information.
- **Contact Channel (`/contact`)**: Uses `contact@gamelette.com` as a placeholder email and includes a template feedback form.
- **External Games**: Links to existing subdomains `https://moodyman.gamelette.com` and `https://mancala.gamelette.com` without embedding `iframe`s, ensuring optimal security, device performance, and responsive layout.
