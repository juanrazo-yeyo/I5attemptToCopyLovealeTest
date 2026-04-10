import { useEffect, useRef } from "react";

const Starfield = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.children.length > 0) return;
    for (let i = 0; i < 200; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        --dur:${2 + Math.random() * 5}s;
        --op:${0.3 + Math.random() * 0.7};
        animation-delay:${Math.random() * 6}s;
      `;
      el.appendChild(s);
    }
  }, []);

  return (
    <>
      <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
      <div className="fixed rounded-full pointer-events-none z-0 w-[600px] h-[600px] -top-[200px] -left-[200px] blur-[120px] bg-glow-blue/[0.06]" />
      <div className="fixed rounded-full pointer-events-none z-0 w-[500px] h-[500px] bottom-[100px] -right-[150px] blur-[120px] bg-glow-cyan/[0.05]" />
    </>
  );
};

export default Starfield;
