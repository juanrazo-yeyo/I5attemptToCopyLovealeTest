import { Link } from "react-router-dom";
import SpaceLayout from "@/components/SpaceLayout";
import { Shield, Rocket, ChevronRight, ExternalLink } from "lucide-react";

const Programs = () => (
  <SpaceLayout>
    <section className="relative z-10 text-center py-20 px-6">
      <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent mb-4" style={{ backgroundImage: "var(--gradient-hero)" }}>
        PROGRAMS
      </h1>
      <p className="font-mono text-xs tracking-[0.3em] text-primary/80">CHOOSE YOUR TRACK</p>
    </section>
    <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
      <Link to="/programs/cyber" className="group">
        <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-10 text-center group-hover:border-primary/50 group-hover:shadow-[var(--shadow-glow)] transition-all group-hover:-translate-y-1 animate-fade-up">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Cyber Track</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Develop offensive and defensive cybersecurity skills through hands-on labs, competitions, and real-world cyber operations training.</p>
          <span className="inline-flex items-center gap-1 text-primary font-mono text-xs tracking-wider group-hover:underline">
            DIVE DEEPER <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
      <Link to="/programs/rocketry" className="group">
        <div className="rounded-2xl border border-accent/20 bg-card/80 backdrop-blur-sm p-10 text-center group-hover:border-accent/50 group-hover:shadow-[var(--shadow-glow-gold)] transition-all group-hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Rocketry Track</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Design, build, and launch rockets while learning propulsion systems, flight dynamics, and aerospace engineering principles.</p>
          <span className="inline-flex items-center gap-1 text-accent font-mono text-xs tracking-wider group-hover:underline">
            DIVE DEEPER <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </div>

    {/* External Links */}
    <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24 text-center">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 mb-6">CONNECT</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://www.i5space.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider shadow-[0_0_30px_hsl(var(--glow-cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--glow-cyan)/0.6)] transition-all"
        >
          <ExternalLink className="w-4 h-4" /> i5 NATIONAL WEBSITE
        </a>
        <a
          href="https://www.instagram.com/i5det825/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-primary font-display text-sm font-bold tracking-wider hover:bg-primary/10 transition-all"
        >
          FOLLOW ON INSTAGRAM
        </a>
        <a
          href="https://discord.gg/QycaZpng"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-primary font-display text-sm font-bold tracking-wider hover:bg-primary/10 transition-all"
        >
          JOIN OUR DISCORD
        </a>
      </div>
    </section>
  </SpaceLayout>
);

export default Programs;
