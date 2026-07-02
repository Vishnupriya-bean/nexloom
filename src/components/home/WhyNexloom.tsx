

"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { whyNexloomContent, type ValueItem } from "@/lib/content/home";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className="text-primary shrink-0">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

const VALUE_ICONS: React.ReactNode[] = [
  <svg key="excellence" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" /><path d="M10 22h4" />
  </svg>,
  <svg key="partnership" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg key="results" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  <svg key="improvement" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>,
];

function ValueCard({ item, icon, delay }: { item: ValueItem; icon: React.ReactNode; delay: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <GlassCard className="p-8 h-full flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-fore">{item.title}</h3>
        <p className="text-[0.9375rem] text-muted-fore leading-relaxed">{item.description}</p>
      </GlassCard>
    </RevealOnScroll>
  );
}

export default function WhyNexloom() {
  const c = whyNexloomContent;

  return (
    <>
      {/* ── About Nexloom / Problems we solve ───────────────────────── */}
      <SectionWrapper id="about" className="bg-[hsl(222,47%,11%)]">
  <div className="max-w-6xl mx-auto flex flex-col gap-6 lg:ml-40">

    {/* Heading — now pulling from aboutLabel, matching the screenshot */}
    <RevealOnScroll>
      <h2 className="text-base-16px sm:text-2xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl leading-tight">
        {c.aboutLabel}
      </h2>
    </RevealOnScroll>

    {/* Italic intro paragraph */}
    <RevealOnScroll delay={0.2}>
      <p className="text-slate-400 text-base sm:text-base leading-relaxed max-w-2xl italic">
        {c.aboutText}
      </p>
    </RevealOnScroll>

    {/* Problem list */}
    <RevealOnScroll delay={0.3}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mt-4">
        {c.capabilities.map((cap) => (
          <div key={cap} className="flex items-start gap-3">
            <span className="mt-2.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {cap}
            </p>
          </div>
        ))}
      </div>
    </RevealOnScroll>

   
  </div>
</SectionWrapper>

      {/* ── Our Values ────────────────────────────────────────────────── */}
      {/* <SectionWrapper className="bg-[hsl(220,14%,94%)]/30">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <RevealOnScroll>
            <SectionLabel>{c.valuesLabel}</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fore tracking-tight">
              {c.valuesHeading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {c.values.map((val, i) => (
            <ValueCard key={val.title} item={val} icon={VALUE_ICONS[i]} delay={i * 0.1} />
          ))}
        </div>
      </SectionWrapper> */}

      {/* ── About (mission/approach) ───────────────────────────────────── */}
      <SectionWrapper id="about-mission" className="bg-[hsl(222,47%,11%)] pb-6 lg:pb-10 ">
        <div className="max-w-2xl  mx-auto flex flex-col gap-6 lg:ml-40">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {c.valuesLabel}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {c.valuesHeading}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {c.valueHeading2}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {c.value2}
            </p>
          </RevealOnScroll>
        </div>
      </SectionWrapper>
    </>
  );
}



