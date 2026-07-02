export default function Services() {
  return (
    <>
      <section className="bg-[var(--color-bg-alt)] py-[88px] border-t border-b border-[var(--color-line)]">
        <div className="max-w-[1100px] mx-auto px-[28px]">
          <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.12] tracking-[-0.02em] font-extrabold max-w-[22ch] text-white">
            You don't have a technology problem. You have a <span className="gradient-text">"no one owns this"</span> problem.
          </h2>
          <p className="text-[18px] text-[var(--color-muted)] mt-[20px] max-w-[62ch]">
            Software teams want to build features. IT teams want to close tickets. Leadership wants results. When systems stop scaling, no one is accountable for the whole picture.
          </p>
          <p className="text-[18px] text-[var(--color-muted)] mt-[20px] max-w-[62ch]">
            We sit on your side of the table. We figure out exactly what's broken in your operations, design the fix, and stay involved until it's actually working in the real world.
          </p>
        </div>
      </section>

      <section id="how" className="bg-[var(--color-bg)] py-[88px]">
        <div className="max-w-[1100px] mx-auto px-[28px]">
          <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.12] tracking-[-0.02em] font-extrabold max-w-[22ch] text-white">
            How we work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[48px]">
            <div className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-[14px] p-[32px_28px]">
              <div className="w-[38px] h-[38px] rounded-[10px] font-bold flex items-center justify-center mb-[20px] text-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                1
              </div>
              <h3 className="text-white font-semibold text-[19px] tracking-[-0.01em] mb-[9px]">
                Find the real problem
              </h3>
              <p className="text-[var(--color-muted)] text-[15px]">
                We look at how the business actually runs, not only the tool annoying you this week. Often the thing slowing you down isn't the thing you noticed.
              </p>
            </div>

            <div className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-[14px] p-[32px_28px]">
              <div className="w-[38px] h-[38px] rounded-[10px] font-bold flex items-center justify-center mb-[20px] text-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                2
              </div>
              <h3 className="text-white font-semibold text-[19px] tracking-[-0.01em] mb-[9px]">
                Decide the right move
              </h3>
              <p className="text-[var(--color-muted)] text-[15px]">
                Build it, buy it, automate it, or leave it alone. We tell you the honest tradeoff and what it costs, in plain language, before anything gets built.
              </p>
            </div>

            <div className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-[14px] p-[32px_28px]">
              <div className="w-[38px] h-[38px] rounded-[10px] font-bold flex items-center justify-center mb-[20px] text-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                3
              </div>
              <h3 className="text-white font-semibold text-[19px] tracking-[-0.01em] mb-[9px]">
                See it through
              </h3>
              <p className="text-[var(--color-muted)] text-[15px]">
                We make sure it gets built right, fits how your team works, and keeps working after launch. One accountable partner, start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}