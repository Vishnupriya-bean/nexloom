import type { Metadata } from "next";

const BASE_URL = "https://nexloom.co";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "Nexloom";
const DEFAULT_DESC =
  "Senior-led software engineering consultancy specialising in product engineering, cloud DevOps, AI automation, and integrations.";

function og(
  title: string,
  description: string,
  url: string
): Metadata["openGraph"] {
  return {
    type: "website",
    url,
    title,
    description,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  };
}

function tw(title: string): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    images: [OG_IMAGE],
  };
}

export const seoConfig = {
  home: {
    title: "Nexloom | We Build Software That Ships",
    description:
      "We build production-grade software — from cloud infrastructure and AI automation to full-stack products and data integrations. Senior engineers only.",
    alternates: { canonical: `${BASE_URL}/` },
    robots: "index, follow",
    openGraph: og(
      "Nexloom | We Build Software That Ships",
      "Production-grade software built by senior engineers — cloud, AI, full-stack, and integrations.",
      `${BASE_URL}/`
    ),
    twitter: tw("Nexloom | We Build Software That Ships"),
  } satisfies Metadata,

  about: {
    title: "About Nexloom",
    description:
      "Learn about Nexloom — a senior-led software consultancy built on the belief that great software requires great engineers. Meet the team.",
    alternates: { canonical: `${BASE_URL}/about` },
    robots: "index, follow",
    openGraph: og("About Nexloom", DEFAULT_DESC, `${BASE_URL}/about`),
    twitter: tw("About Nexloom"),
  } satisfies Metadata,

  contact: {
    title: "Contact Nexloom",
    description:
      "Get in touch with the Nexloom team. Whether you have a project in mind or want to explore working together, we'd love to hear from you.",
    alternates: { canonical: `${BASE_URL}/contact` },
    robots: "index, follow",
    openGraph: og("Contact Nexloom", DEFAULT_DESC, `${BASE_URL}/contact`),
    twitter: tw("Contact Nexloom"),
  } satisfies Metadata,

  howWeWork: {
    title: "How We Work | Nexloom",
    description:
      "Discover the Nexloom engineering process — async-first, milestone-driven delivery with full transparency and senior oversight at every stage.",
    alternates: { canonical: `${BASE_URL}/how-we-work` },
    robots: "index, follow",
    openGraph: og("How We Work | Nexloom", DEFAULT_DESC, `${BASE_URL}/how-we-work`),
    twitter: tw("How We Work | Nexloom"),
  } satisfies Metadata,

  bookACall: {
    title: "Book a Call | Nexloom",
    description:
      "Schedule a free 45-minute complimentary discovery call with the Nexloom team. Tell us about your project and we'll map the fastest path to production.",
    alternates: { canonical: `${BASE_URL}/book-a-call` },
    robots: "index, follow",
    openGraph: og("Book a Call | Nexloom", DEFAULT_DESC, `${BASE_URL}/book-a-call`),
    twitter: tw("Book a Call | Nexloom"),
  } satisfies Metadata,

  servicesEngineering: {
    title: "Engineering & Product Services | Nexloom",
    description:
      "Full-stack web development, mobile apps, SaaS platforms, and enterprise applications built by senior engineers with real production experience.",
    alternates: { canonical: `${BASE_URL}/services/engineering-product` },
    robots: "index, follow",
    openGraph: og(
      "Engineering & Product | Nexloom",
      "Full-stack, mobile, SaaS, and enterprise engineering by senior engineers.",
      `${BASE_URL}/services/engineering-product`
    ),
    twitter: tw("Engineering & Product | Nexloom"),
  } satisfies Metadata,

  servicesCloudDevops: {
    title: "Cloud & DevOps Services | Nexloom",
    description:
      "Cloud architecture, CI/CD pipelines, infrastructure automation, security, and reliability engineering for teams that need to move fast without breaking things.",
    alternates: { canonical: `${BASE_URL}/services/cloud-devops` },
    robots: "index, follow",
    openGraph: og(
      "Cloud & DevOps | Nexloom",
      "Cloud architecture, CI/CD, and infrastructure automation by senior engineers.",
      `${BASE_URL}/services/cloud-devops`
    ),
    twitter: tw("Cloud & DevOps | Nexloom"),
  } satisfies Metadata,

  servicesAiAutomation: {
    title: "AI & Automation Services | Nexloom",
    description:
      "AI agents, agentic workflows, LLM integrations, and intelligent automation that eliminates repetitive work and unlocks new business capabilities.",
    alternates: { canonical: `${BASE_URL}/services/ai-automation` },
    robots: "index, follow",
    openGraph: og(
      "AI & Automation | Nexloom",
      "AI agents, LLM integrations, and intelligent automation.",
      `${BASE_URL}/services/ai-automation`
    ),
    twitter: tw("AI & Automation | Nexloom"),
  } satisfies Metadata,

  servicesIntegrationsGrowth: {
    title: "Integrations & Growth Services | Nexloom",
    description:
      "API development, platform integrations, data pipelines, martech systems, and analytics dashboards that connect your stack and accelerate growth.",
    alternates: { canonical: `${BASE_URL}/services/integrations-growth` },
    robots: "index, follow",
    openGraph: og(
      "Integrations & Growth | Nexloom",
      "APIs, data pipelines, martech, and growth infrastructure.",
      `${BASE_URL}/services/integrations-growth`
    ),
    twitter: tw("Integrations & Growth | Nexloom"),
  } satisfies Metadata,

  blogListing: {
    title: "Engineering Blog | Nexloom",
    description:
      "Deep-dive technical articles from the Nexloom engineering team — AI, cloud infrastructure, system design, DevOps, and API best practices.",
    alternates: { canonical: `${BASE_URL}/blog` },
    robots: "index, follow",
    openGraph: og("Engineering Blog | Nexloom", DEFAULT_DESC, `${BASE_URL}/blog`),
    twitter: tw("Engineering Blog | Nexloom"),
  } satisfies Metadata,

  caseStudiesListing: {
    title: "Case Studies | Nexloom",
    description:
      "Real results from real projects — see how Nexloom has helped startups and scale-ups ship faster, reduce costs, and build reliable systems.",
    alternates: { canonical: `${BASE_URL}/case-studies` },
    robots: "index, follow",
    openGraph: og("Case Studies | Nexloom", DEFAULT_DESC, `${BASE_URL}/case-studies`),
    twitter: tw("Case Studies | Nexloom"),
  } satisfies Metadata,

  privacyPolicy: {
    title: "Privacy Policy | Nexloom",
    description: "Nexloom's Privacy Policy — how we collect, use, and protect your personal information.",
    alternates: { canonical: `${BASE_URL}/privacy-policy` },
    robots: "index, follow",
  } satisfies Metadata,

  termsOfService: {
    title: "Terms of Service | Nexloom",
    description: "Nexloom's Terms of Service — review our service terms, engagement model, and client responsibilities.",
    alternates: { canonical: `${BASE_URL}/terms-of-service` },
    robots: "index, follow",
  } satisfies Metadata,
} as const;

// Templates for dynamic pages (blog posts, case studies)
export function blogPostMeta(post: {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    robots: "index, follow",
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: SITE_NAME,
      locale: "en_US",
      images: post.image
        ? [{ url: `${BASE_URL}${post.image}`, width: 800, height: 450, alt: post.title }]
        : [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title: post.title, images: [post.image ?? OG_IMAGE] },
  };
}

export function caseStudyMeta(cs: {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}/case-studies/${cs.slug}`;
  return {
    title: cs.title,
    description: cs.excerpt,
    alternates: { canonical: url },
    robots: "index, follow",
    openGraph: {
      type: "article",
      url,
      title: cs.title,
      description: cs.excerpt,
      siteName: SITE_NAME,
      locale: "en_US",
      images: cs.image
        ? [{ url: `${BASE_URL}${cs.image}`, width: 800, height: 450, alt: cs.title }]
        : [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title: cs.title, images: [cs.image ?? OG_IMAGE] },
  };
}
