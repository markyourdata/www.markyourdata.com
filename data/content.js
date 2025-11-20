// Content data for Mark Your Data website
const siteData = {
  testimonials: [
    {
      quote:
        "Mark Your Data excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, they seamlessly transform these solution ideas into testable prototypes with proven impact. Their strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark Your Data is an asset to any team.",
      author: "Erick Webbe | Head of Data Science",
      company: "bol.",
    },
  ],

  services: [
    {
      title: "Free strategy call",
      description:
        "Sometimes you need an opinion from someone who has walked the talk. Share your strategic challenges with us, and we'll share our experience with you.",
      cta: "Schedule your first strategy call",
      slug: "strategy-call",
      url: "pages/services/strategy-call.html",
    },
    {
      title: "Data & AI Offsite",
      description:
        "Which strategic objectives might be solved with data & AI? How can you be sure? Take time together to create your data & AI experiment roadmap.",
      cta: "Create your data & AI roadmap",
      slug: "data-ai-offsite",
      url: "pages/services/data-ai-offsite.html",
    },
    {
      title: "Data Discovery",
      description:
        "Sometimes you know the value is there, but don't know where to begin. We take your team by the hand and set your first steps in data & AI",
      cta: "Start exploring",
      slug: "data-discovery",
      url: "pages/services/data-discovery.html",
    },
    {
      title: "Experiment guidance",
      description:
        "We help you define, refine and setup your first experiments for success and embed experimentation in your organization. One quarter at a time.",
      cta: "Support quarterly experiments",
      slug: "experiment-guidance",
      url: "pages/services/experiment-guidance.html",
    },
    {
      title: "Experiment execution",
      description:
        "We help you set up and execute a strategically important usecase, when you don't have the skills or the time. From idea, all the way to proven value.",
      cta: "Execute data & AI experiments",
      slug: "experiment-execution",
      url: "pages/services/experiment-execution.html",
    },
    {
      title: "Experiment rollout",
      description:
        "We help you embed succesful experiments in your organisation. All the way from professional infrastructure and code to user adoption.",
      cta: "Scale up",
      slug: "experiment-rollout",
      url: "pages/services/experiment-rollout.html",
    },
    {
      title: "Data & AI platform",
      description:
        "We setup infrastructure, data pipelines, data models and AI capabilities, on which you build value adding use cases.",
      cta: "Set up data & AI platform",
      slug: "data-ai-platform",
      url: "pages/services/data-ai-platform.html",
    },
  ],

  clients: [
    {
      name: "bol.com",
      logo: "assets/images/clients/bol.png",
    },
    {
      name: "Heineken",
      logo: "assets/images/clients/heineken.png",
    },
    {
      name: "Tikkie",
      logo: "assets/images/clients/tikkie.png",
    },
    {
      name: "Winparts",
      logo: "assets/images/clients/winparts.png",
    },
  ],

  projects: [
    {
      title: "AI Content generation at scale",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Increased organic traffic to bol. with a data-driven A/B testing framework that generated content for millions of product pages.",
      technologies: ["Python", "A/B Testing", "Generative AI", "LLMs", "SQL"],
      outcome: [
        "Significant increase in organic traffic",
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
        "Setup your data foundation. Create data pipelines that collect data from multiple databases and APIs. Create data models to populate your data warehouse.",
      technologies: ["Python", "LLMs", "Generative AI"],
      outcome: [
        "Dramatic reduction of 'time to insight'",
        "Unlocked a broad range of new and valuable insights",
        "Foundation for AI usecases",
      ],
      service: "data-ai-platform",
      slug: "winparts-data-ai-platform",
    },
    {
      title: "User Engagement Analytics",
      client: "Tikkie",
      industry: "Financial Services",
      description:
        "Identify and quantify opportunities to improve user engagement using data & analytics. Help teams understand where to engage and where to relax, enabling focus on high-impact activities.",
      technologies: ["Python", "SQL", "Analytics"],
      outcome: ["Improved user engagement", "Data-driven product decisions"],
      service: "experiment-execution",
      slug: "tikkie-user-engagement",
    },
    {
      title: "Experiment guidance",
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
      service: "experiment-guidance",
      slug: "winparts-experiment-guidance",
    },
    {
      title: "AI Chatbot Optimization - Billie",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Initiated A/B experiments on bol.com website account pages and in 'Billie' the chatbot. Lead to significant reduction of preventable support cases.",
      technologies: ["Python", "A/B testing", "Analytics"],
      outcome: [
        "Massive cost savings",
        "Methodology to reduce more preventable questions",
      ],
      service: "experiment-execution",
      slug: "bol-ai-chatbot-billie",
    },
    {
      title: "GenAI Customer Service Handover",
      client: "bol.com",
      industry: "E-commerce",
      description:
        "Built and iteratively improved GenAI-powered handover service between chatbot and human customer service agents.",
      technologies: ["Python", "Generative AI", "LLMs"],
      outcome: ["Improved customer experience", "Improved efficiency"],
      service: "experiment-execution",
      slug: "bol-genai-handover",
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
};
