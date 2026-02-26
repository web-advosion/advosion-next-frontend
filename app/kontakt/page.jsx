import Image from "next/image";
import Link from "next/link";
import ButtonFind from "../components/buttons/ButtonFind";
import ContactCard from "../components/cards/ContactCard";
import ContactCardMobile from "../components/cards/ContactCardMobile";
import ContactCardTablet from "../components/cards/ContactCardTablet";

export default async function Page() {
  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 mt-12.5 relative "
      >
        <div className="md:flex">
          <div>
            <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12">
              <h1>Kontakt os</h1>
            </div>

            <div
              data-aos="fade-in"
              className="mt-5 lg:flex-col lg:gap-12.5 lg:items-start"
            >
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
        <div data-aos="fade-in" className="mt-7.5 w-full mb-25">
          <div className="hidden md:hidden lg:block">
            <ContactCard />
          </div>

          <div className="hidden md:block lg:hidden">
            <ContactCardTablet />
          </div>

          <div className="md:hidden">
            <ContactCardMobile />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.7532150345182!2d9.930506376872229!3d56.050135469050446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c6e589d400001%3A0x4703274b08dfa8c1!2sADVOSION!5e1!3m2!1sda!2sdk!4v1772112760965!5m2!1sda!2sdk"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
