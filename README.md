# ✦ RideX — Car Buy & Sell Dashboard

> A pixel-perfect, premium car marketplace dashboard — built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vanilla CSS design system**.

---

## 🖥 Overview

**RideX** is a modern, light-themed car buy/sell dashboard UI, designed to be pixel-perfect against a high-fidelity Behance reference. Every surface — from floating pill navigation to `#FEBE00` yellow accent bars — is deliberate, centralized, and maintainable.

---

## ✦ Key Features

- **Floating Pill Layout** — Logo, sidebar, nav, and user actions are independent floating pills on a neutral `#E1E1E1` canvas
- **Exact Behance Color Palette** — White cards, near-black text (`#010101`), silver muted (`#C4C3C6`), signature yellow `#FEBE00`
- **Centralized CSS Design System** — All styles live in `src/styles/index.css` with zero duplication
- **Tailwind CSS v4** — Utility classes via `@tailwindcss/vite`, co-existing with the custom design token system via `@theme`
- **Typed Data Layer** — All mock data in `src/data/`, all TypeScript types in `src/types/`
- **Zero Inline Styles in Logic** — Components consume CSS class names only; no scattered `style={{}}` props
- **Revenue Insights, Sales Trends, Completed Payment** — Analytics cards with mini bar charts and yellow accent bars
- **Full Routing** — Overview · Buy · Sell · Rent with active highlighting on both sidebar and top nav

---

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#E1E1E1` | App canvas |
| Surface | `#FFFFFF` | Cards, pill backgrounds |
| Text Primary | `#010101` | Headlines, active icons |
| Text Muted | `#C4C3C6` | Labels, placeholders, inactive |
| Accent Yellow | `#FEBE00` | Stars, bar charts, bottom accent bars |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx          # Root shell: left-rail + main-rail
│   │   ├── Sidebar.tsx         # Floating pill — icon navigation
│   │   └── Topbar.tsx          # Floating pill — top nav + user actions
│   └── dashboard/
│       ├── FeaturedCarCard.tsx # Hero car with hotspots & like/dislike
│       └── CarListCard.tsx     # Top selling car list items
├── data/
│   └── cars.ts                 # All mock/static data (single source)
├── pages/
│   ├── Overview.tsx            # Main dashboard view
│   ├── Buy.tsx
│   ├── Sell.tsx
│   └── Rent.tsx
├── styles/
│   └── index.css               # Full design system (CSS vars + Tailwind @theme)
├── types/
│   └── index.ts                # All TypeScript interfaces & types
├── App.tsx
└── index.tsx
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Start the development server
pnpm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Base Styles | Vanilla CSS design system (`index.css`) |
| Utilities | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | Inline SVGs (no icon library dependency) |
| Typography | Outfit (Google Fonts) |
| Routing | React Router v7 |

---

## 🌿 Git Branches

| Branch | Purpose |
|---|---|
| `main` | Original AutoHub community app |
| `feat/ridex-structure-refactor` | Full `src/` architecture overhaul |
| `feat/ridex-pixel-perfect-ui` | Pixel-perfect Behance design match |
| `feat/ridex-centralized-styles` | **Current** — Centralized CSS + Tailwind + data/types structure |

---

<p align="center">Designed with precision. Built for scale. ✦</p>
