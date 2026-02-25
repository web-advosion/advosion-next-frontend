import Link from "next/link";

export default function ButtonContact() {
  return (
    <div className=" flex w-full">
      <Link
        className={`max-w-40 h-8 px-6 rounded-2xl bg-(--cta-black) text-(--primary-bg) font-bold text-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out`}
        href="/kontakt"
      >
        <p className="">Kontakt os</p>
      </Link>
    </div>
  );
}
