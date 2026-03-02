import Image from "next/image";
import Link from "next/link";
import ButtonFind from "../components/buttons/ButtonFind";
import ContactCard from "../components/cards/ContactCard";
import ContactCardMobile from "../components/cards/ContactCardMobile";

export default async function Page() {
  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav margin-to-nav-mobile "
      >
        <div className="md:flex">
          <div>
            <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-9">
              <h1>Kontakt os</h1>
            </div>

            <div className="mt-5 lg:flex-col lg:gap-12.5 lg:items-start">
              <div className=" w-full h-auto md:w-[90%]">
                <p>
                  Advosion var ikke noget uden{" "}
                  <strong>dygtige medarbejdere!</strong> Måske du skal være den
                  næste? <br /> <br />
                  Blive en del af en arbejdsplads, hvor fagligheden er i top og
                  hvor der er plads og fleksibilitet til at få dit hverdagsskema
                  til at gå op. <br /> <br />
                  Er du nysgerrig på vores vision og værdier? Så kan du læse
                  mere om hvem vi er under “Om os”.
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
      </section>
      {/*Sektion: kontakt */}
      <section className=" w-full h-auto bg-(--primary-bg) px-7.5 md:px-10.75 lg:px-48 2xl:px-100">
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
      </section>
    </main>
  );
}
