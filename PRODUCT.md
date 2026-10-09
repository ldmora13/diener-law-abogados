# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Spanish-speaking immigrant families and individuals in NC, CA, AZ, TX evaluating immigration options (visas, green card, citizenship, asylum, deportation defense). Situation: high-stress legal decision with complex forms and deadlines, often in a second language. Job: understand options in plain language and book a confidential consultation (call / modal form) within 1 business day.

## Product Purpose

Bilingual (ES/EN) marketing + intake site for Diener Law immigration practice. Explains services, team, process, results, and FAQ, and converts visitors into consultation requests via global appointment modal (`data-open-cita`) and phone `+1 (863) 227-1367`. Success = qualified consultation booked.

## Positioning

Bilingual immigration firm with close, plain-language counsel in Spanish and English, backed by 7 attorneys with diverse backgrounds and presence in 4 states (NC, CA, AZ, TX). A neighboring firm could not truthfully copy the combination of ES-first intake, 7-lawyer roster, and NC/CA/AZ/TX coverage.

## Operating Context

Workflows: browse service pages (ES `/servicios/[slug]`, EN `/en/services/[slug]`) → process timeline → FAQ → testimonios/casos → open `CitaModal` or call. Intake collects name, phone, email, state, case type, current status, urgency (detention → call immediately), contact/language preference, message, consent. Environments: static prerendered Astro pages + React islands (form, FAQ, chat, modal); mobile with full-width CTA and fixed call/consult bar. Rituals: confidential consult, 1-day response, attorney-client disclaimer on every intake.

## Capabilities and Constraints

Confirmed: mirrored ES/EN routes with `lang`/`hreflang`/`switchHref`; all UI text in `src/data/i18n.ts`; appointment modal global with focus trap, Escape, scroll-lock; SEO (sitemap, canonical, JSON-LD Attorney/WebSite/FAQPage/BreadcrumbList) + GEO (`robots.txt`, `public/llms.txt`); no `#cita` anchors (removed, modal only); React only as islands (`client:load`/`client:visible`).

Undecided / open: user flagged "Hay cambios" in durable constraints/assets but did not specify what changes — pending detail on real domain, photo assets, or legal copy. Until specified, preserve current provisional domain `https://dienerlawabogados.com`, consent-only photos (real portraits only for Bert/Elaine/Russell, initials fallback), and existing attorney-client advertising disclaimers.

## Brand Commitments

Name: Diener Law Abogados. Voice: close, clear Spanish without jargon, institutional trust. Incumbent visual system documented in `.agents/DESIGN.md` (treated as existing authority, not defined here).

## Evidence on Hand

Real: 7 attorney bios + credentials in `src/data/i18n.ts` (`ui.es/en.about`) sourced from `.agents/about-us.md`; services/team/FAQ/testimonios/casos content in `src/data/`; hero photo `src/assets/CALIFORNIA-NORTH-CAROLINA-IMMIGRATION-ATTORNEYS-1024x821.webp`; BCS logo asset; offices Charlotte NC / Los Angeles CA / Phoenix AZ / Dallas TX in `src/data/site.ts`. Absences future work must not fabricate: no real `og:image` 1200×630 yet; no invented testimonials, results guarantees, or pricing.

## Product Principles

1. Clarity before conversion: plain language first, CTA second.
2. Confidential trust: every promise paired with privacy and no-attorney-client disclaimers.
3. Bilingual by construction: no ES-only feature ships without its EN mirror.
4. Proof over claims: real attorneys, real process steps, consented stories only.

## Accessibility & Inclusion

ES-primary audience with EN mirror on every page; header language switcher. Minimum AA contrast, keyboard navigation with skip link, labeled 52px form fields with `aria-describedby`, 44px+ touch targets, `prefers-reduced-motion` respected.
