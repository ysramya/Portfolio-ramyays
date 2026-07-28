import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Analytics from "@/components/Analytics";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramya Yerramilli — UX Researcher, Human-AI Interaction",
  description:
    "UX Researcher specializing in Human-AI Interaction and Responsible AI. Graduate Research Assistant at DePaul's RAISE Lab, with six years leading architecture and interior design projects before UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasLogo = existsSync(join(process.cwd(), "public/img/brand/logo.png"));

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. Dashlane) inject
          attributes like cz-shortcut-listen onto <body> after the server
          render, which otherwise trips React's hydration mismatch warning. */}
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Nav hasLogo={hasLogo} />
        <main className="flex-1">{children}</main>
        <Footer hasLogo={hasLogo} />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
