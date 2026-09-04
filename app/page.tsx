import type { Metadata } from "next";
import SalaryCalculator from "./salary-calculator";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  title: "Salary Calculator India: Calculate Take-Home Salary from CTC",
  description: "Free India salary calculator to estimate monthly in-hand salary from CTC, including PF, professional tax, bonus, and new or old tax regime.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="catalog-hero salary-hero">
        <div>
          <p className="eyebrow">Salary calculator India / Updated for FY 2025–26</p>
          <h1>What will actually reach your bank account?</h1>
        </div>
        <p className="intro">Turn your CTC into a clear monthly take-home estimate, without the spreadsheet headache.</p>
      </section>
      <div className="benefit-strip" aria-label="Calculator benefits"><span><b>01</b> Fast estimate</span><span><b>02</b> India-specific deductions</span><span><b>03</b> Clear salary breakup</span></div>
      <SalaryCalculator />
    </main>
  );
}
