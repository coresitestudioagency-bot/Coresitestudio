# 🌸 Bloom & Petal - Premium Artisan Florals

A stunning, cinematic website for a premium flower shop featuring smooth animations, video backgrounds, and a theatrical curtain reveal entrance.

## ✨ Features

### 🎬 Cinematic Experience
- **Theatrical Curtain Reveal**: Website opens with dramatic curtain split animation
- **Crystal Clear Preloader**: 3-second video introduction with brand animation
- **Fullscreen Video Hero**: Immersive video background with blur-to-clear effect
- **Smooth Scroll Animations**: Every section reveals with elegant transitions

### 🎨 Design Elements
- **Premium Typography**: Cormorant Garamond (italic serif) + Inter (sans-serif)
- **Color Palette**: Warm cream (#F9F6F0) + Forest green (#1A2F1A) + Rose pink (#c4738a)
- **Liquid Glass Navigation**: Floating pill navbar with backdrop blur
- **Falling Flowers Animation**: 20 animated petals with bottom accumulation
- **Parallax Background**: 5 SVG leaves moving at different speeds

### 📱 Responsive Design
- **Desktop**: 4-column bento grid, full features
- **Mobile**: 2-column compact grid, optimized spacing
- **Touch-friendly**: Horizontal scroll galleries with snap points

### 🎥 Video Integration
- Hero background video
- Spring Garden Collection showcase
- Seasonal video card
- Our Story sticky section with parallax

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animations & gestures
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
bloom-petal/
├── index.html                    # Entry HTML with preloader
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── .gitignore                   # Git ignore rules
├── README.md                    # This file
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # Main app component
    ├── index.css                # Global styles & animations
    └── components/
        ├── AnimatedButton.tsx       # Text-roll hover buttons
        ├── FlowerRain.tsx           # Falling flower petals
        ├── LiquidGlassNav.tsx       # Floating glass navbar
        ├── ParallaxBackground.tsx   # Parallax SVG leaves
        ├── ScrollReveal.tsx         # Scroll-triggered reveals
        ├── StickyMarquee.tsx        # Bottom scrolling banner
        ├── StickyStorySection.tsx   # Split-screen scrollytelling
        └── VideoShowcaseCard.tsx    # Interactive video card
```

## 🚀 GitHub Upload Instructions

### Method 1: Using GitHub Desktop (Recommended)

1. **Download GitHub Desktop**
   - Go to [desktop.github.com](https://desktop.github.com)
   - Download and install

2. **Add Your Project**
   - Open GitHub Desktop
   - Click "Add" → "Add Existing Repository"
   - Select the `bloom-petal` folder
   - Click "Create a Repository"
   - Name: `bloom-petal`
   - Click "Create Repository"

3. **Publish to GitHub**
   - You'll see all files listed
   - Type message: `Initial commit`
   - Click "Commit to main"
   - Click "Publish repository"
   - ✅ Choose Public or Private
   - Click "Publish Repository"

**Done!** All files uploaded with correct folder structure! 🎉

### Method 2: Using Git Commands

```bash
# Navigate to project folder
cd bloom-petal

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Bloom & Petal website"

# Create repository on GitHub (github.com/new)
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/bloom-petal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Method 3: Using GitHub Website

1. Go to [github.com/new](https://github.com/new)
2. Create repository: `bloom-petal`
3. Click "uploading an existing file"
4. **Upload all files** (drag and drop entire folder)
5. Click "Commit changes"

## 🎬 Animation Timeline

```
0.0s  - Preloader starts (video plays)
3.0s  - Preloader fades out (0.8s)
3.0s  - Curtains start splitting (1.2s)
3.3s  - Website container fades in (1.2s)
4.0s  - Navigation slides down (1s)
4.5s  - Hero video starts (blur to clear, 2s)
5.0s  - Badge appears (0.8s)
5.3s  - Heading scales in (1s)
5.6s  - Subheading fades up (0.8s)
5.9s  - CTA buttons appear (0.8s)
```

**Total time: ~6 seconds**

## 🎥 Video URLs

| Section | Video URL |
|---------|-----------|
| Preloader | `https://cdn.mp4tourl.com/video/free/a03c92d3-0886-47b7-addf-a2b56109370e.webm` |
| Hero Background | `https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm` |
| Spring Garden Collection | `https://cdn.mp4tourl.com/video/free/1077be85-0baf-4b2f-a414-cf6c6268dd7d.webm` |
| Seasonal Video Card | `https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm` |
| Our Story Section | `https://cdn.mp4tourl.com/video/free/59ef6170-d888-4968-b0c1-a78364f8a59d.webm` |

## 🎨 Key Features Explained

### Curtain Reveal Animation
Two dark green curtains split apart from the center, creating a theatrical reveal effect that perfectly matches the artisan brand.

### Liquid Glass Navigation
Floating pill navbar with backdrop blur, hover-activated dropdowns, and smooth mobile menu transitions.

### Falling Flowers
20 animated flower petals continuously fall from the top and accumulate at the bottom, creating a magical atmosphere.

### Scroll Reveal System
Every section, heading, and card fades in smoothly when scrolled into view using Framer Motion's `whileInView`.

### Video Showcase Card
Interactive video card with play/pause controls, mute toggle, progress bar, and hover effects.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2-column grid, compact cards)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (4-column bento grid)

## ⚡ Performance Optimizations

- `preload="metadata"` on all videos
- `loading="lazy"` on images
- `React.memo` on static components
- `useCallback` for event handlers
- `will-change` on animated elements
- GPU-accelerated transforms
- `prefers-reduced-motion` support

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Credits

- **Videos**: [mp4tourl.com](https://cdn.mp4tourl.com)
- **Images**: [Unsplash](https://unsplash.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Icons**: [Lucide](https://lucide.dev)

---

Made with 🤍 and fresh flowers by Bloom & Petal
