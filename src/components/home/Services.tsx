

"use client";


import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { servicesContent } from "@/lib/content/home";
export default function Services() {
  return (
    <>
      {/* ── Section 1: Problem statement ── */}
      <section className="bg-[#0a0f1e] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-2">
  <div className="max-w-[1400px] mx-auto">
    <div className="max-w-3xl lg:ml-48">
      <RevealOnScroll>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">{servicesContent.sectionLabel} </span>
          <span className="text-[#4da6ff]">"{servicesContent.heading}"</span>
          <span className="text-white"> problem.</span>
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="mt-6 space-y-4">
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            {servicesContent.subheading1}
          </p>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            {servicesContent.subheading2}
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </div>
</section>
      {/* ── Section 2: How we work ── */}
      <section className="bg-[hsl(222,47%,7%)] py-16 sm:py-20 lg:py-20 px-5 sm:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto lg:ml-42">
    {/* Heading */}
    <RevealOnScroll>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10 sm:mb-12 tracking-tight">
        How we work
      </h2>
    </RevealOnScroll>

    {/* Cards grid */}
    <div className="grid grid-cols-1 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6 sm:gap-5">
      {servicesContent.items.map((item, i) => (
        <RevealOnScroll key={item.href} delay={i * 0.1}>
          <div className="bg-[hsl(222,45%,14%)] border border-white/10 rounded-2xl p-7 sm:p-7 flex flex-col gap-4 h-full">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white text-base font-bold shrink-0">
              {i + 1}
            </div>
            <h3 className="text-white font-bold text-xl sm:text-xl leading-snug">
              {item.headings}
            </h3>
            <p className="text-slate-400 text-base sm:text-[15px] leading-relaxed">
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