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
  title: "Ramya Yerramilli | Product & Experience Strategist",
  description:
    "Product & Experience Strategist turning complex user and business problems into actionable product decisions: product discovery, research-led decision-making, and AI and complex workflows. Graduate Research Assistant at DePaul's RAISE Lab, with six years leading architecture and interior design projects before UX.",
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
