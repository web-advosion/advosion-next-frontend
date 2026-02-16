import Link from "next/link";
import ButtonReadMore from "../buttons/ButtonRead";
import Image from "next/image";

export default function RevisorCard() {
  return (
    <Link href="/revisor">
      <div className="w-full h-96 bg-(--revision-green) rounded-3xl shadow-md flex items-center px-8 justify-between hover:scale-102 transition-transform duration-300 ease-in-out gap-20">
        <article>
          <div className="w-full h-full p-">
            <div className=" text-(--advokat-blue) ">
              <h2 className="text-3xl font-medium text-(--primary-bg) ">
                Vi er eksperter i:
              </h2>
              <ul className="text-(--primary-bg) text-xl list-disc pl-5">
                <li>Regnskab og revision</li>
                <li>Skat, moms og afgifter</li>
                <li>Finansiering</li>
                <li>Køb og salg af virksomhed</li>
                <li>Ledelsesrådgivning</li>
              </ul>
            </div>
            <div className="my-6 max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <p>Læs mere</p>
            </div>

            <div className="justify-start text-white text-5xl font-medium">
              <h3 className="text-2xl">Statsaut.</h3>
              Revison
            </div>
          </div>
        </article>

        <article>
          <Image
            className="w-80 h-80 rounded-2xl"
            src="/img/lawyers-background.jpg"
            width={321}
            height={321}
            alt="Advokater in action"
          ></Image>
        </article>
      </div>
    </Link>
  );
}
