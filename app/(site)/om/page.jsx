import Image from "next/image";
import AdvokatCardMobile from "../../components/cards/AdvokatCardMobile";
import RevisorCardMobile from "../../components/cards/RevisorCardMobile";
import AdvokatContainer from "../../components/AdvokatContainer";
import RevisorContainer from "../../components/RevisorContainer";
import AndetContainer from "../../components/AndetContainer";
import ButtonContact from "../../components/buttons/ButtonContact";
import GalleryContainer from "../../components/GalleryContainer";
import ButtonJoin from "../../components/buttons/ButtonJoin";
import ValueContainer from "../../components/ValueContainer";
import AdvokatCard from "../../components/cards/AdvokatCard";
import RevisorCard from "../../components/cards/RevisorCard";

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
        className="margin-to-nav w-screen h-auto  bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav-mobile "
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="md:flex justify-between">
            <div>
              <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12">
                <h1>Om Advosion</h1>
              </div>

              <div className="mt-5 lg:flex lg:items-start">
                <div className=" w-full h-auto md:w-[90%]">
                  <p>
                    ADVOSION er et innovativt firmakoncept, der kombinerer{" "}
                    <strong>jura og revision</strong> – baseret på mere end 10
                    års erfaring.
                    <br /> <br />
                    Vores forretningsforståelse gør os i stand til at rådgive
                    med <strong>udgangspunkt i din virkelighed</strong> – ikke
                    kun i teori. <br />
                    Derfor tilbyder vi helhedsorienteret og professionel
                    rådgivning, der skaber reel værdi for din virksomhed. <br />{" "}
                    <br />
                    Vores{" "}
                    <strong>
                      specialistkompetencer er samlet under ét tag
                    </strong>
                    , og samspillet mellem jura og revision betyder, at vi
                    udvikler stærkere og mere sammenhængende løsninger. Vi
                    rådgiver i krydsfeltet mellem økonomi og jura, hvor den
                    faglige synergi giver et bedre beslutningsgrundlag for dig
                    og din virksomhed.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
              <Image
                className="object-cover"
                src="/img/businesspeople-having-discussion-office.jpg"
                fill
                alt="Adovosion kollegaer står tæt sammen og kigger på sag"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/*Sektion Ekspertise*/}
      <section
        id="ekspertise"
        className="w-screen h-auto bg-(--secondary-bg) pb-7.5 pt-10 md:pt-12.5  md:pb-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <h2 className="sr-only">Ekspertise</h2>
          <div className="w-full flex justify-start mb-2.5 md:hidden">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="Swipe vandret for at se flere kort"
            ></Image>
          </div>

          <div className="w-screen h-auto flex overflow-x-auto gap-5 pr-15 md:hidden">
            <AdvokatCardMobile />
            <RevisorCardMobile />
          </div>

          <div className=" w-full lg:w-179">
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
        </div>
      </section>

      {/*Sektion: Holdet */}
      <section
        id="holdet"
        className="w-screen h-auto  bg-(--primary-bg) mb-12.5  pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
            <h2>Holdet</h2>
          </div>

          <div
            className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
            data-aos="fade-in"
          >
            <p>
              Hos <strong>ADVOSION</strong> er det vores dygtige, dedikerede og
              engagerede medarbejdere, der er de stærke kræfter bag vores{" "}
              <strong>forretningsmæssige totalløsninger</strong> og{" "}
              <strong>helhedsorienterede rådgivning</strong>.<br />
              <br />
              Vores organisation er opdelt i{" "}
              <strong>to specialiserede enheder</strong>, der hver bidrager med
              deres faglige styrker:
              <br />
              ADVOSION Advokatpartnerselskab
              <br />
              ADVOSION Statsautoriseret Revisionspartnerselskab
              <br />
              <br />
              Tilsammen skaber vi et <strong>stærkt fagligt samspil</strong> på
              tværs af jura og revision – til gavn for dig og din virksomhed.
              <br />
              <br />
              Mød vores medarbejdere nedenfor.
            </p>
          </div>

          <article className="w-full h-auto pb-12.5 lg:pb-25 pt-10">
            <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
              <h3>Advokaterne</h3>
            </div>
            <div className="w-full flex justify-start  ">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="Swipe vandret for at se flere kort"
              ></Image>
            </div>
            <div
              className="w-full h-auto flex overflow-x-auto gap-5"
              data-aos="fade-in"
            >
              <AdvokatContainer />
            </div>
          </article>

          <article className="w-full h-auto pb-12.5 lg:pb-25  ">
            <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter']">
              <h3>Revisorne</h3>
            </div>
            <div className="w-full flex justify-start  ">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="Swipe vandret for at se flere kort"
              ></Image>
            </div>
            <div
              className="w-full h-auto flex overflow-x-auto gap-5"
              data-aos="fade-in"
            >
              <RevisorContainer />
            </div>
          </article>

          <article className="w-full h-auto pb-11.25 ">
            <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter'] ">
              <h3>Øvrigt personale</h3>
            </div>
            <div className="w-full flex justify-start  ">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="Swipe vandret for at se flere kort"
              ></Image>
            </div>
            <div
              className="w-full h-auto flex overflow-x-auto gap-5"
              data-aos="fade-in"
            >
              <AndetContainer />
            </div>
          </article>
          <div>
            <ButtonContact />
          </div>
        </div>
      </section>

      {/*Sektion: Faciliteterne */}
      <section
        className="w-screen h-auto  bg-(--secondary-bg) pt-12.5 scroll-mt-12.5"
        id="faciliteter"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
            <h2>Faciliteterne</h2>
          </div>

          <div
            className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
            data-aos="fade-in"
          >
            <p>
              Vi holder til i <strong>nye og indbydende rammer</strong>, som vi
              flyttede ind i i september 2024.
              <br />
              <br />
              Her er <strong>åbne og lyse fællesarealer</strong> med blandt
              andet lounge, medarbejderkøkken og{" "}
              <strong>moderne mødelokaler</strong>.<br />
              <br />
              Der er lyst og højt til loftet – både fysisk og i overført
              forstand. Vi går op i, at vores medarbejdere trives, og gør os
              umage for at skabe de bedst mulige rammer for det i hverdagen.
              <br />
              <br />
              Socialt samles vi til fælles morgenmad hver onsdag, og én gang om
              måneden spiser vi fælles frokost om fredagen, hvor vi bestiller
              mad udefra.
              <br />
              <br />
              Til daglig spiser vi i den <strong>fælles kantine</strong>, som vi
              deler med de øvrige virksomheder i bygningen.
              <br />
              <br />
              Her kan du få et indblik i, hvordan det er at arbejde hos os.
            </p>
          </div>

          <article className="w-full h-auto pb-12.5 pt-10">
            <div className="w-full flex justify-start  ">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="Swipe vandret for at se flere kort"
              ></Image>
            </div>
            <div data-aos="fade-in">
              <GalleryContainer />
              <div className="flex justify-end mt-7.5">
                <ButtonJoin />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Vision */}
      <section
        id="vision"
        className="w-screen h-auto  bg-(--primary-bg) pb-25 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-9 md:leading-7">
            <h2>Vision og kerneværdier</h2>
          </div>

          <div
            className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
            data-aos="fade-in"
          >
            <p>
              Vi er ikke et traditionelt advokat- eller revisionsfirma.
              <br />
              <br />
              Vi leverer <strong>helhedsorienteret rådgivning</strong> af høj
              kvalitet med et skarpt fokus på krydsfeltet mellem jura og
              revision. Det giver vores kunder <strong>bedre sammenhæng</strong>
              , et <strong>stærkere beslutningsgrundlag</strong> og et solidt
              fundament for bæredygtig vækst.
              <br />
              <br />
              Vores tilgang bygger på en klar ambition om at skabe værdi gennem{" "}
              <strong>faglighed</strong>, <strong>forretningsforståelse</strong>{" "}
              og <strong>tæt samarbejde</strong>.<br />
              <br />
              Derfor driver vi vores forretning ud fra følgende{" "}
              <strong>kerneværdier</strong>:
            </p>
          </div>

          <article className="w-full h-auto pb-12.5 pt-10">
            <div className="w-full flex justify-start lg:hidden">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="Swipe vandret for at se flere kort"
              ></Image>
            </div>
            <div data-aos="fade-in">
              <ValueContainer />
            </div>
          </article>

          {/* <article className="md:pt-12.5">
            <div className="justify-start text-CTA-black text-3xl font-bold font-['Inter'] leading-7">
              <h3>Hjerte for det lokale</h3>
            </div>

            <div
              className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
              data-aos="fade-in"
            >
              <p>
                Udover at levere juridisk og økonomisk rådgivning har vi også er
                hjerte for det lokale liv her i Skanderborg og omegn. <br />{" "}
                <br />
                Vi støtter aktivt op om det lokale erhvervsliv, samt de mange
                kulturelle og sportslige initiativer i Skanderborg. <br />{" "}
                <br />
                Vi har blandt andet støttet: ..... & ..... & .... [konkrete
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
          </article> */}
        </div>
      </section>
    </main>
  );
}
