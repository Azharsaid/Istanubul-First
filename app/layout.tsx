import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://first-istanbul-experience.pages.dev"),
  title: "FIRST Istanbul Experience",
  description: "Dar Aldawa's premium scientific symposium experience in Istanbul, 15–18 September 2026.",
  applicationName: "FIRST Istanbul Experience",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "FIRST Istanbul Experience",
    description: "Steps to Effective Treatment · 15–18 September 2026 · Istanbul",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "FIRST Istanbul Experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRST Istanbul Experience",
    description: "Steps to Effective Treatment · 15–18 September 2026 · Istanbul",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
