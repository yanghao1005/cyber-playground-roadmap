# 🌌 Cyber Playground (Digital Geek Sandbox) - Master Roadmap

> **Project Vision:** A pure, passion-driven personal creative coding laboratory built solely for the joy of writing code, stunning visual impact, and geek aesthetics. Completely decoupled from commercial goals or KPIs, this project unifies four high-interaction, immersive web experiences into a single, elegant Next.js monorepo architecture.

---

## 🛠️ Tech Stack Architecture

* **Core Framework:** `Next.js (App Router)` — Delivers lightning-fast client-side page transitions and powerful Server-Side Rendering (SSR) capabilities.
* **Styling & UI:** `Tailwind CSS + Lucide Icons` — Unified dark mode, glassmorphism, and cyberpunk neon aesthetics.
* **Graphics & Physics Rendering:** `HTML5 Canvas API / SVG / CSS 3D Transforms`.
* **Audio Synthesis:** `Web Audio API` — Real-time algorithmic white noise and soundscape generation with zero external audio assets.
* **Deployment & CI/CD:** `Vercel` — Zero-ops, automated deployments straight from `git push`.

---

## 📂 Monorepo Directory Structure

The entire playground is structured cleanly using Next.js App Router route groups:

```text
cyber-playground/
├── app/
│   ├── page.tsx                    # 🌟 Playground Lobby (Interactive Portal / Card Navigation)
│   ├── generative-art/
│   │   └── page.tsx                # Project 01: Generative Art Sandbox
│   ├── cyberpunk-terminal/
│   │   └── page.tsx                # Project 02: Cyberpunk Hacker Terminal Dashboard
│   ├── particle-snake/
│   │   └── page.tsx                # Project 03: Particle-Explosion Snake
│   └── cyber-shelter/
│       └── page.tsx                # Project 04: Interactive Cyber-Shelter / Lo-Fi Room
├── components/
│   ├── shared/                     # Shared layout elements (Floating Back-to-Lobby button, global shell)
│   ├── generative/                 # Project 01 exclusive canvas & math logic
│   ├── terminal/                   # Project 02 exclusive terminal & map logistics
│   ├── snake/                      # Project 03 exclusive arcade grid & particle pool system
│   └── shelter/                    # Project 04 exclusive weather canvas & audio synthesizer
└── public/
    └── assets/                     # Static assets, fallback icons, or textures
```

---

## 📋 Detailed Project Roadmaps

### Project 01: Generative Art Sandbox
* **Concept:** Harness pure mathematical formulas, trigonometric functions, and Perlin Noise to render mesmerizing, infinitely unique glowing geometric wallpapers on every refresh.
* **Core Modules:**
  1. **Fullscreen Canvas Viewport:** Double-buffered real-time rendering locked at a stable 60 FPS.
  2. **Floating Control Deck:** Glassmorphism UI panel featuring live sliders for rotation velocity, noise scale, and color gradient cycles.
  3. **Preset Engine:** Instant toggles for classic mathematical models (e.g., discrete mandalas, complex function vortices, fluid particle fields).
  4. **Snapshot Exporter:** Instantly export the current animation frame as a crisp 4K PNG wallpaper.

### Project 02: Cyberpunk Hacker Terminal Dashboard
* **Concept:** Satisfy inner sci-fi tropes with a cinematic hacker command center featuring high-contrast cold palettes and streaming data feeds.
* **Core Modules:**
  1. **Global Data Trace Map:** Dark-mode vector map layered with parabolic data transmission arcs.
  2. **Matrix Character Rain:** High-frequency scrolling binary and hexadecimal random glyph streams.
  3. **AI Breach Progress Matrix:** Simulated system diagnostics and node-infiltration progress bars.
  4. **Interactive Shell Terminal:** Input arbitrary shell commands (`help`, `hack`, `status`, `override`) to output high-tech simulated execution logs.

### Project 03: Particle-Explosion Snake
* **Concept:** Reconstruct the timeless classic arcade game into an over-the-top sensory experience powered by modern particle explosions, screen shakes, and glowing motion trails.
* **Core Modules:**
  1. **Retro Neon Arcade Shell:** High-contrast neon aesthetics paired with LocalStorage high-score tracking.
  2. **Dynamic Motion Blur & Elastic Body:** Smooth trailing physics and subtle snake deformation during sharp turns.
  3. **High-Energy Particle Explosion Engine:** Consuming food triggers an instant burst of dozens of gravity- and friction-aware colored micro-particles.
  4. **Dynamic Screen Shake:** Triggers high-frequency viewport micro-vibrations upon scoring major milestones or game-over events.

### Project 04: Interactive Cyber-Shelter (Lo-Fi Room)
* **Concept:** An emotional, digital safe haven combining visual atmosphere with interactive generative white noise—rain pouring outside while a warm programmer’s desk glows within.
* **Core Modules:**
  1. **Atmospheric Art Viewport:** Cyberpunk/pixel-art styled late-night desk setup with illuminated monitors.
  2. **Dynamic Weather System:** Raindrops with physical sliding trajectories on glass, accompanied by occasional procedural lightning flashes.
  3. **Micro-Interactions:** Click to wipe window condensation, click the coffee mug to generate rising steam particles, or toggle desk lamp lighting.
  4. **Algorithmic White Noise Synth:** Leverages the Web Audio API to synthesize soothing, customizable rain and thunder ambiance in real-time.

---

## 🚀 Quick Start Repository Initialization

Initialize and structure your local repository with the following commands:

```bash
npx create-next-app@latest cyber-playground --typescript --tailwind --app
cd cyber-playground
# Save this file content as README.md in the root directory
git init
git add .
git commit -m "feat: initialize cyber-playground master roadmap and monorepo structure"