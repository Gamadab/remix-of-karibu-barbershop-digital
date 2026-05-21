import { createFileRoute } from "@tanstack/react-router";
import { Award, Scissors, Users, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import interiorImg from "@/assets/shop-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Gentlemen's Lounge Barbershop Tukwila" },
      { name: "description", content: "Learn the story behind The Gentlemen's Lounge Barbershop in Tukwila. Master barbers, precision cuts, and a welcoming experience for every client." },
      { property: "og:title", content: "About The Gentlemen's Lounge Barbershop" },
      { property: "og:description", content: "Master barbers, precision cuts and a welcoming experience in Tukwila." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Scissors, title: "Precision", desc: "Every line. Every fade. Every blend. Done with the eye of a craftsman." },
  { icon: Users, title: "Hospitality", desc: "At The Gentlemen's Lounge, you're welcome — and we mean it. The chair is yours." },
  { icon: Award, title: "Mastery", desc: "Years of experience behind every clipper, razor and pair of shears." },
  { icon: Sparkles, title: "Style", desc: "Modern, classic or signature — we shape the look that fits you." },
];

function AboutPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-6xl font-bold">More Than A Haircut</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Gentlemen's Lounge Barbershop was built on a simple idea: every client deserves a cut that feels as good as it looks.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border border-gold/40" />
            <img
              src={interiorImg}
              alt="The Gentlemen's Lounge Barbershop interior with vintage chairs"
              width={1600}
              height={1100}
              loading="lazy"
              className="relative w-full h-[480px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Rooted In Tukwila"
              title="A Chair For Every Client"
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                From North County to greater San Diego, The Gentlemen's Lounge Barbershop has become a trusted destination for men, women and kids who care about their look.
              </p>
              <p>
                We blend old-school traditions — straight razors, hot towels and classic clipper work — with modern fades, designs and styling that keep you ahead of the trend.
              </p>
              <p>
                Whether you&apos;re here for a quick lineup or a full service experience, you&apos;re family the moment you walk through the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The The Gentlemen's Lounge Standard"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background border border-border p-8 hover:border-gold transition-colors">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <div className="gold-divider mt-3" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-5xl font-bold">Come Sit In Our Chair</h2>
          <p className="mt-5 text-muted-foreground">Experience the The Gentlemen's Lounge difference for yourself.</p>
          <a
            href="https://book.thecut.co/reggieW"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
