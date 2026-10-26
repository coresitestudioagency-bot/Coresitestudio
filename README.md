# Core Site Studio

Sketch-style studio site and **Template Vault**. Browse cinematic website templates, copy the AI prompt that built them, and preview the result in-browser.

**Live:** [coresitestudioagency-bot.github.io/Coresitestudio](https://github.com/coresitestudioagency-bot/Coresitestudio)  
**Contact:** [coresitestudio.agency@gmail.com](mailto:coresitestudio.agency@gmail.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/stack-HTML%20%2B%20Tailwind-111111.svg)](#tech-stack)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-7ec8e3.svg)](CONTRIBUTING.md)

---

## What this is

Core Site Studio is a static agency homepage plus an explore / prompt vault.

- **Home (`index.html`)** — studio intro, journal, contact, and Prompt nav link
- **Explore (`explore.html`)** — template cards with live preview and full AI build prompts
- **Bloom & Petal** — flagship florist template (source in `Bloom&Petal/`, built preview in `bloom-petal/`)

The idea: **the prompt is the product**. Open a card, run the preview, then copy the prompt that generated the site.

## Features

- Sketch UI: cream canvas, hard black borders, yellow accents
- Mobile: two template / journal cards side by side
- Prompt navbar item jumps straight to Explore
- Digital Store shows an under-construction notice until launch
- Web and video prompt tabs in the vault
- First-visit preloader on the home page

## Quick start

No build step for the studio site.

```bash
git clone https://github.com/coresitestudioagency-bot/Coresitestudio.git
cd Coresitestudio
python3 -m http.server 8000
```

Then open:

| Page | URL |
| ---- | --- |
| Home | http://localhost:8000 |
| Explore / Prompt vault | http://localhost:8000/explore.html |
| Bloom & Petal preview | http://localhost:8000/bloom-petal/index.html |

Any static server works (`npx serve`, VS Code Live Server, GitHub Pages).

### Bloom & Petal (React source)

```bash
cd "Bloom&Petal"
npm install
npm run dev
```

```bash
npm run build
npm run typecheck
```

## How to use the Template Vault

1. Open `explore.html`.
2. Choose **Web Prompt** or **Video Prompt**.
3. Click a card to zoom, **Run Preview** to boot the site, or **View Prompt** to read / copy the build prompt.

### Add your own template

Edit the arrays near the top of the script in `explore.html`:

```js
const WEB_TEMPLATES = [
  {
    name: 'Bloom & Petal',
    desc: 'Premium artisan florals.',
    file: 'bloom-petal/index.html',
    video: 'https://example.com/preview.mp4' // optional
  }
];
```

- `file` — local path or full URL
- `video` — muted looping preview clip on the card
- Put matching prompt text in the `PROMPTS` map in the same file

`demo-starter.html` is a blank template you can duplicate.

## Project structure

```text
Coresitestudio/
├── index.html              Home / studio
├── explore.html            Template vault
├── demo-starter.html       Blank template
├── bloom-petal/            Built Bloom & Petal preview
├── Bloom&Petal/            React + Vite source
├── IMG_20261024_230105.jpg Favicon
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── .github/                Issue and PR templates
```

## Tech stack

| Area | Stack |
| ---- | ----- |
| Studio site | HTML, Tailwind CDN, vanilla JS |
| Type | Syne, Shantell Sans, Space Mono |
| Bloom & Petal | React 18, TypeScript, Vite, Tailwind 4, Framer Motion |

## GitHub Pages

Settings → Pages → Deploy from branch `main` / root.  
Site URL will be `https://<user>.github.io/Coresitestudio/`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Report vulnerabilities privately. See [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Core Site Studio

Brand name, logo, and Bloom & Petal visual identity remain studio assets. You may study and adapt the code; do not present the brand as your own.

## Links

- Instagram: [@coresitestudio](https://www.instagram.com/coresitestudio/)
- YouTube: [@coresitestudio](https://www.youtube.com/@coresitestudio)
- Email: coresitestudio.agency@gmail.com
