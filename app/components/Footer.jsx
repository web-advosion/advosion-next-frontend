import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-133.5 py-12.5 bg-(--footer) flex flex-col items-center justify-en text-(--advokat-blue) px-48 xl:px-100">
      <section className="w-full h-auto flex">
        <article className="mr-47.5">
          <div className="mb-5">
            <Link href="/#hero">
              <Image
                src="/img/icon-footer.svg"
                width={206}
                height={42}
                alt="Advosion logo"
              ></Image>
            </Link>
          </div>

          <div className="w-64 justify-start text-(--advokat-blue) text-base font-medium font-['Inter'] leading-6">
            Vi har siden xxxx hjulpet store og små virksomheder med skræddersyet
            juridisk og økonomisk rådgivning via vores dygtige eksperter
          </div>
        </article>

        <article className="w-2xl h-52 flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">Sider</h2>
            <ul className="text-base font-medium gap-3 flex flex-col mt-3">
              <li>
                <Link href="/">Om os</Link>
              </li>
              <li>
                <Link href="/">Advokat</Link>
              </li>
              <li>
                <Link href="/">Revision</Link>
              </li>
              <li>
                <Link href="/">Karriere</Link>
              </li>
              <li>
                <Link href="/">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Kontakt</h2>
            <ul className="text-base font-medium gap-2 flex flex-col mt-3">
              <li>
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    className="w-5 h-5 text-(--advokat-blue)"
                    src="/img/icon-phone-blue.svg"
                    width={26}
                    height={26}
                    alt="telefon logo"
                  ></Image>
                  <p>+45 40 82 71 01</p>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    className="w-5 h-5 text-(--advokat-blue)"
                    src="/img/icon-mail-blue.svg"
                    width={26}
                    height={26}
                    alt="telefon logo"
                  ></Image>
                  <p>kontakt@advosion.dk</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Information</h2>
            <ul className="text-base font-medium gap-3 flex flex-col mt-3">
              <li>
                <Link href="/">Forretningsbetingelser</Link>
              </li>
              <li>
                <Link href="/">Privatlivspolitik</Link>
              </li>
              <li>
                <Link href="/">Bankoplysninger</Link>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="w-full h-auto flex mt-19 justify-between">
        <article className="flex gap-14 mr-30">
          <div className="text-(--advokat-blue) text-sm w-auto">
            <h4 className="font-bold">
              ADVOSION <br />
              ADVOKATPARTNERSELSKAB
            </h4>
            <p>
              Dronning Sophies Allé 7D, 1. sal <br />
              8660 Skanderborg <br />
              CVR: 37 55 75 60
            </p>
          </div>
          <div className="text-(--advokat-blue) text-sm w-auto">
            <h4 className="font-bold">
              ADVOSION <br />
              STATSAUT. REVISORPARTNERSELSKAB
            </h4>
            <p>
              Dronning Sophies Allé 7D, 1. sal <br />
              8660 Skanderborg <br />
              CVR: 37 55 70 64
            </p>
          </div>
        </article>

        <article className="flex items-end justify-end">
          <ul className=" text-base font-medium gap-8 flex items-end ">
            <li>
              <Link
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                href="/"
              >
                <Image
                  className=""
                  src="/img/icon-trustpilot.svg"
                  width={150}
                  height={50}
                  alt="telefon logo"
                ></Image>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                href="https://maps.app.goo.gl/p4e8WT6AYfpvtTUo6"
              >
                <Image
                  className=""
                  src="/img/icon-maps.svg"
                  width={66}
                  height={66}
                  alt="telefon logo"
                ></Image>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                href="https://www.linkedin.com/company/advosion/"
              >
                <Image
                  className=""
                  src="/img/icon-linkedin.svg"
                  width={66}
                  height={66}
                  alt="telefon logo"
                ></Image>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}
