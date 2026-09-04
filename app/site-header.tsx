"use client";

import Link from "next/link";
export default function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/">TAKE HOME <i>INDIA</i></Link><nav className="main-nav" aria-label="Main navigation"><Link href="/tax-slabs">Tax slabs</Link><Link href="/guide">How it works</Link><Link href="/about">About</Link></nav><Link className="header-cta" href="/#calculator">Calculate salary <span>↗</span></Link></header>;
}