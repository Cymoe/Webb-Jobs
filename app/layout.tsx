import type { Metadata } from "next";
import { Crimson_Text, IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team",
  description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. Guaranteed.",
  openGraph: {
    title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team",
    description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. Guaranteed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.loom.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.loom.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body className={`${crimsonText.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
