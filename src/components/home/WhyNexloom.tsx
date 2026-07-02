export default function WhyNexloom() {
  return (
    <>
      <section className="bg-[var(--color-bg-alt)] py-[88px] border-t border-b border-[var(--color-line)]">
        <div className="max-w-[1100px] mx-auto px-[28px]">
          <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.12] tracking-[-0.02em] font-extrabold max-w-[22ch] text-white">
            The kind of problems we solve
          </h2>
          <p className="text-[16px] text-[var(--color-muted)] mt-[18px] italic">
            We're building this practice deliberately and taking on a small number of clients. Here's the kind of work we take on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] gap-x-[40px] mt-[42px]">
            <div className="flex items-start gap-[14px] text-[16px] text-[var(--color-muted)] leading-[1.6]">
              <div className="shrink-0 w-[8px] h-[8px] rounded-full mt-[9px] bg-[#2b6cf6]" />
              <span>A team <strong className="text-white font-semibold">re-keying the same orders into three systems</strong>, hours a week, with errors creeping in.</span>
            </div>
            <div className="flex items-start gap-[14px] text-[16px] text-[var(--color-muted)] leading-[1.6]">
              <div className="shrink-0 w-[8px] h-[8px] rounded-full mt-[9px] bg-[#2b6cf6]" />
              <span>A business <strong className="text-white font-semibold">paying for five tools that don't talk to each other</strong>, and a sixth nobody uses.</span>
            </div>
            <div className="flex items-start gap-[14px] text-[16px] text-[var(--color-muted)] leading-[1.6]">
              <div className="shrink-0 w-[8px] h-[8px] rounded-full mt-[9px] bg-[#2b6cf6]" />
              <span><strong className="text-white font-semibold">Reporting that takes two days to assemble by hand</strong> and is out of date by the time it lands.</span>
            </div>
            <div className="flex items-start gap-[14px] text-[16px] text-[var(--color-muted)] leading-[1.6]">
              <div className="shrink-0 w-[8px] h-[8px] rounded-full mt-[9px] bg-[#2b6cf6]" />
              <span><strong className="text-white font-semibold">A manual process that worked at ten customers</strong> and is breaking at a hundred.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--color-bg)] py-[88px]">
        <div className="max-w-[1100px] mx-auto px-[28px]">
          <div className="max-w-[62ch]">
            <h2 className="text-[clamp(27px,3.6vw,38px)] leading-[1.12] tracking-[-0.02em] font-extrabold max-w-[22ch] text-white">
              About
            </h2>
            <p className="text-[18px] text-[var(--color-muted)] mt-[20px] max-w-[62ch]">
              We help established businesses fix the technology getting in the way of running them.
            </p>
            <p className="text-[18px] text-[var(--color-muted)] mt-[20px] max-w-[62ch]">
              We've spent years building and untangling software systems, and the pattern is almost always the same: the technology isn't the hard part. The hard part is that no one owns the whole picture. We work differently. We start with how the business actually runs, find what's truly slowing it down, and decide the right move with you before anything gets built. We'd rather save you money than sell you a project.
            </p>
            <p className="text-[18px] text-[var(--color-muted)] mt-[20px] max-w-[62ch]">
              Start with the "why" before the "what." Find the 20% of the problem causing 80% of the pain. Keep it simple enough that your team actually uses it. No jargon, no theater, no surprises.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
