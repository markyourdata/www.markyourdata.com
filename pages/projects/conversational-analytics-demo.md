# Can you trust an AI data analyst?

<div class="featured-intro">
<div class="featured-intro-text">

## The question

LLMs are writing SQL faster than I can type. If everyone gets their own AI data analyst, turning any plain-language question straight into SQL, can we trust it? Or will it confidently send us in the wrong direction, with SQL that runs fine but misses a nuance an analyst wouldn't have missed?

</div>
</div>

<div class="content-section section-single-column">

### The test

I built a realistic simulation: an online store selling paint and paper, three years of sales, shipping, and customer data spread across separate systems, the way real company data usually is. Then I asked it real business questions.

"What was the total revenue in 2023?" came back as:

```sql
SELECT SUM(total_amount) FROM fct_orders
WHERE order_year_num = 2023 AND is_net_sale = TRUE;
```

→ € 338,361.59. Correct, straight from the live database. Ten years ago, this alone would have looked like magic.

</div>

<div class="content-section section-single-column">

### Confidently wrong

The same warehouse has a second, equally reasonable way to answer that question: `SUM(signed_amount)` on the payment ledger, cash basis, the date money actually moved. That comes back as € 331,044.22.

Neither number is wrong. But only one matches what finance expects, and nothing about the question told the agent which one to pick. This is what real business data does: it has traps built in — orders that are cancelled versus returned, transactions that are debit or credit — and an AI agent will pick one, confidently, without knowing it should ask.

</div>

<div class="content-section section-single-column">

### The fix: write down what a good analyst knows

Not more tooling. A short, plain-language note about the domain's gotchas, sitting right next to the data model: use `is_net_sale`, not a status filter that misses cancelled orders; use `signed_amount`, not a raw magnitude that double-counts refunds. Alongside it, a second file describing how to behave: clarify if genuinely ambiguous, apply the documented filters, self-review before answering, report confidence honestly.

Scored against the same 15 real business questions, with and without that file loaded: accuracy went from 87–93% to 100%, reproducibly.

</div>

<div class="content-section section-single-column">

### What this means

For business users, it takes the quick lookups off the queue, an instant answer instead of a wait on Slack. For analysts, it's a shortcut to the deep data, not a replacement. For data engineers, it's a shift: the platform used to give the same answer to the same question every time. Now many more people are asking, in their own words, and someone has to make sure "sales" still means the same thing to finance, marketing, and logistics.

The foundation work doesn't change: pipelines, models, a properly layered platform, personal data handled properly. What's new is that it's worth adding one thing to that foundation — writing down, once, what your analysts already know.

We shared this story, and the live demo, on stage at Data Expo. <a href="../talks.html">Read the talk →</a>

</div>
