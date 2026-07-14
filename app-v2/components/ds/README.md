# Design System

Reusable building blocks for every case study, extracted from the homepage
(`app/page.tsx`, `components/Hero.tsx`, `components/PrinciplesRow.tsx`,
`components/ProjectRow.tsx`). The homepage is the source of truth — if a
token here and the homepage ever disagree, the homepage is right and this
file is stale.

This directory is components only. No case-study pages are built here —
see `app/design-system/page.tsx` for a visual reference render of every
component with sample content (internal QA tool, not a real route).

## Tokens (`tokens.ts`)

| Token | Value | Where it's used |
|---|---|---|
| `font.display` | Fraunces | all headings |
| `font.body` | Inter | all body text |
| `type.caseTitle` | `clamp(2.4rem, 6vw, 4.6rem)` | `Hero` title |
| `type.sectionTitle` | `clamp(1.8rem, 3.4vw, 2.6rem)` | section h2s |
| `type.rowTitle` | `clamp(2rem, 4.2vw, 3.4rem)` | editorial list titles |
| `type.statement` | `clamp(1.6rem, 3.2vw, 2.8rem)` | `EditorialStatement` |
| `tracking.display` | `-0.02em` | headings |
| `tracking.eyebrow` | `0.22em` | uppercase labels |
| `radius.pill` | `9999px` | buttons, chips |
| `radius.card` | `1rem` (rounded-2xl) | cards, glass surfaces |
| `radius.media` | `0.75rem` (rounded-xl) | inline imagery |
| `motion.ease` | `[0.16, 1, 0.3, 1]` | every transition, no exceptions |
| `motion.reveal` | translateY-only entrance | see `Reveal.tsx` |

Colors, blur, and glass are **not** duplicated here — they live as CSS
custom properties in `app/globals.css` (`--color-*`, `.glass` /
`.glass-strong` / `.glass-nav`). Reference `accentVar()` from `tokens.ts`
to resolve the green/yellow accent rotation in JS/inline styles.

### Color token structure

```
--color-green   #4CAF50   primary accent — research, progress, systems
--color-yellow  #FFDD44   secondary accent — insights, metrics, CTAs
--color-bg              #0E0E0E   page background
--color-bg-secondary    #171717   alternating section background
--color-surface         #1F1F1F   card fill
--color-border          #2B2B2B   hairline dividers
--color-ink             #F5F5F5   primary text
--color-ink-muted       #B5B5B5   secondary text
--color-ink-faint       #8A8A8A   tertiary / captions
```

Accent rule: alternate green/yellow across sibling items (cards, stats,
dividers) via `accentVar()` — never let a whole section read monochrome,
never use both accents heavily in the same single component.

### Glass tiers

- `.glass` — floating chrome over varied backgrounds (chips, buttons, badges). 60% dark tint, 20px blur.
- `.glass-strong` — panels over busy imagery that must stay legible (quotes, modals, stat callouts). 72% tint, 28px blur.
- `.glass-nav` — the fixed nav only, tuned separately for full-viewport width.

### Motion rule (read this before adding any entrance animation)

Every scroll-triggered reveal must go through `Reveal.tsx`. It animates
`translateY` only — **never gate opacity on scroll-into-view**. On this
project's rendering pipeline, IntersectionObserver callbacks have fired
late enough to leave entire sections blank when opacity was part of the
hidden state. Content must be visible by default; motion only enhances it.

### Responsive behavior

- Breakpoints are Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px.
- Two-column layouts (`Hero`, `SplitLayout`) collapse to a single column below `md`; `SplitLayout` still respects `imageSide` on mobile (whichever side is "first" stacks on top).
- Grids with per-item borders (see `BehindTheBuild`, and the homepage's `PrinciplesRow`) switch divider axis at the breakpoint: horizontal (`border-t`) when stacked to 1 column, vertical (`border-l`) once the row forms — never both, and the divider always belongs to the parent grid's structural edges, not faked with child margins.

## Component catalog

| Component | Section of a case study it serves |
|---|---|
| `Hero` | Opening: title, thesis line, at-a-glance meta, hero mockup |
| `EditorialStatement` | A single driving insight or How-Might-We, as a full-width pause |
| `SplitLayout` | Alternating image/text — rationale, walkthroughs, comparisons |
| `FeatureShowcase` | One large asymmetric "here's the solution" moment |
| `Gallery` | Multiple captioned images, varied aspect ratios |
| `ImageGrid` | Uniform NxN grid, no captions — scanning screen variations |
| `ResearchGallery` | Captioned research artifacts framed with a methodology label |
| `InsightCards` | Parallel, comparable ideas — research methods, design decisions |
| `Metrics` | Outcome numbers where the value itself is the content |
| `FloatingQuote` | Verbatim participant/stakeholder voice |
| `BehindTheBuild` | Process/tooling narrative, icon + label pairs |
| `NextProject` | Case-study-ending CTA to whatever comes next |
| `GlassCard` | Raw glass surface for one-off content that doesn't fit above |
| `Reveal` | Shared entrance-animation primitive — used inside most components above |
| *Navigation* | Global chrome — `components/Nav.tsx`, not in this catalog's export |
| *Footer* | Global chrome — `components/Footer.tsx`, not in this catalog's export |

Every component takes an `accent` prop (or defaults to alternating
green/yellow across siblings) so a future project-specific theme can pass
its own accent color through without touching the component internals.

## Usage

```tsx
import { Hero, SplitLayout, Metrics } from "@/components/ds";

<Hero
  badge="Case Study · 2026"
  title="Project title here"
  intro="One or two sentences of thesis."
  meta={[{ label: "Role", value: "Product Designer" }]}
  image="/img/project/hero.png"
  imageAlt="Project hero mockup"
/>
```
