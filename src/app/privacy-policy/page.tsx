import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";

export const metadata: Metadata = seoConfig.privacyPolicy;

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <p className="text-muted-fore leading-relaxed">
        We collect information you provide directly, such as your name, email address, and any
        other details you share when contacting us, booking a call, or using our services. We also
        automatically collect certain technical data including IP addresses, browser type, and
        usage patterns through cookies and analytics tools.
      </p>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-muted-fore leading-relaxed mb-3">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-muted-fore">
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and fulfill your requests</li>
          <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
          <li>Analyze usage trends to enhance user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Data Sharing",
    content: (
      <p className="text-muted-fore leading-relaxed">
        We do not sell your personal information. We may share data with trusted third-party
        service providers who assist us in operating our business, such as hosting providers,
        analytics services, and communication tools. All third parties are contractually obligated
        to protect your data.
      </p>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <p className="text-muted-fore leading-relaxed">
        We implement industry-standard security measures to protect your personal information from
        unauthorized access, alteration, disclosure, or destruction. However, no method of
        transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "5. Your Rights",
    content: (
      <p className="text-muted-fore leading-relaxed">
        You have the right to access, correct, or delete your personal data. You may also opt out
        of marketing communications at any time. To exercise these rights, please contact us at{" "}
        <a href="mailto:hello@nexloom.com" className="text-primary hover:underline">
          hello@nexloom.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "6. Cookies",
    content: (
      <p className="text-muted-fore leading-relaxed">
        Our website uses cookies and similar tracking technologies to enhance your browsing
        experience. You can manage cookie preferences through your browser settings. Disabling
        cookies may affect certain features of our website.
      </p>
    ),
  },
  {
    title: "7. Changes to This Policy",
    content: (
      <p className="text-muted-fore leading-relaxed">
        We may update this Privacy Policy from time to time. We will notify you of any material
        changes by posting the updated policy on this page with a revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/70 max-w-lg mx-auto">
            Your privacy matters to us. Here's how we handle your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="space-y-9">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-fore mb-3">{s.title}</h2>
                  {s.content}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-fore mt-10 pt-8 border-t border-border-light">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
