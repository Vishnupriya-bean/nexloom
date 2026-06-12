import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = seoConfig.contact;

const contactCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Visit Us",
    lines: ["Nexloom Headquarters", "San Francisco, CA 94105"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    title: "Email Us",
    lines: ["info@nexloom.co"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Call Us",
    lines: ["+1 (206) 919-8805", "Mon–Fri, 9am–6pm PST"],
  },
];

export default function ContactPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-lg mx-auto">
            Ready to start your next project? Get in touch with Nexloom.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            {contactCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl px-6 py-7 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-fore text-base mb-2">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-fore">{line}</p>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Schedule CTA */}
          <RevealOnScroll>
            <div className="max-w-xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 px-8 py-10 text-center">
              <h2 className="text-2xl font-bold text-fore mb-2">Prefer to Schedule a Call?</h2>
              <p className="text-muted-fore mb-6">Book a time that works for you.</p>
              <Button href="/book-a-call" size="lg" arrow>
                Book a Call
              </Button>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </main>
  );
}
