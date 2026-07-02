import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070b16] text-[var(--color-muted)] pt-[58px] pb-[40px] text-[14px] border-t border-[var(--color-line)]">
      <div className="max-w-[1100px] mx-auto px-[28px]">

        {/* Top row: brand + nav */}
        <div className="flex flex-wrap justify-between gap-[24px]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block font-bold text-[18px] tracking-[-0.01em] mb-[14px]">
              <span className="text-white">Nex</span><span className="text-[var(--color-blue-light)]">loom</span>
            </Link>
            <p className="max-w-[34ch]">
              Technology advice for established businesses ready to fix what's slowing them down.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-[28px]">
            <Link href="#how" className="hover:text-white transition-colors">
              How we help
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/book-a-call" className="hover:text-white transition-colors">
              Book a call
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-[36px] pt-[24px] border-t border-[var(--color-line)] text-[#6b7488]">
          <div className="flex flex-wrap items-center gap-[8px]">
            <span>&copy; {year} Nexloom. All rights reserved.</span>
            <span>&nbsp;·&nbsp;</span>
            <a href="mailto:info@nexloom.co" className="hover:text-white transition-colors">
              info@nexloom.co
            </a>
            <span>&nbsp;·&nbsp;</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>&nbsp;·&nbsp;</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}