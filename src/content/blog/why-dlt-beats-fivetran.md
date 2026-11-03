---
title: "Why we use DLT instead of Fivetran"
description: "We use DLT in every data pipeline we build. It is free, open source, and runs anywhere. Here is why we chose it over Fivetran and what we gave up to get there."
date: 2025-11-01
category: "In our stack"
---

We use DLT in every data pipeline we build. It's the ingestion layer in our platform, chosen after trying several alternatives. This post covers how DLT works, what you give up compared to tools like Fivetran, and why we think it's the right call for most teams.

## The cost of getting data from A to B

Getting data from one place to another doesn't create business value on its own. The insights you extract from that data do.

Yet many companies spend [€1,500+ per month on tools like Fivetran](https://mammoth.io/blog/fivetran-pricing/) just to move data around. That's €18,000 per year on the non-value-adding part of your data stack.

## Why traditional tools are expensive

Tools like Fivetran charge based on:

-   **Number of connectors** - Each data source adds cost
-   **Rows processed** - Your data growth = higher bills
-   **Premium features** - Advanced transformations cost extra

A typical mid-sized company with 10-15 data sources easily reaches €1,500/month. Scale up, and costs balloon to €3,000-5,000/month.

## Enter DLT: the open-source alternative

DLT (Data Load Tool) is a Python library for building data pipelines. It's free, open-source, and backed by an active community (~5,000 GitHub stars).

### What DLT offers

-   **Free forever** - No per-connector or per-row fees
-   **100+ verified sources** - APIs, databases, files, cloud services
-   **Automatic schema evolution** - Adapts to source changes
-   **Built-in data quality** - Validation and monitoring included
-   **Python-native** - Customize anything, integrate with your code
-   **Version controlled** - All pipelines are code in Git

## The real cost comparison

### Fivetran

**€1,500/month**

€18,000 per year

-   Limited to pre-built connectors
-   Customization requires paid support
-   Vendor lock-in
-   Costs scale with data volume

### DLT + our platform

**~€100/month**

€1,200 per year

-   100+ connectors + custom sources
-   Fully customizable (it's Python)
-   No vendor lock-in
-   Fixed compute costs

**Save €16,800/year**

## But is it production-ready?

Yes. DLT is used by companies running billions of rows daily. It's built by data engineers who understand production requirements:

-   Incremental loading for efficiency
-   Automatic retries and error handling
-   Schema evolution without breaking pipelines
-   Built-in observability and logging
-   Active community support

## Our approach: DLT + modern infrastructure

We run DLT pipelines in Docker containers on Google Cloud Run:

-   **Cloud Run Jobs** - Serverless compute, pay only when running
-   **Cloud Scheduler** - Trigger workflows on your schedule
-   **Cloud Workflows** - Trigger DBT once DLT is done
-   **Git version control** - Track every change

This architecture is lightweight, scalable, and costs a fraction of traditional platforms.

## What about DBT?

DLT gets data into your warehouse. [DBT transforms that raw data into insights](/blog/dbt-transform-data-into-insights). Together, they form a complete, cost-efficient stack.

Learn more about [how DBT turns data into business value](/blog/dbt-transform-data-into-insights).

## Summary

Data ingestion is a commodity. Don't overpay for it.

With DLT and modern cloud infrastructure, you get enterprise-grade capabilities at a fraction of the cost. Save €16,800+ per year and invest that budget where it creates real value: in analytics, ML models, and insights.

* * *

### Related resources

-   [DBT: Transform Data into Insights](/blog/dbt-transform-data-into-insights)
-   [MotherDuck: The Future of Cost-Efficient Analytics](/blog/motherduck-the-future-of-cost-efficient-analytics)
-   [Data Analytics & AI Platform Service](/services/data-platform)
-   [Learn more about Fivetran pricing](https://mammoth.io/blog/fivetran-pricing/)
-   [Visit DLT Official Website](https://dlthub.com/)
