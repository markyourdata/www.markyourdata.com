// Content data for Mark Your Data website

/**
 * @typedef {Object} CTAButton
 * @property {string} text - Button text
 * @property {string} link - Relative link path
 */

/**
 * @typedef {Object} Hero
 * @property {string} title - Hero heading
 * @property {string} tagline - Hero subtitle/tagline
 * @property {CTAButton} [ctaButton] - Optional CTA button
 * @property {{text: string, link: string}} [speakingBadge] - Optional small link below the tagline (e.g. recent speaking engagements)
 */

/**
 * @typedef {Object} CTASection
 * @property {string} heading - CTA heading
 * @property {string} [description] - Optional CTA description
 * @property {CTAButton} button - CTA button
 */

/**
 * @typedef {Object} SectionContent
 * @property {string} heading - Section heading
 * @property {string} text - Section text content (can include HTML)
 */

/**
 * @typedef {Object} Service
 * @property {string} title - Service name
 * @property {string} description - Service description
 * @property {string} cta - CTA button text
 * @property {string} slug - URL-friendly identifier
 * @property {string} url - Relative URL path
 * @property {boolean} [fullWidth] - Whether card spans full width
 * @property {string[]} [propositions] - List of service propositions
 */

/**
 * @typedef {Object} Client
 * @property {string} name - Client name
 * @property {string} logo - Logo image path
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} quote - Testimonial text
 * @property {string} author - Author name with title
 * @property {string} company - Company name
 * @property {string} [image] - Author image path
 */

/**
 * @typedef {Object} Project
 * @property {string} title - Project title
 * @property {string} client - Client name
 * @property {string} industry - Industry sector
 * @property {string} description - Project description
 * @property {string[]} technologies - Technologies used
 * @property {string[]} outcome - Project outcomes
 * @property {string} service - Related service slug
 * @property {string} slug - URL-friendly identifier
 */

/**
 * @typedef {Object} Talk
 * @property {string} key - Unique identifier
 * @property {string} title - Talk or episode title
 * @property {"talk"|"podcast"} type - Kind of appearance
 * @property {string} event - Event or show name
 * @property {string} eventUrl - Link to the original program/episode page (kept in case it disappears)
 * @property {string} date - Human-readable date, kept as text since precision varies by source
 * @property {string} [venue] - Stage/hall/location, if known
 * @property {string[]} [speakers] - Co-speakers, with role/company
 * @property {string} description - Full abstract/summary, archived here so the story survives even if the source link dies
 * @property {{label: string, url: string}[]} [links] - Extra listen/watch links (e.g. Spotify, Apple Podcasts)
 * @property {string} [relatedProjectSlug] - Slug of a project in `projects` this talk is about
 */

/**
 * @typedef {Object} PageData
 * @property {Hero} hero - Page hero section
 * @property {CTASection} cta - Page CTA section
 */

/**
 * Main site data object containing all content
 * @type {Object}
 * @property {Object} homepage - Homepage content
 * @property {Hero} homepage.hero - Homepage hero
 * @property {SectionContent} homepage.aboutUs - About us section
 * @property {SectionContent} homepage.howWeWork - How we work section
 * @property {SectionContent} homepage.clients - Clients section
 * @property {SectionContent} homepage.fans - Fans section
 * @property {SectionContent} homepage.projects - Projects section
 * @property {CTASection} homepage.cta - Homepage CTA
 * @property {Object.<string, PageData>} pages - Service page content
 * @property {Testimonial[]} testimonials - Testimonial list
 * @property {Service[]} services - Service list
 * @property {Client[]} clients - Client list
 * @property {Project[]} projects - Project list
 */
const siteData = {
  // Homepage sections
  homepage: {
    hero: {
      title: "Data & AI consultancy for growing companies",
      tagline:
        "We help you prove value fast, then scale what works. From strategy to platform to execution.",
      ctaButton: {
        text: "Get in touch",
        link: "pages/contact.html",
      },
      photo: "assets/photos/webp/photo_6.webp",
      speakingBadge: {
        text: "Recently speaking at Data Expo, ContentCon Europe & AI Today Live",
        link: "pages/talks.html",
      },
    },
    aboutUs: {
      heading: "About us",
      text: "Mark Your Data is a data & AI consultancy founded by Mark Schep, backed by a network of senior specialists. We cover strategy, platforms, and hands-on execution. Our philosophy is simple: <strong>make it work, make it better, make it scale.</strong> We'd rather show you a working prototype in weeks than a strategy deck in months. That's how we've delivered results at bol.com, Heineken, Tikkie, and Winparts.",
    },
    howWeWork: {
      heading: "How we work",
      text: "After years of delivering data & AI projects, we've learned what separates success from shelfware: proving value early. That's why every engagement follows our methodology. <strong>Make it work:</strong> get something running fast. <strong>Make it better:</strong> refine based on real feedback. <strong>Make it scale:</strong> roll out what's proven. Clients often adopt this approach for their own teams long after we're gone.",
    },
    clients: {
      heading: "Clients",
      text: "We build long-term partnerships with companies across industries. From e-commerce to fintech, we work alongside your team to turn data into results.",
    },
    fans: {
      heading: "What clients say",
      text: "Clients value that we are pragmatic, clear, and focused on results that stick. Read the reviews below to hear it in their words.",
    },
    projects: {
      heading: "Selected projects",
      text: "Real results from real engagements. Each project here represents a challenge solved and value delivered.",
    },
    cta: {
      heading: "Let's talk about your data",
      button: {
        text: "Get in touch",
        link: "pages/contact.html",
      },
      photo: "assets/photos/webp/photo_26.webp",
    },
  },

  // Service Pages
  pages: {
    platform: {
      hero: {
        title: "Save €100K per year with the Mark Your Data & AI Platform",
        tagline:
          "Skip hiring a data engineer. Our cloud-native platform gives your analysts everything they need from day one. We handle the foundation, you focus on insights.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_30.webp",
        // photoPosition: "center 25%",
      },
      cta: {
        heading: "Ready to save €100K per year?",
        description:
          "Get a complete data platform that your analysts can use from day one. No data engineer required.",
        button: {
          text: "Book a free consultation",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_26.webp",
      },
    },
    platformExistingTeam: {
      hero: {
        title: "Save €30K per year on your data platform",
        tagline:
          "Already have a data engineer? Cut your platform costs by switching from expensive enterprise tools to our lightweight, open-source stack. Same capabilities, fraction of the cost.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_30.webp",
      },
      cta: {
        heading: "Ready to cut your platform costs?",
        description:
          "We'll show you how to save €30K+ annually by replacing expensive tools like Fivetran, Cloud Composer, and Snowflake with cost-effective alternatives.",
        button: {
          text: "Book a free consultation",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_26.webp",
      },
    },
    strategyConsulting: {
      hero: {
        title: "Data & AI Strategy",
        tagline:
          "Data-driven answers that don't agree with each other are a signal, not a fluke. We check your team, tools, pipelines, and models to reveal the painpoints, then turn it into a concrete plan you can execute.",
        ctaButton: {
          text: "Schedule a call",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_36.webp",
        photoPosition: "center 15%",
      },
      cta: {
        heading: "Not sure where your painpoints are?",
        description:
          "Book the Data & AI quickscan: two days to check your team, tools, pipelines, and models.",
        button: {
          text: "Book the quickscan",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_22.webp",
      },
    },
    conversationalAnalytics: {
      hero: {
        title: "Give everyone their own agentic data analyst",
        tagline:
          "We design conversational analytics on top of your data platform, so business users get instant, trustworthy answers in plain language, without waiting on a data team.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_30.webp",
      },
      cta: {
        heading: "Ready to give your team its own data analyst?",
        description:
          "We'll help you find the right first domain, and build the foundation to do it safely.",
        button: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
        photo: "assets/photos/webp/photo_26.webp",
      },
    },
  },

  testimonials: [
    {
      key: "erick-webbe",
      quote:
        "Mark excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, he seamlessly transforms these solution ideas into testable prototypes with proven impact. His strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark is an asset to any team.",
      author: "Erick Webbe | CEO",
      company: "KickstartAI",
      companyLogo: "assets/images/clients/kickstartai.png",
      image: "assets/images/fans/erick_webbe.png",
    },
    {
      key: "Lisette van de Steeg",
      quote:
        "From data scientist, to data analyst and from data engineering to platform engineering tasks: Mark surprises and succeeds in all fields. Next of being part of the data team, he also zoomed out to work on giving Tikkie insights on how to move forward; these insights were immediately used within the organisation. Next to having business acumen and the ability to communicate in a clear and understandable way, Mark is a smart and great colleague to have around. Both on work and personal level, he surprises with great stories and lessons learned.",
      author: "Lisette van de Steeg | Analytics Lead",
      company: "Tikkie",
      companyLogo: "assets/images/clients/tikkie.png",
      image: "assets/images/fans/lisette_van_de_steeg.png",
    },
    {
      key: "elmer-hiemstra",
      quote:
        "I have worked together with Mark on several occasions. What I love about Mark is his pragmatic approach, he is able to quickly get to the core of a problem, identify first valuable steps and guide execution to prove the value of a chosen solution. He collaborates well with existing teams, is always valued for his contribution and personality, but also able to work more independently on a scoped assignment.",
      author:
        "Elmer Hiemstra | Head of Product Partner Acquisition, Management & Enablement",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/elmer_hiemstra.png",
    },
    {
      key: "jasper-van-heijst",
      quote:
        "Mark combines a sharp analytical mind with broad technical knowledge. He prioritizes simple, working solutions over unnecessary complexity. For us, this resulted in significant cost savings through a surprisingly straightforward implementation with low maintenance costs. He communicates clearly and cuts through the jargon, Mark is a highly effective partner to work with.",
      author: "Jasper van Heijst | Group Product Manager",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/jasper_van_heijst.png",
    },
    {
      key: "Benjamin van Vianen",
      quote:
        "Mark connects technology with business strategy and brings solid experience in building small proof of concepts that can be scaled into solutions with real business impact. He is highly pragmatic and has a talent for simplifying complexity, driving change and connecting people. He is also a true allrounder who adds value across different areas and consistently contributes to meaningful results.",
      author: "Benjamin van Vianen | Manager Scaled Content",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/benjamin_van_vianen.png",
    },
    {
      key: "Daan van den Berg",
      quote:
        "Mark has proven to be an invaluable asset to the team during our profit steering project. He is highly proactive, quickly mastering the topic and taking full ownership, while also knowing when to ask for help and reach out to other teams to move things forward. He consistently asks the right questions, focusing on understanding the problem rather than jumping to solutions. Combined with his out-of-the-box thinking, this allowed him to uncover approaches and solutions we could think of ourselves. His curiosity, collaboration, and fresh perspective made a lasting impact on both the project and the team.",
      author: "Daan van den Berg | Product Manager",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/daan_van_den_berg.png",
    },

    {
      key: "Richard Norbruis",
      quote:
        "At bol, I worked with Mark for over a year on Team SEO. Mark is incredibly curious and genuinely wants to get to the core of complex problems. For Team SEO, he worked on, among other things, generating relevant content at scale using AI. The professionalism and skill with which he approached and delivered this really impressed me. Beyond his strong Data & AI skills, Mark is also very personable and a pleasure to work with. Need someone who can translate complex Data & AI challenges into scalable solutions with real impact? Mark is definitely your person.",
      author:
        "Richard Norbruis | Freelance Web Analyst & Experimentation/CRO Specialist",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/richard_norbruis.png",
    },

    // {
    //   key: "Arend de Ruiter",
    //   quote: "Lorem Ipsum",
    //   author: "Arend de Ruiter | COO",
    //   company: "Winparts",
    //   companyLogo: "assets/images/clients/winparts.png",
    //   image: "assets/images/fans/arend_de_ruiter.png",
    // },
  ],

  // Testimonials for Berend Dumas — shown interleaved on the quickscan page only
  berendTestimonials: [
    {
      key: "Christopher Marcks",
      quote:
        "What I appreciate most about working with Berend is his ability to translate data science into plain language, making complex topics understandable and actionable. He's open to out-of-the-box ideas, making conversations not just smart but also creative and inspiring. In both our projects at bol and Pip Studio, he proved a real accelerator: bringing sharpness and new perspectives to ideas I already had. Together we turned an idea into a scalable AI platform for a client. Honestly, I learn something every time we talk.",
      author: "Christopher Marcks | Founder",
      company: "Pip Studio",
      image: "assets/images/fans/berend/christopher_marks.avif",
    },
    {
      key: "Frank de Gouw",
      quote:
        "Berend knows exactly what he's talking about, and his communication skills are exceptional. He's very good at getting to the core of a problem and conveying it in plain language to stakeholders who often have little background knowledge. Throughout our entire collaboration we had near-daily contact, delivering clear results at great speed. The standout was the Auto Advice Tool — predicting the top 5 car recommendations for individual lease drivers — a result that has stuck with me.",
      author: "Frank de Gouw | Manager Data & Analytics",
      company: "Athlon",
      image: "assets/images/fans/berend/frank_de_gouw.webp",
    },
    {
      key: "Martin Schijf",
      quote:
        "Berend is approachable, always open to conversation, and has a strong ability to explain complex choices to non-experts in a clear way. Berend takes others' ideas seriously and incorporates them into his solutions. With management, he presents results in plain language that drives understanding and gets everyone involved. The turning point was when Berend presented the improvements possible with our prediction model — that's when it clicked. What I'm most proud of is bringing the prediction model back to life. It ultimately led to the permanent hire of a Data Scientist who built on the foundation Berend laid, making it a renewed and integral part of the team.",
      author: "Martin Schijf | Engineering Manager",
      company: "bol.",
      image: "assets/images/fans/berend/martin_schijf.webp",
    },
    {
      key: "Erick Webbe - Berend",
      quote:
        "Berend balances strong subject knowledge with the ability to convey it to anyone, adapting his style to his audience while maintaining depth. After several successful projects, our results spoke for themselves and people were lining up to work with us. Together we built a concept and way of working into an internal brand. Structured problem-solving with sustainable results became more the rule than the exception. Something many large corporates are jealous of.",
      author: "Erick Webbe | Head of Data Science",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
      image: "assets/images/fans/berend/erick_webbe.webp",
    },
  ],

  services: [
    {
      title: "Data & AI Strategy",
      description:
        "Data-driven answers that don't agree with each other are a signal, not a fluke. Our Data & AI quickscan checks your team, tools, pipelines, and models to reveal exactly where the painpoints are, and what to do next.",
      cta: "Explore strategy",
      slug: "strategy-consulting",
      url: "pages/services/strategy-consulting/index.html",
      icon: "assets/icons/strategy-consulting.svg",
      propositions: [
        "Data & AI quickscan: two days to check your team, tools, pipelines, and models, and reveal your painpoints.",
        "30-minute call: Talk to us about a specific data & AI challenge.",
        "Data & AI offsite: A focused workshop to identify and prioritize initiatives.",
        "Fractional leadership: Ongoing senior direction, one or more days a week, covering strategy, data & AI engineering, and team building.",
      ],
    },
    {
      title: "Mark Your Data & AI Platform",
      description:
        "Save €100K per year. Skip hiring a data engineer. Our cloud-native platform gives your analysts everything they need from day one, and is ready for AI use cases like conversational analytics. We handle the foundation, you focus on insights.",
      cta: "Learn more",
      slug: "platform",
      url: "pages/services/platform/index.html",
      icon: "assets/icons/platform.svg",
      propositions: [
        "No data engineer needed: Your analysts can start creating value immediately.",
        "Save €100K/year: Avoid the data engineer salary and expensive tooling costs.",
        "Data pipelines included: Automated ingestion from all your sources.",
        "Ready for AI: Built-in support for analytics and AI use cases.",
      ],
    },
    {
      title: "Conversational Analytics",
      description:
        "Give everyone in your company their own agentic data analyst. We design conversational analytics on top of your data platform, so business users get instant, trustworthy answers in plain language, without waiting on a data team.",
      cta: "Learn more",
      slug: "conversational-analytics",
      url: "pages/services/conversational-analytics/index.html",
      icon: "assets/icons/conversational-analytics.svg",
      propositions: [
        "Foundation first: Built on a properly layered data platform, not a shortcut around one.",
        "One domain at a time: A small, well-tested set of questions before the next domain.",
        "Privacy by design: You decide what the agent may see, before it can see anything.",
      ],
    },
  ],

  clients: [
    {
      name: "bol.com",
      logo: "assets/images/clients/bol.png",
    },
    {
      name: "Tikkie",
      logo: "assets/images/clients/tikkie.png",
    },
    {
      name: "Winparts",
      logo: "assets/images/clients/winparts.png",
    },
    {
      name: "Heineken",
      logo: "assets/images/clients/heineken.png",
    },
    {
      name: "Snelstart",
      logo: "assets/images/clients/snelstart.png",
    },
  ],

  projects: [
    {
      title: "AI Content generation at scale",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "We significantly increased organic traffic to bol with millions of SEO optimizations on their product pages. We build scalable content generation and validation software as well as a data-driven A/B testing framework that enabled experimentation with different types of AI generated content on millions of product pages.",
      technologies: ["Python", "A/B Testing", "Generative AI", "LLMs", "SQL"],
      outcome: [
        "Significant increase in organic traffic",
        "New AI generation and validation competence",
        "Roadmap with new experiments for next year",
      ],
      service: "experiment-rollout",
      slug: "bol-content-generation-at-scale",
    },
    {
      title: "Data & AI Platform",
      client: "Winparts",
      industry: "E-commerce",
      description:
        "We build a strong value adding data foundation while saving over €20.000 per year. With data pipelines that collected data from multiple databases and APIs related to returned products we build data models that populated the data warehouse. On top of that foundation, we added our first AI job: a containerized process that analyzes returns to spot patterns and improve product data. This data platform is the foundation for many new use cases.",
      technologies: ["Python", "LLMs", "Generative AI"],
      outcome: [
        "Single source of truth",
        "Optimized return process with AI",
        "Foundation for new use cases",
      ],
      service: "data-ai-platform",
      slug: "winparts-data-ai-platform",
    },
    {
      title: "Can you trust an AI data analyst?",
      client: "Mark Your Data",
      industry: "R&D",
      description:
        "A self-initiated research demo built to answer a real question: can a plain-language question to an AI agent be trusted to produce the right SQL? We built a simulated e-commerce warehouse, ran real business questions against it, and found the agent could be confidently wrong on ordinary business-data nuances. Writing down what a good analyst already knows, as a short domain-knowledge file next to the data model, took accuracy from 87-93% to 100% on a reproducible 15-question evaluation set.",
      technologies: ["dlt", "dbt", "DuckDB", "LLMs", "Python"],
      outcome: [
        "100% accuracy on 15 real business questions, up from 87-93%",
        "A reusable 'skill' pattern: domain knowledge + process, versioned next to the data model",
        "The foundation for a Data Expo talk on conversational analytics",
      ],
      service: "conversational-analytics",
      slug: "conversational-analytics-demo",
    },
    {
      title: "Automated Display Banner Generation",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Developed web app to automate display banner creation, generating 21 (instead of 1) display banners in under 30 minutes. Enabled in-sourcing the process and massively increased A/B experiment capacity.",
      technologies: ["Python", "Web Development", "Automation"],
      outcome: [
        "Reduced costs",
        "In-sourced process",
        "Increased A/B testing capacity",
      ],
      service: "experiment-execution",
      slug: "bol-display-banner-automation",
    },
    {
      title: "Opportunity Finding",
      client: "Tikkie",
      industry: "Financial Services",
      description:
        "Identify and quantify opportunities to improve user engagement using data & analytics. Help teams understand where to engage and where to relax, enabling focus on high-impact activities.",
      technologies: ["Python", "SQL", "Analytics"],
      outcome: ["Improved user engagement", "Data-driven product decisions"],
      service: "experiment-execution",
      slug: "tikkie-opportunity-finding",
    },
    {
      title: "Driving an experimental way of working",
      client: "Winparts",
      industry: "E-commerce",
      description:
        "Help teams define, refine and execute data driven experiments over a longer period of time.",
      technologies: ["Opportunity finding", "Experimentation", "A/B testing"],
      outcome: [
        "Quarterly experiments",
        "Increased experiment quality",
        "Proof of value",
      ],
      service: "strategy-consulting",
      slug: "winparts-experiment-guidance",
    },
    {
      title: "Reducing Customer Support Workload",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Initiated A/B experiments on bol.com website account pages and in 'Billie' the chatbot. Led to significant reduction of preventable support cases.",
      technologies: ["Python", "A/B testing", "Analytics"],
      outcome: [
        "Massive cost savings",
        "Methodology to reduce more preventable questions",
      ],
      service: "experiment-execution",
      slug: "bol-reduce-preventable-customer-service-cases",
    },
    {
      title: "Improving handover from chatbot to Customer Support",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Built and iteratively improved GenAI powered handover service between chatbot and human customer service agents.",
      technologies: ["Python", "Generative AI", "LLMs"],
      outcome: ["Improved customer experience", "Improved efficiency"],
      service: "consulting",
      slug: "bol-genai-handover",
    },

    {
      title: "Google Ads Profit Optimization",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Conducted extensive data analyses of Google Ads and internal sales & finance data. Built business case to switch from revenue to profit steering, identifying significant cost savings opportunities.",
      technologies: ["Python", "SQL", "Google Ads", "Analytics"],
      outcome: [
        "Significant cost savings identified",
        "Strategic shift to profit-based steering",
      ],
      service: "experiment-execution",
      slug: "bol-google-ads-optimization",
    },
  ],

  // Talks, panels, and podcast appearances — full descriptions archived here
  // so the record survives even if the original event/podcast page disappears
  talks: [
    {
      key: "data-expo-2026-content-as-a-service",
      title:
        "Content as a Service at bol: how all bollers can create on-brand content at scale with AI",
      type: "talk",
      event: "Data Expo 2026",
      eventUrl:
        "https://www.data-expo.nl/nl/bezoekers/programma/content-as-a-service-at-bol-how-all-bollers-can-create-on-brand-content-at-scale-with-ai",
      date: "September 9, 2026 · 15:45",
      venue: "Jaarbeurs Utrecht",
      speakers: [
        "Benjamin van Vianen | Manager Scalable Content & Tooling, bol",
        "Joey Man | AI Growth Designer, bol",
      ],
      description:
        "How bol turned experimental AI projects into a scalable content creation platform. Organizations are challenged to create more on-brand content, for more audiences, across more channels than ever before, all under real budget constraints. This talk covers practical implementations spanning text, imagery, and full webpage generation, with a focus on marketing and advertising applications, and shares how thinking big while starting small helped bol move from one-off experiments to a repeatable system.",
      relatedProjectSlug: "bol-content-generation-at-scale",
    },
    {
      key: "data-expo-2026-winparts-ai-platform",
      title:
        "From data platform to AI platform: how Winparts prevents returns with data & AI",
      type: "talk",
      event: "Data Expo 2026",
      eventUrl:
        "https://www.data-expo.nl/nl/bezoekers/programma/from-data-platform-to-ai-platform-how-winparts-prevents-returns-with-data-ai",
      date: "September 10, 2026 · 14:15",
      venue: "Jaarbeurs Utrecht",
      speakers: [
        "Harm Albers | Data Science Lead, Winparts",
        "Rense van der Zee | Data Engineer, Winparts",
      ],
      description:
        "How Winparts built a scalable open-source data platform with DLT, DBT, and cloud-native orchestration, then extended it into AI territory through 'AI jobs': lightweight, containerized processes that read from the warehouse, run an LLM task, and write the results back. The first AI job analyzes returns to spot patterns and improve product data. The talk shares practical lessons on building an AI-ready data foundation, staying cloud-agnostic, and scaling from one use case to many while navigating open-source trade-offs.",
      relatedProjectSlug: "winparts-data-ai-platform",
    },
    {
      key: "data-expo-2026-conversational-analytics",
      title:
        "When your data warehouse talks back: how conversational analytics changes the analytics game",
      type: "talk",
      event: "Data Expo 2026",
      eventUrl:
        "https://www.data-expo.nl/nl/bezoekers/programma/when-your-data-warehouse-talks-back-how-conversational-analytics-changes-the-analytics-game",
      date: "September 10, 2026 · 16:00",
      venue: "Jaarbeurs Utrecht",
      speakers: [],
      description:
        "How conversational AI agents can let people query a data warehouse in plain language instead of waiting on a data team. Using a simulated e-commerce scenario, this talk shows how a question that used to mean a support ticket and a day's wait can return an answer in seconds, freeing the data team to focus on harder analytical problems. It also covers what this shift means for both business and technical roles, with perspectives relevant to organizations of different sizes.",
      relatedProjectSlug: "conversational-analytics-demo",
    },
    {
      key: "contentcon-europe-2026",
      title: "Speaking at ContentCon Europe",
      type: "talk",
      event: "ContentCon Europe 2026",
      eventUrl: "https://www.contentstack.com/contentcon-europe/agenda",
      date: "September 30 – October 1, 2026",
      venue: "Circa, Amsterdam",
      speakers: [],
      description:
        "Mark is a featured speaker at ContentCon Europe 2026, alongside bol colleagues Benjamin van Vianen and Joey Man. The event's full agenda and session abstracts aren't public yet — this entry will be updated with the talk title and description once they are.",
    },
    {
      key: "ai-today-live-s08e83",
      title:
        "Bezorgprobleem bij bol opgelost zonder AI: waarom de simpelste oplossing vaak wint",
      type: "podcast",
      event: "AI Today Live",
      eventUrl:
        "https://aitodaylive.nl/afleveringen/s08e83-bezorgprobleem-bij-bol-opgelost-zonder-ai-waarom-de-simpelste-oplossing-vaak-wint/",
      date: "August 30, 2026 · Season 8, Episode 83 · 48 min",
      speakers: ["Hosted by Joop Snijder & Niels Naglé"],
      description:
        "A conversation about why the simplest working solution usually beats the complex one. Mark discusses solving a delivery-notification problem at bol by tracing it to an expired timestamp and adjusting FAQ messaging, instead of reaching for an elaborate AI system. The episode covers timeboxing projects into 3-month validation cycles, building lightweight data infrastructure for under €100/month versus €10.000–15.000/year enterprise platforms, why the data foundation (security, access, standardization) has to come before analysis, and why smaller organizations don't always need a full-time data engineer once that foundation is in place.",
      links: [
        {
          label: "Spotify",
          url: "https://open.spotify.com/episode/0Z8bbnOwV6w4FO8LztoZ2i",
        },
        {
          label: "Apple Podcasts",
          url: "https://podcasts.apple.com/us/podcast/s08e83-bezorgprobleem-bij-bol-opgelost-zonder-ai-waarom/id1510558415?i=1000786876646",
        },
      ],
    },
  ],

  // Breadcrumb display names keyed by path segment(s) after "pages/"
  // Used by components/breadcrumbs.js to render human-readable trails
  breadcrumbs: {
    // Section index pages
    blogs: "Blog",
    projects: "Projects",
    services: "Services",

    // Blog posts
    "blogs/motherduck-the-future-of-cost-efficient-analytics": "MotherDuck",
    "blogs/dbt-transform-data-into-insights": "dbt",
    "blogs/save-100k-with-mark-your-data-platform":
      "Mark Your Data & AI Platform",
    "blogs/why-dlt-beats-fivetran": "DLT vs Fivetran",

    // Projects
    "projects/bol-content-generation-at-scale": "Content generation",
    "projects/winparts-data-ai-platform": "Data & AI Platform",
    "projects/bol-display-banner-automation": "Banner automation",
    "projects/tikkie-opportunity-finding": "Opportunity finding",
    "projects/winparts-experiment-guidance": "Experiment guidance",
    "projects/bol-reduce-preventable-customer-service-cases":
      "Reducing CS workload",
    "projects/bol-genai-handover": "GenAI handover",
    "projects/bol-google-ads-optimization": "Google Ads optimization",
    "projects/conversational-analytics-demo": "Conversational analytics",

    // Services — main categories
    "services/platform": "Platform",
    "services/strategy-consulting": "Data & AI Strategy",
    "services/conversational-analytics": "Conversational Analytics",

    // Services — platform details
    "services/platform/existing-team": "Existing team",
    "services/platform/details/data-pipelines": "Data pipelines",
    "services/platform/details/data-models": "Data models",
    "services/platform/details/data-infrastructure": "Data infrastructure",
    "services/platform/details/applied-ai": "Applied AI",
    "services/platform/details/ai-jobs": "AI jobs",

    // Services — strategy consulting details
    "services/strategy-consulting/details/quickscan": "Data & AI quickscan",
    "services/strategy-consulting/details/strategy-call": "Strategy call",
    "services/strategy-consulting/details/data-ai-offsite": "Data & AI offsite",
    "services/strategy-consulting/details/strategy-consulting":
      "Strategy consulting",
    "services/strategy-consulting/details/fractional-leadership":
      "Fractional leadership",
  },
};
