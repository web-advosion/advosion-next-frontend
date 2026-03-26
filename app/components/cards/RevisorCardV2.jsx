import Link from "next/link";
import ButtonReadMore from "../buttons/ButtonRead";
import Image from "next/image";

export default function RevisorCard() {
  return (
    <div className="w-full h-96 bg-(--revision-blue) shadow-md flex flex-row-reverse items-center px-8 justify-center transition-transform duration-300 ease-in-out">
      <section
        className="w-full flex flex-row-reverse max-w-6xl 2xl:max-w-350 mx-auto px-6.5 lg:px-3.5 justify-between"
        data-aos="fade-left"
      >
        <article className="self-end">
          <div className="flex flex-col text-(--primary-bg) text-7xl font-medium">
            <h3 className="text-4xl">Statsaut.</h3>
            Revison
          </div>
        </article>

        <article className="max-w-6xl 2xl:max-w-350 self-start">
          <div className="w-full h-full">
            <div className=" text-(--primary-bg) ">
              <h2 className="text-3xl font-medium ">Vi er eksperter i:</h2>
              <ul className=" text-xl list-disc pl-5">
                <li>Regnskab og revision</li>
                <li>Skat, moms og afgifter</li>
                <li>Finansiering</li>
                <li>Køb og salg af virksomhed</li>
                <li>Ledelsesrådgivning</li>
              </ul>
            </div>
            <div className="my-6 max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link href="/revision">Læs mere</Link>
            </div>
          </div>
        </article>

        <article>
          <Image
            className="w-80 h-auto aspect-square rounded-2xl"
            src="/img/DSC08310-1-5.jpg"
            width={321}
            height={321}
            alt="Advokater in action"
          ></Image>
        </article>
      </section>
    </div>
  );
}
