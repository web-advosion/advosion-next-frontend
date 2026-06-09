import Image from "next/image";
import ButtonExperts from "../../components/buttons/ButtonExperts";
import SkillsContainerA from "../../components/SkillsContainerA";
import ExpertiseContainer from "../../components/ExpertiseContainer";
import ButtonContact from "../../components/buttons/ButtonContact";
import AdvokatEmployeeCard from "../../components/cards/AdvokatEmployeeCard";
import SingleEmployee from "../../components/SingleEmployee";
import SkillsContainerR from "../../components/SkillsContainerR";

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
        className="margin-to-nav w-screen h-auto bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav-mobile"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="md:flex justify-between">
            <div>
              <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12">
                <h1>Revision</h1>
              </div>

              <div className="mt-5 lg:flex lg:gap-12.5 lg:items-start">
                <div className=" w-full h-auto md:w-[90%]">
                  <p>
                    Revision, regnskab og rådgivning er centrale elementer i en
                    sund og veldrevet virksomhed.
                    <br />
                    <br />
                    Vi arbejder tæt sammen med vores kunder og leverer en{" "}
                    <strong>effektiv og værdiskabende revision</strong>, der
                    skaber overblik og styrker beslutningsgrundlaget.
                    <br />
                    <br />
                    Som statsautoriserede revisorer leverer vi en bred vifte af
                    ydelser med fokus på kvalitet, indsigt og
                    forretningsforståelse.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
              <Image
                className="object-cover"
                src="/img/DSC08310-1-5.jpg"
                fill
                alt="Adovosion kollegaer står tæt sammen og kigger på sag"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/*Sektion: Ekspertiser */}
      <section
        id="ekspertiser"
        className="w-screen h-auto bg-(--revision-blue) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-start scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5 lg:flex lg:justify-between lg:items-start text-(--primary-bg)">
          <article className="lg:w-2/3">
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
              <h2>Ekspertiser</h2>
              <h3 className="text-lg font-normal opacity-70 leading-5">
                (genveje)
              </h3>
            </div>

            <div className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]">
              <p>
                Vi leverer professionel økonomisk revision og rådgivning med
                afsæt i <strong>specialistviden</strong> og{" "}
                <strong>mangeårig erfaring</strong> inden for en række centrale
                områder.
                <br />
                <br />
                Vi arbejder tæt sammen med vores kunder og bidrager med indsigt,
                der skaber overblik og styrker det økonomiske fundament for din
                virksomhed.
                <br />
                <br />
                Vælg et område til højre for at læse mere.
              </p>
            </div>
            <div className="mt-7.5">
              <ButtonExperts />
            </div>
          </article>

          <article className="mt-5  md:max-w-80 lg:mt-0 lg:w-full lg:items-start">
            <div className="w-full flex justify-end pb-2 ">
              <Image
                className="w-35 h-10"
                src="/img/icon-genveje4.svg"
                width={150}
                height={50}
                alt="genveje ikon"
              ></Image>
            </div>

            <SkillsContainerR />
          </article>
        </div>
      </section>

      {/*Sektion: Regnskab og revision */}
      <section
        id="regnskab"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 lg:justify-between lg:items-start scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
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
                    Regnskab og revision er fundamentet for en sund økonomi og
                    et klart overblik over din virksomheds udvikling.
                    <br />
                    <br />
                    Vi hjælper med alt fra den daglige bogføring til den
                    lovpligtige revision og sikrer, at dit regnskab er korrekt,
                    opdateret og giver et <strong>retvisende billede</strong> af
                    din virksomhed.
                    <br />
                    <br />
                    Uanset omfang får du en løsning, der er tilpasset din
                    virksomhed – med fokus på kvalitet,{" "}
                    <strong>overblik</strong> og et solidt grundlag for dine
                    beslutninger.
                    <br />
                    <br />
                    Vi tilbyder blandt andet følgende ydelser inden for regnskab
                    og revision:
                  </p>
                  <div className="mt-7.5 hidden lg:block">
                    <ButtonContact />
                  </div>
                </div>
              </div>
            </article>
          </div>

          <article className="mt-12.5">
            <div
              className="w-full flex justify-start mb-2.5"
              data-aos="fade-in"
            >
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
        </div>
      </section>

      {/*Sektion: Skat, moms og afgifter */}
      <section
        id="skat"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
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
                  Skat, moms og afgifter har stor betydning for din virksomheds
                  økonomi og kræver løbende opmærksomhed.
                  <br />
                  <br />
                  Vi rådgiver med fokus på korrekt håndtering, overblik og
                  optimering, så du undgår fejl og får det fulde udbytte af de
                  gældende regler.
                  <br />
                  <br />
                  Med afsæt i <strong>specialistviden</strong> og{" "}
                  <strong>opdateret indsigt</strong> hjælper vi med at sikre, at
                  din virksomhed træffer de rigtige beslutninger – både på kort
                  og lang sigt.
                  <br />
                  <br />
                  Vi tilbyder blandt andet følgende ydelser inden for skat, moms
                  og afgifter:
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
        </div>
      </section>

      {/*Sektion: Finansiering */}
      <section
        id="finansiering"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
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
                  Adgang til den rette finansiering er afgørende for at
                  realisere din virksomheds potentiale.
                  <br />
                  <br />
                  Vi hjælper med at afklare dine muligheder og strukturere
                  finansieringen, så den understøtter både din drift og dine{" "}
                  <strong>langsigtede mål</strong>.<br />
                  <br />
                  Gennem et <strong>stærkt netværk</strong> af finansielle
                  samarbejdspartnere skaber vi adgang til relevante løsninger –
                  fra traditionel bankfinansiering til{" "}
                  <strong>alternative investeringsformer</strong>.
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
        </div>
      </section>

      {/*Sektion: Køb og salg af virksomhed */}
      <section
        id="virksomhed"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-10 md:leading-7">
                <div>
                  <h2>Køb og salg af virksomhed</h2>
                </div>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Køb og salg af virksomhed er komplekse processer, hvor de
                  rette beslutninger har stor betydning for det endelige
                  resultat.
                  <br />
                  <br />
                  Vi bistår gennem hele forløbet – fra de indledende
                  overvejelser til den endelige gennemførelse – og sikrer et
                  solidt grundlag for både køber og sælger.
                  <br />
                  <br />
                  Med afsæt i <strong>økonomisk indsigt</strong> og tæt
                  samarbejde med juridiske specialister skaber vi overblik og
                  bidrager til en <strong>veltilrettelagt proces</strong>.<br />
                  <br />
                  Vi tilbyder blandt andet følgende ydelser inden for køb og
                  salg af virksomhed:
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
        </div>
      </section>

      {/*Sektion: Ledelsesrådgivning */}
      <section
        id="ledelse"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
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
                  Ledelsesrådgivning handler om at træffe de rigtige
                  beslutninger på det rigtige grundlag.
                  <br />
                  <br />
                  Vi fungerer som en aktiv sparringspartner og bidrager med
                  indsigt og struktur, der styrker din virksomheds udvikling og
                  retning.
                  <br />
                  <br />
                  Med afsæt i <strong>økonomisk overblik</strong> og en stærk
                  forretningsforståelse hjælper vi med at omsætte tal til
                  handling og skabe et solidt grundlag for ledelsesmæssige
                  beslutninger.
                  <br />
                  <br />
                  Vi rådgiver blandt andet inden for:
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
        </div>
      </section>

      {/*Sektion: ny kunde/CTA section */}
      <section
        id="ledelse"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
                <h2>Ny kunde?</h2>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Er du ny kunde, eller overvejer du at blive kunde, så se med
                  her. <br /> <br />
                  Har du brug for økonomisk rådgivning eller specifikke
                  revisionsydelser, står vi klar til at hjælpe dig og din
                  virksomhed. <br /> <br />
                  For at give dig den bedste indledende rådgivning, skal den
                  første kontakt gerne gå gennem vores Statsautoriserede
                  revisorer Michael og Jannie. <br /> <br />
                  Dernæst bliver du tildelt den rette revisor til din case.
                </p>
              </div>
            </article>
          </div>

          <article className="mt-12.5" data-aos="fade-in">
            <div className="flex w-full min-h-full overflow-scroll md:flex-row max-w-150 mt-7.5 gap-10">
              <SingleEmployee id={113} type="revisor" />
              <SingleEmployee id={112} type="revisor" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
