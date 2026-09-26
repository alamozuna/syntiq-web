# Audit: syntiqgroup.com · 26 September 2026 · 25 pages (everything)

### [x] 1. Complete the sitemap · 15 of your 25 pages were missing from it

sitemap.ts only listed 10 URLs. Your entire Servicios section (4 pages:
the hub plus Motor Productizado, Motor Consultivo, Gobernanza) and all
11 workshop pages under /formaciones/talleres/ weren't in it at all.

**Who:** me, in your code
**Time:** 10 min
**Changes:** edited app/sitemap.ts to add the 15 missing URLs. No content touched.
**Done 26 Sept.** Sitemap now lists all 25 URLs - verified live on the local build.

### [x] 2. Fix the workshop pages' canonical tag · all 11 pointed at your homepage

Your 11 course pages (/formaciones/talleres/*) didn't set their own
canonical, so they silently inherited "/" from the root layout. Google
could read all 11 as duplicates of your homepage, which is likely why
9 of them showed as "Discovered - currently not indexed."

**Who:** me, in your code
**Time:** 10 min
**Changes:** added a canonical + og:image per course page in generateMetadata(). No content touched.
**Done 26 Sept.** Verified: each course page now has its own canonical URL. Lighthouse SEO score on this template went 92 → 100.

### [x] 3. Link your Servicios pages into the site · nothing pointed to them

Neither the navbar, the footer, nor the homepage linked to /servicios
or its 3 sub-pages anywhere. These are your core offer pages (Motor
Productizado, Motor Consultivo, Gobernanza), and a visitor couldn't
click to them from anywhere on the site.

**Who:** me, in your code
**Time:** 15 min
**Changes:** added "Servicios" to the navbar (between Formaciones and Método), and a new "Servicios" column in the footer linking the hub + all 3 sub-pages. No body copy touched - only nav/footer link labels. Take a look and tell me if you'd rather it sit elsewhere in the nav order.
**Done 26 Sept.**

### [x] 4. Fix the duplicated brand name in 2 titles

/servicios and /nosotros both rendered as "... SyntIQ Group ... SyntIQ
Group" in the browser tab and Google's snippet - the page title
already mentioned "SyntIQ Group" and the site-wide template added it
again at the end.

**Who:** me, in your code
**Time:** 5 min
**Changes:** trimmed 2 title strings (meta only, not body copy).
**Done 26 Sept.** Verified live: /servicios now reads "Servicios de Inteligencia Artificial | SyntIQ Group" (once). /nosotros now reads "Sobre Nosotros | Formación e Inteligencia Artificial | SyntIQ Group" (SyntIQ Group appears once).

### [x] 5. Add a share image to 8 pages (+ the 11 workshop pages, found along the way)

/servicios (+ its 3 sub-pages), /formaciones, the República Dominicana
landing page, /nosotros, and /contacto had no og:image at all. While
fixing the canonical bug on the workshop-page template (#2), I found
the same og:image gap there too, so I closed it in the same edit.

**Who:** me, in your code
**Time:** 15 min
**Changes:** added an openGraph.images entry (reusing your logo) to 8 pages + the workshop template. No content touched.
**Done 26 Sept.** Verified live: og:image now present on all of them.

### [x] 6. Make your FAQ answers visible to search engines and AI

Your FAQ accordion (Home, all 4 Servicios pages, Contacto) only put
the FIRST answer in the actual page HTML - the other 4 answers only
existed inside the invisible schema code. AI Overviews and ChatGPT
read visible text, not hidden schema, so they only ever saw 1 of 5
answers per page.

**Who:** me, in your code
**Time:** 20 min
**Changes:** all 5 answers now render in the HTML always, animated open/closed with height instead of being unmounted from React. No wording touched, one shared component (FaqSection.tsx).
**Done 26 Sept.** Verified live: all 5 answers now present in the page's raw HTML, not just the JSON-LD script.

### [x] 7. Fix the skipped heading level on 2 templates

Lighthouse flagged headings jumping straight to h4 (skipping h3) on
the homepage's Blueprint section, and h1 → h3 → (skip) → h4 on the
workshop-page template.

**Who:** me, in your code
**Time:** 10 min
**Changes:** changed 6 heading tags to the correct level (3 on Home, 4 on the workshop template - the earlier estimate of "1 heading" undercounted it, the workshop page had 3 separate skips, not 1). No wording touched.
**Done 26 Sept.** Verified with a fresh Lighthouse run: heading-order no longer fails on either template.

### [x] 8. Add llms.txt at your site root

**Who:** me, in your code
**Time:** 10 min
**Changes:** added public/llms.txt describing the business, formaciones, and servicios with links.
**Done 26 Sept.**

### [ ] 9. Decide on the text-contrast fix - your call

Lighthouse flags small gray label text (nav badges, step labels, form
sliders) at 2.35-4.37:1 contrast against its background, under the
4.5:1 minimum. This is a design-token color, not your brand's primary
button or accent - I can darken just these grays, but it's your
design system, so I'm asking first rather than just changing it.

**Who:** you decide, then me if you say go
**Time:** 2 min to decide, 15 min for me to apply
**Changes:** would darken slate-400/slate-500 text tokens in a few components. No layout or copy changes.

### [ ] 10. Request indexing now that #1-8 are live

Once you deploy, resubmit the sitemap in Search Console and use URL
Inspection > Request Indexing on the Servicios pages and a couple of
workshop pages to speed up discovery.

**Who:** you, in Search Console
**Time:** 5 min
**Changes:** none to the site.

---

## Verified before shipping

- `npm run build` - compiled clean, all 31 routes generated (including all 11 workshop pages).
- Production server (`next start`), spot-checked: sitemap.xml (25 URLs), /servicios (200, single title, og:image present), workshop page (200, own canonical, own og:image), homepage FAQ (all 5 answers in raw HTML).
- Lighthouse re-run, mobile, lab data: Home accessibility 94 → 96 (heading-order fixed, color-contrast remains, item #9). Workshop template: SEO 92 → 100, accessibility 94 → 96.
- **Body sentences altered: 0.** Only meta titles, heading tags, nav/footer link labels, and file contents (sitemap, llms.txt) changed.
- **Nothing deleted, merged, or redirected.**

## Found, but not in this loop - routes to another command

- **Workshop pages are thin (~270-300 words each).** Not clones of each
  other (each covers a different curriculum, that part's healthy) but
  thin for a paid-workshop sales page. Adding real depth (agenda
  detail, instructor bio, pricing clarity) is writing, not a mechanical
  fix → `/service-page` per workshop, when you're ready.
- **No keyword-map.md exists yet.** Nothing is broken because of this,
  but on-page and AI-readiness checks that depend on a defined primary
  keyword per page (matching competitor depth, keyword placement)
  couldn't be graded this pass → run `/keyword-research` to build it.
- **Zero outbound citation links anywhere on the site**, and zero
  comparison/data tables. Both lift AI-citation odds per the GEO
  research. Adding them is content work → `/seo-optimization ai-layer`
  once you have real stats/sources to cite.
- **Proof is homepage-only.** Testimonials, the 4.7/5 rating, and the
  founder bios all live on "/" - the Servicios and workshop pages have
  zero proof touches. Ask for real names on the 3 testimonials (they
  currently read "Participante") and bring proof onto the money pages →
  `/seo-optimization proof`.

## Needs your approval to remove or change - nothing here

Nothing in this audit called for deleting, merging, or redirecting
anything. Every fix was additive.

---

## AI-surface baseline - dated, re-run monthly

Not run this pass. Recommended as the very first thing to do once #10
is done and Google has re-crawled: ask ChatGPT, Perplexity, and Google
AI Mode "quién es SyntIQ Group" and your top 3-5 money questions, and
log who gets cited. With only 1 of 25 pages indexed going into this
fix, there was nothing for these engines to cite yet.

## What this audit did NOT measure

- **Semrush (Site Health, competitor benchmark, backlinks):** not
  measured, not connected. Free tier (100 pages/month) would unlock
  this - two minutes at semrush.com.
- **Depth vs. top-3 competitors, keyword placement:** not measured, no
  keyword-map.md exists and no live SERP scan ran this pass. Closes
  when you run `/keyword-research`.
- **Live AI-surface test:** not run this pass (see above) - closes
  once #10 is done and there's something to cite.
- **Schema validation through Google's Rich Results Test:** reviewed
  by reading the code, not run through the live validator.
- **Cannibalization check:** your Search Console Queries export came
  back with zero rows - the site is about a week old in Google's
  index, so there's no query data yet to check pages against each
  other. Re-check in a few weeks.
- **Local / Google Business Profile:** skipped outright, not sampled.
  You confirmed there's no profile and this is a fully online
  business with no address published anywhere on the site.

## Undo

Everything from this pass is uncommitted. To throw it all away:

```
git checkout -- src/ && rm -f audit-report.html audit-report.md public/llms.txt
```
