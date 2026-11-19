# Design System — anhht.me

## Aesthetic Direction

**Luminous Cobalt Studio** on the elevated original portfolio structure: clean, luminous porcelain surfaces in Light mode paired with deep obsidian-navy surfaces in Dark mode, anchored by vibrant Cobalt (`#2563EB` / `#3B82F6`) and Sky (`#0EA5E9` / `#38BDF8`) accents. Designed for bilingual (`vi` / `en`) technical reading and artifact-forward project presentation.

## Color System

All color tokens live in `app/globals.css` as HSL CSS custom properties and map through `tailwind.config.js`. Only **Light** and **Dark** themes (with `system` default) are supported.

| Token | Light (`:root`) | Dark (`.dark`) | Role |
|---|---|---|---|
| `--background` | `210 40% 98%` (`#F8FAFC`) | `222 41% 6%` (`#090D16`) | Primary page ground |
| `--band` | `215 54% 96%` (`#EFF4FB`) | `222 42% 9%` (`#0E1422`) | Alternating section bands & subtle pills |
| `--card` | `0 0% 100%` (`#FFFFFF`) | `221 41% 12%` (`#121A2B`) | Elevated card & sticky header surfaces |
| `--foreground` | `222 47% 11%` (`#0F172A`) | `210 40% 98%` (`#F8FAFC`) | Primary ink |
| `--muted-foreground` | `215 19% 35%` (`#475569`) | `215 20% 66%` (`#94A3B8`) | Secondary copy & metadata |
| `--primary` | `221 83% 53%` (`#2563EB`) | `217 91% 60%` (`#3B82F6`) | Primary CTAs, active indicators, links |
| `--secondary` | `214 95% 93%` (`#DBEAFE`) | `219 46% 18%` | Soft accent pills & active nav surfaces |
| `--secondary-foreground` | `224 76% 48%` (`#1D4ED8`) | `213 94% 78%` | High-contrast text on `--secondary` |
| `--border` | `215 44% 90%` (`#DCE5F2`) | `219 37% 21%` (`#22304A`) | 1px hairline borders & dividers |

## Typography

Loaded via `next/font/google` in `app/layout.tsx` with both `latin` and `vietnamese` subsets:

- **Display & Body (`--font-sans`):** `Be Vietnam Pro` (400, 500, 600, 700) — engineered specifically for Vietnamese diacritic balance and crisp Latin legibility.
- **Technical Metadata (`--font-mono`):** `JetBrains Mono` (400, 500, 600) — reserved strictly for tech stack chips, dates/periods (`tabular-nums`), categories, and code blocks.

## Layout & Spacing

- **Container:** Centered `max-width: 1200px` with responsive padding (`1.25rem` → `2rem`).
- **Header:** Sticky `64px` (`h-16`) translucent bar (`bg-card/85 backdrop-blur-md border-b border-border/80`).
- **Home Page Rhythm:**
  1. Full-width centered luminous Hero (`.hero-luminous` + `.hero-dots`), portrait avatar with Cobalt-Sky gradient ring, location pill, display name, Cobalt role subtitle, concise tagline, 2 balanced CTAs, scroll cue.
  2. Alternating full-bleed bands (`bg-band` / `bg-background`) separated by `1px` borders with generous vertical rhythm (`py-16 md:py-24`):
     - **Projects:** 3-column visual `ProjectCard` grid (`aspect-[16/10]` preview frames).
     - **Experience:** Balanced 2-column `ExperienceCard` grid (`max-w-4xl`).
     - **Skills:** 3-column `SkillsCard` grid with category-tinted icon badges (no star ratings).
- **Footer:** Compact horizontal bar with identity mark, copyright, quick links, and social icons.

## Elevation, Motion & Browser Surfaces

- **Cards:** `rounded-2xl border border-border bg-card shadow-card` with subtle lift (`hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover`).
- **Browser Surfaces:** Palette-matched `::selection`, `caret-color`, `:focus-visible` ring, custom scrollbars, and `text-underline-offset: 4px` in `app/globals.css`.
- **Headings:** No decorative eyebrows/kickers or section numbers above headings; headings carry their own typographic weight with `text-balance`.
