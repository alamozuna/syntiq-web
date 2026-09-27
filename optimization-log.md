# Optimization log
One entry per run, newest first. `Re-measure on:` dates get filled in from Search Console when due.

---

## 26 September 2026 - /servicios

**Why this page:** direct competitive angle. syntiqgroup.com's closest named competitor,
synetiqgroup.com (Synetiq Group - AI transformation, governance and cybersecurity
consulting, same Spanish-speaking market), sells almost the same three things this
page sells. This page is the head-to-head battleground.

**On-page score:** 88 → 93 (of the checks that could be graded - see "not graded" below)

**Fixed:**
- Title was 37 characters (too short, under the 50-60 target) → "Servicios de IA para Empresas: Implementación en Días" (53 chars), leads with the "days, not weeks" speed differentiator against a competitor whose model reads as a slower, heavier consulting engagement
- Meta description didn't contain "Inteligencia Artificial" at all → rewritten, keyword at the front, same differentiator, 158 characters
- The 3 "Explorar Solución Detallada" buttons were identical, non-descriptive anchor text → each now names its own service ("Explorar Motor Productizado", etc.)
- Added a comparison table (model / for whom / deployment time) built entirely from data already on the page - nothing new was written, it's the same three facts as the cards above, reformatted so AI engines can lift it directly
- Added subtle press feedback (scale 0.98 on click) to both CTA buttons, matching the pattern already used elsewhere on the site

**Lighthouse (mobile, lab, production build):** Performance 99, Accessibility 100, Best Practices 100, SEO 100 - all four unchanged or improved, nothing regressed from the edits above

**Not graded this pass (no keyword-map.md, no live SERP scan of "servicios de inteligencia artificial"):** keyword placement depth, matching the top-3 SERP winners' shape. Run `/keyword-research` to close this.

**Body sentences altered: 0.**

**GSC baseline:** none yet. The Search Console Pages export pulled this session shows
/servicios with zero recorded clicks or impressions - the sitemap/canonical/orphan-page
fixes that unblock its indexing shipped in the same session, so there's nothing to
baseline against yet.

**Re-measure on:** 7 November 2026 (6 weeks out, and after Search Console has had time
to index the page following the sitemap fix)

---

### Waiting on you
- **FAQ content is wrong for this page.** All 4 Servicios pages (this hub + the 3
  service pages) show the default workshop/training FAQ ("¿Necesito saber
  programar?") instead of anything about pricing, contracts, ERP compatibility, or
  confidentiality - the exact things a services buyer asks. This is the single
  highest-value fix on the page and it's content, not a mechanical edit, so it
  wasn't touched. Send me 4-5 real Q&A pairs per service page (or say go and I'll
  draft them for your review) and I'll wire them in.
- **No photos on any of the 4 Servicios pages.** Every check that wants "at least
  one original photo or screenshot" fails here by absence. A workspace photo,
  a screenshot of a deployed dashboard, anything real - send one and I'll add it.
- **sameAs is thin.** Schema currently links only Instagram. Send your LinkedIn
  company page (or any other real public profile) and I'll add it to the
  Organization schema sitewide.

### Optional recommendations
- **Outbound authority links** on the ISO 13485 / FDA / RGPD / LOPD mentions in the
  Gobernanza card, pointing to the actual regulator pages. Legitimacy signal, zero
  words changed. Say the word and I'll wire it in - fits better on
  `/servicios/gobernanza-compliance` than here, since that's where the regulatory
  detail actually lives.

### Waived
- **Depth vs. top-3 competitors** (on-page group 5) - no keyword-map.md, no live
  SERP scan this pass. Matters most once `/keyword-research` exists.
- **Author/Person schema** - no named, credentialed author exists for this page's
  content; adding one needs a real person and bio, an owner decision.

---

## 26 September 2026 - Homepage: animation pass

Not a graded on-page/GEO pass - a UI addition at your request, guided by
ui-ux-pro-max. Added scroll-reveal (fade + 16px rise, 0.4-0.5s, matching the
exact motion values already used in ResultsSection so the whole site moves the
same way) to four sections that had none: ToolsMarquee's header, the team grid,
the ROI calculator's two columns, and the final CTA. Added a sitewide
`prefers-reduced-motion` CSS override so anyone with that OS setting gets instant,
static transitions instead. Added press feedback (scale 0.98) to the two
Servicios CTAs.

**Lighthouse (mobile, lab, production build), before → after the animation pass:**
Performance 99 → 98 (normal run-to-run noise, not a real regression - CSS/JS
weight added is negligible), Accessibility 100 → 100, Best Practices 100 → 100,
SEO 100 → 100.

**Body sentences altered: 0.** No copy, no deletions - four components gained a
motion wrapper around content that already existed.
