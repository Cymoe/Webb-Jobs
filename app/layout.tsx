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
  metadataBase: new URL('https://webbjobs.com'),
  title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team in 90 Days",
  description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. First interviews in 5 days. Guaranteed results.",
  keywords: ["D2D recruiting", "door to door sales", "sales recruiting", "roofing sales", "solar sales", "home services recruiting"],
  authors: [{ name: "Webb Jobs" }],
  creator: "Webb Jobs",
  publisher: "Webb Jobs",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#DC2626',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team in 90 Days",
    description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. First interviews in 5 days. Guaranteed results.",
    url: 'https://webbjobs.com',
    siteName: 'Webb Jobs',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team in 90 Days",
    description: "We build, run, and scale your recruiting engine. First interviews in 5 days. Guaranteed results.",
  },
  alternates: {
    canonical: 'https://webbjobs.com',
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
        {/* Resource Hints */}
        <link rel="preconnect" href="https://www.loom.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://www.loom.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        
        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Webb Jobs" />
      </head>
      <body className={`${crimsonText.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
