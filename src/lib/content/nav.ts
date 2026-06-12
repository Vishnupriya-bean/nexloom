export const NAV_LINKS = [
  { label: "About us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const MEGA_MENU = [
  {
    category: "Engineering & Product",
    href: "/services/engineering-product",
    cta: "View Engineering Services",
    items: [
      { label: "Full-Stack Web Development", href: "/services/engineering-product#full-stack-web-development" },
      { label: "Mobile App Development", href: "/services/engineering-product#mobile-app-development" },
      { label: "SaaS & Platform Engineering", href: "/services/engineering-product#saas-platform-engineering" },
      { label: "Enterprise Applications", href: "/services/engineering-product#enterprise-applications" },
      { label: "Product Engineering", href: "/services/engineering-product#product-engineering" },
      { label: "System Architecture", href: "/services/engineering-product#system-architecture" },
    ],
  },
  {
    category: "Cloud & DevOps",
    href: "/services/cloud-devops",
    cta: "View Cloud & DevOps",
    items: [
      { label: "Cloud Architecture", href: "/services/cloud-devops#cloud-architecture" },
      { label: "DevOps & CI/CD", href: "/services/cloud-devops#devops-cicd" },
      { label: "Infrastructure Automation", href: "/services/cloud-devops#infrastructure-automation" },
      { label: "Security & Compliance", href: "/services/cloud-devops#security-compliance" },
      { label: "Performance & Reliability", href: "/services/cloud-devops#performance-reliability" },
      { label: "Cloud Operations", href: "/services/cloud-devops#cloud-operations" },
    ],
  },
  {
    category: "AI & Automation",
    href: "/services/ai-automation",
    cta: "View AI & Automation",
    items: [
      { label: "AI Agents", href: "/services/ai-automation#ai-agents" },
      { label: "Agentic Workflows", href: "/services/ai-automation#agentic-workflows" },
      { label: "LLM Integrations", href: "/services/ai-automation#llm-integrations" },
      { label: "Intelligent Automation", href: "/services/ai-automation#intelligent-automation" },
      { label: "Autonomous Systems", href: "/services/ai-automation#autonomous-systems" },
      { label: "AI for Business Operations", href: "/services/ai-automation#ai-business-operations" },
    ],
  },
  {
    category: "Integrations & Growth",
    href: "/services/integrations-growth",
    cta: "View Integrations & Growth",
    items: [
      { label: "API Development", href: "/services/integrations-growth#api-development" },
      { label: "Platform Integrations", href: "/services/integrations-growth#platform-integrations" },
      { label: "Data Pipelines", href: "/services/integrations-growth#data-pipelines" },
      { label: "Martech Systems", href: "/services/integrations-growth#martech-systems" },
      { label: "Analytics & Dashboards", href: "/services/integrations-growth#analytics-dashboards" },
      { label: "Growth Infrastructure", href: "/services/integrations-growth#growth-infrastructure" },
    ],
  },
] as const;

export const FOOTER_SERVICES = [
  { label: "Engineering & Product", href: "/services/engineering-product" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Integrations & Growth", href: "/services/integrations-growth" },
] as const;

export const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_RESOURCES = [
  { label: "Book a Call", href: "/book-a-call" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
] as const;
