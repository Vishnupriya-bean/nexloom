"use client";

import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { servicesContent, type ServiceItem } from "@/lib/content/home";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "/services/engineering-product": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
    </svg>
  ),
  "/services/cloud-devops": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  "/services/ai-automation": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  ),
  "/services/integrations-growth": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  ),
};

function ServiceCard({ item, delay }: { item: ServiceItem; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <Link href={item.href} className="group block h-full">
        <GlassCard className="h-full flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(17,24,39,0.18)] transition-all duration-300">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-8 gap-4">
            {/* Gradient icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0">
              {SERVICE_ICONS[item.href]}
            </div>
            {/* just for raise pr */}
            <h3 className="text-xl font-bold text-fore">{item.title}</h3>

            <p className="text-sm text-muted-fore leading-relaxed">{item.description}</p>

            <p className="text-sm font-semibold text-muted-fore">{item.outcome}</p>

            {/* Sub-services */}
            <ul className="flex flex-col gap-1.5 flex-1">
              {item.subServices.map((sub) => (
                <li key={sub} className="flex items-center gap-2 text-sm text-muted-fore">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {sub}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 mt-2">
              {item.ctaLabel}
              <ArrowIcon className="w-4 h-4" />
            </div>
          </div>
        </GlassCard>
      </Link>
    </RevealOnScroll>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-[hsl(220,14%,94%)]/30">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center gap-4">
        <RevealOnScroll>
          <SectionLabel>{servicesContent.sectionLabel}</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fore tracking-tight max-w-2xl">
            {servicesContent.heading}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-muted-fore text-lg max-w-2xl leading-relaxed">
            {servicesContent.subheading}
          </p>
        </RevealOnScroll>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {servicesContent.items.map((item, i) => (
          <ServiceCard key={item.href} item={item} delay={i * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}
