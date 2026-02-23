import Link from "next/link";

export default function SkillsContainerA() {
  return (
    <>
      <ul className="text-(--primary-bg) flex flex-col gap-5 text-lg font-bold ">
        <Link href="#skatteret">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Skatteret
          </li>
        </Link>

        <Link href="#erhverv">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Erhvervs- og selskabsret
          </li>
        </Link>

        <Link href="#generation">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Generationsskifte
          </li>
        </Link>

        <Link href="#virksomhed">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Virksomhedsoverdragelse
          </li>
        </Link>

        <Link href="#kontrakt">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Kontrakter
          </li>
        </Link>

        <Link href="#konflikt">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            Konflikthåndtering
          </li>
        </Link>
      </ul>
    </>
  );
}
