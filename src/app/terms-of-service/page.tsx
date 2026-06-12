import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";

export const metadata: Metadata = seoConfig.termsOfService;

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: `By accessing or using the services provided by Nexloom ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. Services",
    text: "Nexloom provides engineering, cloud, AI, and growth solutions for businesses. The specific scope, deliverables, and timeline for any engagement will be defined in a separate statement of work or service agreement between you and Nexloom.",
  },
  {
    title: "3. Intellectual Property",
    text: "All content on this website, including text, graphics, logos, and software, is the property of Nexloom and is protected by intellectual property laws. Unless otherwise agreed in a service agreement, deliverables created for clients become the client's property upon full payment.",
  },
  {
    title: "4. Payment Terms",
    text: "Payment terms will be outlined in individual service agreements. Unless otherwise specified, invoices are due within 30 days of issuance. Late payments may incur additional fees as specified in the applicable agreement.",
  },
  {
    title: "5. Limitation of Liability",
    text: "To the maximum extent permitted by law, Nexloom shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "6. Confidentiality",
    text: "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. This obligation survives the termination of any service agreement.",
  },
  {
    title: "7. Termination",
    text: "Either party may terminate a service engagement with 30 days' written notice, unless otherwise specified in the applicable agreement. Upon termination, all outstanding fees for work completed become immediately due.",
  },
  {
    title: "8. Governing Law",
    text: "These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, binding arbitration.",
  },
  {
    title: "9. Changes to Terms",
    text: "We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page. Your continued use of our services after changes are posted constitutes acceptance of the updated terms.",
  },
];

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-white/70 max-w-lg mx-auto">
            The terms and conditions governing your use of our services.
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
                  <p className="text-muted-fore leading-relaxed">{s.text}</p>
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
