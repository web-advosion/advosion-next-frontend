import Link from "next/link";

export default function ButtonApply({
  bgColor,
  textColor,
  borderYes,
  borderColor,
}) {
  return (
    <div className=" flex w-full">
      <Link
        className={`max-w-40 h-8 ${bgColor} px-8 rounded-2xl font-bold text-lg ${textColor} ${borderYes} ${borderColor} flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out`}
        href="/karriere/#kontaktform"
      >
        <p className="">Ansøg</p>
      </Link>
    </div>
  );
}
