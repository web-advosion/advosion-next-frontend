import Link from "next/link";

export default function WhoCardRight() {
  return (
    <Link href="/#hero">
      <div className="w-72 h-72 bg-(--advokat-blue) rounded-3xl shadow-md px-6 flex items-center hover:scale-105 transition-transform duration-300 ease-in-out justify-center ">
        <div className=" text-(--primary-bg) ">
          <h2 className="text-xl font-medium font-['Inter']">
            Skræddersyede <br />
            løsninger, der <br />
            giver mening
          </h2>
          <div className="underline text-base mt-3 inline-block">
            <p>Læs mere</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
