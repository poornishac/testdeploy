"use client";

import Link from "next/link";
import { useCart } from "./cart-context";

export default function SiteHeader() {
  const { itemCount } = useCart();
  return <header className="site-header"><Link className="brand" href="/">FIELD / FORM</Link><Link className="cart-link" href="/cart">Cart <span>({itemCount})</span></Link></header>;
}