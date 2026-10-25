import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { meta } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/** Tab title, search description and the social link preview card. */
export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [{ url: meta.thumbnail, ...meta.thumbnailSize, alt: meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [{ url: meta.thumbnail, ...meta.thumbnailSize, alt: meta.title }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3a55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0b2f47] text-white`}>{children}</body>
    </html>
  );
}
