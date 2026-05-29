# N7 Landing Page

A modern, fully responsive landing page for **N7**, a digital banking platform.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- shadcn-style UI components (`Button`, `Section`)
- Framer Motion (scroll animations)
- Lucide React (icons)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    layout/     Header, Footer
    sections/   Hero, FeatureGrid, DashboardShowcase, MobileShowcase, ServicesGrid, CaseStudies, CtaBanner, ScrollingTicker
    ui/         Button, Section
  lib/          utils
  index.css     Tailwind theme and global styles
  App.tsx       Page composition
public/
  assets/       Images and brand logos
```

## Features

- Fully responsive across desktop, tablet, and mobile
- Reusable, component-based architecture
- Smooth scroll-in animations and subtle transitions
- Clean, maintainable code following modern frontend best practices
