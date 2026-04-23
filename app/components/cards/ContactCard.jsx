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
      className="cursor-pointer w-full max-h-96 bg-(--cards) rounded-3xl shadow-md flex p-0 justify-between hover:scale-102 transition-transform duration-300 ease-in-out items-stretch gap-6 overflow-hidden"
    >
      <article className="flex-1 flex flex-col text-(--cta-black) p-6 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">
            <strong>Vi holder til i Skanderborg </strong> - et stenkast fra
            motorvejen
          </h2>
          <p className="pb-2">
            Du er altid velkommen til at kontakte os og høre, hvordan vi kan
            hjælpe din virksomhed <br /> – find den rette medarbejder og tag
            direkte fat i os.
          </p>
        </div>

        <div className="mt-0">
          <ul className="text-xl list-none flex flex-wrap lg:mb-5">
            <li className="flex items-center gap-2 my-0 mr-5">
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

            <li className="flex items-center gap-2 my-2">
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
                info@advosion.dk
              </a>
            </li>
          </ul>

          <Link
            href="/om/#holdet"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto w-fit min-w-44 max-w-55 h-8 bg-(--cta-black) px-8 rounded-2xl font-bold text-lg text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Find medarbejder
          </Link>
        </div>

        <div className="mt-auto text-5xl invisible lg:visible font-medium">
          Find os her
        </div>
      </article>

      <article
        className="w-1/2"
        onClick={(e) => e.stopPropagation()} // prevents map click from navigating
      >
        <div className="h-full">
          <GoogleMap />
        </div>
      </article>
    </div>
  );
}
