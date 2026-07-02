"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { ctaContent } from "@/lib/content/home";

const CONTACT_ICONS: React.ReactNode[] = [
  <svg key="visit" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  <svg key="email" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>,
  <svg key="call" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>,
];

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" /><path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

export default function CTA() {
  const c = ctaContent;

  return (
    <SectionWrapper className="bg-[hsl(222,47%,11%)] pt-6 lg:pt-10" id="contact">



      {/* <div className="w-full max-w-[1050px] mx-auto rounded-3xl border border-white/10 bg-[hsl(222,47%,14%)] px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-10 min-h-[420px] sm:min-h-[460px] lg:min-h-[30px]">
  <div className="flex flex-col items-start gap-5 max-w-2xl">
    <RevealOnScroll delay={0.1}>
      <h2 className="text-1xl sm:text-4xl lg:text-3.5xl font-extrabold text-white tracking-tight">
        {c.heading}{" "}
        <GradientText>{c.headingGradient}</GradientText>
      </h2>
    </RevealOnScroll>

    <RevealOnScroll delay={0.2}>
      <p className="text-slate-300 lg:text-6.5xl text-base sm:text-lg leading-relaxed">
        {c.subheading}
      </p>
    </RevealOnScroll>

    <RevealOnScroll delay={0.3}>
      <Button href={c.primaryCta.href} size="lg" arrow className="mt-2">
        {c.primaryCta.label}
      </Button>
    </RevealOnScroll>

    {c.contactInfo && (
      <RevealOnScroll delay={0.4}>
        <p className="text-white text-base sm:text-lg mt-8">
          {c.contactInfo.email}
          <span className="mx-2 opacity-50">·</span>
          {c.contactInfo.hours}
        </p>
      </RevealOnScroll>
    )}
  </div>
</div> */}


<div className="w-full max-w-[1100px] mx-auto rounded-3xl border border-white/10 bg-[hsl(222,47%,14%)] px-6 sm:px-10 lg:px-10 py-12 sm:py-14 lg:py-8 min-h-[320px] sm:min-h-[440px] lg:min-h-[380px] lg:ml-39">
  <div className="flex flex-col items-start gap-5 w-full">
    <RevealOnScroll delay={0.1}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
        {c.heading}{" "}
        <GradientText>{c.headingGradient}</GradientText>
      </h2>
    </RevealOnScroll>

    <RevealOnScroll delay={0.2}>
      <p className="text-slate-300 text-base sm:text-lg leading-relaxed w-full max-w-none lg:text-sm">
        {c.subheading}
      </p>
    </RevealOnScroll>

    <RevealOnScroll delay={0.3}>
      <Button href={c.primaryCta.href} size="lg" arrow className="mt-2">
        {c.primaryCta.label}
      </Button>
    </RevealOnScroll>

    {c.contactInfo && (
      <RevealOnScroll delay={0.4}>
        <p className="text-white text-base sm:text-lg mt-8">
          {c.contactInfo.email}
          <span className="mx-2 opacity-50">·</span>
          {c.contactInfo.hours}
        </p>
      </RevealOnScroll>
    )}
  </div>
</div>





    </SectionWrapper>
  );
}
