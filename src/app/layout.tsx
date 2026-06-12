import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexloom",
  description: "Senior-led software engineering consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
