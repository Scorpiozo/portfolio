// apps/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anandhita Akhileshwaran - Portfolio",
  description: "Technical & Design Dossier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        {/* PASTE YOUR MAIN PAGE BACKGROUND CODE HERE */}
        {/* Example: If your background was a grid/gradient/radial div: */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Your main page dots, lines, or colors go here */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Children (your pages) sit on top */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
