"use client";

import Link from "next/link";
import SiteHeader from "../site-header";
import { useCart } from "../cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return <main><SiteHeader /><section className="cart-page"><p className="section-kicker">Your selection</p><h1>Cart</h1>{items.length === 0 ? <div className="empty-cart"><p>Your cart is waiting for something good.</p><Link className="text-link" href="/">Browse the collection</Link></div> : <div className="cart-layout"><div className="cart-items">{items.map((item) => <div className="cart-item" key={item.slug}><div className="cart-art" style={{ backgroundColor: item.accent }}>{item.name.slice(0, 1)}</div><div className="cart-item-copy"><Link href={`/products/${item.slug}`}><h2>{item.name}</h2></Link><p>{item.color} · ${item.price}</p><div className="quantity-control"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.slug, item.quantity - 1)}>−</button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.slug, item.quantity + 1)}>+</button></div></div><div className="cart-item-end"><strong>${item.price * item.quantity}</strong><button className="remove-button" type="button" onClick={() => removeItem(item.slug)}>Remove</button></div></div>)}</div><aside className="order-summary"><h2>Summary</h2><div><span>Subtotal</span><strong>${subtotal}</strong></div><p>Shipping and tax calculated at checkout.</p><button className="checkout-button" type="button">Checkout</button></aside></div>}</section></main>;
}