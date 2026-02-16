import Link from "next/link.js";
import ButtonFind from "../buttons/ButtonFind.jsx";
import Image from "next/image";

export default function ContactCard() {
  return (
    <Link href="/kontakt">
      <div className="w-282 h-96 bg-(--cards) rounded-3xl shadow-md flex p-8 align-top justify-between hover:scale-102 transition-transform duration-300 ease-in-out">
        <article className="w-2/3 h-full flex flex-col justify-between">
          <div className="w-full h-full text-(--cta-black) flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium ">
                <strong>Vi holder til i Skanderborg </strong> - et stenkast fra
                motorvejen
              </h2>
              <p>
                Kontakt os endelig og lad os finde ud af, hvordan vi kanhjælpe
                din virksomhed
              </p>
            </div>

            <div>
              <ul className=" text-xl list-none">
                <li className="flex items-center gap-2 my-5">
                  <Image
                    src="/img/icon-phone.svg"
                    width={22}
                    height={22}
                    alt="telefon ikon"
                  ></Image>
                  <h3>99 99 99 99</h3>
                </li>

                <li className="flex items-center gap-2 my-5">
                  <Image
                    src="/img/icon-mail.svg"
                    width={22}
                    height={22}
                    alt="telefon ikon"
                  ></Image>
                  <h3>kontakt@advosion.dk</h3>
                </li>
              </ul>
              <div className="my-6 min-w-44 max-w-55 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <p>Find medarbejder</p>
              </div>
            </div>

            <div className=" text-5xl font-medium">Find os her</div>
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
