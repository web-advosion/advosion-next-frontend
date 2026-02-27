import Link from "next/link";

export default function ButtonExperts() {
  return (
    <Link
      className="min-w-44 max-w-55 h-8 bg-(--cta-black) px-5 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
      href="/om/#holdet"
    >
      <p className="">Mød eksperterne</p>
    </Link>
  );
}
