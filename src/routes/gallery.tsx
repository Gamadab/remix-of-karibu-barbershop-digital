import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import r1 from "@/assets/real-1.jpeg";
import r2 from "@/assets/real-2.jpeg";
import r3 from "@/assets/real-3.jpeg";
import r4 from "@/assets/real-4.jpeg";
import r5 from "@/assets/real-5.jpeg";
import r6 from "@/assets/real-6.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Gentlemen's Lounge Barbershop Tukwila" },
      { name: "description", content: "Browse fresh fades, tapers, lineups and beard work from The Gentlemen's Lounge Barbershop in Tukwila." },
      { property: "og:title", content: "Gallery — The Gentlemen's Lounge Barbershop" },
      { property: "og:description", content: "Fresh fades, tapers and lineups from our Tukwila barbershop." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: r1, alt: "360 waves with taper fade and lined beard" },
  { src: r2, alt: "Low fade with full beard sculpt" },
  { src: r3, alt: "Curly afro top with sharp lineup and skin fade" },
  { src: r4, alt: "Curly taper with lineup and goatee" },
  { src: r5, alt: "Clean low taper with crisp lineup" },
  { src: r6, alt: "Deep waves with taper fade and beard blend" },
];

function GalleryPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-card border-b border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-6xl font-bold">Gallery</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground">
            Sharp fades. Clean lineups. Real results from the The Gentlemen's Lounge chair.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Fresh From The Chair" title="Cuts We're Proud Of" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-card aspect-square border border-border hover:border-gold transition-colors"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
