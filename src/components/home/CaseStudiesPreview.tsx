"use client";

import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { caseStudiesPreviewContent, type CaseStudyPreviewItem } from "@/lib/content/home";

function DiagonalArrowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}

// function CaseCard({ item, delay }: { item: CaseStudyPreviewItem; delay: number }) {
//   return (
//     <RevealOnScroll delay={delay}>
//       <Link href={item.href} className="group block h-full">
//         <GlassCard className="h-full flex flex-col overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_50px_-12px_rgba(17,24,39,0.18)] transition-all duration-300">
//           {/* Image */}
//           <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
//             <Image
//               src={item.image}
//               alt={item.imageAlt}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-110"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//               loading="lazy"
//             />
//           </div>

//           {/* Body */}
//           <div className="flex flex-col flex-1 p-8 gap-3">
//             <span className="text-xs font-bold uppercase tracking-widest text-primary">
//               {item.category}
//             </span>

//             <div className="flex items-start justify-between gap-3">
//               <h3 className="text-xl font-bold text-fore leading-snug flex-1">
//                 {item.title}
//               </h3>
//               <span className="shrink-0 text-muted-fore opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 mt-0.5">
//                 <DiagonalArrowIcon />
//               </span>
//             </div>

//             <p className="text-sm text-muted-fore leading-relaxed flex-1">
//               {item.excerpt}
//             </p>

//             <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 mt-1">
//               Read Case Study
//               <DiagonalArrowIcon className="w-4 h-4" />
//             </div>
//           </div>
//         </GlassCard>
//       </Link>
//     </RevealOnScroll>
//   );
// }

export default function CaseStudiesPreview() {
  const c = caseStudiesPreviewContent;
   return null;
  // return (
  //   <SectionWrapper  id="case-studies" className="bg-[hsl(222,47%,11%)]">
  //     {/* Header */}
  //     {/* <div className="text-center mb-14 flex flex-col items-center gap-4">
  //       <RevealOnScroll>
  //         <SectionLabel>{c.sectionLabel}</SectionLabel>
  //       </RevealOnScroll>
  //       <RevealOnScroll delay={0.1}>
  //         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fore tracking-tight max-w-2xl">
  //           {c.heading}
  //         </h2>
  //       </RevealOnScroll>
  //       <RevealOnScroll delay={0.2}>
  //         <p className="text-muted-fore text-lg max-w-2xl leading-relaxed">
  //           {c.subheading}
  //         </p>
  //       </RevealOnScroll>
  //     </div> */}

  //     {/* 2×2 card grid */}
  //     {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
  //       {c.items.map((item, i) => (
  //         <CaseCard key={item.href} item={item} delay={i * 0.1} />
  //       ))}
  //     </div> */}

  //     {/* <RevealOnScroll delay={0.2}>
  //       <div className="text-center">
  //         <Button href={c.viewAllCta.href} variant="outline" size="lg">
  //           {c.viewAllCta.label}
  //         </Button>
  //       </div>
  //     </RevealOnScroll> */}
  //   </SectionWrapper>

  // );
}
