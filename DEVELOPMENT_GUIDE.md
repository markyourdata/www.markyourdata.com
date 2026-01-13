# Development guide - mark your data website

This guide outlines the best practices and patterns to follow when creating or updating pages on the Mark Your Data website.

---

## Table of contents
1. [Architecture Overview](#architecture-overview)
2. [Creating a New Page](#creating-a-new-page)
3. [Page Structure Best Practices](#page-structure-best-practices)
4. [Component Usage](#component-usage)
5. [Content Management](#content-management)
6. [SEO Guidelines](#seo-guidelines)
7. [Accessibility Requirements](#accessibility-requirements)
8. [CSS Guidelines](#css-guidelines)
9. [Examples & References](#examples--references)

---

## Architecture overview

Our website follows these key principles:

- **Static HTML/CSS/JavaScript** - No server-side rendering
- **Component-Based** - Reusable JavaScript components render content
- **Data-Driven** - All content lives in `data/content.js`, not HTML
- **DRY (Don't Repeat Yourself)** - No duplication, single source of truth
- **Accessibility-First** - WCAG 2.1 AA compliant with proper ARIA labels
- **SEO-Optimized** - Structured data, meta tags, semantic HTML

**File Structure:**
```
/
├── index.html                    # Homepage
├── css/
│   ├── styles.css               # Main CSS (imports all modules)
│   ├── base.css                 # Variables, reset, typography
│   ├── components.css           # Button, card, nav styles
│   ├── layout.css               # Container, section, grid
│   ├── utilities.css            # Helper classes
│   └── ...
├── js/
│   ├── config.js                # Constants, paths, selectors
│   ├── components.js            # Reusable components (hero, CTA, etc.)
│   ├── projects.js              # Project rendering logic
│   └── carousel.js              # Carousel functionality
├── data/
│   └── content.js               # ALL website content
├── components/
│   └── navbar.js                # Navigation component
└── pages/
    ├── services/                # Service pages
    ├── projects/                # Project case studies
    └── blogs/                   # Blog posts
```

---

## Creating a new page

### Step 1: use the page template

Copy the boilerplate template from `_templates/page-template.html` (see below) or reference an existing page like `pages/services/platform/index.html`.

### Step 2: update meta tags

**Required meta tags:**
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#f9a800" />
<title>Your Page Title - Mark Your Data</title>
<meta name="description" content="150-160 character description for SEO" />
```

**Open Graph tags (for social sharing):**
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.markyourdata.com/your-page-url/" />
<meta property="og:title" content="Your Page Title - Mark Your Data" />
<meta property="og:description" content="Compelling description for social media" />
<meta property="og:image" content="https://www.markyourdata.com/assets/logo.png" />
```

**Twitter Card tags:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.markyourdata.com/your-page-url/" />
<meta name="twitter:title" content="Your Page Title - Mark Your Data" />
<meta name="twitter:description" content="Same as OG description" />
<meta name="twitter:image" content="https://www.markyourdata.com/assets/logo.png" />
```

**Canonical URL:**
```html
<link rel="canonical" href="https://www.markyourdata.com/your-page-url/" />
```

**📖 Reference:** See `index.html` lines 1-50 for complete meta tag example.

### Step 3: add content to data/content.js

**DO NOT** hardcode content in HTML. Add it to `data/content.js` instead:

```javascript
// In data/content.js
const siteData = {
  // ... existing content ...
  
  pages: {
    // ... existing pages ...
    
    yourNewPage: {
      hero: {
        title: "Your Page Hero Title",
        tagline: "Your compelling subtitle",
        ctaButton: {
          text: "Get Started",
          link: "pages/contact.html"
        }
      },
      cta: {
        heading: "Ready to Transform Your Data Strategy?",
        description: "Optional description text",
        button: {
          text: "Book a Free Consultation",
          link: "pages/contact.html"
        }
      }
    }
  }
};
```

**📖 Reference:** See `data/content.js` lines 20-80 for page data structure.

### Step 4: render components in html

Use container divs and JavaScript to render components:

```html
<body>
    <!-- Skip to main content link (accessibility) -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navigation -->
    <div id="navbar-container"></div>

    <!-- Main Content -->
    <main id="main-content">
        <!-- Hero Section (rendered from data) -->
        <div id="hero-container"></div>
        
        <!-- Your Custom Content -->
        <section>
            <div class="container">
                <h2>Your Section Heading</h2>
                <p class="section-intro">Introduction text</p>
                <!-- More content -->
            </div>
        </section>
        
        <!-- CTA Section (rendered from data) -->
        <div id="cta-container"></div>
    </main>

    <!-- Scripts: Load in this order! -->
    <script src="../../js/config.js"></script>
    <script src="../../components/navbar.js"></script>
    <script src="../../data/content.js"></script>
    <script src="../../js/components.js"></script>
    <script>
        // Render this specific page
        renderServicePage('yourNewPage');
    </script>
</body>
```

**📖 Reference:** See `pages/services/platform/index.html` for complete example.

---

## Page structure best practices

### Html5 semantic structure

Always use proper semantic HTML:

```html
<!doctype html>
<html lang="en">
<head>
    <!-- Meta tags, styles -->
</head>
<body>
    <!-- Skip link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>
    
    <!-- Navigation -->
    <nav id="navbar-container"></nav>
    
    <!-- Main content area -->
    <main id="main-content">
        <article>
            <h1>Main Page Heading (only ONE h1 per page)</h1>
            
            <section>
                <h2>Section Heading</h2>
                <!-- Section content -->
            </section>
        </article>
    </main>
    
    <!-- Scripts at bottom -->
</body>
</html>
```

### Heading hierarchy rules

- **ONE h1 per page** - Your main page title
- **h2 for major sections** - "About This Service", "Key Benefits"
- **h3 for subsections** - Under each h2
- **Never skip levels** - Don't go h1 → h3 without h2

**❌ Wrong:**
```html
<h1>Data Platform</h1>
<h3>Infrastructure</h3>  <!-- Skipped h2! -->
```

**✅ Correct:**
```html
<h1>Data Platform</h1>
<h2>Core Components</h2>
<h3>Infrastructure</h3>
```

---

## Component usage

We have pre-built components in `js/components.js`. **Always use these instead of duplicating HTML.**

### Available components

#### 1. hero section
```javascript
// In data/content.js
hero: {
  title: "Your Hero Title",
  tagline: "Your subtitle or value proposition",
  ctaButton: {  // Optional
    text: "Get Started",
    link: "pages/contact.html"
  }
}

// In HTML
<div id="hero-container"></div>

// Rendered automatically by renderServicePage()
```
**📖 Reference:** `js/components.js` lines 162-207

#### 2. cta section
```javascript
// In data/content.js
cta: {
  heading: "Ready to Get Started?",
  description: "Optional supporting text",  // Optional
  button: {
    text: "Contact Us",
    link: "pages/contact.html"
  }
}

// In HTML
<div id="cta-container"></div>
```
**📖 Reference:** `js/components.js` lines 217-255

#### 3. section with intro
```javascript
// In data/content.js
aboutUs: {
  heading: "About This Service",
  text: "Introduction paragraph explaining the section"
}

// In HTML
<div id="about-us-content"></div>
```
**📖 Reference:** `js/components.js` lines 138-160

#### 4. service cards
```javascript
// In data/content.js
services: [
  {
    title: "Service Name",
    description: "Service description",
    url: "pages/services/service-name/",
    cta: "Learn More",
    fullWidth: false  // Optional, for featured services
  }
]

// In HTML
<div id="services"></div>
```
**📖 Reference:** `js/components.js` lines 70-110

#### 5. testimonials carousel
```javascript
// In data/content.js
testimonials: [
  {
    quote: "This service transformed our business",
    author: "John Smith",
    company: "Company Name",
    image: "assets/images/testimonials/john.jpg"  // Optional
  }
]

// In HTML
<div id="testimonials"></div>
```
**📖 Reference:** `js/components.js` lines 32-62

### Path resolution

**IMPORTANT:** All internal links automatically resolve paths based on current page depth.

The `resolvePath()` function in `js/config.js` handles this:
- From homepage: `pages/contact.html` 
- From `/pages/services/`: `../contact.html`
- From `/pages/services/platform/`: `../../contact.html`

**Always use paths relative to the root:**
```javascript
// ✅ Correct
link: "pages/contact.html"

// ❌ Wrong  
link: "../contact.html"  // Don't manually calculate
```

**📖 Reference:** `js/config.js` lines 15-30

---

## Content management

### Content source of truth

**Rule:** ALL content must live in `data/content.js`, NOT in HTML files.

**Why?**
- Single source of truth
- Easy to update
- No duplication
- Consistent across pages

### Adding new content

1. Open `data/content.js`
2. Find the appropriate section (homepage, pages, services, etc.)
3. Add your content following existing patterns
4. Use the component in your HTML via container divs

**Example - Adding a New Service:**

```javascript
// In data/content.js
const siteData = {
  services: [
    // ... existing services ...
    {
      title: "New Service Name",
      description: "Clear, concise description of what this service provides",
      url: "pages/services/new-service/",
      cta: "Learn More",
      fullWidth: false
    }
  ]
};
```

**📖 Reference:** `data/content.js` lines 100-150

### Content guidelines

**Titles:**
- Clear and descriptive
- 5-8 words maximum
- Include keywords for SEO

**Descriptions:**
- 1-2 sentences
- Focus on benefits, not features
- 150-160 characters for meta descriptions

**CTA Buttons:**
- Action-oriented: "Get Started", "Learn More", "Book Consultation"
- NOT generic: "Click Here", "Submit"

**Headers (h1, h2, h3, h4):**
- Use sentence case (only first word capitalized)
- ✅ Correct: "About us", "Our services", "Data analytics platform"
- ❌ Incorrect: "About Us", "Our Services", "Data Analytics Platform"
- Exception: Preserve proper nouns and acronyms (AI, Mark Your Data, bol.com, etc.)

---

## Seo guidelines

### Required for every page

1. **Unique Title** (50-60 characters)
   ```html
   <title>Specific Page Topic - Mark Your Data</title>
   ```

2. **Unique Meta Description** (150-160 characters)
   ```html
   <meta name="description" content="..." />
   ```

3. **Canonical URL**
   ```html
   <link rel="canonical" href="https://www.markyourdata.com/page-url/" />
   ```

4. **Open Graph & Twitter Cards** (see Creating a New Page)

5. **Structured Data** (if applicable)
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "name": "Service Name",
     "description": "Service description",
     "provider": {
       "@type": "Organization",
       "name": "Mark Your Data"
     }
   }
   </script>
   ```

**📖 Reference:** `index.html` lines 30-130 for structured data examples.

### Update sitemap

After creating a new page, add it to `/sitemap.xml`:

```xml
<url>
  <loc>https://www.markyourdata.com/your-new-page/</loc>
  <lastmod>2025-01-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Priority Guide:**
- 1.0 - Homepage
- 0.9 - Main service pages
- 0.8 - Secondary pages, services index
- 0.7 - Individual projects, blog posts

**📖 Reference:** `/sitemap.xml`

---

## Accessibility requirements

### Must-have accessibility features

1. **Skip to Main Content Link**
   ```html
   <a href="#main-content" class="skip-to-main">Skip to main content</a>
   ```
   Allows keyboard users to skip navigation.

2. **Main Landmark**
   ```html
   <main id="main-content">
     <!-- All page content -->
   </main>
   ```

3. **Alt Text on ALL Images**
   ```html
   <img src="logo.png" alt="Mark Your Data company logo" loading="lazy">
   ```
   - Descriptive, not just filename
   - Include `loading="lazy"` for performance

4. **ARIA Labels on Interactive Elements**
   ```html
   <button type="button" aria-label="Next testimonial">→</button>
   ```

5. **Proper Button Types**
   ```html
   <!-- ✅ Correct -->
   <button type="button" onclick="...">Click Me</button>
   
   <!-- ❌ Wrong -->
   <button onclick="...">Click Me</button>
   ```

6. **Keyboard Navigation**
   - All interactive elements must be keyboard accessible
   - Focus states visible (handled by CSS)

**📖 Reference:** `css/components.css` lines 1-50 for focus styles.

### Testing accessibility

- Use Chrome DevTools Lighthouse
- Test keyboard navigation (Tab, Shift+Tab, Enter)
- Verify with screen reader (macOS VoiceOver: Cmd+F5)

---

## Css guidelines

### Use design tokens

**DO NOT** hardcode values. Use CSS variables from `css/base.css`.

#### Spacing
```css
/* ❌ Wrong */
margin: 16px;
padding: 24px 32px;

/* ✅ Correct */
margin: var(--space-md);
padding: var(--space-lg) var(--space-xl);
```

**Available spacing:**
- `--space-xs` (0.5rem / 8px)
- `--space-sm` (0.75rem / 12px)
- `--space-md` (1rem / 16px)
- `--space-lg` (1.5rem / 24px)
- `--space-xl` (2rem / 32px)
- `--space-2xl` (3rem / 48px)
- `--space-3xl` (4rem / 64px)
- `--space-4xl` (6rem / 96px)

#### Typography
```css
/* ❌ Wrong */
font-size: 20px;

/* ✅ Correct */
font-size: var(--font-size-lg);
```

**Available sizes:**
- `--font-size-xs` to `--font-size-3xl`
- `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

#### Colors
```css
/* ✅ Use brand colors */
color: var(--dark-charcoal);
background: var(--dynamic-orange);
border: 2px solid var(--light-gray);
```

**Available colors:**
- `--dark-charcoal` (#333337) - Primary text
- `--dynamic-orange` (#f9a800) - Brand accent
- `--white` (#ffffff)
- `--light-gray` (#f4f5f5) - Backgrounds
- `--accent-gray` (#545454) - Secondary text

#### Transitions
```css
/* ✅ Use transition tokens */
transition: color var(--transition-fast);
transition: all var(--transition-base);
```

**📖 Reference:** `css/base.css` lines 1-40 for all design tokens.

### Utility classes

Use existing utility classes instead of inline styles:

```html
<!-- ✅ Correct -->
<p class="section-intro">Intro text</p>
<div class="image-container">...</div>

<!-- ❌ Wrong -->
<p style="font-size: 1.25rem; margin-bottom: 2rem;">Intro text</p>
```

**📖 Reference:** `css/utilities.css` for available utility classes.

---

## Examples & references

### Complete page examples

**Simple Service Page:**
- File: `pages/services/platform/index.html`
- Uses: Hero, custom sections, CTA
- Content: `data/content.js` → `pages.platform`

**Homepage:**
- File: `index.html`
- Uses: Hero, services, clients, testimonials, projects, CTA
- Content: `data/content.js` → `homepage`

**Project Case Study:**
- File: `pages/projects/bol-content-generation-at-scale.html`
- Uses: Markdown content, client logo, project data
- Content: `data/content.js` → `projects` array

### Key files to reference

| File | Purpose | Lines to Check |
|------|---------|----------------|
| `index.html` | Complete homepage example | All |
| `pages/services/platform/index.html` | Service page template | All |
| `data/content.js` | Content structure examples | 1-200 |
| `js/components.js` | All available components | 1-300 |
| `js/config.js` | Constants and path resolution | 1-50 |
| `css/base.css` | Design tokens | 1-40 |
| `css/components.css` | Component styles | All |

---

## Quick checklist for new pages

Before publishing a new page, verify:

- [ ] All meta tags added (title, description, OG, Twitter, canonical)
- [ ] Content added to `data/content.js`, NOT hardcoded in HTML
- [ ] Skip-to-main-content link present
- [ ] `<main id="main-content">` wrapper added
- [ ] Only ONE `<h1>` tag on page
- [ ] Heading hierarchy correct (h1 → h2 → h3, no skipping)
- [ ] All images have `alt` text and `loading="lazy"`
- [ ] All buttons have `type="button"` attribute
- [ ] Paths use root-relative format (e.g., `pages/contact.html`)
- [ ] Design tokens used instead of hardcoded values
- [ ] Page added to `/sitemap.xml`
- [ ] Tested keyboard navigation (Tab key)
- [ ] Tested in Chrome DevTools Lighthouse (aim for 90+ scores)
- [ ] `lang="en"` attribute on `<html>` tag

---

## Common mistakes to avoid

1. **❌ Hardcoding content in HTML**
   - Always use `data/content.js`

2. **❌ Duplicating component HTML**
   - Use existing components from `js/components.js`

3. **❌ Manual path calculation**
   - Let `resolvePath()` handle it

4. **❌ Inline styles**
   - Use utility classes or design tokens

5. **❌ Missing meta tags**
   - Copy from template, update values

6. **❌ Multiple h1 tags**
   - Only ONE h1 per page

7. **❌ Forgetting lazy loading**
   - All images need `loading="lazy"`

8. **❌ No alt text**
   - Every image must have descriptive alt text

9. **❌ Hardcoded spacing/colors**
   - Use CSS variables from `css/base.css`

10. **❌ Not updating sitemap**
    - Add new pages to `/sitemap.xml`

---

## Getting help

When asking AI (Claude) to help create or update a page:

**Good prompt example:**
```
Read DEVELOPMENT_GUIDE.md. Create a new service page for "AI Strategy Workshop" 
that follows all the patterns in the guide. The page should:
- Have a hero section with title "AI Strategy Workshop" and tagline "Discover AI 
  opportunities in a focused 2-day session"
- Include 3 sections: "What You'll Get", "Who Should Attend", "Outcomes"
- End with a CTA to book a consultation
- Follow all SEO and accessibility best practices from the guide
```

**Include:**
- Reference to this guide
- Specific content requirements
- Expected sections/structure
- Mention of following best practices

---

## Version history

- **v1.0** (2025-01-08) - Initial development guide created
  - Architecture overview
  - Component documentation
  - SEO and accessibility guidelines
  - Design token system
  - Complete examples and references

---

**Need to update this guide?** When patterns change or new components are added, update this file so it remains the single source of truth for development practices.
