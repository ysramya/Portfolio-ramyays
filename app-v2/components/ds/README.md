# Design System

Reusable building blocks for every page. The style contract is
**`design-system.md`** (repo root); this file describes how the React
components implement it. Where the two disagree, the contract wins.

This directory is components only — see `app/design-system/page.tsx` for an
internal visual reference render.

## Tokens (`tokens.ts`)

| Token | Value | Where it's used |
|---|---|---|
| `font.display` | Prata (400 only, never bolded) | all headings |
| `font.body` | DM Sans (300/400/500) | all body text |
| `type.caseTitle` | `clamp(46px, 5.6vw, 80px)` | H1 |
| `type.sectionTitle` | `clamp(27px, 2.7vw, 36px)` | section titles |
| `type.statement` | `clamp(28px, 3.1vw, 40px)` | hero statement |
| `type.cardTitle` | `19px` | card titles |
| `tracking.eyebrow` | `0.22em` | 12px uppercase labels |
| `tracking.meta` | `0.14em` | 10px meta |
| `radius.card` / `.media` | `8px` | every container |
| `radius.pill` | `999px` | buttons, tags, circular controls |
| `motion.ease` | `[0.16, 1, 0.3, 1]` | every transition, no exceptions |
| `motion.reveal` | translateY-only entrance | see `Reveal.tsx` |

Colour is **not** duplicated here — it lives as CSS custom properties in
`app/globals.css`.

### Colour token structure

```
--bg             #F7F5F0   page ground (warm ivory)
--bg-raised      #FCFBF7   work cards
--bg-band        #EFEDE6   occasional alternate band
--panel          #ECEAE3   tinted cards
--panel-sage     #E5EAE3   the emphasised card in a section
--ink            #12271F   headings, primary buttons, icons
--body           #3D4E45   body copy
--muted          #5C6B62   eyebrow / label text
--muted-2        #66756C   meta, captions
--rule           #E1DED4   section hairlines
--border         #E3E0D6   card borders
--border-strong  #C3BEAF   outline controls, micro-rule
--numeral        #A47E61   section numerals — the only accent
--deep           #10231B   hero and closing ground
```

`.theme-deep` re-defines these tokens for dark bands (ivory ink, green
panels, lighter numeral), so components need no dark variant. The old
`--color-*` names still resolve, and are re-declared inside `.theme-deep` so
they follow the scope too.

### Surfaces (there is no glass)

Blur, translucency, gradients and drop shadows are out. Depth comes from
tone and hairlines.

- `.panel` / `.panel-sage` — tinted cards, 8px corners, no border.
- `.card` — raised work card, hairline border, 8px corners. Hover changes the
  border only: no lift, no scale.
- `.glass` / `.glass-strong` / `.glass-menu` — kept as names for older markup,
  rendered as `.panel`. `tintedGlass()` in `tokens.ts` likewise ignores its
  colour argument and returns the panel. **Don't reach for either in new
  code.**

### Motion rule (read this before adding any entrance animation)

Every scroll-triggered reveal must go through `Reveal.tsx`. It animates
`translateY` only — **never gate opacity on scroll-into-view**. On this
project's rendering pipeline, IntersectionObserver callbacks have fired
late enough to leave entire sections blank when opacity was part of the
hidden state. Content must be visible by default; motion only enhances it.

### Responsive behavior

- Breakpoints are Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px.
- `.sec-grid` splits into head/visual columns from 900px and stacks below.
- `EditorialLayout` / `GalleryLayout` children collapse to one column below
  `md` (see `.ds-grid` in globals.css).

## Component catalog

| Component | Role |
|---|---|
| `DeepBand` | Deep-green band for heroes and closings; sets `data-nav="dark"` for the nav |
| `SectionHead` | Numeral + eyebrow + serif title + short copy |
| `Section` | Container, rhythm and top hairline for a numbered section |
| `NextProjectBand` | Dark closing band linking to the next case study (`getNextProject()` in `lib/projects.ts`) |
| `PhoneShot` | An app screen in its device frame, background removed |
| `Hero` | Opening: title, thesis line, at-a-glance meta, hero mockup |
| `EditorialStatement` | A single driving insight as a full-width pause |
| `SplitLayout` | Alternating image/text |
| `FeatureShowcase` | One large asymmetric "here's the solution" moment |
| `Gallery` | Multiple captioned images, varied aspect ratios |
| `ImageGrid` | Uniform grid, no captions |
| `ResearchGallery` | Captioned research artifacts with a methodology label |
| `InsightCards` | Parallel, comparable ideas |
| `Metrics` | Outcome numbers where the value is the content |
| `FloatingQuote` | Verbatim participant/stakeholder voice |
| `BehindTheBuild` | Process/tooling narrative, icon + label pairs |
| `NextProject` | Legacy next-project CTA (new pages use `NextProjectBand`) |
| `GlassCard` | Raw panel for one-off content (flat, not glass) |
| `Reveal` | Shared entrance-animation primitive |
| *Navigation* | Global chrome — `components/Nav.tsx` |
| *Footer* | Global chrome — `components/Footer.tsx` |

Older components still accept an `accent` prop; it no longer tints anything.
Project identity comes from each project's own imagery.

### Numbering in long case studies

PM Dashboard, Raahi, Wellnut and Invisible Impacts wrap their page in
`.auto-number`. Any block whose direct children begin with `.eyebrow`
followed by an h2 or h3 gets the next numeral via a CSS counter, so their
section headers didn't need rewriting. New pages should use `SectionHead`
with explicit numbers instead.
