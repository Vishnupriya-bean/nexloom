"use client";

export default function CTA() {
  return (
    <section id="contact" className="py-[88px] border-none relative overflow-hidden bg-[var(--color-bg)]">
      <div className="max-w-[1100px] mx-auto px-[28px]">
        <div
          className="border border-[var(--color-line)] rounded-[20px] px-[32px] md:px-[64px] py-[64px]"
          style={{
            background: "linear-gradient(120deg, rgba(43,108,246,0.18), rgba(53,199,239,0.12))"
          }}
        >
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-[-0.02em] font-extrabold max-w-[20ch] text-white">
            Let's find what's <span className="gradient-text">slowing you down.</span>
          </h2>
          
          <p className="text-[18px] text-[var(--color-muted)] mt-[8px] max-w-[75ch]">
            A short call, no pitch. Bring your most annoying technology problem. We'll tell you what we'd look at first, whether we're the right fit, and what it would take.
          </p>

          <div className="mt-[24px] mb-[32px]">
            <a 
              href="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold text-[16px] px-[30px] py-[15px] rounded-[11px] hover:brightness-[1.08] hover:-translate-y-[1px] transition-all duration-150"
            >
              Book a call →
            </a>
          </div>

          <p className="text-[15px] text-[var(--color-muted)]">
            info@nexloom.co &nbsp;·&nbsp; Mon–Fri, 9am–6pm PT
          </p>
        </div>
      </div>
    </section>
  );
}
