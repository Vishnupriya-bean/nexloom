"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, MEGA_MENU } from "@/lib/content/nav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current &&
        triggerRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-[hsla(222,47%,11%,0.95)] backdrop-blur-2xl",
          scrolled ? "border-b border-white/10 shadow-lg shadow-black/20" : "border-b border-white/5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md transition-shadow group-hover:shadow-primary/40 group-hover:shadow-lg">
                <Image
                  src="/images/logo.svg"
                  alt="Nexloom"
                  width={28}
                  height={28}
                  className="object-contain"
                  onError={(e) => {
                    // fallback to text N if SVG fails
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
                <span className="text-white font-black text-lg leading-none hidden fallback-n">N</span>
              </div>
              <span className="font-bold text-xl text-white">
                Nex<span className="gradient-text">loom</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services trigger */}
              <div
                ref={triggerRef}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="relative"
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200",
                    megaOpen ? "text-accent" : "text-white/80 hover:text-accent"
                  )}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                >
                  Services
                  <motion.svg
                    animate={{ rotate: megaOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-md hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>

        {/* Mega Dropdown (desktop) */}
        <div
          ref={megaRef}
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
          className="hidden lg:block absolute left-0 right-0 top-full"
        >
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="bg-[hsl(222,47%,11%)] border-t border-white/10 shadow-2xl shadow-black/50"
              >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="grid grid-cols-4 gap-12">
                    {MEGA_MENU.map((col) => (
                      <div key={col.category}>
                        <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-5">
                          {col.category}
                        </h3>
                        <ul className="flex flex-col gap-3 mb-6">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="block px-3 py-1.5 text-sm text-white/60 rounded-lg hover:text-accent hover:bg-accent/10 hover:translate-x-1 transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={col.href}
                          onClick={() => setMegaOpen(false)}
                          className="inline-flex items-center gap-1 pl-3 text-sm font-semibold text-accent hover:gap-2 transition-all duration-200"
                        >
                          {col.cta}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu (slide down) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-[hsl(222,47%,9%)] border-l border-white/10 lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-black text-sm">N</span>
                  </div>
                  <span className="font-bold text-white">Nex<span className="gradient-text">loom</span></span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav */}
              <div className="px-4 py-4 flex flex-col gap-1">
                {/* Services accordion */}
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white rounded-lg hover:bg-white/5 hover:text-accent transition-colors"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <motion.svg
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-3"
                    >
                      {MEGA_MENU.map((col) => (
                        <Link
                          key={col.href}
                          href={col.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-white/70 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                        >
                          {col.category}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-white/10">
                  <Link
                    href="/book-a-call"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-md hover:shadow-primary/40 transition-all duration-300"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
