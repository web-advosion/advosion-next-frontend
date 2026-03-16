"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const checkPath = (path) =>
    pathname == path
      ? "font-bold"
      : "text-black hover:text-(--revision-blue) transition-colors";

  return (
    <div className="w-full h-auto bg-(--primary-bg) rounded-2xl shadow-lg max-w-6xl">
      <div className="mx-auto w-full p-3 flex justify-between">
        <article className="flex items-center shrink-0">
          <Link href="/#hero">
            <Image
              src="/img/icon-footer.svg"
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
            <li className="md:w-32 lg:w-44 md:h-10 lg:h-12 px-2.5 py-1 bg-(--cards) rounded-2xl flex items-center justify-center">
              <Link href="/kontakt" className={checkPath("/kontakt")}>
                Kontakt
              </Link>
            </li>
          </ul>
        </article>

        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Image
            src="/img/icon-burgermenu.svg"
            width={50}
            height={50}
            alt="burgermenu ikon"
            className="w-full h-full"
          />
        </button>

        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </div>
    </div>
  );
}
