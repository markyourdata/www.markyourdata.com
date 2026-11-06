export interface Hub {
  slug: string;
  title: string;
  card: string;
  description: string;
  summary: string;
  how: { lead: string; text: string }[];
  roles: { role: string; text: string }[];
  qa: { role: string; question: string; answer: string }[];
  link?: { text: string; label: string; href: string };
}

export const lastReviewed = "6 November 2026";

export const hubs: Hub[] = [
  {
    "slug": "trusted-answers",
    "title": "Why AI answers don't match the dashboard, and how to make them",
    "card": "Answer from your dbt definitions first, and label everything else.",
    "description": "AI assistants that write their own SQL can read a question differently each time. Mark Your Data Assistant answers from your dbt semantic layer first and labels every answer.",
    "summary": "AI assistants that write their own SQL can read the same question differently each time, so their numbers drift from the dashboard. Mark Your Data Assistant answers from the metrics in your dbt semantic layer first, labels those answers ✅ Governed, and labels everything else ⚠️ Unverified.",
    "how": [
      {
        "lead": "Definitions come first.",
        "text": "For every question, the assistant looks for a saved query, then a metric. MetricFlow compiles the SQL from your definition, so the same request gives the same SQL."
      },
      {
        "lead": "Every answer says where its numbers come from.",
        "text": "An answer from a definition says ✅ Governed. SQL written for the question says ⚠️ Unverified, and \"Show SQL\" shows exactly what ran."
      },
      {
        "lead": "Facts about your data come from dbt.",
        "text": "Grain, join paths and allowed values come from the tests and entities in your dbt project."
      },
      {
        "lead": "The answer says when figures can still change.",
        "text": "The data status names up to when the data is loaded and from which date figures aren't final, based on what your data team sets in dbt."
      },
      {
        "lead": "Assumptions are stated.",
        "text": "When a question can be read in more than one way, the answer states the assumption it made and offers the other readings."
      }
    ],
    "roles": [
      {
        "role": "Manager",
        "text": "You can see whether a number comes from a reviewed definition before you use it."
      },
      {
        "role": "Analytics engineer",
        "text": "You define a number once in dbt, and the assistant uses that definition."
      },
      {
        "role": "Analyst",
        "text": "You can check any answer by reading the SQL that ran."
      },
      {
        "role": "Business user",
        "text": "You can see whether a number is governed and whether it's final."
      }
    ],
    "qa": [
      {
        "role": "Manager",
        "question": "Why does an AI assistant give a different revenue number than our dashboard?",
        "answer": "Generated SQL can interpret the same question differently on every run. Mark Your Data Assistant answers from the metric in your dbt semantic layer first, so MetricFlow compiles the same SQL from the definition your data team reviewed every time. Those answers carry a ✅ Governed label; anything else is marked ⚠️ Unverified."
      },
      {
        "role": "Analyst",
        "question": "What happens when no dbt metric covers a question?",
        "answer": "Mark Your Data Assistant still answers, with SQL written for that question, and labels the answer ⚠️ Unverified so readers know it isn't an official number. \"Show SQL\" shows exactly what ran. The question is logged, so the data team can close the gap with a metric or saved query in a normal dbt pull request."
      },
      {
        "role": "Analytics engineer",
        "question": "Can I check the SQL behind an answer in my own tools?",
        "answer": "Yes. Mark Your Data Assistant shows the SQL that actually ran, formatted in your warehouse's dialect, without comments and with fully qualified table names, so you can paste it into BigQuery and run the same query. The chat shows a preview of the rows, along with the exact total row count."
      },
      {
        "role": "Business user",
        "question": "Why does the assistant say this month's revenue isn't final yet?",
        "answer": "Because the data still changes: a return can lower net revenue for weeks after an order. Mark Your Data Assistant reads source freshness and a settling window that your data team sets in dbt, and states in the answer from which date the figures are not final, so you know before you quote them."
      },
      {
        "role": "Analytics engineer",
        "question": "Does the assistant guess facts about our data?",
        "answer": "No, Mark Your Data Assistant reads those facts from your dbt project instead. Grain, join paths and allowed values come from unique and not-null tests, relationship tests, accepted values and the entities in your semantic models. When a fact an answer depends on is missing, the answer says so."
      }
    ]
  },
  {
    "slug": "self-service-in-teams",
    "title": "How the business gets answers without waiting for the data team",
    "card": "Colleagues ask in Teams, in Dutch or English, and get a readable answer.",
    "description": "Colleagues ask data questions in a personal chat in Microsoft Teams, in Dutch or English, and Mark Your Data Assistant answers with text, a table and, where it fits, a chart.",
    "summary": "Business users shouldn't have to wait for the data team to answer a question the data can answer. Mark Your Data Assistant lets them ask in a personal chat in Microsoft Teams, in Dutch or English, and answers with text, a table and, where it fits, a chart.",
    "how": [
      {
        "lead": "Each question gets one language.",
        "text": "The assistant detects the language of each question, and the answer, labels and buttons follow it."
      },
      {
        "lead": "Code chooses the chart.",
        "text": "The shape of the result decides the visual, so the same result always gets the same one."
      },
      {
        "lead": "Numbers are written for reading.",
        "text": "The text and charts use short amounts, and the table shows the exact values."
      },
      {
        "lead": "Answers come first, questions back second.",
        "text": "A question with more than one reading gets an answer with its assumption, and the other readings one click away."
      },
      {
        "lead": "The result can go to Excel.",
        "text": "In Teams, the Excel button creates a file with real numbers and dates from the result of your own question."
      }
    ],
    "roles": [
      {
        "role": "Business user",
        "text": "You ask in the chat tool you already use, and get an answer you can read."
      },
      {
        "role": "Manager",
        "text": "Your teams can ask their own questions, and you can see which answers are governed."
      },
      {
        "role": "Analyst",
        "text": "Common questions can be answered in Teams, and you can take a result to Excel."
      },
      {
        "role": "Analytics engineer",
        "text": "Labels, currencies and defaults come from your dbt project and domain settings."
      }
    ],
    "qa": [
      {
        "role": "Business user",
        "question": "Can I ask data questions in Microsoft Teams, in Dutch?",
        "answer": "Yes. Mark Your Data Assistant answers data questions in a personal chat in Microsoft Teams, in Dutch or English. It detects the language of each question, and the answer, labels and buttons follow that language. Column names appear in Dutch once your data team adds Dutch labels in dbt."
      },
      {
        "role": "Manager",
        "question": "Do our users need a Microsoft Copilot licence for the assistant?",
        "answer": "No. Mark Your Data Assistant runs in Microsoft Teams as a custom engine agent, and Microsoft's licensing guidance requires no additional Copilot licence for that type of agent. The assistant uses the AI providers you choose rather than Copilot. A Microsoft 365 admin approves the app for your organisation."
      },
      {
        "role": "Business user",
        "question": "Why does one question get a line chart and another a bar chart?",
        "answer": "The shape of the result decides, not an AI model. Mark Your Data Assistant draws a line for a trend over time and horizontal bars for a short list of categories, shows a single value as a large number, and otherwise shows a table. The same result always gets the same visual."
      },
      {
        "role": "Analyst",
        "question": "Can I take an answer to Excel, and who can open that file?",
        "answer": "Yes. In Teams, the Excel button in Mark Your Data Assistant creates a file from the result of your own question, with real numbers and dates. The download link works once and expires within minutes. Limiting downloads to the signed-in user in your own organisation is in development."
      },
      {
        "role": "Business user",
        "question": "What happens when my question can be read in more than one way?",
        "answer": "Mark Your Data Assistant answers with the most sensible reading, states the assumption it made, and offers the other readings as options you can click. Your data team sets the default for ambiguous terms, so the same question gives the same number. It asks back only when it can't tell what to measure."
      }
    ]
  },
  {
    "slug": "semantic-layer",
    "title": "Do you need a dbt semantic layer first?",
    "card": "Start with one definition and let the layer grow from real questions.",
    "description": "You can start Mark Your Data Assistant with one metric or saved query, and build the dbt semantic layer one question at a time.",
    "summary": "You can start with one definition, not a finished dbt semantic layer. Mark Your Data Assistant answers from the metrics and saved queries you have, labels everything else ⚠️ Unverified, and shows which definition to add next.",
    "how": [
      {
        "lead": "Saved queries first, then metrics, then SQL.",
        "text": "The assistant looks for a saved query that fits, then a metric request, and writes SQL only when neither measures the question."
      },
      {
        "lead": "The layer grows one question at a time.",
        "text": "Each unverified question that matters can become a metric or saved query in dbt."
      },
      {
        "lead": "Checks run where you already work.",
        "text": "The validate command runs in your dbt CI, and reports per domain which metrics and saved queries it can use, and which facts it found."
      },
      {
        "lead": "Your labels and values stay in your project.",
        "text": "Column labels and currencies come from dbt, and value lists are reviewed by your team."
      }
    ],
    "roles": [
      {
        "role": "Analytics engineer",
        "text": "You can start small, and add definitions based on real questions."
      },
      {
        "role": "Manager",
        "text": "You don't need a large modelling project before colleagues can start asking."
      },
      {
        "role": "Analyst",
        "text": "You can see which questions already have an agreed definition."
      }
    ],
    "qa": [
      {
        "role": "Analytics engineer",
        "question": "Do we need a dbt semantic layer before we start?",
        "answer": "No, you can start with one definition. Mark Your Data Assistant needs at least one metric or saved query per domain, and your team builds the dbt semantic layer one question at a time. Questions it doesn't cover yet still get an answer, labelled ⚠️ Unverified, and they show which definition to add next."
      },
      {
        "role": "Analytics engineer",
        "question": "Which metrics should we define first?",
        "answer": "Define the metrics behind the questions your colleagues actually ask. Collect those questions, then run the coverage scan in Mark Your Data Assistant, which reports each one as governed, unverified, asked back or refused. Add definitions for the unverified questions that matter most, and scan again to see coverage rise."
      },
      {
        "role": "Analytics engineer",
        "question": "When is a saved query better than a metric?",
        "answer": "A saved query is better when an important question must be answered the same way every time, especially in a fixed shape such as an order bridge from gross to net. Mark Your Data Assistant only fills in its period and filters. A metric request combines the metrics, dimensions and filters you listed."
      },
      {
        "role": "Analytics engineer",
        "question": "Does Mark Your Data Assistant work with open-source dbt Core?",
        "answer": "Yes. Mark Your Data Assistant works with open-source dbt Core: it reads the artifacts your dbt project generates and uses MetricFlow, which is open source, to compile governed SQL. It needs no dbt platform account, only a semantic layer in your project and those artifacts published where the assistant can read them."
      },
      {
        "role": "Analytics engineer",
        "question": "How does the assistant know which values a column can have?",
        "answer": "Mark Your Data Assistant knows a column's values from accepted-values tests in your dbt project and from value lists your team reviews. A command reads a column's distinct values once, leaves out recognised personal data and refuses sensitive columns. A person reviews that file before the assistant uses it."
      }
    ]
  },
  {
    "slug": "feedback-loop",
    "title": "How the data team learns what the business asks, and improves",
    "card": "Real questions and feedback show the data team which definitions to add.",
    "description": "Mark Your Data Assistant logs what the business asks, whether each answer was governed, and why users gave a thumbs down, so the data team can close gaps in dbt.",
    "summary": "A data team can only add the definitions it knows are missing. Mark Your Data Assistant logs what the business asks, whether each answer was governed and why users gave a thumbs down, so the data team can close each gap in dbt.",
    "how": [
      {
        "lead": "Every question is a signal.",
        "text": "The log shows what colleagues ask, and which answers were governed or unverified."
      },
      {
        "lead": "A thumbs down has a reason.",
        "text": "In Teams, a thumbs down requires a reason, and each reason points to a different place to look."
      },
      {
        "lead": "Gaps close in dbt.",
        "text": "The data team adds a metric or saved query through a normal pull request, with no prompt tuning."
      },
      {
        "lead": "The coverage scan shows the change.",
        "text": "The scan asks a list of questions and reports each one as governed, unverified, asked back or refused."
      },
      {
        "lead": "Correctness is checked separately.",
        "text": "✅ Governed means answered from your definition. The data team checks correctness with its own reference questions."
      }
    ],
    "roles": [
      {
        "role": "Analytics engineer",
        "text": "You get a backlog of definitions based on real questions."
      },
      {
        "role": "Manager",
        "text": "You can follow the share of governed answers over time."
      },
      {
        "role": "Business user",
        "text": "Your feedback reaches the data team, along with the answer it's about."
      }
    ],
    "qa": [
      {
        "role": "Analytics engineer",
        "question": "How do we find out what the business actually asks?",
        "answer": "The log in Mark Your Data Assistant shows what the business asks, whether each answer was governed, and the reasons behind each thumbs down. The data team reads it through log reports and its own observability tool, and can export the questions for review, with user IDs left out unless requested."
      },
      {
        "role": "Analytics engineer",
        "question": "What does a thumbs down tell the data team?",
        "answer": "A thumbs down in Teams tells the data team where to look, because it requires a reason. \"Data is missing or incomplete\" points to a coverage gap, \"The numbers look wrong\" to the metric or SQL, and \"My question was misunderstood\" to routing or naming. Mark Your Data Assistant stores the reason with the exact answer it rates."
      },
      {
        "role": "Analytics engineer",
        "question": "How do we close a gap the assistant found?",
        "answer": "Add a metric or saved query in dbt through a normal pull request that is reviewed and tested. Once that change is published, Mark Your Data Assistant answers the same question from the new definition and labels it ✅ Governed, for everyone. Your data team closes the gap without any prompt tuning."
      },
      {
        "role": "Analytics engineer",
        "question": "What is Question-Driven Development?",
        "answer": "Question-Driven Development is a way of working for dbt teams in which the questions colleagues actually ask act as the test suite for the semantic layer. An unverified answer is a failing test, and a metric or saved query added in dbt makes it pass. Mark Your Data Assistant labels the answers and measures the coverage."
      },
      {
        "role": "Manager",
        "question": "How do we show management that the answers are getting better?",
        "answer": "Show the share of governed answers over time. The coverage scan in Mark Your Data Assistant asks a fixed list of questions before and after a dbt change and reports the difference per question. Governed means answered from your definition, so the data team checks correctness separately with reference questions."
      }
    ],
    "link": {
      "text": "Mark Your Data calls this way of working",
      "label": "Question-Driven Development",
      "href": "/question-driven-development"
    }
  },
  {
    "slug": "security-and-privacy",
    "title": "Is it safe for our data?",
    "card": "Read-only access, checked queries, and AI providers you choose.",
    "description": "Mark Your Data Assistant reads your warehouse with a read-only account and checks every query. You choose the AI providers and configure what they see and what gets stored.",
    "summary": "Mark Your Data Assistant reads your warehouse with a read-only account and checks every query before it runs. You choose the AI providers, and you configure what they see and what the assistant stores, so your company can make its own assessment.",
    "how": [
      {
        "lead": "Read-only, with checks.",
        "text": "The assistant uses a read-only account. A SQL guard allows one SELECT statement on approved tables, with limits on the data it fetches."
      },
      {
        "lead": "You choose the AI partners.",
        "text": "You configure the assistant with providers you contract directly, and their terms set retention, training use and processing location."
      },
      {
        "lead": "You configure what the model sees.",
        "text": "With Structure only, the model gets column names, column types and the number of rows. With With results, the model that writes the answer also reads the first rows."
      },
      {
        "lead": "You configure what is stored.",
        "text": "Records can hold metadata only, text with names and other values from your data masked, or everything as is."
      },
      {
        "lead": "You can hide sensitive columns.",
        "text": "Mark a column in dbt, and the SQL guard refuses it or keeps its values out of results."
      }
    ],
    "roles": [
      {
        "role": "Manager",
        "text": "Your company chooses the partners, and we go through the technical setup with your legal and security teams."
      },
      {
        "role": "Analytics engineer",
        "text": "You control access through the warehouse, and mark sensitive columns in dbt."
      },
      {
        "role": "Business user",
        "text": "The assistant tells you that it's an AI, and shows where its numbers come from."
      }
    ],
    "qa": [
      {
        "role": "Manager",
        "question": "Can the assistant change or delete data in our warehouse?",
        "answer": "No. Mark Your Data Assistant queries your warehouse through a read-only account, so it has no permission to change or delete data. As a second line of defence, every query must first pass a SQL guard, which allows one SELECT statement on approved tables. The AI never runs SQL itself."
      },
      {
        "role": "Manager",
        "question": "Does our data leave our cloud?",
        "answer": "Yes, your questions go to the AI providers you choose. You configure Mark Your Data Assistant with providers you contract directly, such as Gemini on Vertex AI, OpenAI or Mistral, and a decision model such as TypeSafe Jev or an LLM for routing. Their terms set retention, training use and processing location."
      },
      {
        "role": "Analytics engineer",
        "question": "Do users only see the data they're allowed to see?",
        "answer": "Not per user yet. Mark Your Data Assistant queries through one read-only account today, so every user can reach what that account can read, and you decide what that is. Signing users in through the platform's own authentication, so its access rules apply per user, is on the roadmap."
      },
      {
        "role": "Manager",
        "question": "What does Mark Your Data receive from our installation?",
        "answer": "Mark Your Data will collect monthly usage totals from your installation, such as active users, questions and tokens, to support your installation and keep improving the product. These totals contain no query results, question text, SQL, answers or user IDs. Anything more sensitive will be collected only if you explicitly want that, and pseudonymised."
      },
      {
        "role": "Manager",
        "question": "How do we explain the privacy setup to our legal and security teams?",
        "answer": "Mark Your Data goes through the technical setup with your legal, security and compliance teams, for your installation. That conversation covers three decisions: what the AI services see, what the records keep, and what goes to Mark Your Data, along with the providers you choose."
      }
    ]
  },
  {
    "slug": "platforms-and-alternatives",
    "title": "Which platforms fit, and when we're not the right choice",
    "card": "Where the assistant fits today, and what to ask any vendor.",
    "description": "Mark Your Data Assistant is for teams whose definitions live in dbt, with BigQuery as the warehouse today. Here's when it fits, and which questions to ask any vendor.",
    "summary": "Mark Your Data Assistant is for teams whose definitions live in dbt, with BigQuery as the warehouse today. If your definitions live in a platform's own semantic model and you don't use dbt, that platform's assistant is the simpler choice.",
    "how": [
      {
        "lead": "What it works with today.",
        "text": "BigQuery with a read-only account, a dbt semantic layer, and Microsoft Teams or Slack."
      },
      {
        "lead": "Questions to ask any vendor.",
        "text": "Can you trace every answer to a definition or SQL? Is there a feedback loop, and where does a fix land? Can all business users ask questions? Does it use your dbt definitions?"
      },
      {
        "lead": "Where platform assistants win.",
        "text": "They're built into your platform, so there's no new vendor to approve, and the platform enforces access per user."
      },
      {
        "lead": "Other platforms.",
        "text": "On Snowflake, Databricks or another chat tool? Tell us, because we build the next connection with a design partner."
      }
    ],
    "roles": [
      {
        "role": "Manager",
        "text": "You can compare tools on questions that stay relevant."
      },
      {
        "role": "Analytics engineer",
        "text": "If your definitions live in dbt, they stay in dbt."
      }
    ],
    "qa": [
      {
        "role": "Analytics engineer",
        "question": "Which warehouses does Mark Your Data Assistant support today?",
        "answer": "Mark Your Data Assistant supports BigQuery today, through a read-only account. Teams on Snowflake, Databricks or another platform can tell us what they use, because we build the next connection with a design partner. Support for other warehouses therefore follows a real project rather than a published list of connectors."
      },
      {
        "role": "Manager",
        "question": "We use Databricks: should we use Genie instead?",
        "answer": "Genie is the simpler choice if your definitions live in Databricks and you don't use dbt, because Genie is built into that platform. Mark Your Data Assistant answers from dbt definitions and doesn't support Databricks yet. If your definitions live in dbt, a design partnership is the way in."
      },
      {
        "role": "Manager",
        "question": "We use Snowflake: when is Cortex Analyst the better choice?",
        "answer": "Cortex Analyst is the simpler choice if your definitions live in Snowflake and you don't use dbt, because Cortex Analyst is built into that platform. Mark Your Data Assistant answers from dbt definitions and doesn't support Snowflake yet. If your definitions live in dbt, a design partnership is the way in."
      },
      {
        "role": "Manager",
        "question": "How is Mark Your Data Assistant different from Copilot in Power BI?",
        "answer": "The difference is where your definitions live. Copilot in Power BI works from Power BI semantic models, so it suits teams whose definitions live there. Mark Your Data Assistant answers from your dbt semantic layer, labels each answer governed or unverified, and shows your data team the gaps to fix in dbt."
      },
      {
        "role": "Analytics engineer",
        "question": "What happens when you add support for our platform?",
        "answer": "We build the connection with you as a design partner. Mark Your Data Assistant keeps the same labels and SQL guard: a new warehouse is a new connection behind them, and another semantic layer gets its own adapter. Your definitions stay where they are, and the assistant reads them from there."
      }
    ]
  }
];

export const costHub: Hub = {
  "slug": "cost",
  "title": "What conversational analytics costs",
  "card": "What drives the cost, and how to build your business case with your own numbers.",
  "description": "What drives the cost of conversational analytics: hosting, model usage, warehouse usage, the licence and your team's time, and how to build the business case with your own numbers.",
  "summary": "Most of the running cost of conversational analytics sits in things a dbt team already pays for: the warehouse and an AI subscription. The real cost is people: who defines the metrics and who acts on the gaps, and Mark Your Data closes that loop to your data team.",
  "how": [],
  "roles": [
    {
      "role": "Manager",
      "text": "You can build the case with your own numbers, and compare the options on total cost."
    },
    {
      "role": "Analytics engineer",
      "text": "You can see tokens and cost per request in the log, and cap the data a query scans."
    }
  ],
  "qa": [
    {
      "role": "Manager",
      "question": "How much does conversational analytics cost?",
      "answer": "Conversational analytics costs hosting, model usage, warehouse usage, a licence and your team's time. For Mark Your Data Assistant, the licence is setup plus a yearly service, per organisation, priced after the POC. Hosting and warehouse usage run on your own cloud accounts. The real cost is people: who defines the metrics and who acts on the gaps."
    },
    {
      "role": "Analytics engineer",
      "question": "What does one question cost in AI and warehouse usage?",
      "answer": "With Gemini, model usage for Mark Your Data Assistant is under one cent per question on average, measured across our demo runs on sample data, because a fixed pipeline has no agent loop and the model picks an existing metric instead of writing SQL. It depends on the provider, models and task complexity. Warehouse cost depends on data scanned."
    },
    {
      "role": "Analytics engineer",
      "question": "How much engineering time does it take to start and to keep up?",
      "answer": "Mark Your Data Assistant can start with one metric or saved query, and the time after that depends on how fast your team closes gaps. The log shows which gaps users hit and why, and each fix is one dbt pull request, so you fix what users actually hit, once. The first pilot will measure the hours."
    },
    {
      "role": "Manager",
      "question": "How do we build the business case for conversational analytics?",
      "answer": "Start with the time your team spends on ad-hoc questions: questions per week × minutes per answer × hourly cost, using your own inputs. Then compare building it yourself, a platform assistant and Mark Your Data Assistant on total cost, including who does the loop and how portable your definitions are."
    },
    {
      "role": "Manager",
      "question": "Isn't a platform assistant like Genie or Copilot cheaper?",
      "answer": "Often cheaper to start, yes. Genie One and Genie Agents are free for users through 31 January 2027, and Copilot in Power BI needs paid capacity. So ask what a question costs once billing starts, and how you keep control of gaps and spend. Mark Your Data Assistant logs cost per request and closes the loop to your data team."
    }
  ]
};
