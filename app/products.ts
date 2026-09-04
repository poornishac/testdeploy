export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  details: string;
  price: number;
  color: string;
  accent: string;
  image: string;
  brand: string;
  brandUrl: string;
  verdict: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "asics-gel-kayano-31",
    name: "GEL-Kayano 31",
    category: "Best stability runner",
    description: "A calm, supportive daily trainer that makes long miles feel remarkably easy.",
    details: "4D GUIDANCE SYSTEM support, FF BLAST PLUS ECO cushioning, and a breathable engineered mesh upper.",
    price: 160,
    color: "White / Pure Silver",
    accent: "#d4dce0",
    image: "https://images.unsplash.com/photo-1554066484-3c8c7b4b7f25?auto=format&fit=crop&w=1200&q=85",
    brand: "ASICS",
    brandUrl: "https://www.asics.com/us/en-us/gel-kayano-31/p/ANA_1011B867-100.html",
    verdict: "The dependable choice for runners who want guidance without a heavy feeling.",
    featured: true
  },
  {
    slug: "new-balance-990v6",
    name: "990v6",
    category: "Best everyday sneaker",
    description: "The quietly iconic grey sneaker that balances heritage craft with modern comfort.",
    details: "Made in the USA with a pigskin suede and mesh upper, FuelCell foam, and a supportive ENCAP midsole.",
    price: 199,
    color: "Grey",
    accent: "#9da4a4",
    image: "https://images.unsplash.com/photo-1554130841-8fa0d8efc5c7?auto=format&fit=crop&w=1200&q=85",
    brand: "New Balance",
    brandUrl: "https://www.newbalance.com/pd/made-in-usa-990v6/M990V6-42010.html",
    verdict: "A grown-up daily sneaker with enough cushioning for an all-day city walk.",
    featured: true
  },
  {
    slug: "salomon-xt-6",
    name: "XT-6",
    category: "Best trail-to-town shoe",
    description: "Technical trail protection with the swagger to carry you through the rest of the day.",
    details: "Quicklace system, Agile Chassis construction, and Contagrip outsole for confident mixed terrain.",
    price: 200,
    color: "Black / Phantom",
    accent: "#303437",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=85",
    brand: "Salomon",
    brandUrl: "https://www.salomon.com/en-us/shop/product/xt-6.html",
    verdict: "The pair to pack when the itinerary includes both a mountain path and a late dinner.",
    featured: true
  },
  {
    slug: "adidas-samba-og",
    name: "Samba OG",
    category: "Best classic low-top",
    description: "A crisp terrace classic with a slim profile and more staying power than the trend cycle.",
    details: "Leather upper, suede T-toe overlay, gum rubber outsole, and the unmistakable three-stripe finish.",
    price: 100,
    color: "Cloud White / Core Black",
    accent: "#d7d1c5",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85",
    brand: "adidas",
    brandUrl: "https://www.adidas.com/us/samba-og-shoes/B75806.html",
    verdict: "A wardrobe anchor that works best when you stop trying to make it do too much.",
    featured: true
  },
  {
    slug: "hoka-clifton-9",
    name: "Clifton 9",
    category: "Best cushioned trainer",
    description: "A soft, buoyant road runner for easy days, errands, and rebuilding your mileage.",
    details: "Responsive CMEVA foam, a breathable knit upper, and an 8mm drop in a surprisingly light package.",
    price: 145,
    color: "Drizzle / Illusion",
    accent: "#b6bac5",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=85",
    brand: "HOKA",
    brandUrl: "https://www.hoka.com/en/us/mens-everyday-running-shoes/clifton-9/1127895.html",
    verdict: "Big comfort, low drama: the shoe that earns its place in a weekly rotation.",
    featured: true
  }
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://testdeploy.poornishachandrasekar.workers.dev";

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
