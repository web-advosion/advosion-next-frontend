"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    // Function to calculate offset based on viewport width
    const getOffset = () => {
      if (window.innerWidth < 768) return 120; // mobile
      if (window.innerWidth < 1024) return 200; // tablet
      return 250; // desktop
    };

    AOS.init({
      duration: 900, // slower = smoother
      offset: getOffset(), // responsive offset
      easing: "ease-out-cubic", // smooth deceleration
      once: true, // animate only once to prevent flicker
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null;
}
