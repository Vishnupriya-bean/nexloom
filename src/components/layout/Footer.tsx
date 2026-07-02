import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(222,47%,6%)] pt-15 pb-11">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-3">
              <span className="font-base text-xl text-white">
                Nex<span className="text-accent">loom</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Technology advice for established businesses ready to fix what&apos;s slowing them down.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-8">
            <Link href="/how-we-help" className="text-slate-300 text-sm hover:text-accent transition-colors">
              How we help
            </Link>
            <Link href="/about" className="text-slate-300 text-sm hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 text-sm hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/book-a-call" className="text-slate-300 text-sm hover:text-accent transition-colors">
              Book a call
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm text-slate-500">
            <span>&copy; {year} Nexloom. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <a href="mailto:info@nexloom.co" className="hover:text-accent transition-colors">
              info@nexloom.co
            </a>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}