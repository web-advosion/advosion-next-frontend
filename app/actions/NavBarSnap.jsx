"use client";

{
  /*Made with AI */
}

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function NavBarSnap() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStuck(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 w-full z-50 flex justify-center transition-all duration-200 h-auto px-3.5 md:px-6.75" ${
        stuck ? "top-0" : "top-12.5"
      }`}
    >
      <NavBar />
    </div>
  );
}
