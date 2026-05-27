import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="px-4 py-4">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-ink-foreground">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1200}
          height={800}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <div className="font-display text-8xl font-black tracking-tighter uppercase italic">
            CRÉA
          </div>
        </div>
        <div className="relative z-10">
          <p className="mb-3 text-[10px] font-bold tracking-widest text-brand uppercase">
            Nouvelle collection
          </p>
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tighter text-balance">
            L&apos;énergie du sport,
            <br />
            le style en plus.
          </h1>
          <p className="mt-4 max-w-[40ch] text-sm text-neutral-300 text-pretty">
            Textile et équipement premium à personnaliser. Conçu pour ceux qui
            jouent leur propre jeu.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand py-2 pr-4 pl-4 text-sm font-medium text-brand-foreground ring-1 ring-brand transition-transform active:scale-95"
          >
            Voir la collection
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </button>
        </div>
        <div className="absolute -right-12 -bottom-12 size-64 rounded-full bg-brand/30 blur-3xl" />
      </div>
    </section>
  );
}
