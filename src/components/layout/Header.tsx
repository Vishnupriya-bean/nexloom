"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 bg-[rgba(11,16,32,0.82)] backdrop-blur-[10px] border-b border-[var(--color-line)] transition-all duration-300",
        scrolled ? "shadow-lg shadow-black/20" : ""
      )}
    >
      <div className="max-w-[1100px] mx-auto px-[28px] flex items-center justify-between h-[72px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[11px] font-bold text-[21px] tracking-[-0.01em]" aria-label="Nexloom home">
          {/* We will hide the img if it fails to load, exactly like the HTML */}
          <img src="/nexloom-mark.svg" alt="" className="h-[32px] w-auto block" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <span className="font-bold text-[21px] tracking-[-0.01em]">
            <span className="text-white">Nex</span>
            <span className="text-[var(--color-blue-light)]">loom</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-[30px]">
          <Link href="#how" className="text-[var(--color-muted)] text-[15px] font-medium hover:text-white transition-colors">
            How we help
          </Link>
          <Link href="#about" className="text-[var(--color-muted)] text-[15px] font-medium hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-[var(--color-muted)] text-[15px] font-medium hover:text-white transition-colors">
            Contact
          </Link>
          <a 
            href="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold text-[15px] px-[22px] py-[12px] rounded-[11px] hover:brightness-[1.08] hover:-translate-y-[1px] transition-all duration-150"
          >
            Book a call →
          </a>
        </nav>

      </div>
    </header>
  );
}