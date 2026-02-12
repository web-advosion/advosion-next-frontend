import Link from "next/link";

export default function ButtonFind() {
  return (
    <Link
      className="min-w-44 max-w-55 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center"
      href="/#hero"
    >
      <p className="">Find medarbejder</p>
    </Link>
  );
}
