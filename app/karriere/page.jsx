import Image from "next/image";
import ButtonContact from "../components/buttons/ButtonContact";
import ButtonAbout from "../components/buttons/ButtonAbout";
import StatementContainerEmployees from "../components/StatementContainerEmployees";
import ButtonFind from "../components/buttons/ButtonFind";
import JobContainer from "../components/JobContainer";

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
            <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12 md:leading-9">
              <h1>Bliv en del af holdet!</h1>
            </div>

            <div
              data-aos="fade-in"
              className="mt-5 lg:flex lg:gap-12.5 lg:items-start"
            >
              <div className=" w-full h-auto md:w-[90%]">
                <p>
                  Advosion var ikke noget uden{" "}
                  <strong>dygtige medarbejdere</strong>! Måske du skal være den
                  næste? <br />
                  <br />
                  Blive en del af en arbejdsplads, hvor fagligheden er i top og
                  hvor der er plads og fleksibilitet til at få dit hverdagsskema
                  til at gå op. <br /> <br />
                  Er du nysgerrig på vores vision og værdier? Så kan du læse
                  mere om hvem vi er under “Om os”.
                </p>
              </div>
              <div className="mt-7.5">
                <ButtonAbout />
              </div>
            </div>
          </div>
          <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
            <Image
              className="object-cover"
              src="/img/holdet-placeholder-hero.jpg"
              fill
              alt="Adovosion kollegaer står tæt sammen og kigger på sag"
            ></Image>
          </div>
        </div>
      </section>

      {/*Sektion: Karriereudvikling */}
      <section
        id="karriere"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start"
      >
        <article className="lg:w-2/3">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
            <h2>Karriereudvikling</h2>
          </div>

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Som ansat hos os, går din udvikling ikke bare i stå fordi du nu er
              i arbejde. Hvis du ønsker det, er der rig mulighed for faglig
              udvikling! <br /> <br />
              Om du drømmer om at blive statsutoriseret revisor eller trænger
              til at få støvet selskabsretten af med et up-to-date kursus, så
              finder ud af det. <br /> <br />
              Vi ønsker at hjælpe dig med at være den bedst mulige medarbejder
              og <strong>hjælpe dine ambitioner</strong> på vej. <br /> <br />
              Har du spørgsmål, så tøv ikke med at kontakte os.
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonContact />
          </div>
        </article>
      </section>

      {/*Sektion: Medarbejder statements */}
      <section
        id="medarbejder"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start"
      >
        <article className="lg:w-2/3">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-10 md:leading-7">
            <h2>Det siger vores medarbejdere</h2>
          </div>

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Hvordan er det så at arbejder her, tænker du måske? <br /> <br />
              Jamen der er ikke nogen bedre måde at forklare arbejdsmiljøet på
              end at lade vores dygtige medarbejdere gøre det. <br /> <br />
              Hvis du ellers har nogle spørgsmål, så tøv ikke med at kontakte en
              af vores medarbejdere eller connecte med os på LinkedIn:
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonContact />
          </div>
        </article>

        {/*Card gallery */}
        <div data-aos="fade-in" className="mt-2.5 w-full h-auto">
          <div className="w-full flex justify-start mb-0 ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <StatementContainerEmployees />
        </div>
        <div className="mt-7.5">
          <ButtonFind />
        </div>
      </section>

      {/*Sektion: Stillinger */}
      <section
        id="stillinger"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start"
      >
        <article className="lg:w-2/3">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-10 md:leading-7">
            <h2>Aktuelle stillinger</h2>
          </div>

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Er du <strong>jobsøgende revisor</strong> eller{" "}
              <strong>advokat</strong>? <br />
              Så kig med her! <br /> <br />
              Bliv klogere på, hvad vi søger p.t. <br /> <br />
              Scenarietekst/beskrivelse... <br /> <br />
              Her kan du se hvilke stillinger vi søger i øjeblikket:
            </p>
          </div>
        </article>

        {/*Card gallery */}
        <div data-aos="fade-in" className="mt-12.5 w-full h-auto">
          <div className="w-full flex justify-start mb-0 ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <JobContainer />
        </div>
        <div className="mt-7.5">
          <ButtonFind />
        </div>
      </section>
    </main>
  );
}
