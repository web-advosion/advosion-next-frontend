import Link from "next/link";

export default function ButtonReadMore() {
  return (
    <div className=" flex w-full">
      <Link
        className="max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center"
        href="/#hero"
      >
        <p className="">Læs mere</p>
      </Link>
    </div>
  );
}
