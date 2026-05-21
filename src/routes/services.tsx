import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — The Gentlemen's Lounge Barbershop Tukwila" },
      { name: "description", content: "Haircuts, fades, beard trims, lineups, kids cuts and the full The Gentlemen's Lounge experience. View our menu and pricing." },
      { property: "og:title", content: "Services & Pricing — The Gentlemen's Lounge Barbershop" },
      { property: "og:description", content: "Haircuts, fades, beard trims, lineups and more in Tukwila." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    name: "Mohawks, Flat Tops, Afros",
    price: 65,
    duration: "45 minutes",
    desc: "Razor included. Designs $5–$10 extra.",
    features: ["Razor included", "Designs available"],
    featured: true,
  },
  {
    name: "Haircut W/ Beard",
    price: 55,
    duration: "30 minutes",
    desc: "Straight razor included. Designs $5–$10 extra.",
    features: ["Straight razor included", "Designs available"],
    featured: true,
  },
  {
    name: "Haircut without Beard",
    price: 45,
    duration: "30 minutes",
    desc: "Straight razor included. Designs $5–$10 extra.",
    features: ["Straight razor included", "Designs available"],
    featured: false,
  },
  {
    name: "Temple Taper Fade W/ Beard",
    price: 40,
    duration: "25 minutes",
    desc: "No haircut off top. Straight razor included.",
    features: ["Straight razor included"],
    featured: false,
  },
  {
    name: "Temple Taper Fade (Without Beard)",
    price: 30,
    duration: "15 minutes",
    desc: "No haircut off top. Temple taper, neck taper (razor included).",
    features: ["Razor included", "Temple & neck taper"],
    featured: false,
  },
  {
    name: "Line Up",
    price: 25,
    duration: "15 minutes",
    desc: "Razor-sharp lineup to refresh your cut between visits.",
    features: ["Razor included"],
    featured: false,
  },
  {
    name: "Kids Cut (Ages 5–12)",
    price: 35,
    duration: "25 minutes",
    desc: "Patient, careful cuts for the next generation. Designs $5–$15 extra.",
    features: ["Designs available"],
    featured: false,
  },
  {
    name: "Hair Enhancement / Fiber (Additional)",
    price: 10,
    duration: "10 minutes",
    desc: "Add-on hair fiber enhancement for fuller-looking coverage.",
    features: ["Add-on service"],
    featured: false,
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-card border-b border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-4">The Menu</p>
          <h1 className="text-4xl sm:text-6xl font-bold">Services & Pricing</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground">
            Honest pricing. Premium results. By appointment only.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.name}
                className={`relative p-8 border transition-all hover:-translate-y-1 ${
                  s.featured
                    ? "bg-card border-gold"
                    : "bg-card border-border hover:border-gold"
                }`}
              >
                {s.featured && (
                  <span className="absolute top-0 right-0 bg-gold text-gold-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-bold uppercase tracking-wide">{s.name}</h3>
                <div className="flex items-baseline justify-between gap-2 mt-3">
                  <span className="text-4xl font-bold text-gold">${s.price}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{s.duration}</span>
                </div>
                <div className="gold-divider mt-4" />
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-gold shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Prices are starting points. Final price may vary based on hair length and style complexity.
            </p>
            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
