# Harkinson Investment Corporation — Design Brief

## Brand Synopsis

Harkinson Investment Corporation (HIC) is a privately held, owner-operated commercial real estate firm based in Addison, Texas. Founded in 1991 by Jeff Harkinson — Zack's uncle — the firm now manages 1.4 million+ square feet across Texas, has completed 57 acquisitions, and has personally closed more than $500M in transactions. Its proudest record: a perfect closing record since 1991 and zero mortgage defaults across more than three decades.

The firm operates through two named subsidiaries — **Harkinson Dewan Commercial** (brokerage + property management; 200 active tenants; 55 years combined leasing experience) and **Harkinson Development** (250 acres of greenfield projects, including the 227-acre Sherman Crossroads where 24 acres were sold to H-E-B in 2025). Three generations of the Harkinson and Dewan family work the business.

The redesign brief was specific: keep the city-skyline timelapse video that's been the firm's hero asset, match colors to the existing logo (mustard gold + sage green + black), and feature Jeff prominently as founder. The current website is a generic Wix template that hides the depth of his career and the grit of the track record. The new mockup makes both the centerpiece.

## Mode
**PRO-MAX MODE** — `ui-ux-pro-max` skill drove design decisions; `TRENDS_QUICK_REFERENCE.md` not consulted per mode rule. Skill recommended pattern: Exaggerated Editorial Minimalism. Custom palette derived directly from the existing logo.

## Design Decisions

### Direction: Editorial Institution

- **Mood**: Institutional gravitas with Texas heritage warmth — like a private merchant bank that also happens to be deeply rooted in Hill Country soil. Black canvas, oversized editorial serif, gold and sage accents lifted directly from the logo, generous negative space.
- **Fonts**: **Fraunces** (variable display serif from Google Fonts — used at multiple optical sizes; the slight reverse-stress and SOFT axis carry both modern editorial polish and a bookish, heritage feel) + **Inter** (workhorse body / UI sans). [Google Fonts share link](https://fonts.google.com/share?selection.family=Fraunces:opsz,wght,SOFT@9..144,300..900,30..100|Inter:wght@300;400;500;600;700)
- **Colors**:
  - `#0E0E0C` Ink (canvas / text)
  - `#1A1A18` Bone (secondary canvas)
  - `#F5EFE3` Cream (warm off-white text)
  - `#C9A227` Gold (logo mustard, deepened slightly — primary accent, CTAs, gold rule, italic display accents)
  - `#5C8C5A` Sage (logo green — secondary accent, used in logo bar motif and Harkinson Development branding)
- **Layout**: Editorial scroll. Hero (full-bleed timelapse) → location marquee → firm intro (12-col grid) → By the Numbers (4-stat grid + 3-stat secondary row) → Founder (5/7 split with portrait + pull quote + milestones timeline) → Portfolio (3-column hover-dim grid) → Subsidiaries (2-up panels) → News (line-item list) → Contact / footer.
- **Signature element**: The HIC logo's three-bar mustard-and-sage motif is recreated as a recurring CSS-only divider mark — a tiny version next to every section overline, a medium version above the contact headline. This makes the entire visual system *grow out of his existing identity* rather than ignore it. It's the single move that ties the whole page back to the brand he's already built.
- **Trends used (PRO-MAX skill applied — TRENDS_QUICK_REFERENCE.md not consulted per mode rule)**:
  - Pattern: Exaggerated Editorial Minimalism (oversized Fraunces, massive whitespace, hairline rule system).
  - Stroke text marquee for the locations strip (alternating filled / outlined city names).
  - Hairline-rule system as both vertical and horizontal dividers throughout.
  - Hover-dim portfolio grid (siblings dim & blur slightly while hovered card stays sharp).
  - IntersectionObserver count-up on the four hero stats.
  - Atmospheric backdrop typography ("Harkinson" at 18vw, opacity 0.04) behind the founder section.
- **Logos used (Logo Search)**: not invoked — the only logo on the page is HIC's own (decomposed as a CSS-only mark and as the favicon).

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Hero (video bg + content) | "Hero with bg video" / "DarkProjectHero" | hero video editorial | `21st-sources/hero-with-bg-video.tsx` | Full-bleed video + dark overlay structure (replaced flat overlay with custom radial vignette). |
| Floating nav | "Hero Section 5" | hero video editorial | `21st-sources/hero-section-5.tsx` | Sticky nav that gains backdrop-blur background past 5% scroll (vanilla scroll listener, not framer-motion). |
| By the Numbers | "Stats Defautlt" | stats numbers editorial | `21st-sources/stats-section.tsx` | 4-column grid w/ vertical dividers + lowercase labels above large numerals; added IntersectionObserver count-up. |
| Portfolio grid | "HoverRevealCards" | portfolio projects grid | `21st-sources/portfolio-cards-hover-reveal.tsx` | Parent-group hover-dim pattern — siblings dim while hovered card stays sharp. |
| Locations marquee | "Marquee" (text-stroke) | marquee scrolling editorial | `21st-sources/marquee-stroke-text.tsx` | Alternating filled / outlined text rhythm + edge-fade gradient (CSS keyframes instead of framer-motion). |

The founder section, subsidiary panels, news list, and contact are custom — no direct 21st.dev provenance.

## Content Inventory
- **Hero video**: `images/hero-timelapse.mp4` (downloaded locally from Wix; 1080p MP4) with the original Wix CDN URL as `<source>` fallback.
- **Founder portrait**: `images/jeff-headshot.jpg` (from Harkinson Dewan Commercial team page).
- **Project images** (hotlinked from Wix CDN at `w_900,h_675`):
  - Sherman Crossroads — `5fa5ee_4692f9e7ed804fce8aff52b05bc92fb0`
  - Huntington Square — `74012b_6786b554f54d4256989abb2d030745c3`
  - Bosque River Centre — `74012b_75c26f3500c04ad397a290ae6e9fa666`
  - Parker Plaza West — `74012b_a3c2bd2108144d87ba5f004da11ce8e3`
  - Colony Hard 8 — `5fa5ee_4d4dc6a225e847dbb67184af48ee3b17`
  - Aston Junction — `74012b_b8faa67bf51e4e3d879bde45056b9a85`
- **Real copy**: tagline, business hours, addresses, phone, email, project descriptions, and news headlines all sourced from harkinsoninvestments.com / harkinsondevelopment.com / harkinsondewancommercial.com. Founder bio detail aggregated from harkinsondevelopment.com About Jeff page, Hill Country Alliance board profile, and Prabook biographical entry. Voice copy ("built one acquisition at a time", "from the desk", "the discipline that defines us is simple") written to match brand tone.
- **Real links preserved**: phone (`tel:+19729348414`), email (`mailto:info@harkcorp.com`), LinkedIn company page, harkinsondewancommercial.com, harkinsondevelopment.com, harkinsoninvestments.com/blog.

## Share Preview
- **OG image source**: Composed via Python PIL — Jeff's actual headshot anchored to the right panel with a soft fade into the ink canvas, the three-bar HIC mark in the top-left, "HARKINSON · INVESTMENT CORP" overline in gold, the headline "Strong, stable returns in Texas commercial real estate. Since 1991.", a stat row ("35+ years · $500M+ closed · 1.4M+ sf"), and a "Featuring founder Jeff Harkinson" gold caption at the bottom. 1200×630 JPEG, ~104 KB at quality 88. Real human portrait + branded composition unfurls strongly on iMessage/LinkedIn.
- **OG title**: `Harkinson Investment Corporation — Texas CRE since 1991`
- **OG description**: `35+ years. $500M+ closed. 1.4M+ square feet. Strong, stable returns in Texas commercial real estate.`
- **Favicon source**: HIC logo cropped to 256×256 PNG; 512×512 Apple touch icon also generated.
- **Theme color**: `#0E0E0C` (ink — matches the dark canvas).
- **Sub-pages with their own OG**: none — single-page site.

## Image Generation Prompts
None generated. Per Zack's brief, every image is reused from the existing brand assets.

If a future build needs new imagery, strong candidates would be:
1. **Hero footage**: a real timelapse of an HIC asset (Sherman Crossroads, downtown Plano, or a Stephenville sunset over Bosque River Centre) — would replace the generic city skyline timelapse with something brand-specific.
2. **Founder portrait at Blasingame Creek Ranch**: would be a powerful editorial spread companion to the headshot — Texas heritage as visual subtext. Should be real photography, not generated, per CLAUDE.md image accuracy rules.

## Suggested Next Mockups
1. **Portfolio detail page** — `portfolio/[project]/index.html` with a long-scroll case study layout for each property: full-screen hero photo, location map, square footage / acreage / acquisition date / type pillars, leasing contact, tenant roster, and recent activity / press.
2. **Founder long-form page** — `founder.html` expanding the milestone timeline into a full editorial bio with photos from each chapter (city manager era, brokerage launch, HIC founding, ranch acquisition, today). Include "What I look for in an acquisition" Q&A.
3. **Investor / partner page** — protected or gated page with the deal pipeline, current hold periods, return profiles, and a contact form for accredited investors.
4. **Property management portal** — tenant-facing page (rent payment portal link, maintenance request, leasing inquiries by region) — turns the brokerage subsidiary into a real lead funnel.
5. **News / blog index** — proper blog page with category filters (Acquisitions, Developments, Press) replacing the current Wix blog stub.

## Production Notes
To build this into a real production site, use Claude Code (Opus, high effort) and HANDOFF MODE. Recommended stack:

- **Next.js + Tailwind**, deployed on Vercel — gives you SSR for SEO, image optimization, and the path to add a private investor portal later.
- **CMS**: Sanity or Payload — both let Jeff (or whoever maintains the site) add new acquisitions, news posts, and edit copy without redeploying. Sanity has nicer field-level UX; Payload is more developer-controlled.
- The cached `21st-sources/*.tsx` files in this folder are the original React components we borrowed patterns from — drop them straight into the Next.js project, wire up sub-components and dependencies (framer-motion, lucide-react, shadcn/ui), and re-apply the brand's content/copy from the mockup. This dramatically speeds up the React rebuild and preserves the craft we borrowed from 21st.dev.
- **Hero video**: encode an MP4 + WebM pair, use `next/image` poster, lazy-load below-the-fold imagery.
- **CRE-specific add-ons** worth scoping into production: searchable property listings, an investor accreditation form (hello, regulatory compliance), and TREC consumer notice / IABS forms linked in footer (Texas regulatory requirement — already linked in the source site).

## Build Timing
| Phase | Duration |
|---|---|
| Step 1: READ | ~3 min |
| Step 2: DIRECTION (skill + 21st searches) | ~2 min |
| Step 3: BUILD | ~5 min |
| Step 4: VERIFY | ~2 min |
| Step 5: BRIEF (this file) | ~1 min |
| Step 6: PUBLISH | pending |
| Step 7: DELIVER | pending |
| **Total: Prompt to live link** | ~15 min (estimated through publish) |
