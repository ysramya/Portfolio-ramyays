# Ramya Yerramilli — Portfolio Design System (v2)

The style contract for the whole site. v2 follows the ASAP case-study
reference visual: deep-green openings and closings, warm ivory content
sections, tan section numerals, soft corners. It replaces v1 (ivory-only
pages with a terracotta brush flourish).

Implementation lives in `app/globals.css` (tokens, the `.theme-deep` scope,
component classes) and `components/ds/` (React components).

---

## 1. Colour

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F7F5F0` | Page ground, warm ivory |
| `--bg-raised` | `#FCFBF7` | Work cards |
| `--bg-band` | `#EFEDE6` | Occasional alternate section band |
| `--panel` | `#ECEAE3` | Tinted cards — principles, opportunities |
| `--panel-sage` | `#E5EAE3` | The one emphasised card in a section — key insight, findings |
| `--ink` | `#12271F` | Headings, primary buttons, icons |
| `--ink-hover` | `#1D3A2E` | Primary button hover |
| `--body` | `#3D4E45` | Body copy |
| `--muted` | `#5C6B62` | Eyebrows, labels |
| `--muted-2` | `#66756C` | Meta, captions |
| `--rule` | `#E1DED4` | Section hairlines |
| `--border` / `--border-strong` | `#E3E0D6` / `#C3BEAF` | Card borders / outline controls |
| `--numeral` | `#A47E61` | Section numerals — **the accent** |
| `--deep` | `#10231B` | Hero and closing ground |

### Deep scope

`.theme-deep` re-defines the tokens instead of restyling components. Anything
inside a deep band reads correctly with no dark variant of its own:

| Token | Deep value |
| --- | --- |
| `--bg` | `#10231B` |
| `--panel` / `--bg-raised` | `#183228` |
| `--ink` | `#F2EFE7` |
| `--body` | `#C5CEC7` |
| `--muted` | `#98A89E` |
| `--rule` / `--border` | `#2A4338` |
| `--numeral` | `#C29A79` |

So `.btn` (fill `--ink`, label `--bg`) becomes an ivory button with a green
label on dark, and `.btn-outline` becomes a light outline — exactly the
reference hero.

### Wellnut scope

The one sanctioned exception to the ivory/green register. Wellnut carries the
lavender and plum of its own brand illustration, applied the same way — tokens
re-defined, components untouched:

| Token | Wellnut value | Deep band |
| --- | --- | --- |
| `--bg` | `#F5F2FA` | `#241A3D` |
| `--bg-raised` | `#FBF9FE` | `#2F2350` |
| `--panel` / `--panel-sage` | `#EBE4F6` / `#E3D9F3` | `#2F2350` / `#372A5C` |
| `--ink` | `#1F1733` | `#F3EFFB` |
| `--body` | `#4B4363` | `#CAC2E2` |
| `--muted` | `#665D84` | `#A49AC4` |
| `--rule` / `--border-strong` | `#E4DCF2` / `#C4B7DD` | `#3B2F5E` |
| `--numeral` | `#9A6F9B` | `#C9A2DC` |

Scoped from `body:has(.theme-wellnut)` so the fixed nav and the footer travel
with the page instead of leaving a cream seam. `--on-deep`, `--on-deep-muted`
and `--on-deep-numeral` cover text sitting on an `--ink` fill on the light
ground, where the light tokens don't apply.

Adding a second one of these needs a reason as strong as Wellnut's: a project
with its own established brand colour. Everything else stays ivory.

Rules
- Every page opens on a deep band and closes on one. Content sections between
  are ivory, separated by hairlines.
- The tan numeral is the only accent. No accent-coloured buttons, cards or
  body text.
- Body text is full-opacity on its ground.

---

## 2. Type

Two families.

- **Prata** (400 only) — display: wordmark, H1, section titles, card titles,
  big metrics. Never bolded.
- **DM Sans** (300/400/500) — body, nav, labels, buttons, meta.

| Role | Font | Size | Line height | Other |
| --- | --- | --- | --- | --- |
| Case-study wordmark (H1) | Prata | `clamp(60px, 7.4vw, 104px)` | 0.95 | |
| Page H1 | Prata | `clamp(46px, 5.6vw, 80px)` | 1.02 | |
| Hero statement (H2) | Prata | `clamp(28px, 3.2vw, 44px)` | 1.12–1.2 | `max-width: 12em` |
| Section title | Prata | `clamp(27px, 2.7vw, 36px)` | 1.18 | `max-width: 17em` |
| Section numeral | Prata | `clamp(32px, 3.2vw, 42px)` | 1 | `--numeral` |
| Card title | Prata | 18–19px | 1.3 | |
| Eyebrow | DM Sans 500 | 12px | | `.22em`, uppercase, `--muted`; optional trailing 40px rule |
| Lead | DM Sans | 16px | 1.7 | `max-width: 34em` |
| Section copy | DM Sans | 15px | 1.7 | `max-width: 36em` |
| Card body | DM Sans | 14px | 1.6 | |
| Meta | DM Sans | 10px | | `.14em`, uppercase, `--muted-2` |
| Button | DM Sans 500 | 14px (13px small) | 1 | |

---

## 3. Layout

- Container `max-width: 1160px; padding-inline: 32px` (22px under 640px).
- Numbered section: hairline on top, `padding-block: 48–76px`.
- Section grid (`.sec-grid`): `minmax(0,.9fr) minmax(0,1.1fr)`, 64px column
  gap from 900px — head left, visual right. Stacks below.
- Section head (`.sec-head`): 60px numeral column, then eyebrow → title → copy.
- Radius: **8px** on containers, media and the video frame; **999px** on
  buttons, tags and circular controls. Nothing else.
- No shadows. Depth comes from tone and hairlines.

---

## 4. Components

| Component | What it is |
| --- | --- |
| `DeepBand` | Deep-green section with two flat leaf shapes; sets `data-nav="dark"` |
| `SectionHead` / `Section` | Numeral + eyebrow + title + copy / the hairlined section shell |
| `NextProjectBand` | Dark closing band linking to the next case study |
| `PhoneShot` | App screen in its device frame, background cut away |
| `.btn` / `.btn-outline` / `.btn-sm` | Filled / outline / compact pills, min height 44px |
| `.tag` | Filled pill, sparing — e.g. three discipline tags in a hero |
| `.panel` / `.panel-sage` | Tinted cards, 8px, no border |
| `.card` | Raised work card with hairline border; hover changes border only |
| `.video-frame` | 16:9, 8px, dark letterbox |

Nav: ivory text on deep green while over any `data-nav="dark"` band, ink on
ivory otherwise. Case studies show "← Back to projects" in place of
"Get in touch".

Long case studies that predate `SectionHead` opt into `.auto-number` on their
root: any block whose children start with `.eyebrow` followed by an h2/h3
gets the next numeral automatically.

Icons: 24×24 line icons, 1.4 stroke, `--ink`.

---

## 5. Voice

Sentence case. Plain, specific, short sentences: say what happened, what
changed, why it mattered. No exclamation points or emoji.

Avoid: "bridging the gap", "leveraging", "empowering users", "seamlessly",
"reimagining", "transformative", "unlocking", "driving impact", "scalable
solution", "at the intersection of", "this project taught me", "we wanted to
explore".

Never fabricate quotes, percentages or metrics. Research observations are
shown as observations unless they are verbatim.

---

## 6. Don't

- No gradients, glass, blur or drop shadows.
- No accent-coloured buttons or text.
- No third typeface; no bold Prata.
- No card hover lift or scale.
- No decorative AI imagery or fake dashboards; product imagery is real.
- No overly rounded containers — 8px is the ceiling.
