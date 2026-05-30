# N7 — Digital Banking Landing Page

A production-style marketing site for **N7** (digital banking) and **CB7** (core banking). The page tells a full product story—from hero and platform features to mobile apps, insights, and case studies—built as a single-page React app with a consistent dark-navy brand system and subtle scroll animations.

> **What this repo is:** a front-end showcase / landing page, not a banking backend. All content, CTAs, and imagery are static and component-driven.

---

## At a glance

| | |
|---|---|
| **Stack** | React 19 · TypeScript · Vite 6 · Tailwind CSS v4 |
| **UI** | shadcn-style primitives (`Button`, `Section`) · Lucide icons |
| **Motion** | Framer Motion — fade-in-up + stagger on scroll (no heavy effects) |
| **Layout** | Mobile-first, responsive grids, overflow-safe full-width sections |
| **Theme** | CSS variables in `src/index.css` — navy background, cyan→blue gradients |

---

## Page story (top → bottom)

The page is composed in `src/App.tsx` in this order:

```
Header (sticky nav)
  └─ Hero                    — value prop, partner logos, product visual
  └─ FeatureGrid             — Core Banking CB7, Digital N7, Open Banking, etc.
  └─ DashboardShowcase       — laptop mockups + dashboard narrative
  └─ CtaBanner               — reusable contact / demo card (CB7)
  └─ ScrollingTicker         — infinite marquee (N7 · CB7 · tagline)
  └─ MobileShowcase          — three iPhone rows + compliance copy + CTA
  └─ ServicesGrid            — Insights cards + featured article
  └─ CaseStudies             — carousel with peek slides + pagination
  └─ CtaBanner (transparent) — second CTA before footer
Footer                       — locations, solutions links, large N7 wordmark
```

Each block lives in `src/components/sections/` (or `layout/` for chrome). Adding a section means creating a component and dropping it into `App.tsx` inside `<main>`.

---

## Design system

Colors and utilities are centralized in **`src/index.css`** via Tailwind v4 `@theme`:

| Token | Role |
|-------|------|
| `--color-n7-bg` | Page background (`#020617`) |
| `--color-n7-card` | Card surfaces (`#01141B`) |
| `--color-n7-gradient-from` / `-to` | Brand gradient (`#0284c7` → `#1e3a8a`) |
| `.text-gradient-n7` | Gradient text (headlines, N7/CB7 labels) |
| `.btn-gradient` | Primary CTA buttons |
| `.n7-gradient-border` | Laptop / device frame borders |
| `.glow-blue` | Soft radial highlights (kept subtle) |

Typography uses **Inter** for body and **Chivo Mono** (`.font-chivo`) for labels and UI chrome. Prefer these utilities over hard-coded hex values so a rebrand stays one-file easy.

---

## Animations

Shared variants live in **`src/lib/motion.ts`**:

- **`fadeInUp`** — opacity + 20px rise (~0.45s)
- **`staggerContainer`** — children animate in sequence on scroll
- **`viewport`** — `once: true`, triggers slightly before the element is fully on screen

The **`Section`** wrapper (`src/components/ui/section.tsx`) applies scroll fade-in by default. Pass `animate={false}` when a section handles its own motion (e.g. `MobileShowcase` row stagger) to avoid double animation.

---

## Project structure

```
N7/
├── public/assets/          # PNGs: logos, phones, dashboards, icons
├── src/
│   ├── App.tsx             # Page composition (section order)
│   ├── index.css           # Theme tokens + global utilities
│   ├── main.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/       # One file per page block
│   │   │   ├── Hero.tsx
│   │   │   ├── FeatureGrid.tsx
│   │   │   ├── DashboardShowcase.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   ├── ScrollingTicker.tsx
│   │   │   ├── MobileShowcase.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   └── CaseStudies.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── section.tsx
│   │       └── cta-card.tsx    # Shared CTA card (used by CtaBanner + MobileShowcase)
│   └── lib/
│       ├── motion.ts       # Framer Motion variants
│       └── utils.ts        # cn() helper
├── index.html
├── vite.config.ts          # @ path alias → src/
└── package.json
```

**Path alias:** imports use `@/components/...` (configured in `vite.config.ts` + `tsconfig`).

---

## Key components

| Component | Purpose |
|-----------|---------|
| **`CtaCard`** | Reusable gradient-bordered CTA with title, description, CONTACT US / REQUEST DEMO |
| **`CtaBanner`** | Section wrapper around `CtaCard`; `transparent` prop for footer-adjacent placement |
| **`Section`** | Dark or light section shell + optional scroll animation |
| **`CaseStudies`** | Client-side carousel: active slide + scaled side previews, dots, VIEW ALL |
| **`ScrollingTicker`** | CSS infinite scroll + Framer fade-in on enter |
| **`Footer`** | Multi-row grid, gradient link arrows, exported `FooterGradientArrow` for case studies |

---

## Getting started

**Requirements:** Node.js 18+ (20+ recommended)

```bash
# Install dependencies
npm install

# Development (http://localhost:5173)
npm run dev

# Production build (TypeScript check + Vite bundle → dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Assets

Static images live under **`public/assets/`** and are referenced as `/assets/...` (e.g. `/assets/Dashboard.png`). Filenames with spaces are URL-encoded in code where needed (`iPhone%201.png`).

To swap creative: replace files in `public/assets/` keeping the same names, or update the `src` paths in the relevant section component.

---

## Customization guide

1. **Copy / messaging** — edit strings inside each `sections/*.tsx` file.
2. **Colors & gradients** — change CSS variables in `src/index.css` `@theme` block.
3. **Section order** — reorder imports in `src/App.tsx`.
4. **New section** — add `MySection.tsx` under `sections/`, wrap content in `<Section>` or `motion.div` using `motion.ts` variants, then import in `App.tsx`.
5. **Navigation links** — update `Header.tsx` and `Footer.tsx` (footer also holds office addresses and solution lists).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | `tsc -b` then production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |

---

## Tech choices (why)

- **Vite** — fast dev feedback and lean production bundles for a static marketing site.
- **Tailwind v4** — design tokens in CSS, no separate config file for theme colors.
- **TypeScript** — safer refactors as sections and props grow.
- **Framer Motion** — consistent scroll reveals without custom Intersection Observer boilerplate.
- **Component sections** — each marketing block is isolated, so designers and devs can work on one area without touching the whole page.

---

## License

Private project (`package.json` → `"private": true`). Add a license file here if you plan to open-source or share the repo.
