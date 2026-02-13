import Link from "next/link";

export default function WhoCardMiddle() {
  return (
    <Link href="/#hero">
      <div className="w-72 h-72 bg-(--cards) rounded-3xl shadow-md px-6 flex items-center hover:scale-105 transition-transform duration-300 ease-in-out justify-center">
        <div className=" text-(--advokat-blue) ">
          <h2 className="text-xl font-medium font-['Inter']">
            Professionel <br />
            juridisk og økonomisk <br />
            rådgiving{" "}
          </h2>
          <Link href="/#hero" className="underline text-base mt-3 inline-block">
            <p>Læs mere</p>
          </Link>
        </div>
      </div>
    </Link>
  );
}
