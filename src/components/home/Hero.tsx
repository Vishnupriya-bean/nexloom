export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center pt-[52px] pb-[92px] bg-[var(--color-bg)]">
      <div className="pointer-events-none absolute inset-0 -top-[40%] h-[520px]" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(60% 80% at 50% 0%, rgba(43,108,246,0.22), transparent 70%)"
          }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-[28px]">
        <div className="inline-block text-[var(--color-muted)] font-semibold text-[13px] tracking-[0.12em] uppercase border border-[var(--color-line)] rounded-[20px] px-[16px] py-[7px] mb-[28px]">
          Technology advisor for established businesses
        </div>

        <h1 className="text-[clamp(40px,6.4vw,64px)] leading-[1.03] tracking-[-0.03em] font-extrabold max-w-[15ch] mx-auto text-white">
          Your business outgrew its tools. <span className="gradient-text">We fix that.</span>
        </h1>

        <p className="text-[clamp(18px,2.3vw,21px)] text-[var(--color-muted)] my-[26px] mx-auto max-w-[56ch]">
          You don't need a dev shop. You need an architect to untangle the mess, tell you the right move, and make sure it gets built right.
        </p>

        <div className="relative mt-[22px]">
          <a 
            href="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold text-[16px] px-[30px] py-[15px] rounded-[11px] hover:brightness-[1.08] hover:-translate-y-[1px] transition-all duration-150"
          >
            Book a call →
          </a>
          <span className="block mt-[18px] text-[14px] text-[var(--color-muted)]">
            No pitch. Bring your most annoying technology problem.
          </span>
        </div>
      </div>
    </section>
  );
}
