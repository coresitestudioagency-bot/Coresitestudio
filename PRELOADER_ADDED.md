# 🎬 Cinematic Preloader Added

## What Was Added

A beautiful cinematic preloader that plays before the website opens, featuring:

### 🎥 Video Background
- **Video URL**: `https://cdn.mp4tourl.com/video/free/a03c92d3-0886-47b7-addf-a2b56109370e.webm`
- **Effect**: Video plays as background with `mix-blend-mode: multiply` to remove the background
- **Opacity**: 80% for a subtle, elegant look
- **Overlay**: Gradient overlay with blur effect for depth

### 🌸 Animated Brand Elements

1. **Flower Icon** (🌸)
   - 4rem size (3rem on mobile)
   - Floating animation (up/down with rotation)
   - 3-second infinite loop

2. **Brand Name** ("Bloom & Petal")
   - Font: Cormorant Garamond (italic, 600 weight)
   - Size: 4rem (2.5rem on mobile)
   - Color: Deep forest green (#1A2F1A)
   - Animation: Slide in from bottom with fade
   - Letter spacing: -0.02em for elegant tight tracking

3. **Tagline** ("Premium Artisan Florals")
   - Font: Inter (sans-serif)
   - Size: 1rem (0.875rem on mobile)
   - Color: Forest green with 70% opacity
   - Style: Uppercase with letter spacing
   - Animation: Fade in with delay

### ✨ Animation Timeline

```
0.0s - Preloader appears
0.0s - Container fades in and slides up
0.3s - Brand name slides in
0.6s - Tagline fades in
0.0s - Flower icon starts floating (continuous)
~3-5s - Video ends or timeout
~5-6s - Preloader fades out (1s transition)
~6s - Website appears
```

### 🎨 Visual Effects

1. **Background Removal**
   - `mix-blend-mode: multiply` blends the video with the cream background
   - Creates a transparent/overlay effect
   - Video appears to float on the page

2. **Gradient Overlay**
   - 135-degree gradient from cream to forest green
   - Low opacity (30% to 20%) for subtlety
   - Backdrop blur (2px) for depth

3. **Text Shadow**
   - Soft shadow on brand name
   - Creates depth and readability
   - Color: rgba(26, 47, 26, 0.1)

### ⏱️ Timing & Behavior

- **Auto-hide**: After video ends OR after 5 seconds (fallback)
- **Transition**: 1-second fade out with visibility change
- **Display**: Completely removed from DOM after transition
- **No interaction required**: Fully automatic

### 📱 Responsive Design

**Desktop (> 768px)**
- Flower icon: 4rem
- Brand name: 4rem
- Tagline: 1rem

**Mobile (≤ 768px)**
- Flower icon: 3rem
- Brand name: 2.5rem
- Tagline: 0.875rem

### 🎯 Technical Details

**HTML Structure**
```html
<div id="preloader" class="preloader">
  <video id="preloader-video" autoplay muted playsinline>
    <source src="..." type="video/webm" />
  </video>
  <div class="preloader-overlay"></div>
  <div class="preloader-content">
    <div class="brand-container">
      <span class="brand-icon">🌸</span>
      <h1 class="brand-name">Bloom & Petal</h1>
      <p class="brand-tagline">Premium Artisan Florals</p>
    </div>
  </div>
</div>
```

**Key CSS Properties**
- `position: fixed` - Covers entire viewport
- `z-index: 9999` - Above all content
- `mix-blend-mode: multiply` - Background removal effect
- `backdrop-filter: blur(2px)` - Depth effect
- `transition: opacity 1s, visibility 1s` - Smooth fade out

**JavaScript Behavior**
- Listens for video `ended` event
- Fallback timeout after 5 seconds
- Adds `preloader-hidden` class for fade out
- Removes from DOM after transition completes

### 🎬 User Experience Flow

1. User opens website
2. Preloader appears instantly (no loading state)
3. Video plays in background with brand animation
4. User sees elegant brand introduction
5. After video ends (or 5s), preloader fades out
6. Main website appears smoothly

### 🔄 Fallback Behavior

If the video fails to load or takes too long:
- Preloader still shows brand animation
- Automatically hides after 5 seconds
- Website remains accessible
- No broken experience

### 🎨 Design Philosophy

The preloader follows the same premium aesthetic as the main website:
- **Color palette**: Cream (#F9F6F0) + Forest green (#1A2F1A)
- **Typography**: Cormorant Garamond (serif) + Inter (sans-serif)
- **Animation style**: Smooth, elegant, cinematic
- **Overall feel**: Premium, artisan, handcrafted

### 📊 Performance

- **Video**: Preloaded with `preload="auto"`
- **Fonts**: Preconnected for fast loading
- **Animations**: GPU-accelerated (transform, opacity)
- **Transition**: Hardware-accelerated fade out
- **Cleanup**: Completely removed from DOM after use

### ✅ Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Fallback for browsers without video support

### 🎉 Result

Users now see a beautiful, cinematic introduction before the website loads, creating a premium first impression that matches the quality of the main website experience.
