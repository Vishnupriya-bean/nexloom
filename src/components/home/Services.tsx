

"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { servicesContent } from "@/lib/content/home";

export default function Services() {
  return (
    <>
      {/* ── Section 1: Problem statement ── */}
      <section className="bg-[#0a0f1e] py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">{servicesContent.sectionLabel} </span>
              <span className="text-[#4da6ff]">"{servicesContent.heading}"</span>
              <span className="text-white"> problem.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="mt-6 space-y-4">
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                {servicesContent.subheading1}
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                {servicesContent.subheading2}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Section 2: How we work ── */}
      <section className="bg-[#0d1117] py-16 sm:py-20 px-5 sm:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <RevealOnScroll>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-8 sm:mb-10">
        How we work
      </h2>
    </RevealOnScroll>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5">
      {servicesContent.items.map((item, i) => (
        <RevealOnScroll key={item.href} delay={i * 0.1}>
          <div className="bg-[#161b2e] border border-white/10 rounded-2xl p-6 sm:p-6 flex flex-col gap-4 h-full">
            {/* Number badge */}
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-base font-bold shrink-0">
              {i + 1}
            </div>

            {/* Step heading */}
            <h3 className="text-white font-bold text-xl sm:text-lg leading-snug">
              {item.headings}
            </h3>

            {/* Step description */}
            <p className="text-slate-400 text-base sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
</section>
    </>
  );
}