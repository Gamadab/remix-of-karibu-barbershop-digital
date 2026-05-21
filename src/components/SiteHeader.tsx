import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="The Gentlemen's Lounge Barbershop logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:rotate-6"
          />
          <span className="font-display text-sm md:text-base tracking-widest font-bold leading-tight hidden sm:block">
            THE GENTLEMEN'S LOUNGE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-gold text-gold-foreground px-5 py-2.5 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base uppercase tracking-widest font-semibold text-muted-foreground hover:text-gold hover:bg-secondary transition-colors"
                activeProps={{ className: "text-gold bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
