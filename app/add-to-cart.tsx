"use client";

import { useState } from "react";
import type { Product } from "./products";
import { useCart } from "./cart-context";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  function handleAdd() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }
  return <button className="add-button" type="button" onClick={handleAdd}>{added ? "Added to cart" : "Add to cart"}</button>;
}