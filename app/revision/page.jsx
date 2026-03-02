import Image from "next/image";
import ButtonExperts from "../components/buttons/ButtonExperts";
import SkillsContainerA from "../components/SkillsContainerA";
import ExpertiseContainer from "../components/ExpertiseContainer";
import ButtonContact from "../components/buttons/ButtonContact";
import AdvokatEmployeeCard from "../components/cards/AdvokatEmployeeCard";
import SingleEmployee from "../components/SingleEmployee";
import SkillsContainerR from "../components/SkillsContainerR";

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
        className="margin-to-nav w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav-mobile"
      >
        <div className="md:flex">
          <div>
            <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-9">
              <h1>Revision</h1>
            </div>

            <div className="mt-5 lg:flex lg:gap-12.5 lg:items-start">
              <div className=" w-full h-auto md:w-[90%]">
                <p>
                  <strong>Revision, regnskab</strong> og{" "}
                  <strong>rådgivning</strong> er vores kerneydelser. <br />{" "}
                  <br />I tæt dialog med vores kunder og med anvendelse af
                  moderne revisionsprogrammer udfører vi en{" "}
                  <strong>effektiv full-service revision</strong> på et{" "}
                  <strong>højt kvalitetsniveau</strong>. <br /> <br />
                  Vi er statsautoriserede og kan derfor levere en bred vifte af
                  økonomiske services.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
            <Image
              className="object-cover"
              src="/img/accountant-hero-placeholder.jpg"
              fill
              alt="Adovosion kollegaer står tæt sammen og kigger på sag"
            ></Image>
          </div>
        </div>
      </section>

      {/*Sektion: Ekspertiser */}
      <section
        id="ekspertiser"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--cards) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start"
      >
        <article className="lg:w-2/3">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
            <h2>Ekspertiser</h2>
            <h3 className="text-lg font-normal opacity-70 leading-5">
              (genveje)
            </h3>
          </div>

          <div className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]">
            <p>
              Vi leverer{" "}
              <strong>professionel økonomisk revision og rådgivning</strong>. Vi
              har specialistviden og mangeårig erfaring særligt indenfor
              følgende områder: <br />
              <br /> Vores dygtige revisorer sikrer at du og din virksomhed
              altid er i sikre hænder.
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonExperts />
          </div>
        </article>

        <article className="mt-5  md:max-w-80 lg:mt-0 lg:w-full lg:items-start">
          <div className="w-full flex justify-end py-2 ">
            <Image
              className="w-35 h-10"
              src="/img/icon-genveje2.svg"
              width={150}
              height={50}
              alt="genveje ikon"
            ></Image>
          </div>

          <SkillsContainerR />
        </article>
      </section>

      {/*Sektion: Regnskab og revision */}
      <section
        id="regnskab"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 lg:justify-between lg:items-start "
      >
        <div className="lg:flex">
          <article>
            <div className="w-max justify-start text-CTA-black text-3xl md:text-4xl font-bold font-['Inter'] leading-7">
              <h2>Regnskab og revision</h2>
            </div>

            <div className="lg:flex lg:justify-between">
              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Hvad angår <strong>regnskab og revision</strong>, tilbyder vi
                  en lang række af forskellige services. <br />
                  <br />
                  Scenarietekst/beskrivelse.... <br /> <br />
                  Uanset område, sikrer vi at du får den bedste mulige service
                  fra vores <strong>
                    dygtige rådgivere og revisorer
                  </strong>. <br /> <br />
                  Vi tilbyder følgende services indenfor regnskab og revision:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5">
          <div className="w-full flex justify-start mb-2.5" data-aos="fade-in">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <ExpertiseContainer
            typeId={16}
            bgColor="bg-(--cards)"
            textColor="text-(--advokat-blue)"
          />
          <div className="mt-7.5 lg:hidden">
            <ButtonContact />
          </div>
        </article>
      </section>

      {/*Sektion: Skat, moms og afgifter */}
      <section
        id="skat"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 "
      >
        <div className="lg:flex">
          <article>
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-10 md:leading-7">
              <h2>Skat, moms og afgifter</h2>
            </div>

            <div
              className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
              data-aos="fade-in"
            >
              <p>
                Vi er specialister i rådgivning indenfor{" "}
                <strong>skat, moms og afgifter</strong>
                og tilbyder i den forbindelse også en bred vifte af services.{" "}
                <br /> <br />
                Mere beskrivelsestekst/scenarie tekst... <br />
                <br />
                Vi tilbyder følgende services indenfor skat, moms og afgifter:
              </p>
              <div className="mt-7.5 hidden lg:block">
                <ButtonContact />
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5" data-aos="fade-in">
          <div className="w-full flex justify-start mb-2.5 ">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <ExpertiseContainer
            typeId={20}
            bgColor="bg-(--revision-blue)"
            textColor="text-(--primary-bg)"
          />
          <div className="mt-7.5 lg:hidden">
            <ButtonContact />
          </div>
        </article>
      </section>

      {/*Sektion: Finansiering */}
      <section
        id="finansiering"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5"
      >
        <div className="lg:flex">
          <article>
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
              <h2>Finansiering</h2>
            </div>

            <div
              className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
              data-aos="fade-in"
            >
              <p>
                Indenfor <strong>finansiering</strong> tilbyder vi alsidig
                rådgivning. <br /> <br />
                Scenarietekst/beskrivelse.... <br />
                <br /> Vi har et{" "}
                <strong>bredt netværk både lokalt og nationalt</strong>, der
                giver adgang til de bedste pengeinstitutter, kreditforeninger,
                leasingselskaber, kapitalfonde og private investorer.
              </p>
              <div className="mt-7.5 hidden lg:block">
                <ButtonContact />
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5" data-aos="fade-in">
          <div className="w-full flex justify-start mb-2.5">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <ExpertiseContainer
            typeId={19}
            bgColor="bg-(--cards)"
            textColor="text-(--advokat-blue)"
          />
          <div className="mt-7.5 lg:hidden">
            <ButtonContact />
          </div>
        </article>
      </section>

      {/*Sektion: Køb og salg af virksomhed */}
      <section
        id="virksomhed"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 "
      >
        <div className="lg:flex">
          <article>
            <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-10 md:leading-7">
              <div className="md:hidden">
                <h2>Køb og salg af virksomhed</h2>
              </div>
            </div>

            <div
              className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
              data-aos="fade-in"
            >
              <p>
                Indenfor <strong>køb og salg af virksomhed</strong> står vi også
                klar med
                <strong> specialistrådgivere</strong> og -revisorer, så du trygt
                kan indgå i virksomhedshandel. <br />
                <br />
                Scenarietekst/beskrivelse... <br /> <br />
                Her tilbyder vi også en række services, som du kan se nedenfor:
              </p>
              <div className="mt-7.5 hidden lg:block">
                <ButtonContact />
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5" data-aos="fade-in">
          <div className="w-full flex justify-start mb-2.5">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <ExpertiseContainer
            typeId={21}
            bgColor="bg-(--revision-blue)"
            textColor="text-(--primary-bg)"
          />
          <div className="mt-7.5 lg:hidden">
            <ButtonContact />
          </div>
        </article>
      </section>

      {/*Sektion: Ledelsesrådgivning */}
      <section
        id="ledelse"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 "
      >
        <div className="lg:flex">
          <article>
            <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
              <h2>Ledelsesrådgivning</h2>
            </div>

            <div
              className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
              data-aos="fade-in"
            >
              <p>
                Også indenfor <strong>ledelsesrådgivning</strong> er vi{" "}
                <strong>specialister</strong>. <br /> <br />
                Scenarietekst/beskrivelse af case... <br /> <br />
                Vi er din naturlige sparringspartner og rådgiver inden for:
              </p>
              <div className="mt-7.5 hidden lg:block">
                <ButtonContact />
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5" data-aos="fade-in">
          <div className="w-full flex justify-start mb-2.5">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>
          <ExpertiseContainer
            typeId={22}
            bgColor="bg-(--cards)"
            textColor="text-(--advokat-blue)"
          />
          <div className="mt-7.5 lg:hidden">
            <ButtonContact />
          </div>
        </article>
      </section>
    </main>
  );
}
