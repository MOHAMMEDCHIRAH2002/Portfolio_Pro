import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MiniNav from "@/components/MiniNav";
import MobileNav from "@/components/MobileNav";
import {
  generatePageMetadata,
  generatePersonJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = generatePageMetadata(
  "Mohammed Chirah — Full-Stack Developer",
  "Passionate full-stack developer specializing in .NET, React, Spring Boot, and AVEVA PI System integration. Based in Morocco, available for remote projects."
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = generatePersonJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Mobile Navigation */}
        <MobileNav />

        <div className="relative z-10 flex">
          {/* Left Sidebar — Desktop */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 lg:ml-[var(--sidebar-width)] lg:mr-[var(--mininav-width)] min-h-screen lg:border-l border-[var(--border-strong)] lg:pl-5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-8">
              {children}
            </div>
          </main>

          {/* Right Mini Nav — Desktop */}
          <MiniNav />
        </div>
      </body>
    </html>
  );
}
