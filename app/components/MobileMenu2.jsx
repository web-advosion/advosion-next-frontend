"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu({ onClose }) {
  const [openOm, setOpenOm] = useState(false);
  const [openAdvokat, setOpenAdvokat] = useState(false);
  const [openadvokat, setOpenadvokat] = useState(false);
  const [openKarriere, setOpenKarriere] = useState(false);

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
    <div className="fixed inset-0 z-50 bg-(--advokat-blue) flex flex-col px-0 h-dvh overflow-hidden">
      <article className="mx-auto w-full p-3 px-3.5 flex justify-between bg-(--advokat-blue)">
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

      <div className="px-6.5 text-(--primary-bg) overflow-y-auto pb-24">
        <h1 className="text-5xl font-bold mt-7.5">Menu</h1>

        <nav className="flex flex-col gap-8 mt-12">
          <div className="w-72 bg-(--none) border-(--primary-bg) border-2 rounded-2xl">
            <button
              type="button"
              onClick={() => setOpenOm(!openOm)}
              className="w-full h-14 p-3 flex items-center justify-between text-4xl"
            >
              Om os
              <img
                src="/img/icon-arrow-dropdown-white.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  openOm ? "rotate-180" : ""
                }`}
              />
            </button>

            {openOm && (
              <div className="px-3 pb-3 flex flex-col gap-2">
                <Link href="/om/erhverv" onClick={onClose} className="text-xl">
                  Holdet
                </Link>
                <Link
                  href="/advokat/privat"
                  onClick={onClose}
                  className="text-xl"
                >
                  Faciliteter
                </Link>
                <Link
                  href="/advokat/inkasso"
                  onClick={onClose}
                  className="text-xl"
                >
                  Vision og kerneværdier
                </Link>
              </div>
            )}
          </div>

          <div className="w-72 bg-(--none) border-(--primary-bg) border-2 rounded-2xl">
            <button
              type="button"
              onClick={() => setOpenAdvokat(!openAdvokat)}
              className="w-full h-14 p-3 flex items-center justify-between text-4xl"
            >
              Advokat
              <img
                src="/img/icon-arrow-dropdown-white.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  openAdvokat ? "rotate-180" : ""
                }`}
              />
            </button>

            {openAdvokat && (
              <div className="px-3 pb-3 flex flex-col gap-2">
                <Link
                  href="/advokat/erhverv"
                  onClick={onClose}
                  className="text-xl"
                >
                  Erhverv
                </Link>
                <Link
                  href="/advokat/privat"
                  onClick={onClose}
                  className="text-xl"
                >
                  Privat
                </Link>
                <Link
                  href="/advokat/inkasso"
                  onClick={onClose}
                  className="text-xl"
                >
                  Inkasso
                </Link>
              </div>
            )}
          </div>

          <div className="w-72 bg-(--none) border-(--primary-bg) border-2 rounded-2xl">
            <button
              type="button"
              onClick={() => setOpenadvokat(!openadvokat)}
              className="w-full h-14 p-3 flex items-center justify-between text-4xl"
            >
              Revision
              <img
                src="/img/icon-arrow-dropdown-white.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  openadvokat ? "rotate-180" : ""
                }`}
              />
            </button>

            {openadvokat && (
              <div className="px-3 pb-3 flex flex-col gap-2">
                <Link
                  href="/advokat/regnskab"
                  onClick={onClose}
                  className="text-xl"
                >
                  Regnskab
                </Link>
                <Link
                  href="/advokat/radgivning"
                  onClick={onClose}
                  className="text-xl"
                >
                  Rådgivning
                </Link>
              </div>
            )}
          </div>
          <div className="w-72 bg-(--none) border-(--primary-bg) border-2 rounded-2xl">
            <button
              type="button"
              onClick={() => setOpenKarriere(!openKarriere)}
              className="w-full h-14 p-3 flex items-center justify-between text-4xl"
            >
              Karriere
              <img
                src="/img/icon-arrow-dropdown-white.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  openKarriere ? "rotate-180" : ""
                }`}
              />
            </button>
            {openKarriere && (
              <div className="px-3 pb-3 flex flex-col gap-2">
                <Link
                  href="/advokat/regnskab"
                  onClick={onClose}
                  className="text-xl"
                >
                  Regnskab
                </Link>
                <Link
                  href="/advokat/radgivning"
                  onClick={onClose}
                  className="text-xl"
                >
                  Rådgivning
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/kontakt"
            onClick={onClose}
            className="w-72 h-14 bg-(--none) border-(--revision-blue) border-2 rounded-2xl p-3 flex items-center justify-between text-4xl text-(--revision-blue)"
          >
            Kontakt
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
