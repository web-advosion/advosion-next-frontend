import Link from "next/link";

export default function WhoCardLight() {
  return (
    <div className="w-72 h-72 bg-(--advokat-blue) rounded-3xl shadow-md px-3 flex items-center">
      <div className=" text-white ">
        <h2 className="text-2xl font-medium font-['Inter']">
          Ét firmaTo ekspertvirksomheder
        </h2>
        <Link href="/#hero" className="underline text-base mt-3 inline-block">
          <p>Læs mere</p>
        </Link>
      </div>
    </div>
  );
}
