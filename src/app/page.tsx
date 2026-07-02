import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyNexloom from "@/components/home/WhyNexloom";
import Stats from "@/components/home/Stats";

import CTA from "@/components/home/CTA";

export const metadata: Metadata = seoConfig.home;

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyNexloom />
      <Stats />
       <CTA />
      {/* <CaseStudiesPreview /> */}

    </main>
  );
}


