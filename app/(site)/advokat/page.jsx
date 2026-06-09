import Image from "next/image";
import ButtonExperts from "../../components/buttons/ButtonExperts";
import SkillsContainerA from "../../components/SkillsContainerA";
import ExpertiseContainer from "../../components/ExpertiseContainer";
import ButtonContact from "../../components/buttons/ButtonContact";
import AdvokatEmployeeCard from "../../components/cards/AdvokatEmployeeCard";
import SingleEmployee from "../../components/SingleEmployee";

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
        className="margin-to-nav w-screen h-auto bg-(--primary-bg) mb-12.5 lg:mb-20 relative margin-to-nav-mobile scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="md:flex justify-between">
            <div>
              <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-12">
                <h1>Advokat</h1>
              </div>

              <div className="mt-5 lg:flex lg:items-start">
                <div className=" w-full h-auto md:w-[90%]">
                  <p>
                    Vores partnere og advokater har en solid baggrund fra nogle
                    af Danmarks førende advokatfirmaer, hvor vi har opbygget en{" "}
                    <strong>stærk faglighed</strong> og forståelse for kvalitet.
                    <br />
                    <br />I ADVOSION har vi bygget videre på den erfaring med en
                    mere kundeorienteret tilgang, hvor vi udvikler løsninger i
                    tæt dialog med dig – med fokus på, hvad der skaber{" "}
                    <strong>reel værdi</strong> for din virksomhed.
                    <br />
                    <br />
                    Vi er drevet af høj faglighed og arbejder målrettet for at
                    finde de løsninger, der bedst understøtter dine behov.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
              <Image
                className="object-cover"
                src="/img/DSC07385-scaled.jpg"
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
        className="w-screen h-auto bg-(--advokat-blue) text-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5 lg:flex lg:justify-between lg:items-start">
          <article className="lg:w-2/3">
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
              <h2>Ekspertiser</h2>
              <h3 className="text-lg font-normal opacity-70 leading-5">
                (genveje)
              </h3>
            </div>

            <div className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]">
              <p>
                Vi leverer professionel erhvervsjuridisk rådgivning med afsæt i{" "}
                <strong>specialistviden</strong> og{" "}
                <strong>mangeårig erfaring</strong>.<br />
                <br />
                Vi har et stærkt netværk – lokalt og nationalt – og samarbejder
                med nogle af de bedste rådgivere.
                <br />
                <br />
                Det gør, at vi kan sammensætte det{" "}
                <strong>rette rådgivningshold</strong>, der matcher dine behov.
              </p>
            </div>
            <div className="mt-7.5">
              <ButtonExperts />
            </div>
          </article>

          <article className="mt-5  md:max-w-80 lg:mt-0 lg:w-full lg:items-start">
            <div className="w-full flex justify-end pb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-genveje4.svg"
                width={150}
                height={50}
                alt="genveje ikon"
              ></Image>
            </div>

            <SkillsContainerA />
          </article>
        </div>
      </section>

      {/*Sektion: Skatteret */}
      <section
        id="skatteret"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 lg:justify-between lg:items-start scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-max justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
                <h2>Skatteret</h2>
              </div>

              <div className="lg:flex lg:justify-between">
                <div
                  className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                  data-aos="fade-in"
                >
                  <p>
                    Skattemæssige forhold spiller en central rolle i mange
                    juridiske beslutninger, da de ofte er afgørende for, hvilken
                    løsning der er den rigtige for dig og din virksomhed.
                    <br />
                    <br />
                    Vi har <strong>specialistviden</strong> og{" "}
                    <strong>mangeårig erfaring</strong> med rådgivning inden for
                    alle aspekter af skatteretten. Vi kombinerer{" "}
                    <strong>juridisk ekspertise</strong> med en stærk
                    forretningsforståelse og leverer{" "}
                    <strong>helhedsorienteret rådgivning</strong>, hvor alle
                    relevante forhold tænkes ind.
                    <br />
                    <br />
                    Vi tager udgangspunkt i dine forretningsmæssige behov og
                    inddrager alle relevante parametre for at finde den løsning,
                    der skaber størst værdi for dig og din virksomhed.
                    <br />
                    <br />
                    Inden for skatteret rådgiver vi blandt andet om:
                  </p>
                  <div className="mt-7.5 hidden lg:block">
                    <ButtonContact />
                  </div>
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={124} type="advokat" />
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
              typeId={10}
              bgColor="bg-(--cards)"
              textColor="text-(--advokat-blue)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={124} type="advokat" />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Erhvervs- og selskabsret */}
      <section
        id="erhverv"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-9">
                <h2>Erhvervs- og selskabsret</h2>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Erhvervs- og selskabsret handler om at skabe det rette
                  juridiske fundament for din virksomhed – både i det daglige og
                  i forbindelse med større beslutninger.
                  <br />
                  <br />
                  Vi har solid erfaring med selskabsretlige forhold og bistår
                  som <strong>faglig sparringspartner</strong> i alt fra
                  struktur og organisering til udvikling og ændringer i
                  virksomheden.
                  <br />
                  <br />
                  Med afsæt i <strong>juridisk ekspertise</strong> og
                  forretningsforståelse arbejder vi tæt sammen med dig for at
                  sikre løsninger, der understøtter din virksomheds retning og
                  mål.
                  <br />
                  <br />
                  Inden for erhvervs- og selskabsret rådgiver vi blandt andet
                  om:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={111} type="advokat" />
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
              typeId={11}
              bgColor="bg-(--advokat-blue)"
              textColor="text-(--primary-bg)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={111} type="advokat" />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Generationsskifte */}
      <section
        id="generation"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
                <h2>Generationsskifte</h2>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Generationsskifte kræver rettidig planlægning og de rigtige
                  beslutninger undervejs.
                  <br />
                  <br />
                  Vi har solid erfaring med generationsskifte og indgår gerne i
                  dialog allerede i de tidlige overvejelser. Det giver de bedste
                  forudsætninger for at skabe et velforberedt og gennemarbejdet
                  forløb.
                  <br />
                  <br />
                  Med afsæt i <strong>juridisk ekspertise</strong> og en stærk
                  forretningsforståelse hjælper vi med at skabe de rette rammer
                  – med respekt for dine ønsker, værdier og virksomhedens
                  fremtid.
                  <br />
                  <br />
                  Et succesfuldt generationsskifte forudsætter, at en række{" "}
                  <strong>centrale forhold</strong> er gennemtænkt:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={104} type="advokat" />
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
              typeId={12}
              bgColor="bg-(--cards)"
              textColor="text-(--advokat-blue)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={104} type="advokat" />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Virksomhedsoverdragelse */}
      <section
        id="virksomhed"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-9">
                <div className="md:hidden">
                  <h2>
                    Virksomheds- <br />
                    overdragelse
                  </h2>
                </div>

                <div className="hidden md:block">
                  <h2>Virksomhedsoverdragelse</h2>
                </div>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Virksomhedsoverdragelse er en kompleks proces, hvor de rette
                  beslutninger undervejs er afgørende for et succesfuldt og
                  bæredygtigt resultat.
                  <br />
                  <br />
                  Uanset om du står som køber eller sælger, er det vigtigt at få
                  afklaret de centrale forhold i processen – herunder struktur,
                  timing og risici.
                  <br />
                  <br />
                  Vi bistår gennem hele forløbet og fungerer som en{" "}
                  <strong>faglig sparringspartner</strong>, der sikrer fremdrift
                  og overblik i en ofte krævende proces.
                  <br />
                  <br />
                  Med afsæt i <strong>juridisk ekspertise</strong> og en stærk
                  forretningsforståelse arbejder vi for at skabe en{" "}
                  <strong>helhedsorienteret løsning</strong> – fra de indledende
                  overvejelser til den endelige gennemførelse.
                  <br />
                  <br />
                  Inden for virksomhedsoverdragelse rådgiver vi blandt andet om:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={111} type="advokat" />
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
              typeId={13}
              bgColor="bg-(--advokat-blue)"
              textColor="text-(--primary-bg)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={111} type="advokat" />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Kontrakter */}
      <section
        id="kontrakt"
        className="w-screen h-auto bg-(--primary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
                <h2>Kontrakter</h2>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  En god kontrakt skaber klarhed om rettigheder og forpligtelser
                  og er afgørende for at reducere risici og sikre{" "}
                  <strong>overholdelse af gældende lovgivning</strong>.<br />
                  <br />
                  Vi tager udgangspunkt i din virksomhed og opnår en
                  grundlæggende forståelse for forretningsmodel, produkter og
                  risikoprofil. Det danner grundlag for kontrakter, der er
                  tilpasset din virksomhed og dens behov.
                  <br />
                  <br />
                  Med en <strong>kommerciel tilgang</strong> og solid juridisk
                  erfaring udarbejder og forhandler vi kontrakter, der
                  balancerer risiko og forretning – og som fungerer i praksis.
                  <br />
                  <br />
                  Inden for kontrakter rådgiver vi blandt andet om:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={103} type="advokat" />
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
              typeId={14}
              bgColor="bg-(--cards)"
              textColor="text-(--advokat-blue)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={103} type="advokat" />
            </div>
          </article>
        </div>
      </section>

      {/*Sektion: Konflikthåndtering */}
      <section
        id="konflikt"
        className="w-screen h-auto bg-(--secondary-bg) pb-12.5 pt-12.5 scroll-mt-12.5"
      >
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-350 px-6.5 lg:px-3.5">
          <div className="lg:flex">
            <article>
              <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
                <h2>Konflikthåndtering</h2>
              </div>

              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Konflikter kræver tid og ressourcer og kan tage fokus fra din
                  forretning. Derfor er en effektiv og målrettet håndtering
                  afgørende.
                  <br />
                  <br />
                  Vi kombinerer <strong>høj faglighed</strong> med en{" "}
                  <strong>løsningsorienteret tilgang</strong> og giver dig et
                  klart overblik over muligheder, risici og næste skridt.
                  <br />
                  <br />
                  Vi vurderer løbende, om en forligsløsning er hensigtsmæssig,
                  eller om sagen bør føres videre – altid med fokus på det{" "}
                  <strong>bedste resultat</strong> for dig og din virksomhed.
                  <br />
                  <br />
                  Inden for konflikthåndtering rådgiver vi blandt andet om:
                </p>
                <div className="mt-7.5 hidden lg:block">
                  <ButtonContact />
                </div>
              </div>
            </article>

            {/*SingleCard placement for desktop */}
            <article
              className="mt-12.5 items-center gap-10 hidden md:hidden lg:block lg:mt-0 lg:items-start"
              data-aos="fade-in"
            >
              <div className="w-full flex justify-start mb-2">
                <Image
                  className="w-35 h-10"
                  src="/img/icon-expert4.svg"
                  width={150}
                  height={50}
                  alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
                ></Image>
              </div>
              <div>
                <SingleEmployee id={124} type="advokat" />
              </div>
            </article>
          </div>

          <article className="mt-12.5" data-aos="fade-in">
            <div className="w-full flex justify-start mb-2.5">
              <Image
                className="w-35 h-10 lg:invisible"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="swipe icon"
              ></Image>
            </div>
            <ExpertiseContainer
              typeId={15}
              bgColor="bg-(--advokat-blue)"
              textColor="text-(--primary-bg)"
            />
            <div className="mt-7.5 lg:hidden">
              <ButtonContact />
            </div>
          </article>

          <article
            className="mt-12.5 items-center gap-10 lg:hidden"
            data-aos="fade-in"
          >
            <div className="w-full flex justify-start mb-2 ">
              <Image
                className="w-35 h-10"
                src="/img/icon-expert4.svg"
                width={150}
                height={50}
                alt="kontakt ekspert ikon med pil der peger mod medarbejderkort med fageksperten"
              ></Image>
            </div>
            <div>
              <SingleEmployee id={103} type="advokat" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
