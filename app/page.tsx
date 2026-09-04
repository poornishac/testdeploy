import ProductSearch from "./product-search";
import SiteHeader from "./site-header";
import { products } from "./products";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="catalog-hero">
        <div>
          <p className="eyebrow">Objects for the considered home</p>
          <h1>Useful things, made to last.</h1>
        </div>
        <p className="intro">A small collection of well-made goods for desks, kitchens, rooms, and the spaces between.</p>
      </section>
      <ProductSearch products={products} />
    </main>
  );
}
