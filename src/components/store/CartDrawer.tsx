import { Minus, Plus, X } from "lucide-react";
import { useCart, formatPrice } from "@/contexts/CartContext";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex justify-end transition-opacity duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Fermer le panier"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40"
      />
      <aside
        className={[
          "relative flex h-full w-full max-w-sm flex-col bg-card shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-label="Votre panier"
      >
        <header className="flex items-center justify-between border-b border-border p-6">
          <h2 className="font-display text-2xl font-semibold">Votre Panier</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fermer"
            className="flex size-9 items-center justify-center rounded-full bg-secondary"
          >
            <X className="size-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-lg text-muted-foreground">
                Votre panier est vide.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ajoutez vos produits phares Créa&amp;Sport.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="size-24 shrink-0 overflow-hidden rounded-xl bg-secondary ring-1 ring-black/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        {item.size && (
                          <p className="text-xs text-muted-foreground">
                            Taille {item.size}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Retirer ${item.name}`}
                        className="text-xs text-muted-foreground underline-offset-2 hover:underline"
                      >
                        Retirer
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-secondary px-2 py-1">
                        <button
                          type="button"
                          aria-label="Diminuer"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex size-6 items-center justify-center"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Augmenter"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex size-6 items-center justify-center"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatPrice(item.quantity * item.price)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-muted-foreground">Sous-total</span>
            <span className="font-display text-xl font-semibold">
              {formatPrice(subtotal)}
            </span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="w-full rounded-full bg-ink py-4 text-sm font-semibold text-ink-foreground transition-transform active:scale-95 disabled:opacity-40"
          >
            Passer à la commande
          </button>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Paiement bientôt disponible
          </p>
        </footer>
      </aside>
    </div>
  );
}
