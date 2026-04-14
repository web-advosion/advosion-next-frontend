import Image from "next/image";
import Link from "next/link";
import ButtonFind from "../../components/buttons/ButtonFind";
import ContactCard from "../../components/cards/ContactCard";
import ContactCardMobile from "../../components/cards/ContactCardMobile";

export default async function Page() {
  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-screen h-auto bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav margin-to-nav-mobile "
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="md:flex justify-between">
            <div>
              <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12">
                <h1>Kontakt os</h1>
              </div>

              <div className="mt-5 lg:flex-col lg:gap-12.5 lg:items-start">
                <div className=" w-full h-auto md:w-[90%]">
                  <p>
                    Har du spørgsmål, eller ønsker du at høre mere om, hvordan
                    vi kan hjælpe din virksomhed?
                    <br />
                    <br />
                    Du er <strong>altid velkommen til at kontakte os</strong> –
                    uanset om det drejer sig om juridisk rådgivning, revision
                    eller en konkret sag.
                    <br />
                    <br />
                    Vi står klar til en uforpligtende dialog og hjælper dig
                    videre.
                  </p>
                </div>
                <div className="mt-7.5">
                  <ButtonFind />
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
              <Image
                className="object-cover"
                src="/img/placeholder-kontakt-hero.svg"
                fill
                alt="Adovosion kollegaer står tæt sammen og kigger på sag"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/*Sektion: kontakt */}
      <section className=" w-full h-auto bg-(--primary-bg)">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5 leading-7">
              Kontakt
            </h1>
          </Link>

          {/*Card container */}
          <div className="mt-7.5 w-full mb-25">
            <div className="hidden md:block lg:block">
              <ContactCard />
            </div>

            <div className="md:hidden">
              <ContactCardMobile />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
