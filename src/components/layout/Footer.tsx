import Link from "next/link";
import {
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_RESOURCES,
} from "@/lib/content/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[hsl(222,47%,6%)] to-[hsl(222,47%,11%)] pt-16 lg:pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <span className="text-white font-black text-lg leading-none">N</span>
              </div>
              <span className="font-bold text-xl text-white">
                Nex<span className="text-accent">loom</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Engineering, Cloud, AI, and Growth solutions for ambitious companies ready to scale.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="#" label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialLink>
              <SocialLink href="#" label="Twitter / X">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </SocialLink>
              <SocialLink href="#" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </SocialLink>
              <SocialLink href="mailto:hello@nexloom.co" label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="Services" links={FOOTER_SERVICES} />

          {/* Company */}
          <FooterColumn title="Company" links={FOOTER_COMPANY} />

          {/* Resources */}
          <FooterColumn title="Resources" links={FOOTER_RESOURCES} />

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {year} Nexloom. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="text-white/50 text-sm hover:text-accent transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-accent transition-colors">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary/30 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-bold text-white text-[0.9375rem] mb-4">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
