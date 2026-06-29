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
      className="relative overflow-hidden min-h-[100vh] sm:min-h-[92vh] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(230,40%,14%) 50%, hsl(222,35%,18%) 100%)",
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
              <div className="gradient-border inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#12121a] text-primary">
                <SparkleIcon />
                <span className="text-xs sm:text-sm font-semibold text-[#f0f0f5]/80 tracking-wide">
                  {heroContent.pill}
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Headline */}
          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-[#f0f0f5] mb-4 sm:mb-6">
              {heroContent.headline}{" "}
              <GradientText>{heroContent.headlineGradient}</GradientText>
            </h1>
          </RevealOnScroll>

          {/* Subtitle */}
          <RevealOnScroll delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl text-[#8a8a9a] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
              {heroContent.subtitle}
            </p>
          </RevealOnScroll>

          {/* CTA buttons */}
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
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
            <div className="pt-6 sm:pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8a8a9a]/60 mb-4 sm:mb-5">
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