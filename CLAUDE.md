# Mark Your Data website

Astro static site for markyourdata.com, Mark Schep's data & AI consultancy. It leads with conversational analytics for dbt teams (Mark Your Data Assistant), then data platforms, AI engineering and strategy. Deployed on Vercel.

`legacy-site/` holds the old static site for reference. It isn't built or served, so never edit it to change the live site. `DEVELOPMENT_GUIDE.md` still describes that old site.

## Architecture

- **`src/pages/`:** routes. `build.format` is `file` and `trailingSlash` is `never`, so URLs have no trailing slash or `.html`.
- **`src/layouts/Base.astro`:** the head, nav, footer, analytics and site-wide JSON-LD. Pass `jsonLd` to add markup for one page.
- **`src/components/`:** `Hero`, `Cta`, `Testimonials`, `ClientLogos`, `CaseCard`, `TalkList`, `DemoVideo`, `Nav`, `Footer`.
- **`src/data/site.ts`:** testimonials, clients, talks, the demo video paths and site details.
- **`src/data/hubs.ts`:** the content of the conversational analytics hub pages.
- **`src/content/`:** `blog`, `cases` and `services` collections in Markdown. Schemas are in `src/content.config.ts`. A `.md` file in these folders goes live on the next deploy, because there's no draft setting.
- **`src/styles/site.css`:** all styles. Reuse existing classes such as `.card`, `.card-link`, `.grid`, `.prose` and `.faq`.
- **`public/`:** served as is. Client logos are in `assets/images/clients/`, testimonial photos in `assets/images/fans/`. `assets/photos/webp/photo_index.yaml` describes the brand photos, to help you pick a hero image that fits the page.

### Conversational analytics pages

- `/conversational-analytics` is the tool page.
- `/conversational-analytics/<hub>` comes from `[hub].astro` and `hubs` in `hubs.ts`.
- `/conversational-analytics/cost` is its own page, `cost.astro`, using `costHub`.
- FAQPage JSON-LD is generated from the same data as the visible Q&As, and must match them word for word. Update the `lastReviewed` date when you review the content.
- The Q&As also live in `docs/strategy/qa-bank.md`, with sources and checks. Change an answer in both places.

## Internal notes stay out of git

This repository is **public**. `docs/strategy/` is git-ignored and only exists on Mark's machine. It holds the content strategy, positioning, the Q&A bank and the LinkedIn posts. Read `docs/strategy/START_HERE.md` before changing any conversational analytics content, if the folder is available.

Never commit strategy notes, client documents, `.bim` files or other private material. Check what a push would publish.

## Build and verify

```bash
npm install
npm run dev      # local development
npm run build    # output in dist/
```

For UI changes, render the page instead of only building it. Playwright isn't a project dependency, so install it in a scratch directory, serve `dist/` and drive it with a small Node script. Check desktop and phone width, `pageerror`, failed requests and broken images.

Two things to watch for when testing locally:

- `python3 -m http.server` needs the `.html` in the URL, and doesn't apply `vercel.json`.
- It also doesn't support range requests, so videos download in full. That makes page weight look worse than it is in production.

## Deployment

- Vercel deploys from GitHub. Pushing to `main` puts the site live straight away, so only do that when Mark asks.
- Other branches get preview deployments behind Vercel Authentication, so automated tools can't reach them without a login. Get the URL through `gh api` deployment statuses.
- `vercel.json` redirects every old URL to its new page. Keep those redirects, and add one when you move or remove a page.
- `public/robots.txt` points to `sitemap-index.xml`, which `@astrojs/sitemap` generates. `/demo` and `/thank-you` are left out of the sitemap, and are `noindex`.
- The IndexNow key file is in `public/`. It's meant to be public. Google doesn't use IndexNow.

## Content rules

Copy follows `copy_guide.md`, with these rules taking priority:

- **Language:** the site is English.
- **No claims:** describe what the product does and what the reader can decide. No hype and no invented facts.
- **No money statements or prices:** this includes savings claims and the fit check price. The cost page is the only exception: it may state the Gemini model usage and the hosting estimate, but never a licence price.
- **Only what's built:** a Proposed ADR is roadmap, never a feature. No internal eval numbers outside the cost page. Check claims against `main` of `dap-conv-analytics`, because features can sit on unmerged branches.
- **Competitors:** only questions that stay relevant: traceability, a feedback loop, whether all business users can ask, whether it uses dbt. Avoid current features. Don't say platform assistants are cheaper overall.
- **AI data:** never write "nothing leaves your cloud". The assistant runs in the client's cloud, and questions go to the AI providers the client chooses and contracts.
- **DuckDB:** demos only, so keep it off the site. BigQuery is the only supported warehouse today.
- **Blog posts:** a post about conversational analytics ends with advice on applying the topic in Mark Your Data Assistant. Write these as advice, not as a description of current settings. Other posts don't get this section.
- **Testimonials:** always in English. Translate Dutch reviews, keeping the specifics and tone.
- **Talks and podcasts:** keep the full original description, so the record survives if the source disappears. Don't write new abstracts. If details aren't public yet, say so.
- **Client names:** only with written agreement.
- **Punctuation:** no em dashes between words.

## Style

- No comments in code beyond what's already there, unless something is genuinely non-obvious.
- Follow existing patterns, and reuse existing components and CSS classes.
- Keep pages working without JavaScript where you can. Hub answers and the cloud selector on the data platforms page rely on native HTML and CSS, and answers must stay in the page source for crawlers.
- Resize images to the size they're shown at, with `cwebp` where possible. Keep JPEG or PNG for images used when sharing a link.
