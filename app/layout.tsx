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
  title: "Webb Jobs - Add 15+ Experienced Sales Reps to Your Team in 6 Months",
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
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.svg', // Will be converted by browser
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon.svg',
    },
  ],
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
    title: "Webb Jobs - Add 15+ Experienced Sales Reps to Your Team in 6 Months",
    description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. First interviews in 5 days. Guaranteed results.",
    url: 'https://webbjobs.com',
    siteName: 'Webb Jobs',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webb Jobs - Add 15+ Experienced Sales Reps to Your Team in 6 Months",
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
        {/* Favicon - Simple W */}
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23DC2626'/%3E%3Ctext x='50' y='75' font-size='70' font-weight='bold' text-anchor='middle' fill='white' font-family='Arial,sans-serif'%3EW%3C/text%3E%3C/svg%3E" />
        
        {/* Resource Hints - Optimized for Wistia */}
        <link rel="preconnect" href="https://fast.wistia.com" />
        <link rel="preconnect" href="https://embed-ssl.wistia.com" />
        <link rel="preconnect" href="https://embedwistia-a.akamaihd.net" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://fast.wistia.com" />
        <link rel="dns-prefetch" href="https://embed-ssl.wistia.com" />
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
