import type { MetadataRoute } from "next";
import { siteUrl } from "./products";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tax-slabs", "/guide", "/about"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));
  return pages;
}
