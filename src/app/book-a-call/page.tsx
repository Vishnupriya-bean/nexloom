import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = seoConfig.bookACall;

const infoCards = [
  {
    title: "No Commitment",
    desc: "This is a free consultation. Ask questions, share your vision, explore possibilities.",
  },
  {
    title: "Expert Guidance",
    desc: "Speak directly with our technical team. Get actionable insights for your project.",
  },
  {
    title: "Clear Next Steps",
    desc: "Walk away with a clear understanding of timeline, scope, and investment.",
  },
];

export default function BookACallPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(222,47%,6%) 0%, hsl(222,47%,11%) 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Book a Complimentary Discovery Call
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Schedule a free 45-minute call with our team. We'll discuss your challenges, goals,
            and how Nexloom can help.
          </p>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Calendar embed */}
            <RevealOnScroll className="flex-1 w-full min-w-0">
              <div className="rounded-2xl overflow-hidden border border-border-light bg-white shadow-card">
                <iframe
                  src="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min?embed=true"
                  style={{ width: "100%", height: "750px", border: "none" }}
                  title="Book a Call with Nexloom"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>

            {/* Info cards */}
            <div className="flex flex-col gap-4 lg:w-72 shrink-0">
              {infoCards.map((card, i) => (
                <RevealOnScroll key={card.title} delay={i * 0.1} direction="right">
                  <div className="glass-card rounded-2xl px-5 py-5">
                    <h3 className="font-bold text-fore text-base mb-1">{card.title}</h3>
                    <p className="text-sm text-muted-fore leading-relaxed">{card.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
