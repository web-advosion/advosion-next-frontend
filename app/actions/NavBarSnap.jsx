"use client";

/*Made with AI */

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar2";
import { usePathname } from "next/navigation";

export default function NavBarSnap() {
  const [stuck, setStuck] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setStuck(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed left-0 w-full z-50 flex justify-center transition-all duration-300 h-auto px-3.5 md:px-6.75 ${
        isHome
          ? stuck
            ? "bg-(--advokat-blue) shadow-md"
            : "bg-transparent"
          : "bg-(--advokat-blue) shadow-md"
      }`}
    >
      <NavBar stuck={stuck} />
    </div>
  );
}
