import Link from "next/link";

export default function ButtonMeet() {
  return (
    <Link
      className="min-w-44 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
      href="/#hero"
    >
      <p className="">Mød holdet</p>
    </Link>
  );
}
