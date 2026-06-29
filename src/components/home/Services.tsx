// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import GlassCard from "@/components/ui/GlassCard";
// import SectionLabel from "@/components/ui/SectionLabel";
// import SectionWrapper from "@/components/ui/SectionWrapper";
// import RevealOnScroll from "@/components/ui/RevealOnScroll";
// import ArrowIcon from "@/components/icons/ArrowIcon";
// import { servicesContent, type ServiceItem } from "@/lib/content/home";

// const SERVICE_ICONS: Record<string, React.ReactNode> = {
//   "/services/engineering-product": (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//       <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
//     </svg>
//   ),
//   "/services/cloud-devops": (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//     </svg>
//   ),
//   "/services/ai-automation": (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
//       <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
//     </svg>
//   ),
//   "/services/integrations-growth": (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//       fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//       <path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" />
//       <line x1="8" x2="16" y1="12" y2="12" />
//     </svg>
//   ),
// };

// function ServiceCard({ item, delay }: { item: ServiceItem; delay: number }) {
//   return (
//     <RevealOnScroll delay={delay}>
//       <Link href={item.href} className="group block h-full">
//         <GlassCard className="h-full flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(17,24,39,0.18)] transition-all duration-300">
//           {/* Image */}
//           <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
//             <Image
//               src={item.image}
//               alt={item.imageAlt}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-110"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               loading="lazy"
//             />
//           </div>

//           {/* Body */}
//           <div className="flex flex-col flex-1 p-8 gap-4">
//             {/* Gradient icon */}
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0">
//               {SERVICE_ICONS[item.href]}
//             </div>

//             <h3 className="text-xl font-bold text-fore">{item.title}</h3>

//             <p className="text-sm text-muted-fore leading-relaxed">{item.description}</p>

//             <p className="text-sm font-semibold text-muted-fore">{item.outcome}</p>

//             {/* Sub-services */}
//             <ul className="flex flex-col gap-1.5 flex-1">
//               {item.subServices.map((sub) => (
//                 <li key={sub} className="flex items-center gap-2 text-sm text-muted-fore">
//                   <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
//                   {sub}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 mt-2">
//               {item.ctaLabel}
//               <ArrowIcon className="w-4 h-4" />
//             </div>
//           </div>
//         </GlassCard>
//       </Link>
//     </RevealOnScroll>
//   );
// }

// export default function Services() {
//   return (
//     <SectionWrapper id="services" className="bg-[hsl(220,14%,94%)]/30">
//       {/* Header */}
//       <div className="mb-14 flex flex-col gap-6 bg-[#0d1b2e] px-8 py-10 rounded-xl max-w-3xl">
//         <RevealOnScroll>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
//             <span className="text-white">{servicesContent.sectionLabel} </span>
//             <span className="text-[#4da6ff]">"{servicesContent.heading}"</span>
//             <span className="text-white"> problem.</span>
//           </h2>
//         </RevealOnScroll>

//         <RevealOnScroll delay={0.1}>
//           <div className="space-y-4">
//             <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
//               {servicesContent.subheading1}
//             </p>

//             <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
//               {servicesContent.subheading2}
//             </p>
//           </div>
//         </RevealOnScroll>

//       </div>

//       {/* 2×2 grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
//   {servicesContent.items.map((item, i) => (
//     <div
//       key={item.href}
//       className="bg-[#1e2235] border border-white/10 rounded-xl p-6 flex flex-col gap-3"
//     >
//       {/* Numbered badge */}
//       <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-medium shrink-0">
//         {item.title}
//       </div>

//       {/* Heading */}
//       <h3 className="text-white font-medium text-base">{item.heading}</h3>

//       {/* Description */}
//       <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
//     </div>
//   ))}
// </div>
//     </SectionWrapper>
//   );
// }


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