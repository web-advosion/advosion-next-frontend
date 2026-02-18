import Link from "next/link";

export default function ValueCard(value) {
  return (
    <Link href="/#hero">
      <div className="w-72 h-72 bg-(--cards) rounded-3xl shadow-md px-6 flex items-center hover:scale-105 transition-transform duration-300 ease-in-out justify-center">
        <div className=" text-(--advokat-blue) ">
          <h2 className=" text-2xl font-medium font-['Inter'] leading-9">
            {value.acf?.titel}
          </h2>
          <div className=" text-base font-normal">
            <p>{value.acf?.beskrivelse}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
