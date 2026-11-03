[Platform services](../index.html) → AI jobs

# AI jobs

<div class="opening-text">
<p>
Your data platform collects, cleans, and structures your data. AI jobs take that one step further: they read from your data platform, run a task using an LLM, and write the result back to the same platform. No separate tooling, no new architecture. It's a natural extension of what you already have.
</p>
<p>
Set up the framework once. Then add use cases one at a time.
</p>
</div>

## How it works

An AI job is a lightweight container that runs alongside your existing pipelines and data models. It connects to an LLM provider, processes your data, and writes its output back to your data warehouse. Right where your analysts and dashboards already look.

<img src="/assets/images/featured/mark_your_data_analytics_platform_ai_jobs_extention_gcp.png" alt="AI jobs architecture showing a container connecting to any LLM provider, with optional safeguards for PII and credentials, writing output back to the data warehouse" class="featured-service-image" style="width: 100%; margin: 2rem 0;" />

## Any LLM provider, your choice

The container connects to whichever LLM fits the task:

<div id="services">

<div class="service-card">

### External providers
Connect to Claude, Gemini, ChatGPT, or any other hosted LLM. Pick the right model for each job based on cost, speed, and capability.

</div>

<div class="service-card">

### Internal models
Run an internally hosted model for sensitive data. An additional security layer sits in front of it, checking that no credentials or PII leave your environment before the request goes through.

</div>

</div>

The LLM clients, safeguards, and execution pattern are configured once. After that, adding a new use case means adding a new job, not rebuilding the framework.

## What you can do with AI jobs

<div id="services">

<div class="service-card">

### Annotation
Label data at scale. Classify support tickets, tag products, score sentiment across thousands of records automatically.

</div>

<div class="service-card">

### Summarization
Turn long-form content into structured output. Summarize customer feedback, contracts, or reports into fields your analysts can actually use.

</div>

<div class="service-card">

### Translation
Translate content across languages without leaving your data platform. Useful for international product catalogues, reviews, or communications.

</div>

<div class="service-card">

### Generation
Generate content from structured data. Product descriptions, email drafts, report narratives, all written at scale from the data you already have.

</div>

</div>

## One use case at a time

You don't need to solve everything upfront. The strength of this setup is that it grows with you:

1. **Set up the framework once:** container infrastructure, LLM clients, safeguards, execution pattern
2. **Add your first job:** pick the use case with the clearest business value
3. **Measure the output:** results land in your data platform alongside everything else
4. **Add the next job:** reuse the same framework

Each job is independent. A new use case doesn't require touching the ones already running.

## Prerequisites

AI jobs build on your existing data platform:

- **[Data pipelines](data-pipelines.html):** the data your AI jobs read from
- **[Data models](data-models.html):** clean, structured input makes for better AI output

[Back to platform overview](../index.html)
