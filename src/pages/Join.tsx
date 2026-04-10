import SpaceLayout from "@/components/SpaceLayout";
import { Mail, ChevronRight, Play } from "lucide-react";

const Join = () => (
  <SpaceLayout>
    <section className="relative z-10 text-center py-24 px-6">
      <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent mb-4" style={{ backgroundImage: "var(--gradient-hero)" }}>
        JOIN i5
      </h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
        i5 is a national organization within Space Force Delta 13 dedicated to advancing cyber and rocketry innovation within AFROTC Detachment 825.
      </p>
    </section>

    {/* Video Section */}
    <section className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">WATCH THIS FIRST</p>
      <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm overflow-hidden shadow-[var(--shadow-glow)]">
        <video className="w-full aspect-video" controls poster="" preload="metadata">
          <source src="/videos/i5-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    {/* CTA */}
    <section className="relative z-10 text-center px-6 pb-12">
      <a
        href="mailto:i5tombargesquadron@gmail.com"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider shadow-[0_0_30px_hsl(var(--glow-cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--glow-cyan)/0.6)] transition-all"
      >
        <Mail className="w-4 h-4" /> EMAIL US TO JOIN
      </a>
    </section>

    <div className="relative z-10 max-w-2xl mx-auto px-6 pb-16 space-y-8">
      <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-8 animate-fade-up">
        <h2 className="font-display text-lg font-bold text-primary mb-3">Who Can Join</h2>
        <p className="text-muted-foreground leading-relaxed">
          Membership is open to Air Force and Space Force ROTC cadets as well as students at UT Austin interested in space systems, cyber operations, engineering, and national defense.
        </p>
      </div>
      <div className="rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="font-display text-lg font-bold text-primary mb-3">How to Join</h2>
        <p className="text-muted-foreground mb-4">Send an email to <strong className="text-foreground">i5tombargesquadron@gmail.com</strong> including:</p>
        <ul className="space-y-2 text-muted-foreground">
          {["Your full name", "Major", "Affiliation", "Expected graduation year"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Follow & Connect */}
    <section className="relative z-10 max-w-2xl mx-auto px-6 pb-24">
      <p className="font-mono text-xs tracking-[0.4em] text-primary/70 text-center mb-8">FOLLOW US & CONNECT</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href="https://www.instagram.com/i5det825/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <div>
            <p className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">Follow on Instagram</p>
            <p className="font-mono text-xs text-muted-foreground">@i5det825</p>
          </div>
        </a>
        <a
          href="https://discord.gg/QycaZpng"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-secondary/15 bg-card/80 backdrop-blur-sm p-6 hover:border-secondary/40 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.15)] transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9312 19.9312 0 005.9932 3.0349.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8975 19.8975 0 006.0023-3.0349.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
          </svg>
          <div>
            <p className="font-display text-sm font-bold text-foreground group-hover:text-secondary transition-colors">Join our Discord</p>
            <p className="font-mono text-xs text-muted-foreground">Connect with the squad</p>
          </div>
        </a>
      </div>
    </section>
  </SpaceLayout>
);

export default Join;
