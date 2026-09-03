import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "testdeploy",
  description: "A minimal Next.js app running on Cloudflare."
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
