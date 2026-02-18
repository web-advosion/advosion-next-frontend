import Image from "next/image";
import AdvokatCardMobile from "../components/cards/AdvokatCardMobile";
import RevisorCardMobile from "../components/cards/RevisorCardMobile";
import AdvokatContainer from "../components/AdvokatContainer";
import RevisorContainer from "../components/RevisorContainer";
import AndetContainer from "../components/AndetContainer";
import ButtonContact from "../components/buttons/ButtonContact";
import GalleryContainer from "../components/GalleryContainer";
import ButtonJoin from "../components/buttons/ButtonJoin";
import ValueContainer from "../components/ValueContainer";
import AdvokatCard from "../components/cards/AdvokatCard";
import RevisorCard from "../components/cards/RevisorCard";

export default async function Page() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/pages?slug=forside",
    { next: { revalidate: 10 } }, // ISR: rebuild hver 10 sekunder
  );
  const pages = await res.json();
  const page = pages[0];

  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 mt-12.5 relative "
      >
        <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter']">
          <h1>Om Advosion</h1>
        </div>

        <div
          data-aos="fade-in"
          className="mt-5 lg:flex lg:gap-12.5 lg:items-start"
        >
          <div className=" w-full h-auto lg:w-2/3">
            <p>
              ADVOSION er nyt og innovativt firmakoncept, der kombinerer{" "}
              <strong>jura</strong> og <strong>revision</strong>. <br /> <br />
              Vores forstærkede forretningsforståelse giver os en unik mulighed
              for at tilbyde virksomheder en{" "}
              <strong>helhedsorienteret og professionel rådgiving.</strong>{" "}
              <br /> <br />
              Vores{" "}
              <strong>specialistkompetencer er samlet under ét tag</strong> og
              synenergien mellem de to forretningsområder betyder, at vi
              udvikler endnu bedre løsninger til gavn for dig og din virksomhed.
              Vi er eksperter i at rådgive i krydsfeltet mellem økonomi og jura.
              Hurtigt og enkelt, og uden fordyrrende mellemled.
            </p>
          </div>

          <div className="w-80 h-80  md:min-w-96 md:min-h-96 relative overflow-hidden rounded-3xl shadow-md mt-12.5 lg:mt-0">
            <Image
              className="object-cover"
              src="/img/businesspeople-having-discussion-office.jpg"
              fill
              alt="Adovosion kollegaer står tæt sammen og kigger på sag"
            ></Image>
          </div>
        </div>
      </section>

      {/*Sektion Ekspertise*/}
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-7.5 pt-10 md:pt-12.5  md:pb-12.5"
      >
        <div className="w-full flex justify-start mb-2.5 md:hidden">
          <Image
            className="w-35 h-10"
            src="/img/icon-swipe.svg"
            width={150}
            height={50}
            alt="swipe icon"
          ></Image>
        </div>

        <div
          className="w-screen h-auto flex overflow-x-auto gap-5 pr-15 md:hidden"
          data-aos="fade-in"
        >
          <AdvokatCardMobile />
          <RevisorCardMobile />
        </div>

        <div data-aos="fade-right" className=" w-full lg:w-179 ">
          <div className="hidden md:block">
            <AdvokatCard />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="mt-12.5 w-full lg:w-179 lg:justify-self-end "
        >
          <div className="hidden md:block">
            <RevisorCard />
          </div>
        </div>
      </section>

      {/*Sektion: Holdet */}
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5  mt-12.5 "
      >
        <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter']">
          <h2>Holdet</h2>
        </div>

        <div className="mt-5 w-full lg:max-w-2/3 h-auto" data-aos="fade-in">
          <p>
            De stærke kræfter bag ADVOSION leverer, sammen med dygtige,
            dedikerede og entusiatiske medarbejdere, forretningsmæssige
            totalløsninger og en helhedsorienteret rådgivning.
            <br /> <br />
            Organisatorisk er ADVOSION delt op i{" "}
            <strong>to separate firmaer:</strong> <br /> <br />
            ADVOSION Advokatpartnerselskab <br /> <br />
            ADVOSION Statsautoriseret Revisionspartnerselskab. <br /> <br />
            Se her en samlet oversigt over vores dygtige medarbejdere.
          </p>
        </div>

        <article className="w-full h-auto pb-12.5 lg:pb-25 pt-10">
          <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
            <h2>Advokaterne</h2>
          </div>
          <div className="w-full flex justify-start  ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <div
            className="w-max h-auto flex overflow-x-auto gap-5 pr-15"
            data-aos="fade-in"
          >
            <AdvokatContainer />
          </div>
        </article>

        <article className="w-full h-auto pb-12.5 lg:pb-25  ">
          <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
            <h2>Revisorne</h2>
          </div>
          <div className="w-full flex justify-start  ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <div
            className="w-max h-auto flex overflow-x-auto gap-5 pr-15"
            data-aos="fade-in"
          >
            <RevisorContainer />
          </div>
        </article>

        <article className="w-full h-auto pb-11.25 ">
          <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
            <h2>Øvrigt personale</h2>
          </div>
          <div className="w-full flex justify-start  ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <div
            className="w-max h-auto flex overflow-x-auto gap-5 pr-15"
            data-aos="fade-in"
          >
            <AndetContainer />
          </div>
        </article>
        <div>
          <ButtonContact />
        </div>
      </section>

      {/*Sektion: Faciliteterne */}
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pt-12.5 "
      >
        <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter']">
          <h2>Faciliteterne</h2>
        </div>

        <div className="mt-5 w-full lg:max-w-2/3 h-auto" data-aos="fade-in">
          <p>
            Vi bor i nogle dejlige og nye lækre bygninger, som vi flyttede til i
            september 2024. <br /> <br />
            Der er både <strong>åbne og lyse fællesarealer</strong> som lounge,
            medarbejderkøkken, mødelokaler. <br /> <br />
            Der er lyst og højt til loftet både i fysisk og overført forstand
            her går vi op i at vores medarbejdere trives og gøre vores bedste
            for facilitere det ved at stille de bedst mulige rammer til
            rådighed. <br /> <br />
            <strong>Socialt</strong> har vi fælles morgenmad hver onsdag og én
            gang i måneden har vi fælles frokost om fredagen, hvor vi bestiller
            en sandwich e.l. ude fra. <br /> <br />
            Normalt spiser vi i vores fælles kantine, som vi deler med
            bygningens øvrige virksomheder. <br /> <br />
            Her kan du få et indblik, hvordan det kan se ud at arbejde hos os.
          </p>
        </div>

        <article className="w-full h-auto pb-12.5 pt-10">
          <div className="w-full flex justify-start  ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <div data-aos="fade-in">
            <GalleryContainer />
            <div className="flex justify-end mt-7.5">
              <ButtonJoin />
            </div>
          </div>
        </article>
      </section>

      {/*Sektion: Vision */}
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-25 pt-12.5 "
      >
        <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter']">
          <h2>Vision og kerneværdier</h2>
        </div>

        <div className="mt-5 w-full lg:max-w-2/3 h-auto" data-aos="fade-in">
          <p>
            Vi er ikke bare et hvilket som helst advokat- eller revisionsfirma.{" "}
            <br /> <br />
            Vi leverer <strong>helhedsorienteret rådgivning</strong> af højeste
            kvalitet. Vi har markedets skarpeste fokus på krydsfeltet mellem
            jura og revision, og sikrer dermed vores kunder
            <strong>
              {" "}
              bedre løsninger og en bæredygtig vækst.
            </strong> <br /> <br />
            Her driver vi forretning efter følgende kerneværdier:
          </p>
        </div>

        <article className="w-full h-auto pb-12.5 pt-10">
          <div className="w-full flex justify-start lg:hidden">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <div data-aos="fade-in">
            <ValueContainer />
          </div>
        </article>

        <article className="md:pt-12.5">
          <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
            <h3>Hjerte for det lokale</h3>
          </div>

          <div className="mt-5 w-full lg:max-w-2/3 h-auto" data-aos="fade-in">
            <p>
              Udover at levere juridisk og økonomisk rådgivning har vi også er
              hjerte for det lokale liv her i Skanderborg og omegn. <br />{" "}
              <br />
              Vi støtter aktivt op om det lokale erhvervsliv, samt de manger
              kulturelle og sportslige initiativer i Skanderborg. <br /> <br />
              Vi har bland andet støttet: ..... & ..... & .... [konkrete
              eksempler]
            </p>
          </div>
          <div
            className="w-full md:w-100 h-full md:h-100 md:items-center bg-(--cta-black) rounded-3xl shadow-md p-4 flex items-center  justify-center mt-12.5"
            data-aos="fade-in"
          >
            <Image
              src="/img/fc-skanderborg-logo_2024-bla-baggrund-2464090450.png"
              width={334}
              height={334}
              alt="FC Skanderborgs klublogo"
            ></Image>
          </div>
        </article>
      </section>
    </main>
  );
}
