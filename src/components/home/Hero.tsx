"use client";

import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroContent } from "@/lib/content/home";

function SparkleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[100vh] sm:min-h-[92vh] flex items-center bg-[#040915]"
      style={{
        background:
          "",
      }}
    >
      {/* Radial glow overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-0 left-1/4 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59,91,219,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[250px] sm:w-[375px] lg:w-[500px] h-[250px] sm:h-[375px] lg:h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(2,214,245,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">

          {/* Gradient-border pill */}
          <RevealOnScroll>
            <div className="inline-block mb-6 sm:mb-8">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-[#0a0f1e] px-3 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  {heroContent.pill}
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Headline */}
          <RevealOnScroll delay={0.1}>
            <h1 className="max-w-5xl mx-auto text-center font-bold tracking-[-0.05em] leading-[0.92] text-[#f5f7fb] mb-6">
              <span className="block text-3xl sm:text-6xl md:text-7xl lg:text-[4.5rem]">
                {heroContent.headline}
              </span>

              <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem]">
                <GradientText>{heroContent.headlineGradient}</GradientText>
              </span>
            </h1>
          </RevealOnScroll>

          {/* Subtitle */}
          <RevealOnScroll delay={0.2}>
            <p className="mx-auto max-w-[740px] px-2 sm:px-0 mb-8 sm:mb-10 text-center text-base sm:text-lg lg:text-xl leading-[1.6] text-[#8a8a9a]">
              {heroContent.subtitle}
            </p>
          </RevealOnScroll>



          {/* CTA buttons */}
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-[25px]">
              <Button href={heroContent.ctaPrimary.href} size="lg" arrow>
                {heroContent.ctaPrimary.label}
              </Button>
              {/* <Button href={heroContent.ctaSecondary.href} variant="outlineWhite" size="lg">
                {heroContent.ctaSecondary.label}
              </Button> */}




            </div>
          </RevealOnScroll>

          {/* Trusted companies */}
          <RevealOnScroll delay={0.5}>
            <div className="pt-0 sm:pt-0">
              <p className="text-xs   tracking-[0.04em] text-blue-200/100 mb-4 sm:mb-5">
                {heroContent.trustedLabel}
              </p>
              {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {heroContent.trustedCompanies.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold text-[#8a8a9a]/50 tracking-wider"
                  >
                    {name}
                  </span>
                ))}
              </div> */}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}



