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
      ? "font-bold text-(--revision-blue)"
      : " hover:text-(--revision-blue) transition-colors";

  return (
    <>
      <div
        className={`w-full h-auto rounded-2xl max-w-6xl ${
          isHome
            ? stuck
              ? "text-white" // after scroll on home
              : "text-white" // hero (home only)
            : "text-white" // all other pages
        }`}
      >
        <div className="mx-auto w-full p-3 flex justify-between">
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
              <li className="w-max">
                <Link href="/om" className={checkPath("/om")}>
                  Om os
                </Link>
              </li>
              <li className="w-max">
                <Link href="/advokat" className={checkPath("/advokat")}>
                  Advokat
                </Link>
              </li>
              <li className="w-max">
                <Link href="/revision" className={checkPath("/revision")}>
                  Revision
                </Link>
              </li>
              <li className="w-max">
                <Link href="/karriere" className={checkPath("/karriere")}>
                  Karriere
                </Link>
              </li>

              {/* Kontakt: scale down on md so it matches text scale */}
              <li className="">
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
