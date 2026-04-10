import { ReactNode } from "react";
import Starfield from "./Starfield";
import SpaceNavbar from "./SpaceNavbar";

const SpaceLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen relative">
    <Starfield />
    <SpaceNavbar />
    <main className="relative z-10">{children}</main>
    <footer className="relative z-10 text-center py-8 border-t border-primary/10 font-mono text-xs text-muted-foreground tracking-widest opacity-50">
      SQUADRON i5 · SPRING 2026 · USSF ROTC · UNIVERSITY OF TEXAS AT AUSTIN
    </footer>
  </div>
);

export default SpaceLayout;
