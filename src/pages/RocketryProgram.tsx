import SpaceLayout from "@/components/SpaceLayout";
import { Rocket, ChevronRight, ExternalLink, Flame, Navigation, Satellite, Target, Wrench, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Rocket Design & Build",
    description: "Design, fabricate, and assemble high-powered rockets from scratch using CAD, composites, and 3D printing.",
  },
  {
    title: "Launch Operations",
    description: "Plan and execute live launches with proper safety protocols, flight simulations, and post-flight analysis.",
  },
  {
    title: "Propulsion Research",
    description: "Study solid and liquid propulsion systems, nozzle design, and thrust optimization techniques.",
  },
  {
    title: "Flight Dynamics & Avionics",
    description: "Learn orbital mechanics, flight computer programming, and telemetry systems for rocket guidance.",
  },
];

const militaryCareers = [
  { icon: <Satellite className="w-5 h-5" />, title: "13S — Space Operations Officer", desc: "Command satellite operations, space surveillance, and missile warning systems." },
  { icon: <Navigation className="w-5 h-5" />, title: "62E — Developmental Engineer", desc: "Lead acquisition and development of space and missile systems." },
  { icon: <Target className="w-5 h-5" />, title: "1C6 — Space Systems Operator", desc: "Operate and maintain space surveillance and satellite control systems." },
  { icon: <Flame className="w-5 h-5" />, title: "61D — Physicist / Nuclear Engineer", desc: "Apply physics expertise to propulsion, weapons, and space system research." },
];

const civilianCareers = [
  { icon: <Rocket className="w-5 h-5" />, title: "Propulsion Engineer", desc: "Design rocket engines and propulsion systems at SpaceX, ULA, Aerojet Rocketdyne, and more." },
  { icon: <Wrench className="w-5 h-5" />, title: "Aerospace Systems Engineer", desc: "Integrate complex aerospace systems for launch vehicles and spacecraft." },
  { icon: <Satellite className="w-5 h-5" />, title: "Satellite Systems Engineer", desc: "Design, test, and operate satellite constellations for defense and commercial applications." },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Research Scientist", desc: "Conduct cutting-edge research at NASA, JPL, or national labs on advanced propulsion and materials." },
];

const RocketryProgram = () => (
  <SpaceLayout>
    {/* Header */}
    <section className="relative z-10 text-center py-20 px-6">
      <Rocket className="w-16 h-16 text-accent mx-auto mb-4" />
      <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent mb-4" style={{ backgroundImage: "var(--gradient-gold)" }}>
        ROCKETRY TRACK
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Design, build, and launch rockets while learning propulsion systems, flight dynamics, and aerospace engineering principles.
      </p>
    </section>

    {/* What We Do */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-accent/70 text-center mb-8">WHAT WE DO</p>
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <div key={i} className="rounded-2xl border border-accent/15 bg-card/80 backdrop-blur-sm p-8 hover:border-accent/40 hover:shadow-[var(--shadow-glow-gold)] transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <h3 className="font-display text-base font-bold text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Photo Gallery */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-accent/70 text-center mb-8">GALLERY</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { src: "/images/rocketry-1.jpg", alt: "Cadets viewing lunar surface simulation" },
          { src: "/images/rocketry-2.jpg", alt: "Cadets in immersive space simulator" },
          { src: "/images/rocketry-3.jpg", alt: "Cadets with NASA Orion capsule" },
          { src: "/images/rocketry-4.jpg", alt: "Team selfie at rocket engine exhibit" },
          { src: "/images/rocketry-5.jpg", alt: "i5 group photo with model rockets" },
          { src: "/images/rocketry-6.jpg", alt: "Rocketry team holding model rocket" },
        ].map((img, i) => (
          <div key={i} className="aspect-video rounded-xl border border-accent/15 bg-card/60 backdrop-blur-sm overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    {/* Military Careers */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-accent/70 text-center mb-8">MILITARY CAREER FIELDS</p>
      <div className="grid md:grid-cols-2 gap-5">
        {militaryCareers.map((c, i) => (
          <div key={i} className="flex items-start gap-4 rounded-2xl border border-accent/15 bg-card/80 backdrop-blur-sm p-6 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="text-accent mt-0.5">{c.icon}</div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Civilian Careers */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-accent/70 text-center mb-8">CIVILIAN CAREER PATHS</p>
      <div className="grid md:grid-cols-2 gap-5">
        {civilianCareers.map((c, i) => (
          <div key={i} className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-6 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="text-primary mt-0.5">{c.icon}</div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Links */}
    <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://www.i5space.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-display text-sm font-bold tracking-wider shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.6)] transition-all"
        >
          <ExternalLink className="w-4 h-4" /> i5 NATIONAL SITE
        </a>
        <Link
          to="/programs"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-accent/40 text-accent font-display text-sm font-bold tracking-wider hover:bg-accent/10 transition-all"
        >
          <ChevronRight className="w-4 h-4" /> BACK TO PROGRAMS
        </Link>
      </div>
    </section>
  </SpaceLayout>
);

export default RocketryProgram;
