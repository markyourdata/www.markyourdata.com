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
      title: "Data analytics and AI consultants",
      tagline:
        "Transform your company into a data analytics & AI driven powerhouse, one strategic project at a time.",
      ctaButton: {
        text: "Get in touch",
        link: "pages/contact.html",
      },
    },
    aboutUs: {
      heading: "About us",
      text: 'Mark Your Data is a boutique Data Analytics and AI Consultancy firm. It\'s the home for experienced data professionals. With backgrounds from data strategy, data science, data engineering and software and AI engineering we got the right person for the job. We help you turn your data ambitions into plans and plans into action. Our positive, pragmatic, can-do mentality makes us stand out of the crowd. <strong>"We make it work, make it better and make it scale"</strong>. Our consultants have "walked the talk" over and over again. Where others might show you fancy presentations, we build teams, infrastructure and software. <strong>Real impact, delivered with a smile, one project at a time.</strong>',
    },
    howWeWork: {
      heading: "How we work",
      text: "Over the years, we've executed many Data Analytics & AI projects. We've learned that it's not about the tools & technology. It's about making things work and proving value fast, so you can double down on those initiatives that really make an impact. <strong>\"Make it work, make it better, make it scale\"</strong> has become our mantra. It is a way of working that has proven itself over and over again. By working with us, you will master this methodology too. Some customers even structurally embed it in their teams. We tailored our methodology towards data strategy, data foundations, and data projects. Read on to find out which one is most relevant to you.",
    },
    clients: {
      heading: "Clients we are proud of",
      text: "We walk the talk with a great list of clients. We value our clients, big and small, and invest in valuable long term relationships. We become partners in business, alongside of you on your data, analytics & AI journey. Read more about some of the projects we do on our projects page.",
    },
    fans: {
      heading: "Our fans",
      text: "Our clients become partners, sometimes even fans! Get to know us through their eyes:",
    },
    projects: {
      heading: "Recent projects",
      text: "Every now and then a project comes along that makes you just that little extra proud. We are result driven and eager to learn. It's no surprise that these projects usually made a big impact, and tought us something new. This is what keeps us going. Read about some of these projects here.",
    },
    cta: {
      heading: "Want to learn more?",
      button: {
        text: "Get in touch",
        link: "pages/contact.html",
      },
    },
  },

  // Service Pages
  pages: {
    platform: {
      hero: {
        title: "Save €100K per year with our Mark Your Data Platform",
        tagline:
          "Don't hire a data engineer. Our cloud-native data platform provides everything your analysts need to start adding value from day one. We handle the foundation—you focus on insights.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Ready to save €100K per year?",
        description:
          "Skip the data engineer hire. Get a complete data platform that your analysts can use from day one. Free consultation included.",
        button: {
          text: "Book your free consultation",
          link: "pages/contact.html",
        },
      },
    },
    platformExistingTeam: {
      hero: {
        title: "Save €30K per year on your data platform",
        tagline:
          "Already have a data engineer? Reduce your platform costs by switching from expensive enterprise tools to our lightweight, open-source stack. Same capabilities, fraction of the cost.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Ready to cut your platform costs?",
        description:
          "Let us show you how to save €30K+ annually by replacing expensive tools like Fivetran, Cloud Composer, and Snowflake with cost-effective alternatives.",
        button: {
          text: "Book your free consultation",
          link: "pages/contact.html",
        },
      },
    },
    strategyConsulting: {
      hero: {
        title: "Data analytics & AI strategy consulting",
        tagline:
          "Maximize the return of data & AI investments. With our proven methodologies and expertise, we help you invest in data-driven initiatives that drive business growth and maximize ROI.",
        ctaButton: {
          text: "Schedule your 30-minute call",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Want to know more?",
        description:
          "Schedule a free 30-minute call to discuss your challenges.",
        button: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
    },
    strategyExecution: {
      hero: {
        title: "Data analytics & AI solutions",
        tagline:
          "Turn data into impact. We help you transform strategic initiatives into proof of concepts, proof of values, implementation and beyond.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Ready to turn your strategy into reality?",
        description:
          "Let's discuss how we can help you execute your data & AI initiatives with proven results.",
        button: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
    },
  },

  testimonials: [
    {
      quote:
        "Mark excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, he seamlessly transforms these solution ideas into testable prototypes with proven impact. His strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark is an asset to any team.",
      author: "Erick Webbe | Head of Data Science",
      company: "bol.",
      image: "assets/images/fans/erick_webbe.png",
    },
    {
      quote:
        "I have worked together with Mark on several occasions. What I love about Mark is his pragmatic approach, he is able to quickly get to the core of a problem, identify first valuable steps and guide execution to prove the value of a chosen solution. He collaborates well with existing teams, is always valued for his contribution and personality, but also able to work more independently on a scoped assignment.",
      author:
        "Elmer Hiemstra | Head of Product Partner Acquisition, Management & Enablement",
      company: "bol",
      image: "assets/images/fans/elmer_hiemstra.png",
    },
    {
      quote:
        "Mark combines a sharp analytical mind with broad technical knowledge. He prioritizes simple, working solutions over unnecessary complexity. For us, this resulted in significant cost savings through a surprisingly straightforward implementation with low maintenance costs. He communicates clearly and cuts through the jargon, Mark is a highly effective partner to work with.",
      author: "Jasper van Heijst | Group Product Manager",
      company: "bol",
      image: "assets/images/fans/jasper_van_heijst.png",
    },
  ],

  services: [
    {
      title: "Data analytics & AI leadership",
      description:
        "Need comprehensive data leadership across strategy, platform, and execution? Our consultants join your organization to build your data capability from the ground up—staying on board until you've hired or trained the right internal leader to take over. We cover everything so you can focus on finding the right long-term fit.",
      cta: "Explore data leadership →",
      slug: "data-leadership",
      url: "pages/services/data-leadership/index.html",
      icon: "assets/icons/data-leadership.svg",
      fullWidth: true,
      propositions: [],
    },
    {
      title: "Data analytics & AI strategy consulting",
      description:
        "Turn strategy into action starting fast, simple and small. With our proven methodologies and expertise, we help you define initiatives where small changes, make a big impact. Invest in business growth from the start and maximize ROI for years to come.",
      cta: "Learn more",
      slug: "strategy-consulting",
      url: "pages/services/strategy-consulting/index.html",
      icon: "assets/icons/strategy-consulting.svg",
      propositions: [
        "30-minute call: Get in touch with our experts to discuss your data & AI needs.",
        "Data & AI offsite: Our offsite workshops help you identify and prioritize data & AI initiatives.",
        "Strategy consulting: Our strategy consulting services help you develop a comprehensive data & AI strategy that aligns with your business goals.",
      ],
    },
    {
      title: "Mark Your Data Platform",
      description:
        "Save €100K per year. Don't hire a data engineer, our cloud-native platform provides everything your analysts need from day one. We handle the foundation, you focus on insights.",
      cta: "Learn more",
      slug: "platform",
      url: "pages/services/platform/index.html",
      icon: "assets/icons/platform.svg",
      propositions: [
        "No data engineer needed: We provide the complete foundation so your analysts can start immediately.",
        "Save €100K/year: Skip the €100K data engineer salary and €35K platform costs.",
        "Data pipelines included: Automated data ingestion from all your sources.",
        "Ready for AI: Built-in support for analytics and AI applications.",
      ],
    },
    {
      title: "Data analytics & AI solutions",
      description:
        "Get started today, even if you don't have the skills, the people, or the time, we turn your data into impact. We help your teams to transform strategic initiatives into proof of concepts, proof of values, implementation and beyond.",
      cta: "Learn more",
      slug: "strategy-execution",
      url: "pages/services/strategy-execution/index.html",
      icon: "assets/icons/strategy-execution.svg",
      propositions: [
        "Data exploration: We help you understand where a small change, can make a big difference. And help you transform this opportunity into a proof of concept.",
        "Proof of concept (Make it work): Develop and deploy proof of concepts that demonstrate the feasibility of your data analytics and AI initiatives.",
        "Proof of value (Make it better): Iterate and refine your proof of concepts to maximize their impact.",
        "Business impact (Make it scale): Scale up your proof of value to capture the full potential of your data analytics and AI initiatives.",
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
        "We build a strong value adding data foundation that saved over €20.000 per year. With data pipelines that collected data from multiple databases and APIs related to returned products we build data models that populated the data warehouse. This is now the foundation for many new use cases.",
      technologies: ["Python", "LLMs", "Generative AI"],
      outcome: [
        "Single source of truth",
        "Optimized return process",
        "Foundation for new use cases",
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
