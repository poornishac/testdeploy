"use client";

import { useState } from "react";

type Regime = "new" | "old";
const formatINR = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Math.max(0, value));

function calculateTax(income: number, regime: Regime) {
  const taxable = Math.max(0, income - (regime === "new" ? 75000 : 50000));
  if (regime === "new" && taxable <= 1200000) return 0;
  if (regime === "old" && taxable <= 500000) return 0;
  const slabs = regime === "new" ? [[400000, 0], [400000, 0.05], [400000, 0.1], [400000, 0.15], [400000, 0.2], [400000, 0.25], [Infinity, 0.3]] : [[250000, 0], [250000, 0.05], [500000, 0.2], [Infinity, 0.3]];
  let remaining = taxable;
  let tax = 0;
  for (const [limit, rate] of slabs) {
    const slabIncome = Math.min(remaining, limit);
    tax += slabIncome * rate;
    remaining -= slabIncome;
    if (remaining <= 0) break;
  }
  return tax * 1.04;
}

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [basicPercent, setBasicPercent] = useState(40);
  const [bonus, setBonus] = useState(0);
  const [regime, setRegime] = useState<Regime>("new");
  const basic = ctc * basicPercent / 100;
  const employerPf = Math.min(basic * 0.12, 21600) * 12;
  const gratuity = basic * 0.0481;
  const gross = Math.max(0, ctc - employerPf - gratuity - bonus);
  const employeePf = Math.min(basic * 0.12, 21600) * 12;
  const professionalTax = 2400;
  const incomeTax = calculateTax(gross, regime);
  const annualTakeHome = gross - employeePf - professionalTax - incomeTax;
  const rows = [["Annual CTC", ctc], ["Gross salary", gross], ["Employee PF", -employeePf], ["Professional tax", -professionalTax], ["Income tax", -incomeTax]];

  return <section className="calculator-wrap" id="calculator" aria-labelledby="calculator-title"><div className="calculator-intro"><p className="section-kicker">Your numbers, made clear</p><h2 id="calculator-title">Calculate your in-hand salary.</h2><p>Enter the numbers from your offer letter. We’ll estimate what reaches your bank account each month.</p><p className="disclaimer">Estimates use FY 2025–26 Indian tax slabs. Actual payroll can vary by state, deductions, exemptions, and employer policy.</p></div><div className="calculator-card"><div className="calculator-card-heading"><div><p className="card-label">Salary inputs</p><p>Adjust the assumptions to match your offer.</p></div><span className="live-pill"><i /> Live estimate</span></div><div className="input-grid"><label>Annual CTC<input type="number" min="0" step="10000" value={ctc} onChange={(event) => setCtc(Number(event.target.value))} /><small>₹ per year</small></label><label>Basic salary<input type="number" min="1" max="100" value={basicPercent} onChange={(event) => setBasicPercent(Number(event.target.value))} /><small>% of CTC</small></label><label>Annual bonus<input type="number" min="0" step="5000" value={bonus} onChange={(event) => setBonus(Number(event.target.value))} /><small>₹ included in CTC</small></label><label>Tax regime<select value={regime} onChange={(event) => setRegime(event.target.value as Regime)}><option value="new">New regime</option><option value="old">Old regime</option></select><small>FY 2025–26</small></label></div><div className="take-home"><p>Estimated monthly in-hand</p><strong>{formatINR(annualTakeHome / 12)}</strong><span>{formatINR(annualTakeHome)} per year</span></div><div className="salary-breakup"><h3>Estimated salary breakup</h3>{rows.map(([label, value]) => <div key={label as string}><span>{label}</span><strong className={(value as number) < 0 ? "deduction" : ""}>{(value as number) < 0 ? "− " : ""}{formatINR(Math.abs(value as number))}</strong></div>)}</div></div></section>;
}