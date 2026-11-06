---
title: "DBT: the transformation layer that makes analysts self-sufficient"
description: "DBT is the transformation layer in our platform. We use it to turn raw data into clean, documented models that analysts can query directly."
date: 2025-12-01
category: "In our stack"
---

DBT is the transformation layer in our platform. We use it to turn raw data from DLT into clean, documented, version-controlled models that analysts can query directly. This post explains what DBT does, how we use it, and why it's become the standard for data teams that care about consistency and quality.

## The problem DBT solves

You've invested in getting data into your warehouse. You have customer data, sales metrics, product analytics. But raw data in a warehouse is not the same as usable data.

Every analyst calculates things slightly differently. "Monthly revenue" means three things depending on who you ask. DBT is where you fix that.

## What is DBT?

DBT is the industry standard for data transformation (>10,000 GitHub stars). It sits between your raw data and your analytics layer, turning messy source data into clean, reliable, documented models.

Think of it as the "engineering" layer for your data:

-   **Version controlled** - Track every change to your data logic
-   **Tested** - Ensure data quality with automated tests
-   **Documented** - Every model has clear documentation
-   **Reusable** - Build once, use everywhere

## The business impact

### 1. Consistency across analyses

Without DBT, every analyst calculates "monthly revenue" slightly differently. With DBT, you define it once as a model, and everyone uses the same calculation.

**Result:** No more "which number is right?" conversations in meetings.

### 2. Faster time to insights

Instead of joining 5 tables every time you need customer data, you create a `customers` model that does the joins once. Analysts query one clean table.

**Result:** Analysts stop rebuilding the same joins.

### 3. Higher quality analysis

DBT tests ensure your data meets quality standards before it reaches dashboards:

-   No null values in critical fields
-   No duplicate records
-   Relationships between tables are valid
-   Totals reconcile with source systems

**Result:** Confidence in the numbers you present to leadership.

### 4. Increased analyst productivity

When data is clean, documented, and reliable, analysts spend less time wrangling data and more time finding insights.

## How DBT fits into your data stack

DBT works with your existing tools. Here's the typical flow:

1.  **Data Ingestion** - [DLT loads raw data](/blog/why-dlt-beats-fivetran) from APIs, databases, files into your warehouse
2.  **Data Transformation (DBT)** - Transform raw data into clean models
3.  **Analytics Layer** - BI tools (Looker, Tableau, Power BI) query DBT models

Everything runs on schedule (daily, hourly, real-time), version controlled in Git.

## Real-world example: customer analytics

### Without DBT

Analyst writes a query joining:

-   `raw_orders` table (10M rows)
-   `raw_customers` table (500K rows)
-   `raw_products` table (50K rows)
-   Manual calculations for lifetime value, churn risk, etc.

**Quality:** Each analyst calculates metrics differently

### With DBT

Data engineer creates models:

-   `dim_customers` - Clean customer dimension
-   `fct_orders` - Order facts with all relevant attributes
-   `customer_lifetime_value` - Pre-calculated metrics

Analyst queries: `SELECT * FROM customer_lifetime_value WHERE segment = 'high_value'`

**Quality:** Everyone uses the same, tested definitions

## Why DBT is the industry standard

DBT has become the de facto standard because it solves real problems:

### Easy to learn

If you know SQL, you can use DBT. No complex languages or frameworks.

### Built-in best practices

Testing, documentation, and version control are core features, not afterthoughts.

### Scales infinitely

From 10 models to 1,000+ models. Used by startups and enterprises alike.

### Active community

\>10,000 GitHub stars, thousands of companies, extensive package ecosystem.

## Our approach: DBT + modern infrastructure

We run DBT transformations in Docker containers on tools like Google Cloud Run, orchestrated with Cloud Workflows:

-   [DLT pipelines](/blog/why-dlt-beats-fivetran) load raw data
-   DBT transforms raw data into clean models
-   Automated tests ensure quality
-   Scheduled runs keep data fresh
-   All version controlled in Git

## Getting started with DBT

Starting with DBT doesn't require a complete overhaul. We typically begin with:

1.  **Identify bottlenecks** - Which analyses are repeated most often?
2.  **Build core models** - Create 5-10 foundational models
3.  **Add tests** - Ensure data quality from day one
4.  **Document** - Make models discoverable and understandable
5.  **Scale** - Add more models as needed

## Why good data foundations matter

When your data foundation is solid:

-   **Consistency increases** - Everyone uses the same definitions
-   **Speed increases** - Common questions need less rework
-   **Quality increases** - Tested, validated, reliable data
-   **Confidence increases** - Trust the numbers you present

The result? Your analysts spend time finding insights, not fighting with data.

* * *

### Related resources

-   [Why we use DLT instead of Fivetran](/blog/why-dlt-beats-fivetran)
-   [Data platforms service](/services/data-engineering)
-   [Visit DBT Official Website](https://www.getdbt.com/)
-   [DBT Official Blog](https://www.getdbt.com/blog)
