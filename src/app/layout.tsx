import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";
import Preloader from "@/components/ui/Preloader";
import CinemaOpen from "@/components/ui/CinemaOpen";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export const metadata: Metadata = {
    title: "Portfolio Habib m.s",
  description:
    "Portfolio of Habib m.s, a full-stack web developer building modern, scalable web applications with React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Habib m.s",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Habib m.s" }],
  creator: "Habib m.s",
  openGraph: {
    title: "Habib m.s — Full-Stack Web Developer",
    description:
       "Full-stack web developer building modern, scalable web applications.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} scroll-smooth dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-canvas text-fg antialiased selection:bg-accent selection:text-on-accent flex flex-col">
        {/* baki ager moto */}

        <Preloader />
        <CinemaOpen />
        <CustomCursor />
        <Navbar />
        <div className="flex-1 w-full flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
