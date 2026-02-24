import Image from "next/image";
import ButtonExperts from "../components/buttons/ButtonExperts";
import SkillsContainerA from "../components/SkillsContainerA";
import ExpertiseContainer from "../components/ExpertiseContainer";
import ButtonContact from "../components/buttons/ButtonContact";
import AdvokatEmployeeCard from "../components/cards/AdvokatEmployeeCard";
import SingleEmployee from "../components/SingleEmployee";

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
        <div className="md:flex">
          <div>
            <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter'] leading-9">
              <h1>Advokat</h1>
            </div>

            <div data-aos="fade-in" className="mt-5 lg:flex lg:items-start">
              <div className=" w-full h-auto md:w-[90%]">
                <p>
                  Vores partnere og advokater har en solid
                  <strong> baggrund fra store danske advokatfirmaer</strong>.
                  Dér har vi lært betydningen af kvalitet, faglig dygtighed og
                  disciplin. <br /> <br />I ADVOSION har vi tilsat et
                  <strong>kundeorienteret servicekoncept</strong>, hvor
                  <strong>helhedsløsninger</strong> udvikles i tæt dialog med
                  dig, så de skaber værdi for dig og din virksomhed. <br />{" "}
                  <br />
                  Vi er passionerede omkring vores faglige kvalitet, finder de
                  bedste løsninger, og når altid i mål.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full aspect-square md:max-w-96 md:max-h-96 lg:max-w-106 lg:max-h-106  md:min-w-96 md:min-h-96 lg:min-w-106 lg:min-h-106 relative overflow-hidden rounded-3xl shadow-md mt-12.5 md:mt-0 lg:mt-0">
            <Image
              className="object-cover"
              src="/img/lawyers-background.jpg"
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

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Vi leverer{" "}
              <strong>professionel erhvervsjuridisk rådgivning</strong> . Vi har
              specialistviden og mangeårig erfaring særligt indenfor følgende
              områder: <br />
              <br />
              Vi har et stort professionelt netværk{" "}
              <strong>både lokalt og nationalt</strong>, og er gode til at skabe
              og vedligeholde stærke relationer til de bedste rådgivere. <br />{" "}
              <br />
              Det gør, at vi altid kan sætte det bedste rådgivningshold i
              forhold til dig og dine forretningsmæssige behov.
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonExperts />
          </div>
        </article>

        <article
          className="mt-5  md:max-w-80 lg:mt-0 lg:w-full lg:items-start"
          data-aos="fade-in"
        >
          <div className="w-full flex justify-end py-2 ">
            <Image
              className="w-35 h-10"
              src="/img/icon-genveje2.svg"
              width={150}
              height={50}
              alt="genveje ikon"
            ></Image>
          </div>

          <SkillsContainerA />
        </article>
      </section>

      {/*Sektion: Skatteret */}
      <section
        id="skatteret"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 lg:justify-between lg:items-start "
      >
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
                  De skattemæssige overvejelser indgår som et væsentligt element
                  i vores rådgivning indenfor mange områder af juraen. Dette
                  fordi de skattemæssige konsekvenser af en given disposition
                  kan være afgørende for, hvilken løsning der er den rigtige for
                  dig og din virksomhed. <br /> <br />
                  Vi har <strong>specialistviden</strong> og{" "}
                  <strong>mangeårige erfaring</strong> med at rådgive indenfor
                  alle aspekter af skatteretten. Vores unikke kombination af
                  juridiske og økonomiske kompetencer under samme tag gør, at du
                  altid kan være sikker på at modtage en{" "}
                  <strong>helhedsorienteret rådgivning</strong>.
                  <br /> <br />
                  Vi tager alle relevante forretningsmæssige parametre i
                  betragtning for at finde den bedste løsning for dig og din
                  virksomhed. <br /> <br />
                  Indenfor skatteret rådgiver vi bl.a. om:
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
      </section>

      {/*Sektion: Erhvervs- og selskabsret */}
      <section
        id="erhverv"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 "
      >
        <div className="lg:flex">
          <article>
            <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
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
                <strong> værdifuld sparringspartner og rådgiver</strong> for dig
                og din virksomhed. <br /> <br /> Vi rådgiver dig på et{" "}
                <strong>højt fagligt niveau </strong>
                og sikrer dig, gennem vores unikke kombination af juridiske og
                økonomiske kompetencer, en samlet løsning, der imødekommer dine
                ønsker for fremtiden og din virksomheds behov. <br /> <br />{" "}
                Indenfor erhvervs- og selskabsret rådgiver vi bl.a. om:
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
      </section>

      {/*Sektion: Generationsskifte */}
      <section
        id="generation"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5"
      >
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
                unikke kombination af juridiske og økonomiske kompetencer, skabe
                de bedste rammer for generationsskiftet under{" "}
                <strong> hensyntagen til dine ønsker og værdier.</strong> <br />{" "}
                <br />
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
      </section>

      {/*Sektion: Virksomhedsoverdragelse */}
      <section
        id="virksomhed"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 "
      >
        <div className="lg:flex">
          <article>
            <div className="w-full justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
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
                det afgørende at få afklaret, hvornår og hvordan det sker bedst
                muligt. <br />
                <br /> Står du som køber, er der en lang række strategiske
                overvejelser i forhold til din eksisterende virksomhed. Det er
                også centralt at få afdækket og vurderet alle relevante forhold
                ved den virksomhed, som du overvejer at købe. <br />
                <br /> Vi bistår i alle dele af processen. Med vores stærke
                forretningsforståelse er vi en{" "}
                <strong>værdifuld sparringspartner og rådgiver</strong> for dig
                og din virksomhed. <br />
                <br />
                Vores unikke kombination af juridiske og økonomiske kompetencer
                sikrer en <strong>helhedsorienteret rådgivning</strong> fra
                start til slut. Vi gennemfører overdragelsen, uden at glemme de
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
      </section>

      {/*Sektion: Kontrakter */}
      <section
        id="kontrakt"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 "
      >
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
                Den gode kontrakt er gennemtænkt og grundigt udformet og skaber
                klarhed over parternes rettigheder og forpligtelser. Den
                begrænser dine og virksomhedens risici,{" "}
                <strong>sikrer overholdelse af lovgivning</strong> og reducerer
                virksomhedens omkostninger. <br />
                <br />
                Vi sætter os ind i og sikrer en grundlæggende forståelse af din
                virksomhed, herunder virksomhedens forretningsmodel, produkter,
                strategi og risikovillighed. Denne indsigt i din virksomhed er
                afgørende for at udarbejde og forhandle en god kontrakt, der
                matcher virksomhedens behov. <br />
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
      </section>

      {/*Sektion: Konflikthåndtering */}
      <section
        id="konflikt"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 "
      >
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
                Konflikter kræver din tid og energi i en ofte langvarig proces.
                De relaterer sig til tidligere hændelser, hvor du og din
                virksomhed i stedet skal have fokus på fremtiden. Derfor er en{" "}
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
                <strong> det bedste resultat for dig</strong> og din virksomhed.
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
      </section>
    </main>
  );
}
