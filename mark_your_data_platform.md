## Action Plan: Mark Your Data Platform Proposition Update

### Goal
Reposition the Data Platform service to emphasize the "Save €100K/year" value proposition, targeting companies that haven't yet hired a data engineer.

---

### 1. Update Platform Service Page
**File:** `pages/services/platform/index.html` + `data/content.js`

- Rewrite hero and main content to focus on the new proposition:
  - "Don't hire a data engineer - use Mark Your Data Platform instead"
  - Highlight €100K/year savings
- Keep existing assets (tables, images, cost comparisons)
- Update `data/content.js` with new copy for hero, sections, and CTA

---

### 2. Create New Detail Page for Existing Data Engineers
**File:** New page (e.g., `pages/services/platform/existing-team.html`)

- Target: Companies that already have a data engineer
- Proposition: "Save up to €30K per year on platform costs"
  - Modern data stack (Fivetran): €1,500/month
  - Cloud Composer: €350/month
  - Data warehouse (Redshift/Snowflake): €1,000/month
  - Total: ~€35K/year → Save €30K+ with Mark Your Data Platform
- Reuse content/tables from current platform page as inspiration
- Add to `data/content.js`

---

### 3. Add Sidebar Banners to Homepage
**File:** `index.html` + new component

- Create a simple vertical banner component with:
  - Text (e.g., "Do not hire a data engineer" / "Save €100K per year")
  - CTA button linking to platform service page
- Add two banners to homepage sidebar
- This creates 3 entry points to the platform page (banners + existing CTA)

---

### 4. Write Blog Post
**File:** New blog post

- Title: "Save €100K per year with the Mark Your Data Platform"
- Content outline:
  1. Introduction: Growing org, isolated data sources, considering hiring a data engineer
  2. The problem: Data engineers cost €100K but don't directly add business value
  3. The solution: Mark Your Data Platform provides the foundation
  4. Cost breakdown of traditional "modern data stack" (~€35K/year)
  5. Total comparison: Traditional (€215K) vs. Mark Your Data Platform (save €100K)
  6. CTA: Contact form

---

### Blog Content Draft

**Title:** Save €100K per year with the "Mark Your Data Platform"

**Introduction:**
Your organization is growing, you've accumulated a set of isolated data sources throughout your organization. You want your organization to become more data driven, and you feel you need to bring those sources together in way that you can derive insights that help you better manage your business. You know data engineering is critical to set up the foundation. So you are thinking of hiring a data engineer. However, hiring a senior data engineer easily costs €100K per year and you are wondering if its worth the investment.

If you ask us, the answer is no. The data engineer is not adding any value, merely laying out the foundation for your data analysts. It's these analysts who actually add the value. They perform analyses on the prepared data, helping you solve the challenges you face. So we believe you better spend that money on your data analysts instead of hiring a data engineer.

However, without a data platform, there's no data to analyse. That's where we come in. Mark Your Data Platform is a cloud-native data platform that contains everything that your analysts need. We provide the entire foundation to ingest, transform, analyze and report on your data. We help you onboard your data analysts so you can start adding value from day one.

When you were to hire a data engineer, you also risk spending over €35K per year on a "modern data stack" which combines orchestration tools like managed Airflow (e.g. Cloud Composer) €350/month and managed data pipelines like Fivetran €1,500/month. Also, you are likely to end up with using databases like Snowflake, BigQuery, or Redshift and might miss out on the benefits of tools like MotherDuck, which provides a cost-effective and scalable solution for data storage and analytics. As an example, when you fill in the Redshift price calculator, for a normal 96GB RAM compute type, running your data platform for 9 hours a day, you spend over €1,000/month.

**Cost Breakdown - Traditional Setup (~€215K/year):**
- Data engineer: €100K
- Data platform: €35K
- Data analyst: €80K

With Mark Your Data Platform, we believe we can save you up to €100K per year.

Interested? Reach out via the form.
