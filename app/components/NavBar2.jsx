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
        className={`w-full h-auto rounded-2xl max-w-6xl 2xl:max-w-350 ${
          isHome
            ? stuck
              ? "text-(--primary-bg)"
              : "text-(--primary-bg) bg-transparant"
            : "text-(--primary-bg)"
        }`}
      >
        <div className="mx-auto w-full py-3 flex justify-between pr-3">
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
                <ul className="absolute left-0 top-full hidden group-hover:block bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/om/#holdet"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Holdet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/om/#faciliteter"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Faciliteterne
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/om/#vision"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
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

                <ul className="absolute left-0 top-full hidden group-hover:block bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0 z-50">
                  <li>
                    <Link
                      href="/advokat/#ekspertiser"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg) hover:rounded-t-2xl"
                    >
                      Ekspertiser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#skatteret"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Skatteret
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#erhverv"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Erhvervs- og selskabsret
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#generation"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Generationsskifte
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#virksomhed"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Virksomhedsoverdragelse
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#kontrakt"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Kontrakter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advokat/#konflikt"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Konflikthåndtering
                    </Link>
                  </li>
                  <li className="relative group/sub">
                    <Link
                      href="/information-advokat"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg) hover:rounded-b-2xl"
                    >
                      Vilkår og oplysninger
                    </Link>

                    <div className="absolute left-full top-0 hidden group-hover/sub:block pl-0 z-50">
                      <ul className="bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0">
                        <li>
                          <Link
                            href="/information-revision/#betingelser"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg) hover:rounded-t-2xl"
                          >
                            Forretningsbetingelser
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/information-revision/#privat"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg)"
                          >
                            Privatlivspolitik
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/information-revision/#bank"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg) hover:rounded-b-2xl"
                          >
                            Bankoplysninger
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                <ul className="absolute left-0 top-full hidden group-hover:block bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0 z-50">
                  <li>
                    <Link
                      href="/revision/#ekspertiser"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:rounded-t-2xl hover:text-(--primary-bg)"
                    >
                      Ekspertiser
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#regnskab"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Regnskab og revision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#skat"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Skat, moms og afgifter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#finansiering"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Finansiering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#virksomhed"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Køb og salg af virksomhed
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revision/#ledelse"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Ledelsesrådgivning
                    </Link>
                  </li>
                  <li className="relative group/sub">
                    <Link
                      href="/information-revision"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg) hover:rounded-b-2xl"
                    >
                      Vilkår og oplysninger
                    </Link>

                    <div className="absolute left-full top-0 hidden group-hover/sub:block pl-0 z-50">
                      <ul className="bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0">
                        <li>
                          <Link
                            href="/information-revision/#betingelser"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg) hover:rounded-t-2xl"
                          >
                            Forretningsbetingelser
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/information-revision/#privat"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg)"
                          >
                            Privatlivspolitik
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/information-revision/#bank"
                            className="block px-4 py-2 hover:bg-(--advokat-blue) hover:text-(--primary-bg) hover:rounded-b-2xl"
                          >
                            Bankoplysninger
                          </Link>
                        </li>
                      </ul>
                    </div>
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

                <ul className="absolute left-0 top-full hidden group-hover:block bg-(--primary-bg) text-(--advokat-blue) rounded-2xl shadow-lg min-w-50 py-0 z-50 overflow-hidden">
                  <li>
                    <Link
                      href="/karriere/#karriere"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Karriereudvikling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/karriere/#medarbejder"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Det siger vores medarbejdere
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/karriere/#uopfordret"
                      className="block px-4 py-2 hover:bg-(--revision-blue) hover:text-(--primary-bg)"
                    >
                      Søg uopfordret
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className={`${checkPath("/kontakt")} h-full px-8 py-1 border-2 border-(--primary-bg) rounded-2xl flex items-center justify-center`}
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
