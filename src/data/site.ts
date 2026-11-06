export interface Testimonial {
  key: string;
  quote: string;
  author: string;
  company?: string;
  companyLogo?: string;
  image?: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Talk {
  key: string;
  title: string;
  type: "talk" | "podcast";
  event: string;
  eventUrl: string;
  date: string;
  venue?: string;
  speakers?: string[];
  description: string;
  titleLang?: string;
  links?: { label: string; url: string }[];
  relatedProjectSlug?: string;
}

export const site = {
  name: "Mark Your Data",
  url: "https://www.markyourdata.com",
  linkedin: "https://www.linkedin.com/in/mark-schep/",
};

export const demoVideo = {
  src: "/assets/video/mark-your-data-demo.mp4",
  poster: "/assets/video/mark-your-data-demo.webp",
  shareImage: "/assets/video/mark-your-data-demo.jpg",
};

export const testimonials: Testimonial[] = [
  {
    "key": "erick-webbe",
    "quote": "Mark excels at identifying opportunities to leverage data and analytics in diverse environments. Once found, he seamlessly transforms these solution ideas into testable prototypes with proven impact. His strong communication skills act as a catalyst, drawing entire teams into the dynamic journey of innovation. Critical and constructive, and always with a broad smile, Mark is an asset to any team.",
    "author": "Erick Webbe | CEO",
    "company": "KickstartAI",
    "companyLogo": "/assets/images/clients/kickstartai.png",
    "image": "/assets/images/fans/erick_webbe.webp"
  },
  {
    "key": "Lisette van de Steeg",
    "quote": "From data scientist, to data analyst and from data engineering to platform engineering tasks: Mark surprises and succeeds in all fields. Next of being part of the data team, he also zoomed out to work on giving Tikkie insights on how to move forward; these insights were immediately used within the organisation. Next to having business acumen and the ability to communicate in a clear and understandable way, Mark is a smart and great colleague to have around. Both on work and personal level, he surprises with great stories and lessons learned.",
    "author": "Lisette van de Steeg | Analytics Lead",
    "company": "Tikkie",
    "companyLogo": "/assets/images/clients/tikkie.png",
    "image": "/assets/images/fans/lisette_van_de_steeg.webp"
  },
  {
    "key": "elmer-hiemstra",
    "quote": "I have worked together with Mark on several occasions. What I love about Mark is his pragmatic approach, he is able to quickly get to the core of a problem, identify first valuable steps and guide execution to prove the value of a chosen solution. He collaborates well with existing teams, is always valued for his contribution and personality, but also able to work more independently on a scoped assignment.",
    "author": "Elmer Hiemstra | Head of Product Partner Acquisition, Management & Enablement",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/elmer_hiemstra.webp"
  },
  {
    "key": "jasper-van-heijst",
    "quote": "Mark combines a sharp analytical mind with broad technical knowledge. He prioritizes simple, working solutions over unnecessary complexity. For us, this resulted in significant cost savings through a surprisingly straightforward implementation with low maintenance costs. He communicates clearly and cuts through the jargon, Mark is a highly effective partner to work with.",
    "author": "Jasper van Heijst | Group Product Manager",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/jasper_van_heijst.webp"
  },
  {
    "key": "Benjamin van Vianen",
    "quote": "Mark connects technology with business strategy and brings solid experience in building small proof of concepts that can be scaled into solutions with real business impact. He is highly pragmatic and has a talent for simplifying complexity, driving change and connecting people. He is also a true allrounder who adds value across different areas and consistently contributes to meaningful results.",
    "author": "Benjamin van Vianen | Manager Scaled Content",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/benjamin_van_vianen.webp"
  },
  {
    "key": "Daan van den Berg",
    "quote": "Mark has proven to be an invaluable asset to the team during our profit steering project. He is highly proactive, quickly mastering the topic and taking full ownership, while also knowing when to ask for help and reach out to other teams to move things forward. He consistently asks the right questions, focusing on understanding the problem rather than jumping to solutions. Combined with his out-of-the-box thinking, this allowed him to uncover approaches and solutions we couldn't think of ourselves. His curiosity, collaboration, and fresh perspective made a lasting impact on both the project and the team.",
    "author": "Daan van den Berg | Product Manager",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/daan_van_den_berg.webp"
  },
  {
    "key": "Richard Norbruis",
    "quote": "At bol, I worked with Mark for over a year on Team SEO. Mark is incredibly curious and genuinely wants to get to the core of complex problems. For Team SEO, he worked on, among other things, generating relevant content at scale using AI. The professionalism and skill with which he approached and delivered this really impressed me. Beyond his strong Data & AI skills, Mark is also very personable and a pleasure to work with. Need someone who can translate complex Data & AI challenges into scalable solutions with real impact? Mark is definitely your person.",
    "author": "Richard Norbruis | Freelance Web Analyst & Experimentation/CRO Specialist",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/richard_norbruis.webp"
  }
];

export const berendTestimonials: Testimonial[] = [
  {
    "key": "Christopher Marcks",
    "quote": "What I appreciate most about working with Berend is his ability to translate data science into plain language, making complex topics understandable and actionable. He's open to out-of-the-box ideas, making conversations not just smart but also creative and inspiring. In both our projects at bol and Pip Studio, he proved a real accelerator: bringing sharpness and new perspectives to ideas I already had. Together we turned an idea into a scalable AI platform for a client. Honestly, I learn something every time we talk.",
    "author": "Christopher Marcks | Founder",
    "company": "Pip Studio",
    "image": "/assets/images/fans/berend/christopher_marks.avif"
  },
  {
    "key": "Frank de Gouw",
    "quote": "Berend knows exactly what he's talking about, and his communication skills are exceptional. He's very good at getting to the core of a problem and conveying it in plain language to stakeholders who often have little background knowledge. Throughout our entire collaboration we had near-daily contact, delivering clear results at great speed. The standout was the Auto Advice Tool — predicting the top 5 car recommendations for individual lease drivers — a result that has stuck with me.",
    "author": "Frank de Gouw | Manager Data & Analytics",
    "company": "Athlon",
    "image": "/assets/images/fans/berend/frank_de_gouw.webp"
  },
  {
    "key": "Martin Schijf",
    "quote": "Berend is approachable, always open to conversation, and has a strong ability to explain complex choices to non-experts in a clear way. Berend takes others' ideas seriously and incorporates them into his solutions. With management, he presents results in plain language that drives understanding and gets everyone involved. The turning point was when Berend presented the improvements possible with our prediction model — that's when it clicked. What I'm most proud of is bringing the prediction model back to life. It ultimately led to the permanent hire of a Data Scientist who built on the foundation Berend laid, making it a renewed and integral part of the team.",
    "author": "Martin Schijf | Engineering Manager",
    "company": "bol.",
    "image": "/assets/images/fans/berend/martin_schijf.webp"
  },
  {
    "key": "Erick Webbe - Berend",
    "quote": "Berend balances strong subject knowledge with the ability to convey it to anyone, adapting his style to his audience while maintaining depth. After several successful projects, our results spoke for themselves and people were lining up to work with us. Together we built a concept and way of working into an internal brand. Structured problem-solving with sustainable results became more the rule than the exception. Something many large corporates are jealous of.",
    "author": "Erick Webbe | Head of Data Science",
    "company": "bol.",
    "companyLogo": "/assets/images/clients/bol.png",
    "image": "/assets/images/fans/berend/erick_webbe.webp"
  }
];

export const clients: Client[] = [
  {
    "name": "bol.com",
    "logo": "/assets/images/clients/bol.png"
  },
  {
    "name": "Tikkie",
    "logo": "/assets/images/clients/tikkie.png"
  },
  {
    "name": "Winparts",
    "logo": "/assets/images/clients/winparts.png"
  },
  {
    "name": "Heineken",
    "logo": "/assets/images/clients/heineken.png"
  },
  {
    "name": "Snelstart",
    "logo": "/assets/images/clients/snelstart.png"
  },
  {
    "name": "Intergamma",
    "logo": "/assets/images/clients/intergamma.png"
  }
];

export const talks: Talk[] = [
  {
    "key": "data-expo-2026-content-as-a-service",
    "title": "Content as a Service at bol: how all bollers can create on-brand content at scale with AI",
    "type": "talk",
    "event": "Data Expo 2026",
    "eventUrl": "https://www.data-expo.nl/nl/bezoekers/programma/content-as-a-service-at-bol-how-all-bollers-can-create-on-brand-content-at-scale-with-ai",
    "date": "September 9, 2026 · 15:45",
    "venue": "Jaarbeurs Utrecht",
    "speakers": [
      "Benjamin van Vianen | Manager Scalable Content & Tooling, bol",
      "Joey Man | AI Growth Designer, bol"
    ],
    "description": "How bol turned experimental AI projects into a scalable content creation platform. Organizations are challenged to create more on-brand content, for more audiences, across more channels than ever before, all under real budget constraints. This talk covers practical implementations spanning text, imagery, and full webpage generation, with a focus on marketing and advertising applications, and shares how thinking big while starting small helped bol move from one-off experiments to a repeatable system.",
    "relatedProjectSlug": "bol-content-generation-at-scale"
  },
  {
    "key": "data-expo-2026-winparts-ai-platform",
    "title": "From data platform to AI platform: how Winparts prevents returns with data & AI",
    "type": "talk",
    "event": "Data Expo 2026",
    "eventUrl": "https://www.data-expo.nl/nl/bezoekers/programma/from-data-platform-to-ai-platform-how-winparts-prevents-returns-with-data-ai",
    "date": "September 10, 2026 · 14:15",
    "venue": "Jaarbeurs Utrecht",
    "speakers": [
      "Harm Albers | Data Science Lead, Winparts",
      "Rense van der Zee | Data Engineer, Winparts"
    ],
    "description": "How Winparts built a scalable open-source data platform with DLT, DBT, and cloud-native orchestration, then extended it into AI territory through 'AI jobs': lightweight, containerized processes that read from the warehouse, run an LLM task, and write the results back. The first AI job analyzes returns to spot patterns and improve product data. The talk shares practical lessons on building an AI-ready data foundation, staying cloud-agnostic, and scaling from one use case to many while navigating open-source trade-offs.",
    "relatedProjectSlug": "winparts-data-ai-platform"
  },
  {
    "key": "data-expo-2026-conversational-analytics",
    "title": "When your data warehouse talks back: how conversational analytics changes the analytics game",
    "type": "talk",
    "event": "Data Expo 2026",
    "eventUrl": "https://www.data-expo.nl/nl/bezoekers/programma/when-your-data-warehouse-talks-back-how-conversational-analytics-changes-the-analytics-game",
    "date": "September 10, 2026 · 16:00",
    "venue": "Jaarbeurs Utrecht",
    "speakers": [],
    "description": "How conversational AI agents can let people query a data warehouse in plain language instead of waiting on a data team. Using a simulated e-commerce scenario, this talk shows how a question that used to mean a support ticket and a day's wait can return an answer in seconds, freeing the data team to focus on harder analytical problems. It also covers what this shift means for both business and technical roles, with perspectives relevant to organizations of different sizes.",
    "relatedProjectSlug": "conversational-analytics-demo"
  },
  {
    "key": "contentcon-europe-2026",
    "title": "Speaking at ContentCon Europe",
    "type": "talk",
    "event": "ContentCon Europe 2026",
    "eventUrl": "https://www.contentstack.com/contentcon-europe/agenda",
    "date": "September 30 – October 1, 2026",
    "venue": "Circa, Amsterdam",
    "speakers": [],
    "description": "Mark is a featured speaker at ContentCon Europe 2026, alongside bol colleagues Benjamin van Vianen and Joey Man. The event's full agenda and session abstracts aren't public yet — this entry will be updated with the talk title and description once they are."
  },
  {
    "key": "ai-today-live-s08e83",
    "titleLang": "nl",
    "title": "Bezorgprobleem bij bol opgelost zonder AI: waarom de simpelste oplossing vaak wint",
    "type": "podcast",
    "event": "AI Today Live",
    "eventUrl": "https://aitodaylive.nl/afleveringen/s08e83-bezorgprobleem-bij-bol-opgelost-zonder-ai-waarom-de-simpelste-oplossing-vaak-wint/",
    "date": "August 30, 2026 · Season 8, Episode 83 · 48 min",
    "speakers": [
      "Hosted by Joop Snijder & Niels Naglé"
    ],
    "description": "A conversation about why the simplest working solution usually beats the complex one. Mark discusses solving a delivery-notification problem at bol by tracing it to an expired timestamp and adjusting FAQ messaging, instead of reaching for an elaborate AI system. The episode covers timeboxing projects into 3-month validation cycles, building lightweight data infrastructure for under €100/month versus €10.000–15.000/year enterprise platforms, why the data foundation (security, access, standardization) has to come before analysis, and why smaller organizations don't always need a full-time data engineer once that foundation is in place.",
    "links": [
      {
        "label": "Spotify",
        "url": "https://open.spotify.com/episode/0Z8bbnOwV6w4FO8LztoZ2i"
      },
      {
        "label": "Apple Podcasts",
        "url": "https://podcasts.apple.com/us/podcast/s08e83-bezorgprobleem-bij-bol-opgelost-zonder-ai-waarom/id1510558415?i=1000786876646"
      }
    ]
  }
];
