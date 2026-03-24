import Image from "next/image";
import Link from "next/link";
import ButtonTop from "./buttons/ButtonTop";

export default function FooterV2() {
  return (
    <footer className="w-full bg-(--footer) text-(--advokat-blue)">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5 py-12.5 md:py-10.5 lg:py-12.5 flex flex-col gap-19 md:gap-12.5">
        <section className="w-full h-auto flex flex-col md:flex-row md:gap-20 md:items-start justify-between">
          <article className=" w-full md:max-w-52">
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

            <div className="w-64 md:w-full justify-start text-(--advokat-blue) text-base md:text-xs lg:text-base font-medium font-['Inter'] leading-6">
              Vi har siden xxxx hjulpet store og små virksomheder med
              skræddersyet juridisk og økonomisk rådgivning via vores dygtige
              eksperter
            </div>
          </article>

          <article className="w-full md:w-2xl flex flex-col md:flex-row justify-between items-start mt-11.5 md:mt-0 md:leading-6">
            <div>
              <h2 className="text-2xl md:text-base lg:text-2xl font-bold">
                Sider
              </h2>
              <ul className="text-base md:text-xs lg:text-base font-medium gap-3 flex flex-col mt-3">
                <li>
                  <Link href="/om">Om os</Link>
                </li>
                <li>
                  <Link href="/advokat">Advokat</Link>
                </li>
                <li>
                  <Link href="/revision">Revision</Link>
                </li>
                <li>
                  <Link href="/karriere">Karriere</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>

            <div className="mt-11.5 md:mt-0">
              <Link href="/kontakt">
                <h2 className="text-2xl md:text-base lg:text-2xl font-bold">
                  Kontakt
                </h2>
              </Link>

              <ul className="text-base md:text-xs lg:text-base font-medium gap-2 flex flex-col mt-3">
                <li>
                  <a
                    href={`tel:+45 40 82 71 01`}
                    className="flex items-center gap-2"
                  >
                    <Image
                      className="w-5 h-5 text-(--advokat-blue)"
                      src="/img/icon-phone-blue.svg"
                      width={26}
                      height={26}
                      alt="telefon logo"
                    ></Image>

                    <p>+45 40 82 71 01</p>
                  </a>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2"
                    href={`mailto:kontakt@advosion.dk`}
                  >
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

            <div className="mt-11.5 md:mt-0">
              <Link href="/information">
                <h2 className="text-2xl md:text-base lg:text-2xl font-bold">
                  Information
                </h2>
              </Link>
              <ul className="text-base md:text-xs lg:text-base font-medium gap-3 flex flex-col mt-3">
                <li>
                  <Link href="/information/#betingelser">
                    Forretningsbetingelser
                  </Link>
                </li>
                <li>
                  <Link href="/information/#privat">Privatlivspolitik</Link>
                </li>
                <li>
                  <Link href="/information/#bank">Bankoplysninger</Link>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="w-full h-auto flex flex-col md:flex-row mt-19 md:mt-0 justify-between">
          <article className="flex flex-col md:flex-row gap-11.5 md:gap-14 md:mr-30">
            <div className="text-(--advokat-blue) text-sm md:text-xs lg:text-sm w-auto">
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
            <div className="text-(--advokat-blue) text-sm md:text-xs lg:text-sm w-auto">
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

          <article className="flex items-end justify-start md:justify-end mt-11.5 md:mt-0">
            <ul className=" text-base font-medium gap-8 flex flex-col md:flex-row items-start md:items-end">
              <li>
                <Link
                  className="flex flex-col md:flex-row items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out"
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
          <div className="w-full mt-5 flex justify-end md:items-end md:hidden">
            <ButtonTop />
          </div>
        </section>
        <div className="w-full mt-5 justify-end md:items-end hidden md:flex">
          <ButtonTop />
        </div>
      </div>
    </footer>
  );
}
