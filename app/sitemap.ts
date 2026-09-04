import type { MetadataRoute } from "next";
import { products, siteUrl } from "./products";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));
  const productPages = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));
  return [...pages, ...productPages];
}
