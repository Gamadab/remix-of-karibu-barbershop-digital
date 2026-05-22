import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import fade from "@/assets/style-fade.jpg";
import taper from "@/assets/style-taper.jpg";
import beard from "@/assets/style-beard.jpg";

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
  { src: fade, alt: "Skin fade haircut" },
  { src: g2, alt: "Curly top with sharp lineup" },
  { src: g3, alt: "Mid fade with beard" },
  { src: taper, alt: "Clean taper cut" },
  { src: g6, alt: "Barber finishing a cut" },
  { src: g1, alt: "Fresh fade top view" },
  { src: beard, alt: "Beard trim with razor" },
  { src: g5, alt: "High top fade" },
  { src: g4, alt: "Barber tools" },
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
                  style={img.alt === "Clean taper cut" ? { objectPosition: "45% center" } : undefined}
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
