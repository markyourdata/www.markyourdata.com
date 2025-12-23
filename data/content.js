// Content data for Mark Your Data website
const siteData = {
  testimonials: [
    {
      quote:
        "Mark Your Data excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, they seamlessly transform these solution ideas into testable prototypes with proven impact. Their strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark Your Data is an asset to any team.",
      author: "Erick Webbe | Head of Data Science",
      company: "bol.",
      image: "assets/images/fans/erick_webbe.png",
    },
    {
      quote: "Make it work, make it better, make it scale",
      author: "Mark Schep | CEO",
      company: "Mark Your Data",
      image: "assets/images/fans/mark_schep.png",
    },
  ],

  services: [
    {
      title: "Data Analytics & AI Strategy consulting",
      description:
        "See the potential, and learn how to start. Maximize the return of data & AI investments. With our proven methodologies and expertise, we help you invest in data-driven initiatives that drive business growth and maximize ROI.",
      cta: "Learn more",
      slug: "strategy-consulting",
      url: "pages/services/strategy-consulting/index.html",
      propositions: [
        "30-Minute Call: Schedule a call with our experts to discuss your data & AI needs.",
        "DATA & AI offsite: Our offsite workshops help you identify and prioritize data & AI initiatives.",
        "Strategy consulting: Our strategy consulting services help you develop a comprehensive data & AI strategy that aligns with your business goals.",
      ],
    },
    {
      title: "Data Analytics & AI Platform",
      description:
        "The foundation for any data driven company. Multiply the effectiveness of your data professionals while building your AI fundament. Shorten the time to insight and make smarter decisions by combining disconnected data sources.",
      cta: "Learn more",
      slug: "platform",
      url: "pages/services/platform/index.html",
      propositions: [
        "Data Infrastructure: Design and implement a scalable data infrastructure that supports your data analytics and AI initiatives.",
        "Data Pipelines: Develop and maintain data pipelines that efficiently move data from source to destination.",
        "Data Models: Design and implement data models that support your data analytics and AI initiatives.",
        "Applied AI: Develop and deploy AI solutions that drive business growth and maximize ROI.",
      ],
    },
    {
      title: "Data Analytics & AI solutions",
      description:
        "When you don't have the skills, the people, or the time, we turn your data into impact. We help you transform strategic initiatives into proof of concepts, proof of values, implementation and beyond.",
      cta: "Learn more",
      slug: "strategy-execution",
      url: "pages/services/strategy-execution/index.html",
      propositions: [
        "Data Exploration: We help you understand where a small change, can make a big difference. And help you transform this opportunity into a Proof of Concept.",
        "Proof of Concept (Make it work): Develop and deploy proof of concepts that demonstrate the feasibility of your data analytics and AI initiatives.",
        "Proof of Value (Make it better): Iterate and refine your proof of concepts to maximize their impact.",
        "Business Impact (Make it scale): Scale up your proof of value to capture the full potential of your data analytics and AI initiatives.",
      ],
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
