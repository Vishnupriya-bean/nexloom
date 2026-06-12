import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import RootShell from "@/components/layout/RootShell";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nexloom | Senior-Led Software Engineering",
    template: "%s | Nexloom",
  },
  description:
    "Senior-led software engineering consultancy specialising in product engineering, cloud DevOps, AI automation, and integrations.",
  metadataBase: new URL("https://nexloom.co"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
