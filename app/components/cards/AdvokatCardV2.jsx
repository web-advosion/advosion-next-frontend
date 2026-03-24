import Link from "next/link";
import ButtonRead from "../buttons/ButtonRead";
import Image from "next/image";

export default function AdvokatCard() {
  return (
    <div className="w-full h-96 bg-(--advokat-blue) shadow-md flex flex-row-reverse items-center px-8 justify-center transition-transform duration-300 ease-in-out">
      <section className="flex flex-row-reverse gap-20">
        <article className="self-end">
          <div className="justify-start text-white text-7xl font-medium">
            Advokat
          </div>
        </article>

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
              <Link href="/advokat">Læs mere</Link>
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
      </section>
    </div>
  );
}
