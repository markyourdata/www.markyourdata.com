# Quick Reference - Mark Your Data Website

Quick lookup for common tasks and patterns.

---

## Creating a New Page - 5 Steps

1. **Copy template** → `_templates/page-template.html`
2. **Update meta tags** → Title, description, URLs
3. **Add content to `data/content.js`** → Define hero, CTA, etc.
4. **Customize HTML** → Add your sections
5. **Update sitemap** → Add to `/sitemap.xml`

---

## Design Tokens Cheat Sheet

### Spacing (8px grid)
```css
var(--space-xs)    /* 8px */
var(--space-sm)    /* 12px */
var(--space-md)    /* 16px */
var(--space-lg)    /* 24px */
var(--space-xl)    /* 32px */
var(--space-2xl)   /* 48px */
var(--space-3xl)   /* 64px */
var(--space-4xl)   /* 96px */
```

### Typography
```css
var(--font-size-xs)    /* 12.8px */
var(--font-size-sm)    /* 14px */
var(--font-size-base)  /* 16px */
var(--font-size-md)    /* 18px */
var(--font-size-lg)    /* 20px */
var(--font-size-xl)    /* 24px */
var(--font-size-2xl)   /* 32px */
var(--font-size-3xl)   /* 40px */
```

### Colors
```css
var(--dark-charcoal)   /* #333337 - Primary text */
var(--dynamic-orange)  /* #f9a800 - Brand accent */
var(--white)           /* #ffffff */
var(--light-gray)      /* #f4f5f5 - Backgrounds */
var(--accent-gray)     /* #545454 - Secondary text */
```

### Transitions
```css
var(--transition-fast)  /* 0.2s */
var(--transition-base)  /* 0.3s */
var(--transition-slow)  /* 0.5s */
```

---

## Component Quick Reference

### Hero
```javascript
// data/content.js
pages: {
  myPage: {
    hero: {
      title: "Page Title",
      tagline: "Subtitle",
      ctaButton: { text: "Get Started", link: "pages/contact.html" }
    }
  }
}

// HTML
<div id="hero-container"></div>
```

### CTA Section
```javascript
// data/content.js
cta: {
  heading: "Ready to Start?",
  description: "Optional text",
  button: { text: "Contact Us", link: "pages/contact.html" }
}

// HTML
<div id="cta-container"></div>
```

### Service Cards
```javascript
// data/content.js
services: [
  {
    title: "Service Name",
    description: "Description",
    url: "pages/services/name/",
    cta: "Learn More"
  }
]

// HTML
<div id="services"></div>
```

---

## Utility Classes

```html
<p class="section-intro">Intro text (larger, spaced)</p>
<div class="image-container">Image wrapper (centered)</div>
<ul class="list-benefits">Benefit list (styled)</ul>
<img class="featured-service-image">Feature image (shadow, hover)</img>
```

---

## Accessibility Checklist

- [ ] `<a href="#main-content" class="skip-to-main">Skip to main content</a>`
- [ ] `<main id="main-content">` wrapper
- [ ] Only ONE `<h1>` per page
- [ ] All images have `alt="description"` and `loading="lazy"`
- [ ] All buttons have `type="button"`
- [ ] Keyboard navigation works (test with Tab key)

---

## SEO Checklist

- [ ] Unique `<title>` (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URL (`<link rel="canonical">`)
- [ ] Added to `/sitemap.xml`
- [ ] Structured data (if Service/Article)

---

## Common File Paths

| From | To | Path |
|------|----|----|
| Root (`index.html`) | Contact | `pages/contact.html` |
| `/pages/services/` | Contact | `../contact.html` |
| `/pages/services/platform/` | Contact | `../../contact.html` |
| Any page | CSS | Use relative: `../../css/styles.css` |

**Note:** For `data/content.js`, always use root-relative paths (e.g., `pages/contact.html`). The `resolvePath()` function handles conversion.

---

## Script Load Order

```html
<script src="../../js/config.js"></script>           <!-- 1. Constants -->
<script src="../../components/navbar.js"></script>    <!-- 2. Navbar -->
<script src="../../data/content.js"></script>        <!-- 3. Content -->
<script src="../../js/components.js"></script>        <!-- 4. Components -->
<script>renderServicePage('pageName');</script>       <!-- 5. Render -->
```

---

## Common Mistakes

| ❌ Wrong | ✅ Right |
|---------|---------|
| Content in HTML | Content in `data/content.js` |
| `<button onclick="...">` | `<button type="button" onclick="...">` |
| `<img src="...">` | `<img src="..." alt="..." loading="lazy">` |
| `margin: 16px;` | `margin: var(--space-md);` |
| `font-size: 20px;` | `font-size: var(--font-size-lg);` |
| Multiple `<h1>` tags | Only ONE `<h1>` |
| Manual path calc | Use `resolvePath()` |

---

## Testing Before Publishing

1. **Lighthouse audit** → Chrome DevTools, aim for 90+ in all categories
2. **Keyboard navigation** → Tab through page, verify focus states
3. **Mobile responsive** → Test on mobile device or DevTools responsive mode
4. **Links work** → Click all buttons and links
5. **Meta tags** → View page source, verify all tags present

---

## File References

| Need | File | Lines |
|------|------|-------|
| Page template | `_templates/page-template.html` | All |
| Complete example | `pages/services/platform/index.html` | All |
| All design tokens | `css/base.css` | 1-40 |
| Component docs | `js/components.js` | 1-300 |
| Content structure | `data/content.js` | 1-200 |
| Path resolution | `js/config.js` | 15-30 |

---

## Getting AI Help

**Good prompt:**
```
Read DEVELOPMENT_GUIDE.md and create a new page for [topic] 
following all patterns. Include [sections], use the hero 
and CTA components, and follow SEO/accessibility best practices.
```

**Include:**
- Reference to DEVELOPMENT_GUIDE.md
- Specific requirements
- Sections needed
- Mention best practices

---

**Full Documentation:** See `DEVELOPMENT_GUIDE.md` for complete details.
