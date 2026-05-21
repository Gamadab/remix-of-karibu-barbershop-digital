import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Gentlemen's Lounge Barbershop Tukwila" },
      { name: "description", content: "Visit The Gentlemen's Lounge Barbershop at 708 Industry Dr, Tukwila. Call 206-910-2036. Open Tue–Sat, closed Sun & Mon." },
      { property: "og:title", content: "Contact The Gentlemen's Lounge Barbershop" },
      { property: "og:description", content: "708 Industry Dr, Tukwila, WA. Call 206-910-2036." },
    ],
  }),
  component: ContactPage,
});

const address = "708 Industry Dr, Tukwila, WA 98188";
const mapsQuery = encodeURIComponent(address);

function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-card border-b border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-4">Stop By</p>
          <h1 className="text-4xl sm:text-6xl font-bold">Contact & Location</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="mt-6 text-lg text-muted-foreground">
            Easy to find on Industry Dr. Easy to talk to. Easy to book.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <SectionHeading align="left" eyebrow="Get In Touch" title="The Gentlemen's Lounge Barbershop" />

            <div className="space-y-5 mt-6">
              <InfoRow icon={MapPin} title="Address">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  708 Industry Dr<br />Tukwila, WA 98188
                </a>
              </InfoRow>

              <InfoRow icon={Phone} title="Phone">
                <a href="tel:+12069102036" className="text-lg font-bold hover:text-gold transition-colors">
                  206-910-2036
                </a>
              </InfoRow>

              <InfoRow icon={Mail} title="Email">
                <a href="mailto:hello@thegentlemenslounge.com" className="hover:text-gold transition-colors">
                  hello@thegentlemenslounge.com
                </a>
              </InfoRow>

              <InfoRow icon={Clock} title="Business Hours">
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between gap-6"><span>Sunday</span><span className="text-destructive font-semibold">Closed</span></li>
                  <li className="flex justify-between gap-6"><span>Monday</span><span className="text-destructive font-semibold">Closed</span></li>
                  <li className="flex justify-between gap-6"><span>Tuesday</span><span className="text-muted-foreground">9:30 AM – 12:30 PM, 2 – 6 PM</span></li>
                  <li className="flex justify-between gap-6"><span>Wednesday</span><span className="text-muted-foreground">9:30 AM – 12:30 PM, 2 – 7 PM</span></li>
                  <li className="flex justify-between gap-6"><span>Thursday</span><span className="text-muted-foreground">9:30 AM – 12:30 PM, 2 – 6:30 PM</span></li>
                  <li className="flex justify-between gap-6"><span>Friday</span><span className="text-muted-foreground">9:30 AM – 12:30 PM, 2 – 7 PM</span></li>
                  <li className="flex justify-between gap-6"><span>Saturday</span><span className="text-muted-foreground">11 AM – 4 PM, 5 – 7 PM</span></li>
                </ul>
              </InfoRow>
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/r_witherspoon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/spoon3/directory_intro" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative w-full h-[500px] lg:h-full min-h-[500px] border border-gold/40 overflow-hidden">
              <iframe
                title="The Gentlemen's Lounge Barbershop location map"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border p-5 flex gap-4">
      <div className="h-10 w-10 grid place-items-center bg-gold/10 border border-gold/30 shrink-0">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1">{title}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
