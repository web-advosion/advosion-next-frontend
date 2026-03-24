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
                <Link href="/om" onClick={onClose} className="text-xl">
                  Om os
                </Link>
                <Link href="/om/#holdet" onClick={onClose} className="text-xl">
                  Holdet
                </Link>

                <Link
                  href="/om/#faciliteter"
                  onClick={onClose}
                  className="text-xl"
                >
                  Faciliteterne
                </Link>

                <Link href="/om/#vision" onClick={onClose} className="text-xl">
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
                <Link href="/advokat" onClick={onClose} className="text-xl">
                  Advokat
                </Link>
                <Link
                  href="/advokat/#ekspertiser"
                  onClick={onClose}
                  className="text-xl"
                >
                  Ekspertiser
                </Link>
                <Link
                  href="/advokat/#skatteret"
                  onClick={onClose}
                  className="text-xl"
                >
                  Skatteret
                </Link>
                <Link
                  href="/advokat/#erhverv"
                  onClick={onClose}
                  className="text-xl"
                >
                  Erhvervs- og selskabsret
                </Link>
                <Link
                  href="/advokat/#generation"
                  onClick={onClose}
                  className="text-xl"
                >
                  Generationsskifte
                </Link>
                <Link
                  href="/advokat/#virksomhed"
                  onClick={onClose}
                  className="text-xl"
                >
                  Virksomhedsoverdragelse
                </Link>
                <Link
                  href="/advokat/#kontrakt"
                  onClick={onClose}
                  className="text-xl"
                >
                  Kontrakter{" "}
                </Link>
                <Link
                  href="/advokat/#konflikt"
                  onClick={onClose}
                  className="text-xl"
                >
                  Konflikthåndtering
                </Link>
                <Link
                  href="/information-advokat/#betingelser"
                  onClick={onClose}
                  className="text-xl"
                >
                  Forretningsbetingelser
                </Link>
                <Link
                  href="/information-advokat/#privat"
                  onClick={onClose}
                  className="text-xl"
                >
                  Privatlivspolitik
                </Link>
                <Link
                  href="/information-advokat/#bank"
                  onClick={onClose}
                  className="text-xl"
                >
                  Bankoplysninger
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
                <Link href="/revision" onClick={onClose} className="text-xl">
                  Revision
                </Link>
                <Link
                  href="/revision/#ekspertiser"
                  onClick={onClose}
                  className="text-xl"
                >
                  Ekspertiser
                </Link>
                <Link
                  href="/revision/#regnskab"
                  onClick={onClose}
                  className="text-xl"
                >
                  Regnskab og revision
                </Link>
                <Link
                  href="/revision/#skat"
                  onClick={onClose}
                  className="text-xl"
                >
                  Skat, moms og afgifter
                </Link>
                <Link
                  href="/revision/#finansiering"
                  onClick={onClose}
                  className="text-xl"
                >
                  Finansiering
                </Link>
                <Link
                  href="/revision/#virksomhed"
                  onClick={onClose}
                  className="text-xl"
                >
                  Køb og salg af virksomhed
                </Link>
                <Link
                  href="/revision/#ledelse"
                  onClick={onClose}
                  className="text-xl"
                >
                  Ledelsesrådgivning
                </Link>
                <Link
                  href="/revision/#regnskab"
                  onClick={onClose}
                  className="text-xl"
                >
                  Regnskab og revision
                </Link>

                <Link href="/advokat/#" onClick={onClose} className="text-xl">
                  Forretningsbetingelser
                </Link>
                <Link href="/advokat/#" onClick={onClose} className="text-xl">
                  Privatlivspolitik
                </Link>
                <Link href="/advokat/#" onClick={onClose} className="text-xl">
                  Bankoplysninger
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
                <Link href="/karriere" onClick={onClose} className="text-xl">
                  Karriere
                </Link>
                <Link
                  href="/karriere/#karriere"
                  onClick={onClose}
                  className="text-xl"
                >
                  Karriereudvikling
                </Link>
                <Link
                  href="/karriere/#medarbejder"
                  onClick={onClose}
                  className="text-xl"
                >
                  Det siger vores medarbejdere
                </Link>
                <Link
                  href="/karriere/#uopfordret"
                  onClick={onClose}
                  className="text-xl"
                >
                  Søg uopfordret
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
