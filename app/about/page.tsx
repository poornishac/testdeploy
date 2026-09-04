import type { Metadata } from "next";
import SiteHeader from "../site-header";

export const metadata: Metadata = { title: "About Take Home India", description: "Learn how Take Home India estimates in-hand salary and why salary transparency matters." };

export default function AboutPage() {
  return <main><SiteHeader /><section className="text-page about-page"><p className="eyebrow">About Take Home India</p><h1>Salary clarity should not require a finance degree.</h1><div className="about-copy"><p>Take Home India turns the jargon in an offer letter into a useful monthly estimate. It is designed for job seekers, employees comparing offers, and anyone trying to plan their next move with real numbers.</p><p>Our calculator is an educational estimate, not tax advice. We show our assumptions clearly because your payroll team, state, exemptions, and deductions ultimately determine your payslip.</p></div></section></main>;
}