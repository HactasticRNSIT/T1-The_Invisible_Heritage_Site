"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="loader-screen fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-background text-foreground"
      role="status"
      aria-live="polite"
      aria-label="Loading HeritageLens AI"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(212,175,55,0.2),transparent_34%),linear-gradient(to_bottom,rgba(11,15,25,0.94),rgba(11,15,25,1))]" />
      <div className="loader-logo relative text-center">
        <p className="font-heading text-4xl font-semibold text-gold [text-shadow:0_0_34px_rgba(212,175,55,0.32)] md:text-6xl">
          HeritageLens AI
        </p>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-foreground/68">
          Loading cultural memory...
        </p>
      </div>
    </div>
  );
}
