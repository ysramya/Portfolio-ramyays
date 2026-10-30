import type { Metadata } from "next";
import { Prata, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VoiceflowChat from "@/components/VoiceflowChat";
import Analytics from "@/components/Analytics";
import MotionReady from "@/components/MotionReady";
import PageRibbon from "@/components/PageRibbon";
import DataRainBackground from "@/components/DataRainBackground";
import "./globals.css";

/* Two families, no third — see design-system.md §2.
   Prata carries every piece of display type (logo, H1, H2, card titles) at a
   single weight; the system explicitly forbids bolding it, so weight comes
   from size alone. DM Sans covers body, nav, labels, buttons and meta at
   300/400/500. */
const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramya Yerramilli | Product Strategy & Operations",
  description:
    "Product strategy and operations professional with an MS in Human-Computer Interaction. I turn complex user and operational problems into product decisions: product discovery, workflow improvement, research-led planning, and AI and emerging technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${dmSans.variable}`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. Dashlane) inject
          attributes like cz-shortcut-listen onto <body> after the server
          render, which otherwise trips React's hydration mismatch warning. */}
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <PageRibbon />
        <DataRainBackground />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <VoiceflowChat />
        <Analytics />
        <MotionReady />
      </body>
    </html>
  );
}
