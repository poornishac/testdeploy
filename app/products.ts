export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  details: string;
  price: number;
  color: string;
  accent: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "field-notebook",
    name: "Field Notebook",
    category: "Desk goods",
    description: "A durable notebook for ideas that refuse to stay indoors.",
    details: "96 pages of warm, fountain-pen friendly paper bound in a cloth-wrapped cover.",
    price: 18,
    color: "Ochre",
    accent: "#d99445",
    featured: true
  },
  {
    slug: "everyday-tote",
    name: "Everyday Tote",
    category: "Carry goods",
    description: "A structured canvas carryall for commutes, markets, and weekends.",
    details: "Heavyweight cotton canvas with a wide shoulder strap and an interior pocket.",
    price: 42,
    color: "Ink",
    accent: "#42515b",
    featured: true
  },
  {
    slug: "studio-mug",
    name: "Studio Mug",
    category: "Kitchen goods",
    description: "A generous handmade mug with a quietly tactile glaze.",
    details: "Wheel-thrown stoneware, dishwasher safe, with a 12-ounce capacity.",
    price: 26,
    color: "Moss",
    accent: "#78866b",
    featured: true
  },
  {
    slug: "linen-throw",
    name: "Linen Throw",
    category: "Home goods",
    description: "A light, breathable layer for slow mornings and open windows.",
    details: "Washed European linen with softly fringed edges and a naturally relaxed drape.",
    price: 88,
    color: "Flax",
    accent: "#b8a78d"
  }
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://testdeploy.example.com";

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
