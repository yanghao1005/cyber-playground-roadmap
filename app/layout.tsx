import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { SiteShell } from "@/components/shared/site-shell";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyber Playground",
    template: "%s · Cyber Playground",
  },
  description: "A desk for generative art, a terminal, a snake, and a quiet room.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
