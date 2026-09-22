import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webb Jobs - Add 25+ Experienced Salespeople to Your Team",
  description: "We build, run, and scale your recruiting engine. Automate the pipeline and fill your calendar with A-players. Guaranteed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
