"use client";

import Image from "next/image";

export default function ButtonTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="w-40 h-10 gap-3 bg-(--cta-black) px-0 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <p>Til toppen</p>

      <Image
        className="animate__animated animate__pulse animate__infinite animate__fast rotate-180"
        src="https://cms.advosion.dk/wp-content/uploads/2026/02/icon_arrow_white.svg"
        width={20}
        height={20}
        alt="Hvid pil"
      />
    </button>
  );
}
