import SpaceLayout from "@/components/SpaceLayout";
import { Shield, ChevronRight, ExternalLink, Lock, Crosshair, Server, Cpu, Globe, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Cyber Defense Competitions",
    description: "Compete in national cybersecurity competitions, building real-world offensive and defensive skills against simulated adversaries.",
  },
  {
    title: "Hands-On Labs",
    description: "Work through capture-the-flag challenges, penetration testing environments, and network analysis exercises.",
  },
  {
    title: "Simulated Operations",
    description: "Participate in realistic cyber operations scenarios that mirror real-world Space Force and DoD cyber missions.",
  },
  {
    title: "Guest Speakers & Workshops",
    description: "Learn from active-duty cyber officers, NSA analysts, and industry professionals who share career insights and technical knowledge.",
  },
];

const militaryCareers = [
  { icon: <Shield className="w-5 h-5" />, title: "17S — Cyberspace Operations Officer", desc: "Lead offensive and defensive cyber operations for the USSF and USAF." },
  { icon: <Lock className="w-5 h-5" />, title: "17D — Cyber Warfare Operations", desc: "Plan and execute cyber warfare missions to protect national assets." },
  { icon: <Crosshair className="w-5 h-5" />, title: "1B4 — Cyber Warfare Operator", desc: "Conduct attack, exploitation, and defense operations in cyberspace." },
  { icon: <Server className="w-5 h-5" />, title: "5C — Cyber Surety", desc: "Ensure communications security and manage cyber defense infrastructure." },
];

const civilianCareers = [
  { icon: <Cpu className="w-5 h-5" />, title: "Penetration Tester", desc: "Test systems for vulnerabilities as a red team operator in the private sector." },
  { icon: <Globe className="w-5 h-5" />, title: "Security Analyst (SOC)", desc: "Monitor and respond to threats in security operations centers." },
  { icon: <Lock className="w-5 h-5" />, title: "Cybersecurity Engineer", desc: "Design and implement secure systems for government contractors and tech companies." },
  { icon: <BadgeCheck className="w-5 h-5" />, title: "GS / Civilian DoD Roles", desc: "Work as a civilian cybersecurity professional within the Department of Defense." },
];

const CyberProgram = () => (
  <SpaceLayout>
    {/* Header */}
    <section className="relative z-10 text-center py-20 px-6">
      <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
      <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent mb-4" style={{ backgroundImage: "var(--gradient-hero)" }}>
        CYBER TRACK
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Develop offensive and defensive cybersecurity skills through competitions, labs, and simulated operations — preparing for careers in Space Force cyber warfare and beyond.
      </p>
    </section>

    {/* What We Do */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">WHAT WE DO</p>
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((h, i) => (
          <div key={i} className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-8 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <h3 className="font-display text-base font-bold text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Photo Gallery */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">GALLERY</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { src: "/images/cyber-1.jpg", alt: "Cadets operating satellite systems" },
          { src: "/images/cyber-2.jpg", alt: "Concept Exploration Lab team briefing" },
          { src: "/images/cyber-3.jpg", alt: "Cadets at NASA Mission Control Center" },
          { src: "/images/cyber-4.jpg", alt: "Lab training with projected simulations" },
          { src: "/images/cyber-5.jpg", alt: "Cadet operating satellite control station" },
        ].map((img, i) => (
          <div key={i} className="aspect-video rounded-xl border border-primary/15 bg-card/60 backdrop-blur-sm overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>

    {/* Military Careers */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">MILITARY CAREER FIELDS</p>
      <div className="grid md:grid-cols-2 gap-5">
        {militaryCareers.map((c, i) => (
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

    {/* Civilian Careers */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">CIVILIAN CAREER PATHS</p>
      <div className="grid md:grid-cols-2 gap-5">
        {civilianCareers.map((c, i) => (
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

    {/* Links */}
    <section className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://www.i5space.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider shadow-[0_0_30px_hsl(var(--glow-cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--glow-cyan)/0.6)] transition-all"
        >
          <ExternalLink className="w-4 h-4" /> i5 NATIONAL SITE
        </a>
        <Link
          to="/programs"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-primary font-display text-sm font-bold tracking-wider hover:bg-primary/10 transition-all"
        >
          <ChevronRight className="w-4 h-4" /> BACK TO PROGRAMS
        </Link>
      </div>
    </section>
  </SpaceLayout>
);

export default CyberProgram;
