"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "./products";

type CartItem = Product & { quantity: number };
type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const savedCart = window.localStorage.getItem("field-form-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("field-form-cart", JSON.stringify(items));
  }, [items]);

  function addItem(product: Product) {
    setItems((current) => {
      const existing = current.find((item) => item.slug === product.slug);
      if (existing) return current.map((item) => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
  }

  function removeItem(slug: string) {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }

  function updateQuantity(slug: string, quantity: number) {
    if (quantity < 1) return removeItem(slug);
    setItems((current) => current.map((item) => item.slug === slug ? { ...item, quantity } : item));
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  return <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, itemCount }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}