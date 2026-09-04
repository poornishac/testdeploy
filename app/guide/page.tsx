import type { Metadata } from "next";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "How Take-Home Salary Is Calculated",
  description: "Learn how CTC becomes monthly in-hand salary in India, including employer benefits, PF, tax, and professional tax."
};

const sections = [["01", "CTC is not your salary", "Cost to company includes employer PF, gratuity, insurance, and sometimes a variable bonus. These are benefits or costs to the employer, not always money deposited into your account."], ["02", "Gross comes next", "Gross salary is what remains after employer-side components are removed from CTC. Your offer letter may call this annual gross or fixed gross salary."], ["03", "Then come deductions", "Employee PF, professional tax, and income tax are deducted before payment. Your state, salary structure, investments, and chosen regime can change the final number."], ["04", "Use it for decisions", "A take-home estimate is most useful when comparing offers, planning rent, or setting a savings rate. Keep a buffer until you see your first payslip."]];

export default function GuidePage() {
  return <main><SiteHeader /><section className="text-page guide-page"><p className="eyebrow">The explainer</p><h1>How your CTC becomes take-home pay.</h1><p className="page-lede">A plain-English walkthrough of the numbers between your offer letter and your monthly bank credit.</p><div className="guide-list">{sections.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section></main>;
}