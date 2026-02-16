import Link from "next/link.js";
import ButtonFind from "../buttons/ButtonFind.jsx";
import Image from "next/image";

export default function ContactCardMobile() {
  return (
    <Link href="/kontakt">
      <div className="w-80 h-auto bg-(--cards) rounded-3xl shadow-md flex-col p-5 align-top justify-between hover:scale-102 transition-transform duration-300 ease-in-out">
        <article className="w-full h-full flex flex-col justify-between">
          <div className=" text-5xl font-medium mb-5">Find os her</div>
          <div className="w-full h-full text-(--cta-black) flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-medium">
                <strong>
                  Vi holder til i Skanderborg <br />{" "}
                </strong>{" "}
                - et stenkast fra motorvejen
              </h2>
              <p>
                Kontakt os endelig og lad os finde ud af, hvordan vi kanhjælpe
                din virksomhed
              </p>
            </div>

            <div>
              <ul className=" text-xl list-none font-medium">
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
              <div className="my-6">
                <ButtonFind />
              </div>
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
