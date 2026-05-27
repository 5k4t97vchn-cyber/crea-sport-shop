import { CATEGORIES, type CategoryId } from "@/data/products";

type Props = {
  active: CategoryId | "all";
  onChange: (id: CategoryId | "all") => void;
};

export function Categories({ active, onChange }: Props) {
  const items: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: "Tout" },
    ...CATEGORIES,
  ];

  return (
    <section className="mt-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4">
        <h2 className="font-display text-xl font-semibold">Catégories</h2>
      </div>
      <div className="mx-auto mt-4 flex max-w-2xl gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
        {items.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={[
                "flex h-10 shrink-0 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand text-brand-foreground shadow-sm ring-1 ring-brand"
                  : "bg-card text-muted-foreground ring-1 ring-black/5 hover:text-foreground",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
