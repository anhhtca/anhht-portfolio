# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: fellow developers, tech peers, and members of the engineering community visiting a personal Digital Garden and builder hub. They arrive from GitHub, social links, or shared project URLs to inspect real shipped software, read technical notes/blog posts, understand Tuan Anh's engineering craft, and connect or collaborate.

## Product Purpose

A personal portfolio and Digital Garden for Hoàng Tuấn Anh (`anhht` / `@anhhtz`) — Fullstack Developer & AI Builder based in Ho Chi Minh City, Vietnam (`anhht.me`). It showcases real shipped applications (web apps, banking/enterprise workflow tools, IAM/RBAC platforms, browser extensions), documents professional experience across IT operations/DBA and independent fullstack/AI building, presents core technical skills, provides a clean writing home for future blog posts, and offers direct contact and resume access.

## Positioning

Combines deep enterprise infrastructure and database reliability (Oracle/PostgreSQL DBA, Linux, high availability, banking workflow systems) with pragmatic independent product building (Next.js, TypeScript, IAM/RBAC, LLM/RAG automation, privacy-first browser tools). Built around the ethos: *"Building useful software. Exploring AI. Automating the boring stuff."*

## Operating Context

- Visitors browse on desktop and mobile in either Vietnamese (`vi`) or English (`en`), switching seamlessly via the language toggle.
- Visitors read in either Light or Dark mode (system-aware by default).
- Technical peers evaluate architecture, tech stacks, live demos, and source code directly from project cards and detail pages.

## Capabilities and Constraints

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3.4, Framer Motion, Radix UI, `next-themes`.
- **Theming:** Simplified strictly to Light and Dark modes (with `system` default). Remove the legacy novelty themes (`retro`, `cyberpunk`, `paper`, `aurora`, `synthwave`) for a cohesive, professional, minimalist identity.
- **Internationalization:** Full bilingual support (`vi` / `en`) via `LocaleProvider` and `locales/vi.ts`, `locales/en.ts`.
- **Routes & Structure:**
  - Home (`/`)
  - Projects (`/projects`, `/projects/[projectId]`)
  - Experience (`/experience`, `/experience/[expId]`)
  - Skills (`/skills`)
  - Blogs (`/blogs`, `/blogs/[slug]`) — remove upstream template sample posts (`namanbarkiya`) and provide a clean, ready-to-publish Digital Garden state until real posts are added.
  - Contact (`/contact`) with working contact form (`/api/contact`)
  - Resume (`/resume`)
- **Analytics & SEO:** Preserve Google Analytics, Vercel Analytics, OpenGraph/Twitter metadata, `sitemap.ts`, and `manifest.ts`.

## Brand Commitments

- **Identity:** Hoàng Tuấn Anh (`Tuấn Anh` / `anhht` / `@anhhtz`), `anhht.me`.
- **Aesthetic Mandate (User-Pinned):** Professional, minimalist, clean ("chuyên nghiệp hơn, tối giản, sạch sẽ").
- **Existing Assets:**
  - Avatar: `/public/profile-img.png`
  - Project visuals: `bankquiz.png` (remote), `sdtn-demo-browser-frame.png` (remote), `community.agribank.me/og-image.png` (remote), `/public/smart-tab-cleaner-icon.png`, `/public/logo.png`.
  - Socials: GitHub (`https://github.com/anhhtz`), Email (`mailto:anhht.ca@gmail.com`).

## Evidence on Hand

- **6 Real Projects (`config/projects.ts`):**
  1. BankQuiz (`https://bankquiz.app`) — Learning & assessment PWA
  2. Users Management System / UMS (`https://ums.io.vn`) — Centralized IAM / RBAC / JWT platform
  3. SDTN - Credit File Transfer System (`https://sdtn-project.web.app/`) — Enterprise banking credit file routing software
  4. Agribank LOS Reviewer (`http://los.anhht.me/`) — Collaborative BA & LOS requirements review platform
  5. Agribank Community (`https://community.agribank.me/`) — Banking knowledge-sharing community
  6. Smart Tab Cleaner (`https://github.com/anhhtz/smart-tab-cleaner-extension`) — Privacy-first Manifest V3 Chrome extension
- **2 Experience Tracks (`config/experience.ts`):**
  1. IT Operations & Database Administration (Enterprise IT Environment)
  2. Fullstack Developer & Independent Builder (Independent Projects)
- **6 Skill Categories (`config/skills.ts`):** Frontend, Backend, Databases, AI Engineering, Infrastructure & DevOps, Engineering Practices.
- **Absences (Do Not Fabricate):** No published personal blog posts yet (remove template posts); no testimonials, client logos, or fabricated metrics; no LinkedIn/Twitter links currently active.

## Product Principles

1. **Shipped work leads.** Real projects, live links, and concrete architecture details speak louder than decorative flair.
2. **Clarity over novelty.** Restraint in layout, typography, and color (Light/Dark only) communicates engineering maturity.
3. **Bilingual parity.** Vietnamese and English experiences must feel equally natural, well-typeset, and complete.
4. **Digital Garden readiness.** Structure the site so new projects and technical writing slot in effortlessly without layout bloat.
