import Link from "next/link";

export default function SkillsContainerR() {
  return (
    <>
      <ul className="text-(--primary-bg) flex flex-col gap-5 text-lg font-bold ">
        <Link href="#regnskab">
          <li className="w-full h-12 bg-(--revision-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Regnskab og revision
          </li>
        </Link>

        <Link href="#skat">
          <li className="w-full h-12 bg-(--revision-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Skat, moms og afgifter
          </li>
        </Link>

        <Link href="#finansiering">
          <li className="w-full h-12 bg-(--revision-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Finansiering
          </li>
        </Link>

        <Link href="#virksomhed">
          <li className="w-full h-12 bg-(--revision-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Køb og salg af virksomhed
          </li>
        </Link>

        <Link href="#ledelse">
          <li className="w-full h-12 bg-(--revision-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Ledelsesrådgivning
          </li>
        </Link>
      </ul>
    </>
  );
}
