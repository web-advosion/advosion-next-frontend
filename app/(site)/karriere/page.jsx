export const runtime = "nodejs";
import Image from "next/image";
import ButtonContact from "../../components/buttons/ButtonContact";
import ButtonAbout from "../../components/buttons/ButtonAbout";
import StatementContainerEmployees from "../../components/StatementContainerEmployees";
import ButtonFind from "../../components/buttons/ButtonFind";
import JobContainer from "../../components/JobContainer";
import ContactForm from "../../components/ContactForm";

export default async function Page() {
  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-screen h-auto bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav margin-to-nav-mobile"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="md:flex justify-between">
            <div>
              <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12 md:mr-2">
                <h1>Bliv en del af holdet!</h1>
              </div>

              <div className="mt-5 lg:flex-col lg:gap-12.5 lg:items-start">
                <div className=" w-full h-auto md:w-[90%]">
                  <p>
                    ADVOSION er drevet af dygtige medarbejdere – måske er du den
                    næste.
                    <br />
                    <br />
                    Hos os bliver du en del af et{" "}
                    <strong>fagligt stærkt</strong> miljø med plads til både{" "}
                    <strong>udvikling</strong> og <strong>fleksibilitet</strong>{" "}
                    i hverdagen.
                    <br />
                    <br />
                    Er du nysgerrig på, hvem vi er, og hvad vi står for, kan du
                    læse mere under “Om os”.
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
                src="/img/DSC08273-herobillede_1x1_v2.jpg"
                fill
                alt="Adovosion kollegaer står tæt sammen og kigger på sag"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/*Sektion: Karriereudvikling */}
      <section
        id="karriere"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <article className="lg:w-2/3">
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
              <h2>Karriereudvikling</h2>
            </div>

            <div className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]">
              <p>
                Hos ADVOSION stopper din udvikling ikke, fordi du er i job – den
                begynder for alvor.
                <br />
                <br />
                Vi prioriterer <strong>faglig udvikling</strong> og giver dig
                mulighed for at styrke dine kompetencer – uanset om du vil
                specialisere dig, opnå autorisation eller holde din viden
                opdateret.
                <br />
                <br />
                Du får ansvar, sparring og de rette rammer til at udvikle dig –
                både fagligt og personligt – i dit eget tempo og med dine
                ambitioner i fokus.
                <br />
                <br />
                Har du spørgsmål, er du altid velkommen til at kontakte os.
              </p>
            </div>
            <div className="mt-7.5">
              <ButtonContact />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Medarbejder statements */}
      <section
        id="medarbejder"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 lg:flex-col lg:justify-between lg:items-start scroll-mt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <article className="lg:w-2/3">
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-10 md:leading-7">
              <h2>Det siger vores medarbejdere</h2>
            </div>

            <div
              className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
              data-aos="fade-in"
            >
              <p>
                Hvordan er det egentlig at arbejde hos ADVOSION?
                <br />
                <br />
                Det bedste svar får du fra dem, der er her hver dag. Derfor har
                vi ladet vores medarbejdere give deres perspektiv på{" "}
                <strong>hverdagen, samarbejdet og kulturen.</strong>
                <br />
                <br />
                Har du spørgsmål, er du altid velkommen til at kontakte os eller
                connecte med os på LinkedIn.
              </p>
            </div>
          </article>

          {/*Card gallery */}
          <div data-aos="fade-in" className=" w-full h-auto mt-12.5">
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
        </div>
      </section>

      {/*Sektion: Stillinger */}
      {/*  <section
        id="stillinger"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 lg:flex-col lg:justify-between lg:items-start"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
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
          </article> */}

      {/*Card gallery */}
      {/* <div data-aos="fade-in" className="mt-12.5 w-full h-auto">
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
        </div>
      </section>
 */}
      {/*Sektion:  Søg uopfordret */}
      <section
        id="uopfordret"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5 lg:flex lg:justify-between lg:items-start">
          <article className="lg:w-2/3">
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-10 md:leading-7">
              <h2>Søg uopfordret</h2>
            </div>

            <div
              className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
              data-aos="fade-in"
            >
              <p>
                Har vi ikke en stilling, der matcher lige nu, er du altid
                velkommen til at sende en <strong>uopfordret ansøgning.</strong>
                <br />
                <br />
                Vi gennemgår løbende ansøgninger og er altid interesserede i at
                høre fra dygtige kandidater, der kan styrke vores team.
                <br />
                <br />
                Du kan sende din ansøgning via <strong>mail</strong> eller
                benytte <strong>kontaktformularen</strong> her på siden.
                <br />
                <br />
                Har du spørgsmål, er du også velkommen til at kontakte os – vi
                tager gerne en uforpligtende dialog.
              </p>
            </div>
            <div className="mt-7.5">
              <ButtonContact />
            </div>
          </article>

          <article
            data-aos="fade-in"
            className="mt-12.5 lg:mt-0 md:flex md:justify-center"
            id="kontaktform"
          >
            <ContactForm />
          </article>
        </div>
      </section>
    </main>
  );
}
