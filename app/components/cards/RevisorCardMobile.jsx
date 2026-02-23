import Link from "next/link";
import ButtonReadMore from "../buttons/ButtonRead";
import Image from "next/image";

export default function RevisorCardMobile() {
  return (
    <Link href="/revision">
      <div className="w-full h-auto bg-(--revision-blue) rounded-3xl shadow-md flex-col items-center p-5 justify-between hover:scale-102 transition-transform duration-300 ease-in-out ">
        <article>
          <div className="w-full h-full p-">
            <div className=" text-(--primary-bg) ">
              <h2 className="text-3xl font-medium text-(--primary-bg) ">
                Vi er eksperter i:
              </h2>
              <ul className="text-(--advokat-blue) text-xl list-disc pl-5">
                <li>Regnskab og revision</li>
                <li>Skat, moms og afgifter</li>
                <li>Finansiering</li>
                <li>Køb og salg af virksomhed</li>
                <li>Ledelsesrådgivning</li>
              </ul>
            </div>
            <div className="my-6 max-w-40 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-(--primary-bg) flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <p>Læs mere</p>
            </div>

            <div className="justify-start text-(--primary-bg) text-5xl font-medium mb-5">
              <h3 className="text-xl font-medium">Statsaut.</h3>
              Revison
            </div>
          </div>
        </article>

        <article>
          <Image
            className="w-72 h-72 rounded-2xl"
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
