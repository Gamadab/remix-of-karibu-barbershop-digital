import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Gentlemen's Lounge Barbershop logo" className="h-14 w-14 object-contain" />
            <span className="font-display text-base tracking-widest font-bold leading-tight">
              THE GENTLEMEN'S<br/>LOUNGE
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Sharp cuts. Clean style. Tukwila&apos;s go-to barbershop for fades, tapers and lineups.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/r_witherspoon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/spoon3/directory_intro" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold">Visit</h4>
          <div className="gold-divider mt-3" />
          <p className="mt-4 text-sm text-muted-foreground flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            708 Industry Dr<br />Tukwila, WA 98188
          </p>
          <p className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" />
            <a href="tel:+12069102036" className="hover:text-gold transition-colors">206-910-2036</a>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold">Hours</h4>
          <div className="gold-divider mt-3" />
          <ul className="mt-4 text-sm text-muted-foreground space-y-1.5">
            <li className="flex justify-between gap-4"><span>Tuesday</span><span>9:30–12:30, 2–6</span></li>
            <li className="flex justify-between gap-4"><span>Wednesday</span><span>9:30–12:30, 2–7</span></li>
            <li className="flex justify-between gap-4"><span>Thursday</span><span>9:30–12:30, 2–6:30</span></li>
            <li className="flex justify-between gap-4"><span>Friday</span><span>9:30–12:30, 2–7</span></li>
            <li className="flex justify-between gap-4"><span>Saturday</span><span>11–4, 5–7</span></li>
            <li className="flex justify-between gap-4"><span>Sun – Mon</span><span className="text-destructive">Closed</span></li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold" /> By appointment only
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-gold">Explore</h4>
          <div className="gold-divider mt-3" />
          <ul className="mt-4 text-sm space-y-2">
            {[
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/booking", label: "Book Online" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} The Gentlemen's Lounge Barbershop. All rights reserved.</p>
          <p>Tukwila, Washington</p>
        </div>
      </div>
    </footer>
  );
}
