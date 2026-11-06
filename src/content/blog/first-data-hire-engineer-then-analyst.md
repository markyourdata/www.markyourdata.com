---
title: "Your first data hire: an engineer first, an analyst later"
description: "If your company wants to answer more questions with data, start with a data engineer and conversational analytics, and hire an analyst for the more complex questions later."
date: 2026-11-06
category: "For your team"
---

If your company wants to answer more questions with data, we advise hiring a data engineer first and an analyst later. The engineer builds the data foundation and the definitions the business relies on. Conversational analytics lets colleagues ask their questions against those definitions, and the analyst joins when the questions get more complex.

We used to advise the opposite: skip the data engineer and invest in analysts on a ready-made platform. Working on conversational analytics changed our view.

## Why the engineer comes first

An AI assistant that writes its own SQL can read the same question differently each time. To get the same answer every time, it needs definitions: what counts as revenue, what counts as an order, and which rows to leave out.

Someone has to build and maintain those definitions, and the data they depend on. That's data engineering work:

-   **Getting the data in** - Pipelines from your source systems, with tools such as [DLT](/blog/why-dlt-beats-fivetran)
-   **Modelling it** - Tested, documented models, with tools such as [DBT](/blog/dbt-transform-data-into-insights)
-   **Defining the metrics** - A semantic layer, built one question at a time

## When to hire the analyst

Hire an analyst when your questions stop being about definitions. Adding a metric solves "what was our revenue per channel?". It doesn't solve "why did this channel drop, and what should we do about it?".

So look at what's left once the common questions are covered. If those questions need interpretation, context and judgement, that's the work of an analyst.

## A platform you can keep

Your engineer needs somewhere to build. We use open-source tools wherever they do the job, with everything as code in your own repository. The design works on Google Cloud, AWS and Azure, so you choose the cloud, and you can hand the platform over or move it later.

[Read how we build data platforms](/services/data-engineering).

## How to apply this in Mark Your Data Assistant

You can start with one metric or saved query in dbt. Colleagues ask their questions in Teams, and each answer says whether it's ✅ Governed by your definition or ⚠️ Unverified.

Your engineer then has a backlog of real questions, and adds the [definitions](/conversational-analytics/semantic-layer) that matter most. The [feedback loop](/conversational-analytics/feedback-loop) shows which questions are still open. When those are about interpretation rather than definitions, you know it's time to hire the analyst.
