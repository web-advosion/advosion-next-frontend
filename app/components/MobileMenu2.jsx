"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-(--primary-bg) flex flex-col px-0 h-dvh overflow-hidden">
      <article className="mx-auto w-full p-3 px-6.5 flex justify-between bg-(--advokat-blue)">
        <Link href="/#hero" onClick={onClose}>
          <img
            src="/img/advosion-logo-v2.svg"
            width={235}
            height={50}
            alt="Advosion logo"
            className="w-auto h-12"
          />
        </Link>
      </article>

      <div className="px-6.5 text-(--advokat-blue)">
        <h1 className="text-5xl font-bold mt-7.5">Menu</h1>

        <nav className="flex flex-col gap-8 text-4xl mt-12">
          <Link
            href="/om"
            onClick={onClose}
            className="w-72 h-14 bg-(--cards) rounded-2xl p-3 flex items-center justify-between"
          >
            Om os
            <img src="/img/icon-arrow-dropdown.svg" alt="" />
          </Link>

          <Link
            href="/advokat"
            onClick={onClose}
            className="w-72 h-14 bg-(--cards) rounded-2xl p-3 flex items-center justify-between"
          >
            Advokat
            <img src="/img/icon-arrow-dropdown.svg" alt="" />
          </Link>

          <Link
            href="/revision"
            onClick={onClose}
            className="w-72 h-14 bg-(--cards) rounded-2xl p-3 flex items-center justify-between"
          >
            Revision
            <img src="/img/icon-arrow-dropdown.svg" alt="" />
          </Link>

          <Link
            href="/karriere"
            onClick={onClose}
            className="w-72 h-14 bg-(--cards) rounded-2xl p-3 flex items-center justify-between"
          >
            Karriere
            <img src="/img/icon-arrow-dropdown.svg" alt="" />
          </Link>

          <Link
            href="/kontakt"
            onClick={onClose}
            className="w-72 h-14 bg-(--cards) rounded-2xl p-3 flex items-center justify-between"
          >
            Kontakt
            <img src="/img/icon-arrow-dropdown.svg" alt="" />
          </Link>
        </nav>

        <div className="md:block lg:hidden fixed bottom-7.5 right-6.5">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-(--primary-bg) rounded-4xl flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer shadow-md/30"
          >
            <Image
              src="/img/icon-go-back.svg"
              width={28}
              height={28}
              alt="Gå tilbage"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
