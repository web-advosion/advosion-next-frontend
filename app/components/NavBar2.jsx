"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu2";

export default function NavBar({ stuck }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const checkPath = (path) =>
    pathname == path
      ? " text-(--revision-blue) border-(--revision-blue)"
      : "hover:text-(--revision-blue) transition-colors hover:border-(--revision-blue)";

  return (
    <>
      <div
        className={`w-full h-auto rounded-2xl max-w-6xl ${
          isHome
            ? stuck
              ? "text-white"
              : "text-white bg-transparant"
            : "text-white"
        }`}
      >
        <div className="mx-auto w-full py-3 flex justify-between">
          <article className="flex items-center shrink-0">
            <Link href="/#hero">
              <Image
                src="/img/advosion-logo-v2.svg"
                width={235}
                height={50}
                alt="Advosion logo"
                className="h-12 w-auto"
                priority
              />
            </Link>
          </article>

          <article className="hidden md:flex">
            <ul className="font-medium flex items-center gap-6">
              <li className="w-max group relative">
                <Link
                  href="/om"
                  className={`${checkPath("/om")} inline-block py-2`}
                >
                  Om os
                </Link>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/om/#holdet"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Holdet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/om/#faciliteter"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Faciliteterne
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/om/#vision"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Vision og kerneværdier
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group w-max">
                <Link
                  href="/advokat"
                  className={`${checkPath("/advokat")} inline-block py-2`}
                >
                  Advokat
                </Link>

                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/advokat/#ekspertiser"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Ekspertiser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#skatteret"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Skatteret
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#erhverv"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Erhvervs- og selskabsret
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#generation"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Generationsskifte
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#virksomhed"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Virksomhedsoverdragelse
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#kontrakt"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Kontrakter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#konflikt"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Konflikthåndtering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Forretningsbetingelser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Privatlivspolitik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#ledelse"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Bankoplysninger
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="w-max group relative">
                <Link
                  href="/revision"
                  className={`${checkPath("/revision")} inline-block py-2`}
                >
                  Revision
                </Link>
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/revision/#ekspertiser"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Ekspertiser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#regnskab"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Regnskab og revision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#skat"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Skat, moms og afgifter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#finansiering"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Finansiering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#virksomhed"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Køb og salg af virksomhed
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#ledelse"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Ledelsesrådgivning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Forretningsbetingelser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Privatlivspolitik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Bankoplysninger
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="w-max group relative">
                <Link
                  href="/karriere"
                  className={`${checkPath("/karriere")} inline-block py-2`}
                >
                  Karriere
                </Link>

                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/karriere/#karriere"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Karriereudvikling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/karriere/#medarbejder"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Det siger vores medarbejdere
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/karriere/#uopfordret"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-white"
                    >
                      Søg uopfordret
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className={`${checkPath("/kontakt")} h-full px-10 py-1 border-2 border-(--primary-bg) rounded-2xl flex items-center justify-center`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </article>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Image
              src="/img/icon-burgermenu-white.svg"
              width={50}
              height={50}
              alt="burgermenu ikon"
              className="w-full h-full"
            />
          </button>

          {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </div>
      </div>
    </>
  );
}
