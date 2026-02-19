import Link from "next/link";

export default function SkillsContainerA() {
  return (
    <>
      <ul className="text-(--primary-bg) flex flex-col gap-5 text-lg font-bold ">
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#skatteret">Skatteret</Link>
        </li>
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#erhverv">Erhvervs- og selskabsret</Link>
        </li>
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#generation">Generationsskifte</Link>
        </li>
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#virksomhed">Virksomhedsoverdragelse</Link>
        </li>
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#kontrakt">Kontrakter</Link>
        </li>
        <li className="w-full h-12 bg-(--advokat-blue) rounded-2xl items-center flex justify-center shadow-md">
          <Link href="#konflikt">Konflikthåndtering</Link>
        </li>
      </ul>
    </>
  );
}
