// ─── HOME PAGE CONTENT ───────────────────────────────────────────────────────

export const heroContent = {
  pill: "Technology advisor for established businesses",
  headline: "Your business outgrew its tools.",
  headlineGradient: "We fix that.",
  subtitle:"We help established small and mid-sized businesses untangle the software, automation, and systems slowing them down. A team that finds the real problem, decides the right move, and sees it through.",
  
  ctaPrimary: { label: "Book a Call", href: "/book-a-call" },
  ctaSecondary: { label: "View Case Studies", href: "/case-studies" },
  trustedLabel: "A short call, no pitch. Bring your most annoying technology problem.",
  trustedCompanies: ["TechCorp", "InnovateLab", "DataFlow", "CloudScale", "NextGen"],
} as const;

export type ServiceItem = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  headings: string;
  description: string;
  outcome: string;
  subServices: string[];
  ctaLabel: string;
}

export const servicesContent = {
  sectionLabel: "You don't have a technology problem. You have a",
  heading: "no one owns this problem",
  subheading1:
    "The same data gets typed into three systems. Orders, invoices, and scheduling held together by spreadsheets and the one person who remembers how it works. Software you pay for every month and barely use. A growing list of we should fix that, with no one to actually own it It builds quietly, and it taxes everything: time, money, and the patience of good people.",
  subheading2:"It builds quietly, and it taxes everything: time, money, and the patience of good people.",
  items: [
    {
      href: "/services/engineering-product",
      image: "/home/engineering-product.jpg",
      imageAlt: "Engineering & Product",
      title: "1",
       headings: "Find the real problem",
      description: "We look at how the business actually runs, not only the tool annoying you this week. Often the thing slowing you down isn't the thing you noticed.",
      outcome: "Weekly releases within 30 days",
      subServices: [
        "Full-Stack Web Development",
        "Mobile App Development",
        "SaaS & Platform Engineering",
        "Enterprise Applications",
      ],
      ctaLabel: "View Engineering Services",
    },
    {
      href: "/services/cloud-devops",
      image: "/home/cloud-devops.jpg",
      imageAlt: "Cloud & DevOps",
      title: "2",
      headings:"Decide the right move",
      description: "Build it, buy it, automate it, or leave it alone. We tell you the honest tradeoff and what it costs, in plain language, before anything gets built.",
      outcome: "99% uptime target for production systems",
      subServices: [
        "Cloud Architecture",
        "DevOps & CI/CD",
        "Infrastructure Automation",
        "Security & Compliance",
      ],
      ctaLabel: "View Cloud & DevOps",
    },
    {
      href: "/services/ai-automation",
      image: "/home/ai-automation.jpg",
      imageAlt: "AI & Automation",
      title: "3",
      headings:"See it through",
      description: "We make sure it gets built right, fits how your team works, and keeps working after launch. One accountable partner, start to finish.",
      outcome: "Cut manual operations with intelligent automation",
      subServices: [
        "AI Agents",
        "Agentic Workflows",
        "LLM Integrations",
        "Intelligent Automation",
      ],
      ctaLabel: "View AI & Automation",
    },
    // {
    //   href: "/services/integrations-growth",
    //   image: "/home/team-working.jpg",
    //   imageAlt: "Integrations & Data",
    //   title: "Integrations & Data",
    //   description:
    //     "Connect systems and data so teams stop re-entering work and reporting stays trusted.",
    //   outcome: "Reduce cycle time across connected systems",
    //   subServices: [
    //     "API Development",
    //     "Platform Integrations",
    //     "Data Pipelines",
    //     "Martech Systems",
    //   ],
    //   ctaLabel: "View Integrations & Data",
    // },
  ] as ServiceItem[],
} as const;

export type ValueItem = {
  title: string;
  description: string;
};

export const whyNexloomContent = {
  aboutLabel: "The kind of problems we solve",
  aboutHeading: "",
  aboutHeadingGradient: "",
  aboutText:
    "We're building this practice deliberately and taking on a small number of clients. Here's the kind of work we take on:",
  capabilities: [
    "A team re-keying the same orders into three systems, hours a week, with errors creeping in.",
    "A business paying for five tools that don't talk to each other, and a sixth nobody uses.",
    "Reporting that takes two days to assemble by hand and is out of date by the time it lands.",
    "A manual process that worked at ten customers and is breaking at a hundred.",
  ],
  aboutCta: { label: "Learn More About Us", href: "/about" },

  valuesLabel: "About",
  valuesHeading: "We help established businesses fix the technology getting in the way of running them.",
  valueHeading2:"We've spent years building and untangling software systems, and the pattern is almost always the same: the technology isn't the hard part. The hard part is that no one owns the whole picture. We work differently. We start with how the business actually runs, find what's truly slowing it down, and decide the right move with you before anything gets built. We'd rather save you money than sell you a project.",
  value2:"Start with the why before the what. Find the 20% of the problem causing 80% of the pain. Keep it simple enough that your team actually uses it. No jargon, no theater, no surprises.",
  // values: [
  //   {
  //     title: "Technical Excellence",
  //     description:
  //       "We build with clean architecture, strong testing, and pragmatic standards so your team ships faster with fewer regressions.",
  //   },
  //   {
  //     title: "Partnership Mindset",
  //     description:
  //       "We work as part of your team, stay transparent on tradeoffs, and take ownership through delivery, so you get fewer surprises.",
  //   },
  //   {
  //     title: "Results-Driven",
  //     description:
  //       "We define success up front and track delivery, reliability, and cost, so progress stays visible and measurable.",
  //   },
  //   {
  //     title: "Continuous Improvement",
  //     description:
  //       "We run retros, refine delivery systems, and automate repeat work, so each release gets easier, not harder.",
  //   },
  // ] as ValueItem[],
} as const;

export type StatItem = {
  target: number;
  suffix: string;
  isFloat: boolean;
  label: string;
};

export const statsContent: StatItem[] = [
  // { target: 200, suffix: "+", isFloat: false, label: "Projects Delivered" },
  // { target: 50, suffix: "+", isFloat: false, label: "Enterprise Clients" },
  // { target: 99.9, suffix: "%", isFloat: true, label: "Uptime SLA" },
  // { target: 4, suffix: " Pillars", isFloat: false, label: "Core Expertise Areas" },
];

export type CaseStudyPreviewItem = {
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
};

export const caseStudiesPreviewContent = {
  sectionLabel: "Case Studies",
  heading: "Proven Results Across Industries",
  subheading:
    "Real companies scaling faster with Nexloom's engineering, cloud, AI, and growth solutions.",
  items: [
    {
      href: "/case-studies/saas-platform-fintech-startup",
      image: "/case-studies/fintech.jpg",
      imageAlt: "Building a Scalable SaaS Platform for a Fintech Startup",
      category: "Engineering & Product",
      title: "Building a Scalable SaaS Platform for a Fintech Startup",
      excerpt:
        "How we helped a fintech startup launch their multi-tenant SaaS platform in 4 months, achieving 10,000 active users within the first quarter.",
    },
    {
      href: "/case-studies/cloud-migration-healthcare",
      image: "/case-studies/healthcare.jpg",
      imageAlt: "Enterprise Cloud Migration for Healthcare Provider",
      category: "Cloud & DevOps",
      title: "Enterprise Cloud Migration for Healthcare Provider",
      excerpt:
        "Migrating a healthcare provider's legacy on-premise infrastructure to AWS while maintaining HIPAA compliance and zero downtime.",
    },
    {
      href: "/case-studies/ai-customer-support-ecommerce",
      image: "/case-studies/ecommerce.jpg",
      imageAlt: "AI-Powered Customer Support for E-Commerce Platform",
      category: "AI & Automation",
      title: "AI-Powered Customer Support for E-Commerce Platform",
      excerpt:
        "Deploying intelligent AI agents that handle 70% of customer inquiries automatically, reducing support costs by 55%.",
    },
    {
      href: "/case-studies/data-pipeline-retail-analytics",
      image: "/case-studies/retail-analytics.jpg",
      imageAlt: "Real-Time Data Pipeline for Retail Analytics",
      category: "Integrations & Data",
      title: "Real-Time Data Pipeline for Retail Analytics",
      excerpt:
        "Building a real-time data pipeline that unified 12 data sources and enabled data-driven decision making across 200+ retail locations.",
    },
  ] as CaseStudyPreviewItem[],
  viewAllCta: { label: "View All Case Studies", href: "/case-studies" },
} as const;

export const ctaContent = {
  sectionLabel: "",
  heading: "Let's find what's",
  headingGradient: "slowing you down.",
  subheading: "A short call, no pitch. Bring your most annoying technology problem. We'll tell you what we'd look at first, whether we're the right fit, and what it would take.",
  primaryCta: { label: "Book a Call", href: "/book-a-call" },
  contactInfo: {
  email: "info@nexloom.co",
  hours: "Mon–Fri, 9am–6pm PT",
},

} as const;
