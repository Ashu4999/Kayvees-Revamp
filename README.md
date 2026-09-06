# Kayvees Estates & Infra Projects (2026 Modern Edition)

A high-performance, mobile-first, SEO-optimized web application re-engineered for **Kayvees** (est. 1997, Pune, India) using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **TypeScript**.

This project is **100% self-contained** — all 619 media assets (including all 573 authentic project photos across 30 projects, 22 client logos, CEO portraits, and PDF brochures) are packaged directly inside the repository under `public/assets/`. It runs with zero external API or legacy server dependencies.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) with Static Site Generation (SSG).
- **UI Library**: [React 19](https://react.dev/).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom architectural palette:
  - Deep Obsidian Navy (`#0B132B`)
  - Corporate Electric Cyan (`#0284C7`)
  - Warm Architectural Gold (`#C5A880`)
  - Crisp Off-White Surface (`#F8FAFC`)
- **Icons**: [Lucide React](https://lucide.dev/).
- **Typography**: Google Fonts (*Plus Jakarta Sans* for display headings, *Inter* for body copy).
- **SEO & Structured Data**: 
  - Dynamic `sitemap.xml` and `robots.txt`
  - OpenGraph & Twitter Cards
  - Schema.org JSON-LD `RealEstateAgent` and `GeneralContractor` specification for Pune local business indexing.

---

## 📂 Project Structure

```text
kayvees-modern/
├── app/
│   ├── globals.css              # Tailwind base, utility classes & custom scrollbars
│   ├── layout.tsx               # Root layout, Google Fonts, SEO Metadata & Schema.org JSON-LD
│   ├── page.tsx                 # Main landing page assembling all modular components
│   ├── robots.ts                # Auto-generated robots.txt
│   └── sitemap.ts               # Auto-generated sitemap.xml for Google Search Console
├── components/
│   ├── Navbar.tsx               # Sticky frosted-glass header with standalone logo & mobile drawer
│   ├── HeroSection.tsx          # High-impact architectural hero with trust badges & counters
│   ├── ClientsMarquee.tsx       # CSS-accelerated infinite logo ticker (all 22 corporate clients)
│   ├── ServicesBento.tsx        # Asymmetrical 4-card Bento Grid (Industrial, Land, Commercial, Residential)
│   ├── ProjectsGallery.tsx      # Category filterable gallery (30 projects)
│   ├── ProjectSliderModal.tsx   # Full-featured lightbox slider (arrows, counter, keyboard shortcuts, thumbnails)
│   ├── CeoSection.tsx           # Executive vision section with authentic quote & credentials
│   ├── BrochureSection.tsx      # Direct download card for Peacock Feather Brochure
│   ├── ContactSection.tsx       # Consultation lead form + Head Office details & Pune map link
│   ├── Footer.tsx               # Clean 4-column footer with standalone brandmark
│   └── FloatingWhatsApp.tsx     # Pulsing 1-tap WhatsApp consultation CTA button
├── data/
│   ├── content.ts               # Company information, contacts, address, and services catalog
│   └── projects.ts              # Typed dataset of all 30 projects and their 573 image paths
├── public/
│   └── assets/                  # 100% self-contained local media (619 files)
│       ├── img/                 # Logos, banners, service icons, 22 client logos, CEO photo
│       ├── gallery/             # 573 high-resolution site photos organized by project
│       └── pdf/                 # peacock_feather_brochure.pdf (406 KB)
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind theme configuration
├── tsconfig.json                # TypeScript compiler configuration
└── package.json                 # Project dependencies and npm scripts
```

---

## 🌟 Key Features

1. **Clean Brand Presentation**:
   - Clean, standalone official Kayvees brandmark without redundant duplicate text in the header and footer.
2. **Complete 30-Project Photo Archive (573 Photos)**:
   - Full lightbox slider with Previous/Next arrows, keyboard navigation (`Left`, `Right`, `Escape`), live photo counter (`Photo X of Y`), and horizontal thumbnail carousel.
3. **High-Converting Lead Funnel**:
   - 1-tap WhatsApp consultation with pre-filled inquiries.
   - Interactive consultation request form with input validation.
   - Click-to-call direct contact (`+91 8380068929` and Kothrud landlines).
4. **Offline & Self-Contained**:
   - All assets reside locally in `public/assets/`. Cloning the repository gives you the entire project ready to run with no missing images or external links.

---

## 🚢 Deployment Guide (Free on Vercel / Cloudflare)

### Deploying to Vercel (Recommended):
1. Push this folder to a GitHub/GitLab repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Click **Deploy**. Vercel will automatically detect Next.js 15, build static pages, and assign a free global CDN URL with automatic SSL.
