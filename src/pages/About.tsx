import SpaceLayout from "@/components/SpaceLayout";

const sections = [
  { title: "What is I5?", text: "Detachment 825's I5 program combines Cybersecurity and Rocketry tracks to give students hands-on technical experience and leadership opportunities." },
  { title: "Cyber Track", text: "Develop offensive and defensive cybersecurity skills through competitions, labs, and simulated operations." },
  { title: "Rocketry Track", text: "Design, build, and launch rockets while learning propulsion, flight dynamics, and aerospace principles." },
  { title: "Squadron Highlights", text: "From cyber defense competitions to rocket launches, we stay active and engaged across multiple domains." },
  { title: "Guest Speakers", text: "Industry leaders and ROTC officers frequently visit to share knowledge and career guidance with our members." },
  { title: "Alumni", text: "Our alumni have gone on to careers in cybersecurity, aerospace, and military leadership." },
];

const About = () => (
  <SpaceLayout>
    <section className="relative z-10 text-center py-20 px-6">
      <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent mb-4" style={{ backgroundImage: "var(--gradient-hero)" }}>
        ABOUT US
      </h1>
      <p className="font-mono text-xs tracking-[0.3em] text-primary/80">DET 825 · SQUADRON i5</p>
    </section>
    <div className="relative z-10 max-w-3xl mx-auto px-6 pb-24 space-y-8">
      {sections.map((s, i) => (
        <div key={i} className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-8 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
          <h2 className="font-display text-lg font-bold text-primary mb-2">{s.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.text}</p>
        </div>
      ))}
    </div>
  </SpaceLayout>
);

export default About;
