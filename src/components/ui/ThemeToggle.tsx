"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // Read the theme set by the inline anti-flash script (layout.tsx) after
    // hydration, so server and client markup match on first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      data-cursor="interactive"
      className="w-9 h-9 grid place-items-center border border-line hover:border-amber transition-colors"
    >
      {light ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
