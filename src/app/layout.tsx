import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-accent font-sans`}
      >
        {/* Subtle Noise / Grain Filter */}
        <div className="bg-noise" aria-hidden="true" />

        {/* Subtle ambient light gradient */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 65, 0.03) 0%, rgba(0,0,0,0) 60%)'
          }}
          aria-hidden="true"
        />

        <Navbar />
        <main className="flex-1 flex flex-col relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
