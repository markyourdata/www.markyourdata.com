# Mark Your Data — website

Static HTML/CSS/vanilla-JS site for markyourdata.com (Mark Schep's data & AI
consultancy). No build step, no framework, no package.json. Deployed on
Vercel (see `vercel.json` for legacy `/index.html`-style redirects).

## Architecture

- **`data/content.js`** — single source of truth. One `siteData` object holding
  homepage copy, testimonials, clients, projects, talks, and breadcrumb labels.
  JSDoc `@typedef`s at the top document each shape — keep them in sync when you
  add fields.
- **`js/components.js`** — a `components` object of pure render functions
  (`hero`, `testimonial`, `clientLogo`, `serviceCard`, `talkCard`, `ctaSection`,
  `sectionWithIntro`, `pageHeader`) that take data and return an HTML string.
  Also owns `renderComponents()` / `renderHomepageSections()`, which
  auto-run on `DOMContentLoaded` and populate containers by ID (`#hero-container`,
  `#testimonials`, `#clients`, `#services`, `#cta-container`, etc.) — **only
  if those IDs exist on the page**, so it's safe to include on any page.
- **`js/projects.js`**, **`js/talks.js`** — same pattern, one render function
  each (`renderProjects`, `renderTalks`) for their own collection.
- **`components/navbar.js`**, **`components/breadcrumbs.js`** — also
  auto-render on load. Breadcrumbs only appear on pages with a
  `#breadcrumb-container` div *and* a matching entry in `siteData.breadcrumbs`
  (keyed by the URL path after `pages/`). Top-level pages (about, contact,
  talks) skip breadcrumbs entirely — no container, no entry needed.
- **Service pages** (`pages/services/**`) opt out of auto-render by putting
  `data-page-type="service"` on `<body>`, then call `renderServicePage(name)`
  explicitly. This exists because those pages need `siteData.pages[name]`
  instead of `siteData.homepage`, and because the auto CTA-render would
  otherwise clobber a custom CTA before the inline script sets it.
- **Project/case-study pages** (`pages/projects/*.html` + matching `.md`) —
  the `.html` is a fixed shell (hero, client intro block, CTA) with an empty
  `#content` div; `js/markdown-renderer.js` fetches the sibling `.md` file and
  renders it client-side via `marked`. Edit the `.md`, not the `.html`, for
  body content. The markdown files freely mix in raw HTML
  (`<div class="content-section...">`) for layout — that's expected, not a
  hack. **This `fetch()` call fails under `file://`** (browsers refuse to
  fetch local files cross-document — "URL scheme 'file' is not supported"),
  so any project page opened by double-clicking the `.html` shows a
  "Content Not Found" fallback instead of the case study body. Not a bug to
  chase — it works correctly the moment the page is served over HTTP(S),
  local or deployed. See "Local preview" below.

## Path resolution — read this before touching `basePath`/`resolvePath`

Every nested page computes its relative path back to the site root at
runtime, based on `window.location.pathname` and the position of `pages/` in
it (see `resolvePath()` in `js/config.js`, and the near-identical calc in
`components/navbar.js`, and `calculatedBaseUrl` in `js/projects.js`). The
number of `../` segments depends on whether the URL ends in a filename or a
slash: `/pages/services/index.html` needs 2, but `/pages/services/` (how
Vercel serves it, since `vercel.json` redirects `index.html` URLs to the
trailing-slash form) needs 2 as well — with one fewer path part. So the code
subtracts 1 for the filename only when the path doesn't end in `/`. Dropping
that check (2026-11, commit `982a8f4`) broke every trailing-slash page on the
live site: images 404'd at `/pages/assets/...` and the logo linked to
`/pages/index.html`.

**Why this is easy to get wrong without noticing:** an extra `../` beyond the
site root is silently absorbed by standard URL dot-segment resolution once
you're served over HTTP(S) — the browser just clamps at the domain root. So a
too-deep `basePath` looks completely fine both on `python3 -m http.server`
and on Vercel. It only breaks when someone opens a page directly via a
`file://` URL (double-click, or Cmd+O in a browser) on a page nested under
`pages/`, where the extra `..` escapes the project folder into its parent on
disk and assets 404. If a asset/logo/link works on the homepage but not on
inner pages *locally*, this is the first place to look — and don't assume
"it'll be fine on deploy" without checking, since sometimes it won't be
(a `basePath` that's too *shallow* is never absorbed, and breaks in both
places). When you change this, test both `/pages/services/` and
`/pages/services/index.html` over HTTP, plus one page via `file://`.

## Local preview & verification

There's no dev server config — just serve the repo root statically:

```bash
python3 -m http.server 8000
```

Prefer this over opening files directly via `file://`: some relative-path
behavior differs between the two (see above), and it's closer to how the
site actually gets served.

For UI changes, don't stop at "the file has no syntax errors" — actually
render it. This repo has no Playwright/browser-automation dependency
committed (no `package.json`), so set one up ad hoc in the scratchpad
directory when you need to visually verify a change:

```bash
mkdir -p /tmp/pw-check && cd /tmp/pw-check
npm init -y && npm install playwright && npx playwright install chromium
```

Then drive it with a small Node script (`chromium.launch()` →
`page.goto('http://localhost:8000/...')` → assert on the DOM / take a
screenshot). Check `page.on('requestfailed', ...)` and
`page.on('pageerror', ...)` too — a page can render its shell while an image
404s or a script throws silently.

## Content conventions

- **Testimonials** (`siteData.testimonials`) are always in English on the
  site, even when the source review was written in Dutch (e.g. LinkedIn
  recommendations) — translate rather than quote verbatim, preserving the
  specifics and tone.
- **Talks/podcasts** (`siteData.talks`, rendered on `pages/talks.html`) keep
  the *full* original description text, not just a link — the point is the
  record survives if the source page (event site, podcast host) disappears.
  Pull real abstracts from the source rather than writing new ones; if a
  session's details aren't public yet, say so explicitly rather than
  inventing a description.
- New client logos go in `assets/images/clients/`, testimonial photos in
  `assets/images/fans/`; `siteData.clients` / `siteData.testimonials` just
  reference the path.
- `assets/photos/webp/photo_index.yaml` has AI-generated descriptions of
  every stock/brand photo — useful for picking a hero background that
  actually matches the page's topic instead of grabbing one at random.

## Style

- No comments in HTML/JS/CSS beyond what's already there, unless something is
  genuinely non-obvious.
- Follow existing patterns closely: reuse `.content-card` / `.card-tag` /
  `.card-meta` / `.read-more` / `.tech-tag` CSS classes for new card-style
  content rather than inventing new ones.
- Homepage vs. standalone pages use different CTA patterns: homepage/service
  pages render `#cta-container` dynamically from `siteData`; standalone pages
  (about, contact, talks, projects/index) hardcode the CTA `<section>`
  directly in HTML. Match whichever pattern the page already uses.
