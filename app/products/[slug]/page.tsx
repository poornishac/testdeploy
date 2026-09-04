import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "../../add-to-cart";
import SiteHeader from "../../site-header";
import { getProduct, products } from "../../products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <main><SiteHeader /><Link className="back-link" href="/">← Back to collection</Link><article className="product-detail"><div className="detail-art" style={{ backgroundColor: product.accent }}><span>{product.name.slice(0, 1)}</span></div><div className="detail-copy"><p className="section-kicker">{product.category} / {product.color}</p><h1>{product.name}</h1><p className="detail-description">{product.description}</p><p className="detail-info">{product.details}</p><div className="detail-buy"><strong>${product.price}</strong><AddToCart product={product} /></div></div></article></main>;
}