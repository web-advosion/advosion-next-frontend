import Link from "next/link";

export default function ButtonJoin() {
  return (
    <Link
      className="min-w-44 max-w-55 h-8 bg-(--cta-black) px-5 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
      href="/karriere"
    >
      <p className="">Bliv en del af holdet</p>
    </Link>
  );
}
