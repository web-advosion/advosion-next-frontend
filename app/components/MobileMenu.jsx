"use client";

import Link from "next/link";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col p-8">
      <button onClick={onClose} className="self-end text-2xl">
        ✕
      </button>

      <nav className="flex flex-col gap-8 text-2xl mt-12">
        <Link href="/om" onClick={onClose}>
          Om os
        </Link>
        <Link href="/advokat" onClick={onClose}>
          Advokat
        </Link>
        <Link href="/revision" onClick={onClose}>
          Revision
        </Link>
        <Link href="/karriere" onClick={onClose}>
          Karriere
        </Link>
        <Link href="/kontakt" onClick={onClose}>
          Kontakt
        </Link>
      </nav>
    </div>
  );
}
