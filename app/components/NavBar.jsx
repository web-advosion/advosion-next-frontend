"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const checkPath = (path) =>
    pathname == path
      ? "font-bold"
      : "text-black hover:text-(--revision-blue) transition-colors";

  return (
    <div className="w-full h-20 bg-(--primary-bg) rounded-2xl shadow-lg p-5 flex items-center justify-between text-xl">
      <article>
        <Link href="/#hero">
          <Image
            src="/img/icon-footer.svg"
            width={235}
            height={50}
            alt="Advosion logo"
            className="w-60 h-full"
          />
        </Link>
      </article>

      <article>
        <ul className="font-medium gap-20 flex items-center">
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
          <li className="w-44 h-12 px-2.5 py-1 bg-(--cards) rounded-2xl flex items-center justify-center">
            <Link href="/kontakt" className={checkPath("/kontakt")}>
              Kontakt
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
