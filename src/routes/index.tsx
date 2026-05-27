import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scissors, Star, Award, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import heroImg from "@/assets/hero.jpg";
import fadeImg from "@/assets/style-fade.jpg";
import taperImg from "@/assets/style-taper.jpg";
import beardImg from "@/assets/style-beard.jpg";
import interiorImg from "@/assets/shop-chair.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Gentlemen's Lounge Barbershop — Sharp Cuts, Clean Style in Tukwila" },
      {
        name: "description",
        content:
          "Seattle-trained barber now holding it down in Tukwila. Fades, tapers, lineups and beard trims. Book online — appointments only. 708 Industry Dr.",
      },
    ],
  }),
  component: HomePage,
});

const styles = [
  { img: fadeImg, title: "Fades", desc: "Skin, low, mid, high — clean blends every time." },
  { img: taperImg, title: "Tapers", desc: "Subtle, sharp and tailored to your shape." },
  { img: beardImg, title: "Lineups & Beards", desc: "Razor-sharp edges and beard sculpting." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Sharp fade haircut at The Gentlemen's Lounge Barbershop in Tukwila"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold font-semibold mb-5">
            Tukwila • Industry Dr
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Sharp Cuts. <br />
            <span className="text-gold">Clean Style.</span> <br />
            Tukwila&apos;s Go-To Barbershop.
          </h1>
          <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Expert fades, tapers and lineups by barbers who treat every cut like a craft.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://book.thecut.co/reggieW"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-all hover:gap-3"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold px-8 py-4 text-sm uppercase tracking-widest font-bold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* feature strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/80 backdrop-blur z-10">
          <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            {[
              { icon: Star, label: "5-Star Rated" },
              { icon: Award, label: "Master Barber" },
              { icon: Scissors, label: "Precision Cuts" },
              { icon: Clock, label: "Open 6 Days" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center md:justify-start gap-3">
                <Icon className="h-5 w-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to The Gentlemen's Lounge"
              title="Where Every Cut Tells a Story"
              description="Started in a Seattle shop, now holding it down in Tukwila on Industry Dr. The Gentlemen's Lounge is where old-school craft meets modern style — and every chair is reserved for those who refuse to settle."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Reggie built his name cutting hair in Seattle before opening his own spot right outside the city. A master barber and fitness coach who trains kids, he brings discipline, precision, and personality to every visit. Step in. Sit back. Step out sharper than ever.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/40" />
            <img
              src={interiorImg}
              alt="Inside The Gentlemen's Lounge Barbershop — vintage chairs and dark wood interior"
              width={1600}
              height={1100}
              loading="lazy"
              className="relative w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="py-20 md:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Signature Styles"
            title="Crafted For The Cut You Want"
            description="Whether you're after a clean skin fade or a tailored taper with a sharp lineup, we deliver the look — every time."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {styles.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden bg-background border border-border hover:border-gold transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={s.title === "Tapers" ? { objectPosition: "35% center" } : undefined}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <div className="gold-divider mt-3" />
                  <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Scissors className="h-10 w-10 text-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-5xl font-bold">Ready For Your Next Cut?</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Book your chair online in seconds — appointments only, Tue–Sat.
          </p>
          <a
            href="https://book.thecut.co/reggieW"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            Book Your Appointment <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
