import type { Metadata } from "next";
import { CartProvider } from "./cart-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "testdeploy",
  description: "A minimal Next.js app running on Cloudflare.",
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
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
