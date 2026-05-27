import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
};

export function Header({ search, onSearchChange }: Props) {
  const { totalCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-brand">
            <div
              className="size-4 bg-surface"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Créa&amp;Sport
          </span>
        </div>
        <button
          type="button"
          onClick={openCart}
          aria-label="Ouvrir le panier"
          className="relative flex size-10 items-center justify-center rounded-full bg-secondary text-foreground ring-1 ring-black/5 transition-transform active:scale-95"
        >
          <ShoppingBag className="size-4" strokeWidth={2} />
          {totalCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
              {totalCount}
            </span>
          )}
        </button>
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Trouver un maillot, un mug…"
            className="w-full rounded-xl bg-secondary py-2.5 pr-3 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-brand/30 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
