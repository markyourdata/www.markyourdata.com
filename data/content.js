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
      title: "Data & AI consultancy for growing companies",
      tagline:
        "We help you prove value fast, then scale what works. From strategy to platform to execution.",
      ctaButton: {
        text: "Get in touch",
        link: "pages/contact.html",
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
      text: "We let our work speak for itself. Here's what the people we've worked with have to say:",
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
    },
  },

  // Service Pages
  pages: {
    platform: {
      hero: {
        title: "Save €100K per year with the Mark Your Data Platform",
        tagline:
          "Skip hiring a data engineer. Our cloud-native platform gives your analysts everything they need from day one. We handle the foundation, you focus on insights.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Ready to save €100K per year?",
        description:
          "Get a complete data platform that your analysts can use from day one. No data engineer required.",
        button: {
          text: "Book a free consultation",
          link: "pages/contact.html",
        },
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
      },
      cta: {
        heading: "Ready to cut your platform costs?",
        description:
          "We'll show you how to save €30K+ annually by replacing expensive tools like Fivetran, Cloud Composer, and Snowflake with cost-effective alternatives.",
        button: {
          text: "Book a free consultation",
          link: "pages/contact.html",
        },
      },
    },
    strategyConsulting: {
      hero: {
        title: "Data & AI strategy consulting",
        tagline:
          "Figure out where data can drive the most value. We help you identify the right opportunities and turn them into a concrete plan you can execute.",
        ctaButton: {
          text: "Schedule a call",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Let's find your biggest opportunities",
        description:
          "Book a free 30-minute call to discuss your challenges and goals.",
        button: {
          text: "Schedule a call",
          link: "pages/contact.html",
        },
      },
    },
    strategyExecution: {
      hero: {
        title: "Data & AI solutions",
        tagline:
          "Turn your data into business impact. We take projects from idea to proof of concept to production, whether you need extra expertise or full delivery.",
        ctaButton: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
      cta: {
        heading: "Ready to turn data into results?",
        description:
          "Let's discuss how we can help you deliver your next data or AI initiative.",
        button: {
          text: "Get in touch",
          link: "pages/contact.html",
        },
      },
    },
  },

  testimonials: [
    {
      key: "erick-webbe",
      quote:
        "Mark excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, he seamlessly transforms these solution ideas into testable prototypes with proven impact. His strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark is an asset to any team.",
      author: "Erick Webbe | Head of Data Science",
      company: "bol.",
      companyLogo: "assets/images/clients/bol.png",
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
      quote: "Lorem Ipsum",
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
      key: "Arend de Ruiter",
      quote: "Lorem Ipsum",
      author: "Arend de Ruiter | COO",
      company: "Winparts",
      companyLogo: "assets/images/clients/winparts.png",
      image: "assets/images/fans/arend_de_ruiter.png",
    },
  ],

  services: [
    {
      title: "Data & AI leadership",
      description:
        "Need data leadership but not ready to hire a full-time lead? We embed in your organization to build your data capability from the ground up, staying on board until you've found or trained the right person to take over.",
      cta: "Explore data leadership",
      slug: "data-leadership",
      url: "pages/services/data-leadership/index.html",
      icon: "assets/icons/data-leadership.svg",
      fullWidth: true,
      propositions: [],
    },
    {
      title: "Strategy consulting",
      description:
        "Figure out where data can make the biggest impact. We help you identify high-value opportunities and turn them into a concrete action plan. Start small, prove value, then scale.",
      cta: "Learn more",
      slug: "strategy-consulting",
      url: "pages/services/strategy-consulting/index.html",
      icon: "assets/icons/strategy-consulting.svg",
      propositions: [
        "30-minute call: Talk to us about your data & AI challenges.",
        "Data & AI offsite: A focused workshop to identify and prioritize initiatives.",
        "Strategy engagement: A comprehensive roadmap aligned with your business goals.",
      ],
    },
    {
      title: "Mark Your Data Platform",
      description:
        "Save €100K per year. Skip hiring a data engineer. Our cloud-native platform gives your analysts everything they need from day one. We handle the foundation, you focus on insights.",
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
      title: "Data & AI solutions",
      description:
        "Turn your data into impact. We take projects from idea to proof of concept to production. Whether you need extra hands or end-to-end delivery, we make it happen.",
      cta: "Learn more",
      slug: "strategy-execution",
      url: "pages/services/strategy-execution/index.html",
      icon: "assets/icons/strategy-execution.svg",
      propositions: [
        "Opportunity discovery: Find where a small change can make a big difference.",
        "Proof of concept: Get something working fast to validate the idea.",
        "Proof of value: Refine and measure real business impact.",
        "Scale: Roll out what's proven across the organization.",
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
        "We build a strong value adding data foundation while saving over €20.000 per year. With data pipelines that collected data from multiple databases and APIs related to returned products we build data models that populated the data warehouse. This data platform is the foundation for many new use cases.",
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
};
