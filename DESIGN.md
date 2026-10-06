---
name: Diener Law Abogados
description: Institutional bilingual immigration — calm navy authority with one gold signal toward consultation.
colors:
  counsel-navy: "#1f3461"
  justice-blue: "#34548a"
  authority-blue: "#2a4a82"
  verdict-gold: "#fdd04b"
  gold-deep: "#e6b72e"
  night-deep: "#111c38"
  paper: "#ffffff"
  parchment: "#f4f6fa"
  sky-mist: "#dce6f7"
  mist: "#e3e9f3"
  steel: "#c5cfe0"
  slate-ink: "#1e2a44"
  quiet-slate: "#56627d"
  approved-green: "#2e7d5b"
  alert-red: "#b3261e"
typography:
  display:
    fontFamily: "Oswald, 'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Oswald, 'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Oswald, 'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body:
    fontFamily: "'Open Sans', 'Source Sans 3', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Open Sans', 'Source Sans 3', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  accent:
    fontFamily: "'Libre Baskerville', Georgia, 'Times New Roman', serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  card: "4px"
  button: "2px"
  input: "4px"
  icon-full: "9999px"
spacing:
  "16": "16px"
  "24": "24px"
  "32": "32px"
  "64": "64px"
  "96": "96px"
components:
  button-primary:
    backgroundColor: "{colors.verdict-gold}"
    textColor: "{colors.counsel-navy}"
    typography: "{typography.display}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.counsel-navy}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.authority-blue}"
    rounded: "{rounded.button}"
    padding: "16px 32px"
    height: "52px"
  card-service:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.card}"
    padding: "32px 24px"
  input-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.input}"
    padding: "14px 16px"
    height: "52px"
  chip-language:
    backgroundColor: "{colors.sky-mist}"
    textColor: "{colors.authority-blue}"
    rounded: "{rounded.icon-full}"
    padding: "4px 12px"
---

# Design System: Diener Law Abogados

## Overview

**Creative North Star: "The Counselor's Letter"**

A serious firm's letter to a worried family: ordered, legible, and warm. Authority comes from navy bands and firm condensed headlines, never from ornament. One gold signal marks where to act; everything else stays quiet so the reader stays calm.

Density is comfortable and breathed (4px base unit, 96px section rhythm on desktop). Two type families per view at most; photography is real and human; motion is near-invisible. The system persuades by clarity, not pressure.

**Key Characteristics:**

- Calm authority under stress — solid bands, generous whitespace, plain language.
- One gold signal per view; rarity is the point.
- Restrained and exact — sharp 2–4px corners, 1px borders, 200ms transitions.
- Real people, real attorneys — consented photography, no intimidation imagery.

## Colors

Navy carries authority, paper carries reading, and a single gold carries action.

### Primary

- **Verdict Gold** (#fdd04b): the one primary action per view — main CTA fill, active-link underline, accent headline on blue, review stars. Never a large background, never body text on white.
- **Counsel Navy** (#1f3461): header, hero (under photo overlay), dark bands, primary-CTA text. The voice of the firm.
- **Authority Blue** (#2a4a82): headlines on light, icons, links, card-hover borders, focus outlines.

### Secondary (optional; omit if the project has only one accent)

- **Justice Blue** (#34548a): credibility panels (diagonal presentation block, contact band).
- **Gold Deep** (#e6b72e): CTA hover/pressed, chat ring, stars, FAQ open icon.
- **Night Deep** (#111c38): footer, maximum-contrast surface.

### Tertiary (optional)

- **Approved Green** (#2e7d5b): success, "APROBADO" seals, completed steps.
- **Alert Red** (#b3261e): validation errors and critical deadline warnings only.

### Neutral

- **Paper** (#ffffff): default canvas, cards, form fields.
- **Parchment** (#f4f6fa): alternate sections (process, FAQ), field wash, FAQ hover.
- **Sky Mist** (#dce6f7): info boxes, language chips, status tags.
- **Mist** (#e3e9f3): 1px card dividers and card borders.
- **Steel** (#c5cfe0): resting form-field borders.
- **Slate Ink** (#1e2a44): primary body text (ink-blue, warmer than black).
- **Quiet Slate** (#56627d): secondary text, form help, metadata.

### Named Rules (optional, powerful)

**The One Gold Rule.** Verdict Gold appears once per visible view as the primary action; every other action uses outline or link. Its rarity is the point.
**The Navy Bands Rule.** Counsel Navy / Justice Blue own header, hero, credibility panels, and footer; Paper owns reading.

## Typography

**Display Font:** Oswald (with Barlow Condensed, Arial Narrow)
**Body Font:** Open Sans (with Source Sans 3, system-ui)
**Label/Mono Font:** Open Sans bold for labels; Libre Baskerville italic reserved for testimonial quotes and the wordmark echo.

**Character:** Condensed, firm headlines that hold long Spanish titles without excess wrapping; humanist body with full accent support (á, é, ñ, ¿, ¡) at a 16px minimum and 1.6 line height.

### Hierarchy

- **Display** (700, 56px → 40px ≤768px → 32px ≤480px, 1.1): hero H1 on navy, max 2 lines.
- **Headline** (600, 40px → 30px → 26px, 1.15): section titles in Authority Blue (Paper or Verdict Gold on blue).
- **Title** (600, 20px uppercase, 1.2, 0.02em): service card titles, step titles, stat context.
- **Body** (400, 16px, 1.6): paragraphs, FAQ answers, form fields; max ~70ch measure; key legal terms in 600 only.
- **Label** (700, 13px uppercase, 0.08em): eyebrows, chips, legal notes; nav at 13px/600; buttons Oswald 500 16px uppercase 0.04em.

### Named Rules (optional)

**The Two Families Rule.** Oswald headlines, Open Sans reads; Baskerville speaks only in quotes. Never three families in one view.
**The Sixteen Floor Rule.** Body never drops below 16px; 14px is for notes, 13px for legal and captions.

## Layout

Twelve-column grid (24px gutter) inside a 1200px max container; reading measure 760px. Bands run full-bleed and alternate Paper / Parchment with navy panels for rhythm. Homepage order: navy header → hero with question + gold CTA → service cards (4 across ≥1024px, 2 ≥640px, 1 below) → diagonal blue credibility panel with overlapping family photo → team → process → testimonials → success metrics → FAQ → contact band → footer.

Vertical section rhythm 96px desktop / 64px mobile; card padding 32px 24px (services) else 24px; element gap 16px; field gap 20px; header height 80px desktop / 64px mobile. Hero min-height 520px desktop / 440px mobile with 96px / 64px vertical padding. Mobile stacks to one column, gold CTA goes full-width, and a fixed bottom bar pairs Call with Consult.

## Elevation & Depth

Flat by rule. Hierarchy is built from 1px borders, tonal bands, overlapping photography on the diagonal panel, and a slight vertical shift on hover — never shadows.

### Shadow Vocabulary (if applicable)

- **Chat float** (`box-shadow: 0 4px 16px rgba(17,28,56,0.25)`): the single permitted shadow, separating the floating chat button from content.

### Named Rules (optional)

**The Flat-By-Default Rule.** Surfaces are flat at rest; depth appears only as a hover/focus response (translate, border, fill).

## Shapes

Sharp institutional corners: cards 4px, buttons 2px, inputs 4px. The full circle (9999px) is reserved for icon containers, chat avatar, and team avatars. Section panels are square (0px) with one diagonal exception: the Justice Blue credibility panel uses `clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%)` (~1.5° tilt), the only angles in the system. Service icons sit in 64px circles (80px in category headers) with a 2px Authority Blue ring and 28–32px line icon inside.

## Components

### Buttons

Restrained and exact — uppercase Oswald, exact fills, quiet 200ms state shifts.

- **Shape:** sharp rectangle (2px radius), 52px min-height (48px mobile, full-width), 16px 32px padding.
- **Primary:** Verdict Gold fill, Counsel Navy text; hover Gold Deep with −1px lift; active #d4a621; focus 3px gold ring at 2px offset.
- **Hover / Focus:** color and translate only, 200ms ease-out; visible focus always.
- **Secondary / Ghost / Tertiary (if applicable):** transparent with 2px Paper (on dark) or Authority Blue (on light) border; hover fills the border color with inverted text. Tertiary link-arrow: 14px/700 uppercase Authority Blue with 2px gold underline; arrow advances 4px on hover.

### Chips (if used)

- **Style:** Sky Mist fill, Authority Blue 12px/700 uppercase text (e.g. ESPAÑOL, ENGLISH); status chips follow case-state colors (EN REVISIÓN, APROBADO, ACCIÓN REQUERIDA).
- **State:** static labels; no interactive filter variant in the current system.

### Cards / Containers

- **Corner Style:** 4px.
- **Background:** Paper on Paper/Parchment bands; photo cards use real WebP imagery.
- **Shadow Strategy:** none; hover is `translateY(-4px)` plus Authority Blue border (200ms).
- **Border:** 1px Mist (Steel for inputs).
- **Internal Padding:** 32px 24px service cards, 24px elsewhere, 40px form card.

### Inputs / Fields

- **Style:** 52px height, 14px 16px padding, Paper fill, 1px Steel border, 4px radius, 16px Slate Ink; label above at 14px/600 with red asterisk; hover darkens border to Authority Blue.
- **Focus:** 2px Authority Blue border plus `0 0 0 3px rgba(42,74,130,0.2)` ring.
- **Error / Disabled:** Alert Red border with 13px error message and icon below; success Approved Green with check.

### Navigation

- 80px Counsel Navy bar, Paper Open Sans 13px/600 links, active link with 3px Verdict Gold underline; 1px `rgba(255,255,255,0.12)` bottom border, no shadow. Scrollspy moves the gold underline with `aria-current`. Mobile collapses to a full-screen menu with visible call CTA; header auto-hides on scroll-down past 240px (translateY only, 300ms) and returns on scroll-up.

### Signature Component

Diagonal credibility panel: Justice Blue with 1.5° clip-path, 48px Paper headline, 24px gold accent subhead with group icon, 16px Paper body, family photograph overlapping the panel edge by 80–120px at 4px radius. Floating chat: 104px circle (88px mobile) with assistant portrait, 4px Gold Deep ring, Navy pill label "CHATEA CONMIGO AHORA" for contrast, bottom-right at 24px offset.

## Do's and Don'ts

Concrete guardrails from the implemented system.

### Do:

- **Do** keep Paper as the reading canvas and reserve navy/blue for header, hero, credibility panels, stats band, and footer.
- **Do** allow exactly one gold primary action per visible view; everything else is outline or link.
- **Do** set headlines in Oswald and body in Open Sans at 16px minimum with 1.6 leading.
- **Do** build depth with 1px borders, tonal bands, and photo overlap — hover lifts (`-4px` cards, `-1px` buttons) with no shadow.
- **Do** use real, consented, human photography (families, team, naturalization scenes) in WebP with descriptive Spanish alt text and `loading="lazy"` below the fold.
- **Do** pair every intake with the attorney-advertising and no-attorney-client notices, and keep contrast at AA or better with a visible focus state.

### Don't:

- **Don't** use gold for large backgrounds or as text on white (insufficient contrast).
- **Don't** use red decoratively — errors and critical deadlines only.
- **Don't** use pill buttons, card/button/header shadows (chat float excepted), decorative gradients beyond the single navy hero overlay, or diagonal edges outside the one credibility panel.
- **Don't** place text on photos without the Counsel Navy overlay (88–78%).
- **Don't** use intimidating imagery (handcuffs, fences, patrol uniforms) or the flag as a dominant element outside the hero.
- **Don't** promise outcomes or use absolute language ("garantizamos tu visa").
- **Don't** autoplay, exceed 300ms on reading-affecting motion, or ship motion that ignores `prefers-reduced-motion`.
