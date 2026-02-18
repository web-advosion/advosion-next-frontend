import Link from "next/link";

export default function ButtonContact() {
  return (
    <div className=" flex w-full">
      <Link
        className="max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
        href="/kontakt"
      >
        <p className="">Kontakt os</p>
      </Link>
    </div>
  );
}
