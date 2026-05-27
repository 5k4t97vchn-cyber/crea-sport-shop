import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/store/Header";
import { Hero } from "@/components/store/Hero";
import { Categories } from "@/components/store/Categories";
import { ProductCard } from "@/components/store/ProductCard";
import { CartDrawer } from "@/components/store/CartDrawer";
import { PRODUCTS, type CategoryId } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Créa&Sport — Textile & équipement sport premium" },
      {
        name: "description",
        content:
          "Boutique Créa&Sport : t-shirts, mugs, ballons, casquettes et équipement de foot et basket. Design premium et personnalisation.",
      },
      { property: "og:title", content: "Créa&Sport" },
      {
        property: "og:description",
        content:
          "Textile et équipement de sport premium à personnaliser.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <CartProvider>
      <Store />
      <CartDrawer />
    </CartProvider>
  );
}

function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-surface pb-24 text-foreground selection:bg-brand/10">
      <Header search={search} onSearchChange={setSearch} />
      <main className="mx-auto max-w-2xl">
        <Hero />
        <Categories active={category} onChange={setCategory} />

        <section className="mt-8 px-4">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-xl font-semibold">
              Produits phares
            </h2>
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {filtered.length} article{filtered.length > 1 ? "s" : ""}
            </span>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Aucun produit ne correspond à votre recherche.
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>

        <footer className="mt-16 px-4 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Créa&amp;Sport
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Première version. Personnalisation
            et paiement bientôt.
          </p>
        </footer>
      </main>
    </div>
  );
}
