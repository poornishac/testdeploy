import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../site-header";

export const metadata: Metadata = { title: "Income Tax Slabs FY 2025-26 India", description: "Understand the new and old income tax regime slabs used in our India take-home salary calculator for FY 2025-26." };

const newSlabs = [["Up to ₹4 lakh", "Nil"], ["₹4 lakh – ₹8 lakh", "5%"], ["₹8 lakh – ₹12 lakh", "10%"], ["₹12 lakh – ₹16 lakh", "15%"], ["₹16 lakh – ₹20 lakh", "20%"], ["₹20 lakh – ₹24 lakh", "25%"], ["Above ₹24 lakh", "30%"]];

export default function TaxSlabsPage() {
  return <main><SiteHeader /><section className="text-page"><p className="eyebrow">Reference / FY 2025–26</p><h1>India’s income tax slabs, without the fog.</h1><p className="page-lede">The new regime is the default for most taxpayers. Use these rates as a guide, then check your final Form 16 or a tax professional.</p><div className="tax-table"><h2>New tax regime</h2>{newSlabs.map(([range, rate]) => <div key={range}><span>{range}</span><strong>{rate}</strong></div>)}</div><div className="note-box"><strong>Standard deduction</strong><p>Salaried taxpayers can claim a ₹75,000 standard deduction under the new regime. A 4% health and education cess applies to calculated tax.</p></div><Link className="text-link" href="/#calculator">Calculate your take-home salary ↗</Link></section></main>;
}