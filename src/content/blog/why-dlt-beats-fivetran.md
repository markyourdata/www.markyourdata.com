---
title: "Why we use DLT instead of Fivetran"
description: "We use DLT in the data pipelines we build. It is open source and runs anywhere. Here is why we chose it, and what you take on when you do."
date: 2025-11-01
category: "In our stack"
---

We use DLT in the data pipelines we build. It's the ingestion layer in our platform, chosen after trying several alternatives. This post covers how DLT works, what you take on compared with a managed tool like Fivetran, and when we think it's the right call.

## Getting data from A to B

Getting data from one place to another doesn't create business value on its own. The insights you extract from that data do. So we want this layer to be simple, under our own control and easy to change.

## What is DLT?

DLT (Data Load Tool) is an open-source Python library for building data pipelines.

-   **Sources** - APIs, databases, files and cloud services
-   **Schema evolution** - Adapts to changes in the source
-   **Python-native** - Customize anything, integrate with your code
-   **Version controlled** - All pipelines are code in Git

## What you take on

A managed tool runs the connectors for you. With DLT, your team owns the pipelines, so someone has to build, run and maintain them. That person is usually a data engineer, who you need anyway to build your data models.

For us that's a good trade: the pipelines are code like the rest of the platform, and you can change them or move them.

## How we run it

We run DLT pipelines in Docker containers. On Google Cloud, that looks like this:

-   **Cloud Run Jobs** - Serverless compute that only runs when needed
-   **Cloud Scheduler** - Triggers workflows on your schedule
-   **Cloud Workflows** - Triggers DBT once DLT is done
-   **Git version control** - Tracks every change

## What about DBT?

DLT gets data into your warehouse. [DBT transforms that raw data into insights](/blog/dbt-transform-data-into-insights). Together, they form the base of the platform.

* * *

### Related resources

-   [DBT: the transformation layer](/blog/dbt-transform-data-into-insights)
-   [Data platforms service](/services/data-engineering)
-   [Visit DLT Official Website](https://dlthub.com/)
