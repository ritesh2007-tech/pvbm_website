"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1️⃣ Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,

    });

    // 2️⃣ Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // 3️⃣ Start the loop
    requestAnimationFrame(raf);

    // 4️⃣ Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // 5️⃣ Render children
  return <>{children}</>;
}
