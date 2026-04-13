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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={124} />
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
                  Vores store erfaring og specialisering indenfor erhvervs- og
                  selskabsretten kombineret med vores solide
                  forretningsforståelse, gør os til en
                  <strong> værdifuld sparringspartner og rådgiver</strong> for
                  dig og din virksomhed. <br /> <br /> Vi rådgiver dig på et{" "}
                  <strong>højt fagligt niveau </strong>
                  og sikrer dig, gennem vores unikke kombination af juridiske og
                  økonomiske kompetencer, en samlet løsning, der imødekommer
                  dine ønsker for fremtiden og din virksomheds behov. <br />{" "}
                  <br /> Indenfor erhvervs- og selskabsret rådgiver vi bl.a. om:
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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={111} />
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
                  Vi er <strong>specialister</strong> i generationsskifte. Vi
                  hjælper hele vejen og vil gerne i dialog ved de første spæde
                  tanker om et generationsskifte. Derved kan vi, gennem vores
                  unikke kombination af juridiske og økonomiske kompetencer,
                  skabe de bedste rammer for generationsskiftet under{" "}
                  <strong> hensyntagen til dine ønsker og værdier.</strong>{" "}
                  <br /> <br />
                  Et succesfuldt generationsskifte kræver god planlægning og
                  omtanke. <br /> <br />
                  Det er nødvendigt at have fokus på en række spørgsmål:
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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={111} />
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
                  En virksomhedsoverdragelse er ofte en kompliceret og intens
                  proces, hvor <strong>kompetent rådgivning</strong> af parterne
                  kan være afgørende for et succesfuldt og bæredygtigt resultat.{" "}
                  <br /> <br />
                  Der ligger ofte mange overvejelser bag en
                  virksomhedsoverdragelse. Hvis du skal sælge din virksomhed, er
                  det afgørende at få afklaret, hvornår og hvordan det sker
                  bedst muligt. <br />
                  <br /> Står du som køber, er der en lang række strategiske
                  overvejelser i forhold til din eksisterende virksomhed. Det er
                  også centralt at få afdækket og vurderet alle relevante
                  forhold ved den virksomhed, som du overvejer at købe. <br />
                  <br /> Vi bistår i alle dele af processen. Med vores stærke
                  forretningsforståelse er vi en{" "}
                  <strong>værdifuld sparringspartner og rådgiver</strong> for
                  dig og din virksomhed. <br />
                  <br />
                  Vores unikke kombination af juridiske og økonomiske
                  kompetencer sikrer en{" "}
                  <strong>helhedsorienteret rådgivning</strong> fra start til
                  slut. Vi gennemfører overdragelsen, uden at glemme de
                  menneskelige værdier.
                  <br />
                  <br />
                  Indenfor virksomhedsoverdragelse rådgiver vi bl.a. om:
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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={111} />
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
                  Den gode kontrakt er gennemtænkt og grundigt udformet og
                  skaber klarhed over parternes rettigheder og forpligtelser.
                  Den begrænser dine og virksomhedens risici,{" "}
                  <strong>sikrer overholdelse af lovgivning</strong> og
                  reducerer virksomhedens omkostninger. <br />
                  <br />
                  Vi sætter os ind i og sikrer en grundlæggende forståelse af
                  din virksomhed, herunder virksomhedens forretningsmodel,
                  produkter, strategi og risikovillighed. Denne indsigt i din
                  virksomhed er afgørende for at udarbejde og forhandle en god
                  kontrakt, der matcher virksomhedens behov. <br />
                  <br />
                  Vores rådgivning ydes altid ud fra en{" "}
                  <strong>kommerciel synsvinkel</strong> og i kraft af vores
                  erfaring kan vi udarbejde kontraktvilkår, der er tilpasset
                  specifikke brancher. Vi arbejder proaktivt og vurderer gennem
                  hele forløbet både risici og kommercielle spørgsmål i
                  forbindelse med forhandlingen og udarbejdelsen af kontrakten.{" "}
                  <br />
                  <br />
                  Indenfor virksomhedens kontrakter rådgiver vi bl.a. om:
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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={111} />
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
                  Konflikter kræver din tid og energi i en ofte langvarig
                  proces. De relaterer sig til tidligere hændelser, hvor du og
                  din virksomhed i stedet skal have fokus på fremtiden. Derfor
                  er en{" "}
                  <strong> effektiv og løsningsorienteret håndtering</strong> af
                  en konflikt afgørende.
                  <br />
                  <br /> Vi går aldrig på kompromis med vores{" "}
                  <strong> høje faglighed</strong>, men vi er samtidig
                  <strong> løsningsorienterede</strong>, og du får en ærlig
                  vurdering, så du kender dine muligheder og risici.
                  <br />
                  <br /> Det betyder også, at vi løbende er opmærksomme på
                  mulighederne for forlig, hvis det ud fra en samlet vurdering
                  giver
                  <strong> det bedste resultat for dig</strong> og din
                  virksomhed.
                  <br />
                  <br />
                  Indenfor konfliktløsning rådgiver vi bl.a. om:
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
                <SingleEmployee id={124} />
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
              <SingleEmployee id={103} />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
