import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart, formatPrice } from "@/contexts/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultSize =
    product.sizes && product.sizes.length > 1
      ? product.sizes[1] ?? product.sizes[0]
      : product.sizes?.[0];
  const [size, setSize] = useState<string | undefined>(defaultSize);
  const [qty, setQty] = useState(1);

  const hasSizes = !!product.sizes && product.sizes.length > 1;

  return (
    <article className="group flex flex-col">
      <div className="relative block w-full overflow-hidden rounded-2xl bg-secondary">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1024}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-card/90 shadow-sm backdrop-blur-sm">
          <Heart className="size-4 text-foreground" />
        </span>
        {product.isNew && (
          <span className="absolute top-2 left-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold tracking-wider text-brand-foreground uppercase">
            Nouveau
          </span>
        )}
      </div>

      <div className="mt-3">
        <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          {product.tagline}
        </p>
        <h3 className="mt-1 line-clamp-1 text-sm font-medium text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold">{formatPrice(product.price)}</p>
      </div>

      {hasSizes && (
        <div className="mt-3">
          <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            Taille
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes!.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={[
                  "h-8 min-w-8 rounded-lg px-2 text-[11px] font-bold transition-colors",
                  size === s
                    ? "bg-ink text-ink-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80",
                ].join(" ")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-full bg-secondary px-2 py-1">
          <button
            type="button"
            aria-label="Diminuer"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex size-7 items-center justify-center rounded-full text-foreground"
          >
            <Minus className="size-3.5" />
          </button>
          <span className="w-5 text-center text-xs font-semibold">{qty}</span>
          <button
            type="button"
            aria-label="Augmenter"
            onClick={() => setQty((q) => q + 1)}
            className="flex size-7 items-center justify-center rounded-full text-foreground"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            addItem(product, { size, quantity: qty });
            setQty(1);
          }}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand py-2 text-xs font-bold text-brand-foreground transition-transform active:scale-95"
        >
          <ShoppingBag className="size-3.5" />
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}
