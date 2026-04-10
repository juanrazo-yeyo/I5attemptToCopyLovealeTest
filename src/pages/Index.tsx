import { Link } from "react-router-dom";
import SpaceLayout from "@/components/SpaceLayout";
import { Shield, Rocket, Users, Mail, ChevronRight, Calendar, Star, Play } from "lucide-react";

const Index = () => (
  <SpaceLayout>
    {/* Hero */}
    <section className="relative z-10 text-center py-24 md:py-36 px-6">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mid-blue to-glow-blue border-2 border-primary flex items-center justify-center font-display text-2xl font-black text-primary shadow-[0_0_30px_hsl(var(--glow-cyan)/0.5)]">
          i5
        </div>
      </div>
      <h1 className="font-display text-4xl md:text-6xl font-black tracking-wider bg-clip-text text-transparent leading-tight mb-4" style={{ backgroundImage: "var(--gradient-hero)" }}>
        i5 AT UT AUSTIN
      </h1>
      <p className="font-mono text-xs tracking-[0.3em] text-primary/80 mb-2">
        USSF ROTC · DET 825 · UNIVERSITY OF TEXAS AT AUSTIN
      </p>
      <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mt-6 mb-10">
        Det 825's premier cyber and rocketry initiative — innovating for the future of space.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/join"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider shadow-[0_0_30px_hsl(var(--glow-cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--glow-cyan)/0.6)] transition-all"
        >
          GET INVOLVED <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-primary font-display text-sm font-bold tracking-wider hover:bg-primary/10 transition-all"
        >
          LEARN MORE
        </Link>
      </div>
      <div className="inline-block mt-10 px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-mono text-xs text-primary tracking-widest">
        SPRING 2026 · NOW RECRUITING
      </div>
    </section>

    {/* What is i5 */}
    <section className="relative z-10 max-w-3xl mx-auto px-6 pb-20 text-center">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 mb-6">WHAT IS i5?</p>
      <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-10 shadow-[var(--shadow-glow)]">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Innovation Through Action</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          i5 is a national student-led organization within Space Force Delta 13, dedicated to advancing cyber and rocketry innovation across AFROTC detachments nationwide. At UT Austin's Detachment 825, our chapter gives cadets hands-on experience in cybersecurity operations, high-powered rocketry, and space systems.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether you're interested in cyber defense competitions, building and launching rockets, or exploring careers in the Space Force — i5 is your launchpad.
        </p>
        <a
          href="https://www.i5space.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-primary font-mono text-sm tracking-wider hover:underline"
        >
          VISIT i5 NATIONAL <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>

    {/* i5 Video */}
    <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">SEE i5 IN ACTION</p>
      <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm overflow-hidden shadow-[var(--shadow-glow)]">
        <video className="w-full aspect-video" controls poster="" preload="metadata">
          <source src="/videos/i5-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    {/* Programs */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">OUR PROGRAMS</p>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/programs/cyber" className="group">
          <ProgramCard
            icon={<Shield className="w-8 h-8 text-primary" />}
            title="Cyber Track"
            description="Develop offensive and defensive cybersecurity skills through competitions, labs, and simulated operations."
          />
        </Link>
        <Link to="/programs/rocketry" className="group">
          <ProgramCard
            icon={<Rocket className="w-8 h-8 text-accent" />}
            title="Rocketry Track"
            description="Design, build, and launch rockets while learning propulsion, flight dynamics, and aerospace principles."
          />
        </Link>
      </div>
    </section>

    {/* Community & Socials */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">COMMUNITY</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-up">
          <video className="w-full aspect-video object-cover" controls preload="metadata">
            <source src="/videos/bowling-reel.mp4" type="video/mp4" />
          </video>
          <div className="p-4">
            <p className="font-display text-sm font-bold text-foreground">Bowling Night</p>
            <p className="font-mono text-xs text-muted-foreground tracking-wider">i5 SOCIALS</p>
          </div>
        </div>
        <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-up" style={{ animationDelay: "0.08s" }}>
          <img src="/images/social-1.jpg" alt="i5 cadets at a social event" className="w-full aspect-video object-cover" loading="lazy" />
          <div className="p-4">
            <p className="font-display text-sm font-bold text-foreground">Det 825 Social</p>
            <p className="font-mono text-xs text-muted-foreground tracking-wider">i5 SOCIALS</p>
          </div>
        </div>
      </div>
    </section>

    {/* Spotlights */}
    <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">MEMBER SPOTLIGHTS</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Featured Cadet", title: "Cadet of the Week", quote: "Being part of i5 has given me hands-on experience I couldn't get anywhere else." },
          { name: "Cyber Lead", title: "Competition Highlight", quote: "Our team placed top 10 at a national cyber defense competition this semester." },
          { name: "Rocketry Lead", title: "Launch Success", quote: "We successfully launched our first high-powered rocket to 3,000 feet." },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-6 animate-fade-up hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition-all" style={{ animationDelay: `${i * 0.1}s` }}>
            <Star className="w-6 h-6 text-accent mb-3" />
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-primary/70 mb-2">{s.title.toUpperCase()}</p>
            <p className="text-muted-foreground text-sm leading-relaxed italic mb-3">"{s.quote}"</p>
            <p className="font-display text-sm font-bold text-foreground">— {s.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="relative z-10 max-w-3xl mx-auto px-6 pb-20">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">UPCOMING EVENTS</p>
      <div className="space-y-4">
        {[
          { date: "APR 10", title: "Cyber Lab: Intro to CTFs", location: "EER 1.516" },
          { date: "APR 17", title: "Rocketry Build Session", location: "Engineering Workshop" },
          { date: "APR 24", title: "Guest Speaker: USSF Cyber Officer", location: "RLP 1.104" },
          { date: "MAY 01", title: "Rocket Launch Day", location: "TBD — Off Campus" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-5 rounded-xl border border-primary/15 bg-card/60 backdrop-blur-sm px-6 py-4 hover:border-primary/40 hover:bg-primary/5 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="flex-shrink-0 w-16 text-center">
              <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
              <span className="font-mono text-xs text-primary font-bold tracking-wider">{e.date}</span>
            </div>
            <div className="h-8 w-px bg-primary/20" />
            <div>
              <p className="font-display text-sm font-bold text-foreground">{e.title}</p>
              <p className="font-mono text-xs text-muted-foreground tracking-wider">{e.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Quick Links */}
    <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-3 gap-4">
        <QuickLink icon={<Users className="w-5 h-5" />} label="Leadership" to="/leadership" />
        <QuickLink icon={<Rocket className="w-5 h-5" />} label="Programs" to="/programs" />
        <QuickLink icon={<Mail className="w-5 h-5" />} label="Join Us" to="/join" />
      </div>
    </section>
  </SpaceLayout>
);

const ProgramCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-8 group-hover:border-primary/40 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300 group-hover:-translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    <span className="inline-flex items-center gap-1 mt-4 text-primary font-mono text-xs tracking-wider group-hover:underline">
      EXPLORE <ChevronRight className="w-3 h-3" />
    </span>
  </div>
);

const QuickLink = ({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) => (
  <Link
    to={to}
    className="flex items-center gap-3 rounded-xl border border-primary/15 bg-card/60 backdrop-blur-sm px-6 py-4 hover:border-primary/40 hover:bg-primary/5 transition-all group"
  >
    <span className="text-primary">{icon}</span>
    <span className="font-mono text-sm tracking-wider text-foreground group-hover:text-primary transition-colors">{label.toUpperCase()}</span>
    <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
  </Link>
);

export default Index;
