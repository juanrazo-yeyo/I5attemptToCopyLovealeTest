import { useState } from "react";
import SpaceLayout from "@/components/SpaceLayout";

interface Officer {
  name: string;
  role: string;
  year: string;
  major: string;
  why: string;
  hobbies: string;
  trend: string;
}

const officers: Record<string, Officer> = {
  bajwa: { name: "Taimur Bajwa", role: "Squadron Commander", year: "AS200", major: "Computer Science", why: "The people & community", hobbies: "Pickleball, rock climbing, traveling, dancing, binging TV shows", trend: "Mannequin Challenge" },
  jogdand: { name: "Reva Jogdand", role: "Deputy Squadron Commander + Rocketry Officer", year: "AS200", major: "Aerospace Engineering", why: "Because protecting Earth starts a few hundred miles up", hobbies: "Bouldering, cooking, nature", trend: "Cake by the Ocean" },
  osmak: { name: "Denys Osmak", role: "POC Observer + Outreach Officer", year: "AS300", major: "Statistics & Data Science", why: "I want to go to the moon (and steal it)", hobbies: "Camping, caving, rock climbing", trend: "Minecraft Cops & Robbers videos" },
  khan: { name: "Leonard Khan", role: "Finance Officer", year: "AS100", major: "Computer Science", why: "I like the cybersecurity aspect of it", hobbies: "Video games, programming, media", trend: "PPAP" },
  song: { name: "Ean Song", role: "Socials/MWR + Education Officer", year: "AS200", major: "Economics", why: "Space is the future", hobbies: "Reading, sleeping, drinking milk", trend: "Harambe, Pokémon GO & dabbing" },
  nieva: { name: "Savannah Nieva", role: "Public Affairs Officer", year: "AS100", major: "Informatics", why: "To learn more about the Space Force & meet others alike", hobbies: "Baking, reading, dancing, singing, cafe hopping, working out, nature", trend: "Unicorn Frappuccino, slime & EDM music" },
  khaled: { name: "Abdullah Khaled", role: "Outreach Officer", year: "AS100", major: "Biomedical Engineering", why: "I love space & want to work with the Space Force!", hobbies: "Cooking, video games, boxing", trend: "Pokémon GO" },
  bakkamanthala: { name: "Ritika Bakkamanthala", role: "Public Affairs Officer 2", year: "AS100", major: "Arts & Entertainment Technologies", why: "To explore & deepen my passion for space", hobbies: "Gaming, music, taking pictures", trend: "Evil Kermit" },
  landin: { name: "Nathan Landin", role: "Cyber Officer", year: "AS200", major: "Computer Science", why: "To be surrounded by others who also want to go Space Force & connect with them", hobbies: "Foodie, thrifting, guitar, pickleball", trend: "Soundcloud rappers & Fortnite" },
};

const tiers = [
  { label: "COMMAND", cards: [{ id: "bajwa", commander: true }] },
  { label: "SENIOR STAFF", cards: [{ id: "jogdand", commander: true }, { id: "osmak" }] },
  {
    label: "OFFICERS",
    cards: [{ id: "khan" }, { id: "song" }, { id: "nieva" }, { id: "khaled" }],
  },
  {
    label: "STAFF",
    cards: [
      { id: "bakkamanthala" },
      { id: "osmak", noteOverride: "Also serves as POC Observer", roleOverride: "Outreach Assistant" },
      { id: "landin" },
      { id: "jogdand", noteOverride: "Also serves as Deputy Squadron Commander", roleOverride: "Rocketry Officer" },
      { id: "song", noteOverride: "Also serves as Socials/MWR Officer", roleOverride: "Education Officer" },
    ],
  },
];

const Leadership = () => {
  const [modal, setModal] = useState<Officer | null>(null);

  return (
    <SpaceLayout>
      {/* Header */}
      <header className="relative z-10 text-center py-16 px-5 border-b border-primary/15">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mid-blue to-glow-blue border-2 border-primary flex items-center justify-center font-display text-xl font-black text-primary shadow-[0_0_20px_hsl(var(--glow-cyan)/0.4)]">
            i5
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
            SQUADRON i5
          </h1>
        </div>
        <p className="font-mono text-xs tracking-[0.3em] text-primary/80 mt-2">USSF ROTC · UNIVERSITY OF TEXAS AT AUSTIN</p>
        <div className="inline-block mt-4 px-5 py-1.5 rounded-full border border-primary/40 bg-primary/5 font-mono text-xs text-primary tracking-widest">
          SPRING 2026 · OFFICER ROSTER
        </div>
      </header>

      {/* Advisor */}
      <div className="relative z-10 text-center py-12 px-5 flex flex-col items-center">
        <p className="font-mono text-[0.65rem] tracking-[0.4em] text-primary/70 mb-6">SQUADRON ADVISOR</p>
        <div className="inline-block rounded-2xl p-6 px-12 border border-primary/50 shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-card)" }}>
          <div className="font-display text-xl font-bold text-accent">Capt. Ulman</div>
          <div className="text-sm text-muted-foreground mt-1 tracking-wider">Squadron Advisor · All Ranks are i5</div>
        </div>
        <p className="font-mono text-xs text-muted-foreground mt-4 opacity-60 tracking-wider">// USE CHAIN OF COMMAND //</p>
      </div>

      {/* Connector */}
      <div className="flex justify-center relative z-10">
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-primary/20" />
      </div>

      {/* Org Chart */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-20">
        {tiers.map((tier, ti) => (
          <div key={ti}>
            <p className="font-mono text-[0.65rem] tracking-[0.4em] text-primary/70 text-center mb-6 mt-6">{tier.label}</p>
            <div className="flex justify-center gap-5 flex-wrap mb-4">
              {tier.cards.map((c, ci) => {
                const o = officers[c.id];
                const isCmd = "commander" in c && c.commander;
                const displayRole = "roleOverride" in c ? (c as any).roleOverride : o.role;
                const note = "noteOverride" in c ? (c as any).noteOverride : null;
                return (
                  <div
                    key={`${ti}-${ci}`}
                    onClick={() => setModal(o)}
                    className={`animate-fade-up cursor-pointer rounded-2xl backdrop-blur-sm p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                      isCmd
                        ? "w-60 border border-accent/30 hover:border-accent/60 hover:shadow-[var(--shadow-glow-gold)]"
                        : "w-56 border border-primary/15 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                    }`}
                    style={{ background: "hsl(var(--card-bg-alpha) / 0.85)", animationDelay: `${ci * 0.1}s` }}
                  >
                    {/* Top glow line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 hover:opacity-100 transition-opacity ${isCmd ? "bg-gradient-to-r from-transparent via-accent to-transparent" : "bg-gradient-to-r from-transparent via-primary to-transparent"}`} />
                    <div className="font-mono text-[0.65rem] tracking-[0.25em] text-primary/70 mb-2">C/ · {o.year}</div>
                    <div className="font-display text-sm font-bold text-foreground mb-1">{o.name}</div>
                    <div className={`text-sm font-medium tracking-wide mb-3 leading-tight ${isCmd ? "text-accent" : "text-primary"}`}>{displayRole}</div>
                    <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-3" />
                    <div className="space-y-1">
                      {note ? (
                        <MetaItem label="NOTE" value={note} />
                      ) : (
                        <>
                          <MetaItem label="MAJOR" value={o.major} />
                          <MetaItem label="WHY i5" value={o.why} />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {ti < tiers.length - 1 && (
              <div className="flex justify-center my-4">
                <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-primary/20" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-background/85 backdrop-blur-md" onClick={() => setModal(null)}>
          <div
            className="rounded-2xl border border-primary/30 max-w-lg w-full p-10 relative shadow-[0_0_80px_hsl(var(--glow-cyan)/0.12)]"
            style={{ background: "linear-gradient(135deg, hsl(var(--mid-blue)), hsl(var(--deep-blue)))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setModal(null)} className="absolute top-4 right-5 text-muted-foreground hover:text-primary text-xl font-body">✕</button>
            <p className="font-mono text-[0.65rem] tracking-[0.3em] text-primary/70 mb-1">C/ · {modal.year}</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">{modal.name}</h2>
            <p className="text-primary font-medium mb-6">{modal.role}</p>
            <div className="h-px bg-gradient-to-r from-primary/40 to-transparent mb-6" />
            <div className="grid grid-cols-2 gap-4">
              <ModalField label="YEAR" value={modal.year} />
              <ModalField label="MAJOR" value={modal.major} />
              <ModalField label="WHY i5" value={modal.why} full />
              <ModalField label="HOBBIES" value={modal.hobbies} full />
              <ModalField label="FAV TREND FROM 2016" value={modal.trend} full />
            </div>
          </div>
        </div>
      )}
    </SpaceLayout>
  );
};

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2 items-baseline text-xs">
    <span className="font-mono text-[0.65rem] tracking-wider text-muted-foreground min-w-[44px]">{label}</span>
    <span className="text-foreground/85 leading-tight">{value}</span>
  </div>
);

const ModalField = ({ label, value, full }: { label: string; value: string; full?: boolean }) => (
  <div className={`flex flex-col gap-1 ${full ? "col-span-2" : ""}`}>
    <span className="font-mono text-[0.65rem] tracking-[0.25em] text-muted-foreground">{label}</span>
    <span className="text-sm text-foreground leading-relaxed">{value}</span>
  </div>
);

export default Leadership;
