"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../GoogleMap";

export default function ContactCard() {
  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => router.push("/kontakt")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          router.push("/kontakt");
        }
      }}
      className="cursor-pointer w-full bg-(--cards) rounded-3xl shadow-md flex p-8 justify-between hover:scale-102 transition-transform duration-300 ease-in-out items-stretch gap-6"
    >
      <article className="flex-1 flex flex-col text-(--cta-black)">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">
            <strong>Vi holder til i Skanderborg </strong> - et stenkast fra
            motorvejen
          </h2>
          <p>
            Kontakt os endelig og lad os finde ud af, hvordan vi kan hjælpe din
            virksomhed
          </p>
        </div>

        <div className="mt-6">
          <ul className="text-xl list-none">
            <li className="flex items-center gap-2 my-5">
              <Image
                src="/img/icon-phone.svg"
                width={22}
                height={22}
                alt="telefon ikon"
              />
              <a
                href="tel:99999999"
                onClick={(e) => e.stopPropagation()}
                className="hover:underline"
              >
                99 99 99 99
              </a>
            </li>

            <li className="flex items-center gap-2 my-5">
              <Image
                src="/img/icon-mail.svg"
                width={22}
                height={22}
                alt="mail ikon"
              />
              <a
                href="mailto:kontakt@advosion.dk"
                onClick={(e) => e.stopPropagation()}
                className="hover:underline"
              >
                kontakt@advosion.dk
              </a>
            </li>
          </ul>

          <Link
            href="/om/#holdet"
            onClick={(e) => e.stopPropagation()}
            className="my-6 w-fit min-w-44 max-w-55 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Find medarbejder
          </Link>
        </div>

        <div className="mt-auto text-5xl font-medium">Find os her</div>
      </article>

      <article
        className="w-1/2 xl:w-1/3 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevents map click from navigating
      >
        <div className="h-80 md:h-96 lg:h-96">
          <GoogleMap />
        </div>
      </article>
    </div>
  );
}
