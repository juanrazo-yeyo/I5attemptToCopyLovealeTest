import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/leadership", label: "Leadership" },
  { to: "/join", label: "Join" },
];

const SpaceNavbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-primary/15 backdrop-blur-md bg-background/60">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mid-blue to-glow-blue border border-primary flex items-center justify-center font-display text-sm font-black text-primary shadow-[0_0_20px_hsl(var(--glow-cyan)/0.4)]">
          i5
        </div>
        <span className="font-display text-lg font-bold tracking-wider bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
          i5 AT UT AUSTIN
        </span>
      </Link>

      <div className="flex items-center gap-3">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/i5det825/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-3 py-1.5 rounded-full font-mono text-xs tracking-widest transition-all ${
                  pathname === l.to
                    ? "bg-primary/10 text-primary border border-primary/40"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/15 md:hidden z-50">
          <ul className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg font-mono text-xs tracking-widest transition-all ${
                    pathname === l.to
                      ? "bg-primary/10 text-primary border border-primary/40"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SpaceNavbar;
