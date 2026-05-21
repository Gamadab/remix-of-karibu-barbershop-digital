import { createFileRoute } from "@tanstack/react-router";
import { Phone, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Online — The Gentlemen's Lounge Barbershop Tukwila" },
      { name: "description", content: "Book your appointment at The Gentlemen's Lounge Barbershop in Tukwila. Appointments only — no walk-ins." },
      { property: "og:title", content: "Book Online — The Gentlemen's Lounge Barbershop" },
      { property: "og:description", content: "Reserve your chair at Tukwila's go-to barbershop." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-card border-b border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-4">Reserve Your Chair</p>
          <h1 className="text-4xl sm:text-6xl font-bold">Book Now</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground">
            Appointments only, Tue–Sat. Book through our scheduling partner or give us a call.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-card border border-border p-8 sm:p-12 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Book Online</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground mb-8 max-w-sm">
              Schedule your appointment through TheCut for real-time availability and instant confirmation.
            </p>
            <a
              href="https://book.thecut.co/reggieW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <ExternalLink className="h-4 w-4" /> Book on TheCut
            </a>
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border p-6">
              <h3 className="font-bold uppercase tracking-widest text-gold text-sm">Prefer To Call?</h3>
              <div className="gold-divider mt-3" />
              <a href="tel:+12069102036" className="mt-5 flex items-center gap-3 text-lg font-bold hover:text-gold transition-colors">
                <Phone className="h-5 w-5 text-gold" /> 206-910-2036
              </a>
              <p className="mt-3 text-xs text-muted-foreground">We&apos;ll lock in your appointment in under a minute.</p>
            </div>

            <div className="bg-card border border-border p-6">
              <h3 className="font-bold uppercase tracking-widest text-gold text-sm">Hours</h3>
              <div className="gold-divider mt-3" />
              <ul className="mt-5 text-sm space-y-2">
                <li className="flex justify-between gap-4"><span>Tuesday</span><span className="text-muted-foreground">9:30–12:30, 2–6</span></li>
                <li className="flex justify-between gap-4"><span>Wednesday</span><span className="text-muted-foreground">9:30–12:30, 2–7</span></li>
                <li className="flex justify-between gap-4"><span>Thursday</span><span className="text-muted-foreground">9:30–12:30, 2–6:30</span></li>
                <li className="flex justify-between gap-4"><span>Friday</span><span className="text-muted-foreground">9:30–12:30, 2–7</span></li>
                <li className="flex justify-between gap-4"><span>Saturday</span><span className="text-muted-foreground">11–4, 5–7</span></li>
                <li className="flex justify-between"><span>Sun – Mon</span><span className="text-destructive">Closed</span></li>
              </ul>
            </div>

            <div className="bg-card border border-border p-6">
              <h3 className="font-bold uppercase tracking-widest text-gold text-sm">Find Us</h3>
              <div className="gold-divider mt-3" />
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                708 Industry Dr<br />Tukwila, WA 98188
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

