import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
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
        content: "Textile et équipement de sport premium à personnaliser.",
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

  const articleLabel = filtered.length === 1 ? "article" : "articles";

  return (
    <div className="min-h-screen bg-surface pb-24 text-foreground selection:bg-brand/10">
      <Header search={search} onSearchChange={setSearch} />
      <main className="mx-auto max-w-2xl">
        <Hero />

        {/* Barre de recherche visible sous la bannière */}
        <section className="px-4">
          <label htmlFor="search-main" className="sr-only">
            Rechercher un produit
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-main"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un t-shirt, un ballon, un mug…"
              className="w-full rounded-2xl bg-card py-4 pr-4 pl-12 text-base text-foreground shadow-sm ring-1 ring-black/5 placeholder:text-muted-foreground focus:ring-2 focus:ring-brand/40 focus:outline-none"
            />
          </div>
        </section>

        <Categories active={category} onChange={setCategory} />

        <section className="mt-8 px-4">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-xl font-semibold">
              Produits phares
            </h2>
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {filtered.length} {articleLabel}
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

        {/* Personnalisation & flocage */}
        <section className="mt-12 px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-accent p-6 text-brand-foreground">
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
                <Sparkles className="size-3" />
                Bientôt disponible
              </span>
              <h2 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-tight text-balance">
                Personnalisation &amp; flocage
              </h2>
              <p className="mt-2 max-w-[42ch] text-sm opacity-90 text-pretty">
                Ajoutez votre nom, votre numéro ou votre logo sur nos textiles
                et équipements. Un module dédié arrive très bientôt.
              </p>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-ink/90 px-4 py-2 text-xs font-bold text-ink-foreground opacity-90"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
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
