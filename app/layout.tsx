import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://testdeploy.poornishachandrasekar.workers.dev"),
  title: { default: "Take Home India | Salary Calculator", template: "%s | Take Home India" },
  description: "Calculate your monthly in-hand salary in India from CTC. Compare the new and old income tax regimes with a clear salary breakup.",
  keywords: ["salary calculator India", "take home salary", "in hand salary calculator", "CTC to in hand", "income tax calculator"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Take Home India | Salary Calculator",
    description: "Know what lands in your bank account every month.",
    type: "website",
    siteName: "Take Home India"
  },
  verification: {
    google: "nVG2ShDMTHf_d84Rba2MWFntJLp0wLGN6QHHqBjZAF8"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
