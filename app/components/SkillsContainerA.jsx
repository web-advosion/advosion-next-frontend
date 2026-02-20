import Link from "next/link";

export default function SkillsContainerA() {
  return (
    <>
      <ul className="text-(--primary-bg) flex flex-col gap-5 text-lg font-bold ">
        <Link href="#skatteret">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Skatteret
          </li>
        </Link>

        <Link href="#erhverv">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Erhvervs- og selskabsret
          </li>
        </Link>

        <Link href="#generation">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Generationsskifte
          </li>
        </Link>

        <Link href="#virksomhed">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Virksomhedsoverdragelse
          </li>
        </Link>

        <Link href="#kontrakt">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Kontrakter
          </li>
        </Link>

        <Link href="#konflikt">
          <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
            Konflikthåndtering
          </li>
        </Link>
      </ul>
    </>
  );
}
