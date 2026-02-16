import Link from "next/link";
import ButtonRead from "../buttons/ButtonRead";
import Image from "next/image";

export default function AdvokatCard() {
  return (
    <Link href="/advokat">
      <div className="w-full h-96 bg-(--advokat-blue) rounded-3xl shadow-md flex items-center px-8 justify-between hover:scale-102 transition-transform duration-300 ease-in-out gap-20 ">
        <article>
          <div className="w-full h-full">
            <div className=" text-(--advokat-blue) ">
              <h2 className="text-3xl font-medium text-(--primary-bg) ">
                Vi er eksperter i:
              </h2>
              <ul className="text-(--primary-bg) text-xl list-disc pl-5">
                <li>Skatteret</li>
                <li>Erhvervs- og selskabsret</li>
                <li>Generationsskifte</li>
                <li>Virksomhedsoverdragelse</li>
                <li>Kontrakter</li>
                <li>Konflikthåndtering</li>
              </ul>
            </div>
            <div className="my-6 max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <p>Læs mere</p>
            </div>

            <div className="justify-start text-white text-5xl font-medium">
              Advokat
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
