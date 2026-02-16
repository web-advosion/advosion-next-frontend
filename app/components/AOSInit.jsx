"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation duration
      offset: 250, // when animation triggers
      easing: "ease-in-out", // animation curve
      once: false, // animate only once
      /*  mirror: false, // don't animate on scroll up */
    });
  }, []);

  return null;
}
