import Image from "next/image";
import AdvokatCardMobile from "../components/cards/AdvokatCardMobile";
import RevisorCardMobile from "../components/cards/RevisorCardMobile";

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
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 mt-12.5 "
      >
        <div className="justify-start text-CTA-black text-5xl font-bold font-['Inter']">
          <h1>Om Advosion</h1>
        </div>

        <div className="mt-5 w-full h-auto">
          <p>
            ADVOSION er nyt og innovativt firmakoncept, der kombinerer{" "}
            <strong>jura</strong> og <strong>revision</strong>. <br /> <br />
            Vores forstærkede forretningsforståelse giver os en unik mulighed
            for at tilbyde virksomheder en{" "}
            <strong>
              helhedsorienteret og professionel rådgiving.
            </strong> <br /> <br />
            Vores <strong>
              specialistkompetencer er samlet under ét tag
            </strong>{" "}
            og synenergien mellem de to forretningsområder betyder, at vi
            udvikler endnu bedre løsninger til gavn for dig og din virksomhed.
            Vi er eksperter i at rådgive i krydsfeltet mellem økonomi og jura.
            Hurtigt og enkelt, og uden fordyrrende mellemled.
          </p>
        </div>

        <div className="w-80 h-80 relative overflow-hidden rounded-3xl shadow-md mt-12.5">
          <Image
            className="object-cover"
            src="/img/businesspeople-having-discussion-office.jpg"
            fill
            alt="Adovosion kollegaer står tæt sammen og kigger på sag"
          ></Image>
        </div>
      </section>

      {/*Sektion Ekspertise*/}
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) mb-12.5 pt-10"
      >
        <div className="w-full flex justify-start mb-2.5 ">
          <Image
            className="w-35 h-10"
            src="/img/icon-swipe.svg"
            width={150}
            height={50}
            alt="swipe icon"
          ></Image>
        </div>
        <div className="w-screen h-auto flex overflow-x-auto gap-5 pr-15">
          <AdvokatCardMobile />
          <RevisorCardMobile />
        </div>
      </section>
    </main>
  );
}
