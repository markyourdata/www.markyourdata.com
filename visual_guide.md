# Mark Your Data Visual Guide

This guide defines how photography is used across the Mark Your Data website. Use it alongside the copy guide to maintain consistency when adding, replacing, or repositioning images.

All photos live in `assets/photos/webp/`. The full index with metadata is in `assets/photos/webp/photo_index.yaml`.

---

## Visual Principles

### 1. Every photo earns its place
A photo should reinforce the message of the section it sits in. A consulting page shows people in discussion. A platform page shows someone at a screen. An atmosphere photo belongs in a section that needs warmth, not credibility.

**Do:** Place `photo_30` (person coding) near platform or pipeline content.
**Don't:** Place a group meeting photo on a page about solo data work.

### 2. Restraint over decoration
Two intentional photos per page beat six decorative ones. Each placement should feel like an editorial decision, not filler.

### 3. Match mood to section energy
Photos have a `mood` field in the index. Use it.

| Mood | Where it fits |
|---|---|
| warm | About page, testimonials, homepage, consulting |
| calm | Platform, data pipelines, technical detail pages |
| energetic | Homepage hero, CTAs (use sparingly) |
| professional | Services index, strategy pages |

### 4. Brand color consistency
Several atmosphere photos (13, 27, 28, 40) feature yellow flowers, notebooks, and accessories that match the brand palette. Prefer these for background washes — they reinforce the brand passively without showing a logo.

### 5. People photos follow a hierarchy
- **1 person, outdoor** → personal and approachable. Use on about and contact pages.
- **1 person, working** → credibility and focus. Use on service and platform pages.
- **2–3 people** → collaboration and consulting. Use on strategy and execution pages.
- **4+ people, presentation** → authority and delivery. Use on case studies and social proof sections.

---

## Placement Patterns

There are four patterns. Use each consistently so the visual language feels intentional.

### Pattern A — Hero background
A photo behind the page hero, cropped to the hero height (~480px), with a dark overlay so text remains readable.

```css
.hero-photo-bg {
  background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
                    url('/assets/photos/webp/photo_6.webp');
  background-size: cover;
  background-position: center;
}
```

- Use on: homepage, about page
- Avoid on: detail service pages (too heavy for focused reading)
- Best photos: `photo_6` (homepage only), outdoor portraits for about

### Pattern B — Section background wash
A photo at 10–15% opacity behind a section. Adds warmth and texture without competing with text. Use a real child div (not `::before`) so the `background-image` inline style resolves reliably across all browsers.

```html
<section class="section-wash">
  <div class="section-wash-bg" style="background-image: url('assets/photos/webp/photo_13.webp')"></div>
  <div class="container">...</div>
</section>
```

- Use on: testimonials section, intro sections, homepage opening text
- Best photos: `photo_13`, `photo_27` (yellow desk atmosphere — brand color anchor)
- Default opacity is 12%. Adjust per section by overriding in `components.css` if needed.

### Pattern C — Inline editorial image
An image floated alongside body text. Use portrait ratio (2:3) photos here — they create a natural asymmetric column without consuming too much vertical space.

```html
<img
  src="/assets/photos/webp/photo_1.webp"
  alt="Mark Schep in a park"
  class="editorial-photo editorial-photo--right"
  loading="lazy"
/>
```

```css
.editorial-photo {
  border-radius: 6px;
  width: 38%;
}
.editorial-photo--right {
  float: right;
  margin: 0 0 1.5rem 2rem;
}
.editorial-photo--left {
  float: left;
  margin: 0 2rem 1.5rem 0;
}
@media (max-width: 640px) {
  .editorial-photo {
    float: none;
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
}
```

- Use on: about page, strategy consulting pages, blog posts
- Best photos: portrait (2:3) ratio photos — 1, 5, 9, 20, 21, 31
- Float side: since all subjects are centered in frame, choose float based on which side has the most neutral background (`safe_text_area` field in the index)

### Pattern D — Cinematic strip
A landscape photo cropped to ~280px tall, spanning the full container width, used as a visual break between two sections. Creates rhythm on long pages.

```html
<div class="photo-strip">
  <img src="/assets/photos/webp/photo_6.webp" alt="" role="presentation" loading="lazy" />
</div>
```

```css
.photo-strip {
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.photo-strip img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
}
```

- Use on: long pages (homepage, about, platform) — maximum once per page
- Best photos: outdoor landscape shots — `photo_6`, `photo_7`, `photo_8`

---

## Architecture: Components vs Per-Page

### Decision

**Do not create a dedicated photo JS component.** The site's existing component pattern (navbar.js, breadcrumbs.js) is for repeated structural elements that appear on every page. Photos are editorial choices specific to each page's content — the wrong abstraction here creates overhead without benefit.

**Do extend content.js for the hero.** The hero section is already data-driven via `content.js`. Add a `photo` field to the hero config object. Update the hero renderer once to support an optional background image. All pages benefit from this single change.

**Do add CSS utility classes to components.css.** Pattern B (wash) and Pattern D (strip) should be defined once in `css/components.css` and applied via class names. Pattern C (editorial) CSS also belongs there.

**Do add Pattern C and D images directly in page HTML.** Per-page inline `<img>` tags in the HTML are the right call. They are easy to review, easy to change, and require no abstraction.

### Summary

| Element | Approach | File to change |
|---|---|---|
| Hero background photo | Extend hero data config + renderer | `data/content.js` + hero renderer |
| Section background wash | CSS utility class | `css/components.css` |
| Inline editorial image | Per-page `<img>` tag | Individual `.html` files |
| Cinematic strip | CSS utility class + per-page HTML | `css/components.css` + `.html` files |

---

## Photo Assignments by Page

### Homepage (`index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Hero background | A | `photo_6` | Bicycle with brand name. Use only here. |
| Testimonials section wash | B | `photo_13` | Yellow desk, warm, brand color. |

### About page (`pages/about.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Hero background | A | `photo_1` | Outdoor portrait, 2:3, warm gaze. |
| Intro section, float right | C | `photo_9` | Outdoor portrait, 2:3, approachable. |
| Mid-page personality detail | C | `photo_12` | "Mark Your Data" door sign, calm, quirky. Float right. |
| Group anchor | C | `photo_19` | Café discussion, warm, shows collaborative side. |

### Services index (`pages/services/index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Section wash | B | `photo_27` | Desk with "What Sets Us Apart" sign — coincidental but fitting. |

### Strategy consulting (`pages/services/strategy-consulting/index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Inline, float right | C | `photo_24` | Three people in discussion, warm. |
| Cinematic strip | D | `photo_36` | Mark presenting "Our Motto" slide — high credibility. |

### Strategy execution (`pages/services/strategy-execution/index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Inline, float right | C | `photo_17` | Two people sketching together, warm. |
| Inline, float left | C | `photo_22` | Whiteboard collaboration, calm. |

### Platform (`pages/services/platform/index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Inline, float right | C | `photo_30` | Person coding, calm. |
| Section wash (tech section) | B | `photo_27` | Clean desk setup, calm. |

### Platform detail pages (data pipelines, data models, applied AI)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Inline, float right | C | `photo_32` | Laptop with code + yellow flowers, calm. |

### Data leadership (`pages/services/data-leadership/index.html`)
| Placement | Pattern | Photo | Notes |
|---|---|---|---|
| Inline, float right | C | `photo_20` | Mark at desk with colleague, 2:3, warm. |

### Blog posts
- Use a 3:2 landscape photo as a top-of-article header image, cropped to ~320px tall.
- Match by label: tech/data topics → calm+tech photos (30, 32, 26). Business/strategy topics → warm+business photos (35, 36, 23).
- Do not reuse the same photo across multiple blog posts.

### Project case studies
- Use one photo per case study as an inline anchor, matched to the project's nature.
- bol.com projects → `photo_37` or `photo_35` (group, tech, warm)
- Winparts projects → `photo_34` (presentation, meeting room)
- Tikkie → `photo_24` (small group discussion)

---

## Implementation Plan

### Phase 1 — Foundations (CSS + hero, no per-page changes)
Add the CSS utility classes and extend the hero renderer. This unblocks all subsequent phases.

1. Add `.section-wash`, `.editorial-photo`, `.editorial-photo--right`, `.editorial-photo--left`, `.photo-strip` to `css/components.css`.
2. Add a `photo` field to the hero config in `data/content.js` for the homepage entry.
3. Update the hero renderer to apply a background image when `photo` is set.
4. Verify homepage hero with `photo_6`.

### Phase 2 — Homepage + About (highest visibility)
5. Add Pattern B wash to the homepage testimonials section using `photo_13`.
6. Add hero background to the about page using `photo_1`.
7. Add Pattern C inline photos to the about page (photos 9, 12, 19).

### Phase 3 — Service pages
8. Strategy consulting: add `photo_24` inline + `photo_36` strip.
9. Strategy execution: add `photo_17` and `photo_22` inline.
10. Platform: add `photo_30` inline + `photo_27` wash.

### Phase 4 — Detail pages + blog
11. Platform detail pages: add `photo_32` inline.
12. Data leadership: add `photo_20` inline.
13. Blog posts: add header images per post.
14. Project case studies: add inline anchors per project.

---

## Photos Not Yet Assigned

The following photos are indexed but not assigned to a specific page. Keep them available for new pages, blog posts, or to replace existing assignments if a page's content changes.

| Photo | Labels | Best use |
|---|---|---|
| `photo_2` | personal_branding, outdoor | Alternative about page portrait |
| `photo_3` | personal_branding, outdoor | Blog post headers |
| `photo_4` | personal_branding | Blog post headers |
| `photo_5` | personal_branding, outdoor, 2:3 | Contact page or about page alternative |
| `photo_7` | personal_branding, outdoor | Alternative for strip on about page |
| `photo_8` | personal_branding | Strip or blog header |
| `photo_10` | personal_branding | Blog headers |
| `photo_11` | personal_branding | Blog headers |
| `photo_14` | business | Strategy execution or case studies |
| `photo_15` | business | Consulting detail pages |
| `photo_16` | business | Consulting detail pages |
| `photo_18` | personal_branding, calm | Execution detail pages |
| `photo_21` | personal_branding | Offsite or workshop detail page |
| `photo_23` | business, warm | Strategy consulting alternatives |
| `photo_25` | personal_branding, tech, calm | Platform alternative |
| `photo_26` | personal_branding, tech, calm | Applied AI detail page |
| `photo_28` | atmosphere, 2:3 | Background wash alternative |
| `photo_29` | personal_branding, warm | Contact page |
| `photo_31` | personal_branding, tech, 2:3 | Platform or pipeline inline |
| `photo_33` | personal_branding, calm | Writing/documentation detail pages |
| `photo_38` | business, tech, meeting room | Case study headers |
| `photo_39` | business, warm | Social proof sections |
| `photo_40` | atmosphere, 2:3 | Background wash |

---

## Quick Checklist

Before adding any photo to a page:

- [ ] Photo label matches the section's purpose (business on consulting, tech on platform, etc.)
- [ ] Mood matches section energy (calm for technical, warm for human/relational)
- [ ] Pattern is one of A, B, C, or D — no ad-hoc sizing
- [ ] `loading="lazy"` on all `<img>` tags
- [ ] Meaningful `alt` text on visible photos, `alt=""` and `role="presentation"` on purely decorative ones
- [ ] No photo used on more than two pages
- [ ] `photo_6` used only on the homepage hero
- [ ] Opacity on Pattern B washes does not exceed 8%
- [ ] Mobile breakpoint tested — Pattern C floats collapse to full-width on small screens
