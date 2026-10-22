# 🌸 Bloom & Petal — Premium Artisan Florals

A premium, award-winning, cinematic website for an artisan flower shop built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Bloom & Petal](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055)

## ✨ Features

### 🎨 Design System
- **Colors**: Warm cream `#F9F6F0` background, deep forest green `#1A2F1A` text, rose pink `#c4738a` accents
- **Typography**: Cormorant Garamond (italic serif) + Inter (clean sans-serif)
- **No pure black or white** — everything uses the warm cream/forest green palette

### 🎬 Animations & Effects
- **Fullscreen Video Hero** — autoplaying muted looping WebM video with staggered text animations
- **Parallax Background** — 5 SVG leaves that move at different speeds on scroll
- **Scroll Reveal** — Every section fades in with Framer Motion's `whileInView`
- **Flower Rain** — 20 falling flower petals that accumulate at the bottom
- **Liquid Glass Navigation** — Floating pill navbar with backdrop blur
- **Animated Buttons** — Text-roll hover effect (original slides up, duplicate slides in)
- **Card Mask Reveal** — Hover to reveal gradient overlay and slide-up content
- **Sticky Marquee** — Infinite scrolling text banner at the bottom

### 📐 Sections
1. **Fullscreen Video Hero** — Cinematic intro with video background
2. **Scrollable Image Gallery** — 7 product cards with horizontal scroll snap
3. **Bento Grid Collection** — 12 varied cards including video showcases
4. **Sticky Scrollytelling** — "Our Story" section with sticky video + scrolling text
5. **Testimonials** — 3 customer review cards
6. **CTA Section** — Dark gradient call-to-action
7. **Footer** — Links, social icons, and branding

### 📱 Responsive Design
- **Desktop**: 4-column bento grid, full hero height, side-by-side story section
- **Mobile**: 2-column compact grid, 85vh hero, inline video, reduced animations
- **Touch-friendly**: Horizontal scroll galleries with snap points

### ⚡ Performance
- `preload="metadata"` on all videos
- `loading="lazy"` on images
- `React.memo` on static components
- `useCallback` for event handlers
- `will-change` on animated elements
- `prefers-reduced-motion` support
- GPU-accelerated transforms

## 🎥 Video URLs

| Section | Video URL |
|---------|-----------|
| Hero Background | `https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm` |
| Spring Garden Collection | `https://cdn.mp4tourl.com/video/free/1077be85-0baf-4b2f-a414-cf6c6268dd7d.webm` |
| Seasonal Video Card | `https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm` |
| Our Story Section | `https://cdn.mp4tourl.com/video/free/59ef6170-d888-4968-b0c1-a78364f8a59d.webm` |

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Animations & gestures
- **Lucide React** — Icons

## 📁 Project Structure

```
bloom-petal/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx                          # Entry point
│   ├── App.tsx                           # Main app component
│   ├── index.css                         # Global styles + animations
│   └── components/
│       ├── AnimatedButton.tsx            # Text-roll hover buttons
│       ├── FlowerRain.tsx                # Falling flower petals
│       ├── LiquidGlassNav.tsx            # Floating glass navbar
│       ├── ParallaxBackground.tsx        # Parallax SVG leaves
│       ├── ScrollReveal.tsx              # Scroll-triggered reveals
│       ├── StickyMarquee.tsx             # Bottom scrolling banner
│       ├── StickyStorySection.tsx        # Split-screen scrollytelling
│       └── VideoShowcaseCard.tsx         # Interactive video card
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/bloom-petal.git
cd bloom-petal

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Required Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "tailwindcss": "^4.x",
    "vite": "^6.x",
    "@vitejs/plugin-react": "^4.x",
    "typescript": "^5.x"
  }
}
```

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the `dist` folder to the `gh-pages` branch
```

## 🎯 Brand Voice

> "Bloom & Petal is an artisan flower shop founded in 2009, crafting bespoke floral arrangements with ethically sourced blooms. The brand embodies elegance, nature, and handcrafted artistry — every petal placed with intention and care."

The website feels like a premium editorial experience — cinematic, refined, and emotionally resonant. Think Aesop meets Diptyque meets a high-end florist.

## 📝 License

MIT License — feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🙏 Credits

- Videos: [mp4tourl.com](https://cdn.mp4tourl.com)
- Images: [Unsplash](https://unsplash.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [Lucide](https://lucide.dev)

---

Made with 🤍 and fresh flowers by Bloom & Petal
