import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Sparkles, User, Mail, Star, Wand2 } from "lucide-react";
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
      { title: "Créa&Sport — Boutique sport & personnalisation" },
      {
        name: "description",
        content:
          "Créa&Sport : boutique sport, textile, mugs, ballons, casquettes, maillots et produits personnalisables.",
      },
      { property: "og:title", content: "Créa&Sport" },
      {
        property: "og:description",
        content:
          "Votre univers sport et personnalisation : textile, mugs, ballons, casquettes et cadeaux sportifs.",
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
  const [customProduct, setCustomProduct] = useState("Mug");
  const [customText, setCustomText] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;

      return (
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [search, category]);

  const articleLabel = filtered.length === 1 ? "article" : "articles";

  const goToCategory = (id: CategoryId) => {
    setCategory(id);
    setTimeout(() => {
      document
        .getElementById("boutique")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-surface pb-24 text-foreground selection:bg-brand/10">
      <Header search={search} onSearchChange={setSearch} />

      <main className="mx-auto max-w-2xl">
        <Hero />

        <section className="mt-4 px-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              onClick={() => goToCategory("tshirts")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les T-shirts
            </button>
            <button
              onClick={() => goToCategory("ballons")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les ballons
            </button>
            <button
              onClick={() => goToCategory("mugs")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les mugs
            </button>
            <button
              onClick={() => goToCategory("casquettes")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les casquettes
            </button>
            <button
              onClick={() => goToCategory("maillots-foot")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les maillots
            </button>
            <button
              onClick={() => goToCategory("tote-bags")}
              className="rounded-2xl bg-card px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-black/5"
            >
              Voir les tote bags
            </button>
          </div>
        </section>

        <section className="mt-6 px-4">
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

        <section id="boutique" className="mt-8 scroll-mt-24 px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand uppercase">
                Boutique
              </p>
              <h2 className="font-display text-xl font-semibold">
                Produits phares
              </h2>
            </div>
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

        <section className="mt-12 px-4">
          <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-2">
              <User className="size-5 text-brand" />
              <h2 className="font-display text-xl font-semibold">
                Compte client
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              La connexion client arrivera bientôt pour suivre les commandes,
              retrouver les favoris et gérer les personnalisations.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 rounded-full bg-muted px-4 py-2 text-xs font-bold text-muted-foreground"
            >
              Connexion bientôt disponible
            </button>
          </div>
        </section>

        <section className="mt-12 px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-accent p-6 text-brand-foreground">
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
                <Sparkles className="size-3" />
                Personnalisation
              </span>

              <h2 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-tight text-balance">
                Imaginez, créez, portez votre style.
              </h2>

              <p className="mt-2 max-w-[42ch] text-sm opacity-90 text-pretty">
                Personnalisez vos mugs dès maintenant en aperçu. Les T-shirts,
                tote bags, flocage avancé et aperçu IA seront ajoutés ensuite.
              </p>

              <div className="mt-5 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                <label className="text-xs font-bold uppercase tracking-widest">
                  Produit à personnaliser
                </label>
                <select
                  value={customProduct}
                  onChange={(e) => setCustomProduct(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-white px-3 py-3 text-sm font-semibold text-ink"
                >
                  <option>Mug</option>
                  <option>T-shirt bientôt disponible</option>
                  <option>Tote bag bientôt disponible</option>
                </select>

                <label className="mt-4 block text-xs font-bold uppercase tracking-widest">
                  Votre texte
                </label>
                <input
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Ex : Champion du dimanche"
                  className="mt-2 w-full rounded-xl bg-white px-3 py-3 text-sm font-semibold text-ink placeholder:text-ink/40"
                />

                <div className="mt-4 rounded-2xl bg-white p-5 text-center text-ink shadow-sm">
                  <Wand2 className="mx-auto mb-2 size-6 text-brand" />
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Aperçu simple
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    {customProduct}
                  </p>
                  <p className="mt-1 text-sm">
                    {customText || "Votre texte ici"}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-ink px-4 py-3 text-sm font-bold text-ink-foreground"
                >
                  Créer mon aperçu
                </button>

                <p className="mt-3 text-center text-xs opacity-90">
                  Paiement, upload logo, flocage avancé et IA bientôt
                  disponibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 px-4">
          <div className="flex items-center gap-2">
            <Star className="size-5 fill-brand text-brand" />
            <h2 className="font-display text-xl font-semibold">
              Avis clients
            </h2>
          </div>

          <div className="mt-5 grid gap-4">
            {[
              {
                name: "Laura",
                text: "Boutique claire, moderne et parfaite pour trouver un cadeau sportif.",
              },
              {
                name: "Nicolas",
                text: "J'aime beaucoup le style Créa&Sport et les idées de personnalisation.",
              },
              {
                name: "Amélie",
                text: "Très pratique sur téléphone, les catégories sont faciles à trouver.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-card p-4 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex gap-1 text-brand">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  "{review.text}"
                </p>
                <p className="mt-3 text-sm font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 px-4">
          <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-2">
              <Mail className="size-5 text-brand" />
              <h2 className="font-display text-xl font-semibold">
                Newsletter
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Recevez les nouveautés, offres sportives et futures options de
              personnalisation.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="min-w-0 flex-1 rounded-full bg-surface px-4 py-3 text-sm ring-1 ring-black/5 focus:ring-2 focus:ring-brand/40 focus:outline-none"
              />
              <button className="rounded-full bg-brand px-4 py-3 text-sm font-bold text-brand-foreground">
                OK
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12 px-4">
          <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-black/5">
            <h2 className="font-display text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Une question, une demande de produit ou une idée de
              personnalisation ? Contactez Créa&Sport.
            </p>

            <div className="mt-4 grid gap-3">
              <input
                placeholder="Nom"
                className="rounded-2xl bg-surface px-4 py-3 text-sm ring-1 ring-black/5 focus:ring-2 focus:ring-brand/40 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl bg-surface px-4 py-3 text-sm ring-1 ring-black/5 focus:ring-2 focus:ring-brand/40 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="rounded-2xl bg-surface px-4 py-3 text-sm ring-1 ring-black/5 focus:ring-2 focus:ring-brand/40 focus:outline-none"
              />
              <button className="rounded-full bg-ink px-4 py-3 text-sm font-bold text-ink-foreground">
                Envoyer
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-16 px-4 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Créa&amp;Sport
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Boutique sport, textile et
            personnalisation. Paiement bientôt disponible.
          </p>
        </footer>
      </main>
    </div>
  );
}
