"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "./products";

export default function ProductSearch({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return products;
    return products.filter((product) =>
      [product.name, product.category, product.description, product.color]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [products, query]);

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog-heading">
        <div>
          <p className="section-kicker">The shortlist</p>
          <h2 id="catalog-title">Five pairs worth knowing.</h2>
        </div>
        <label className="search-label">
          <span>Search products</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “trail”"
          />
        </label>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}>
              <div className="product-art" style={{ backgroundImage: `url(${product.image})`, backgroundColor: product.accent }} role="img" aria-label={`${product.brand} ${product.name}`} />
              <div className="product-card-copy">
                <div>
                  <p className="product-category">{product.brand} / {product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <p className="price">${product.price}</p>
              </div>
              <p className="product-description">{product.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="empty-state">No objects match “{query}”. Try another search.</p>
      )}
    </section>
  );
}
