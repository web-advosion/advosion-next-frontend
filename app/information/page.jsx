import Image from "next/image";
import ExpertiseContainer from "../components/ExpertiseContainer";
import ButtonContact from "../components/buttons/ButtonContact";
import ButtonDownload from "../components/buttons/ButtonDownload";
import ButtonPDF from "../components/buttons/ButtonPDF";
import BankoplysningerContainer from "../components/BankoplysningerContainer";

export default async function Page() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/pages?slug=forside",
    { next: { revalidate: 10 } }, // ISR: rebuild hver 10 sekunder
  );
  const pages = await res.json();
  const page = pages[0];

  const documentUrls = {
    betingelser:
      "/documents/Forretningsbetingelser_Terms&Conditions_Advosion.PDF",
    privatliv: "/documents/Privatlivspolitik_Advosion.pdf",
  };

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
              <h1>Information</h1>
            </div>

            <div
              data-aos="fade-in"
              className="mt-5 lg:flex-1 lg:gap-12.5 lg:items-start"
            >
              <div className=" w-full h-auto md:w-[90%]">
                <p>
                  Her finder du information omkring{" "}
                  <strong>forretningsbetingelser, privatlivspolitik</strong> og{" "}
                  <strong> bankoplysninger</strong> <br /> <br />
                  Hvis du mangler andet information, så tøv ikke med at kontakte
                  os!
                </p>
              </div>
              <div className="mt-7.5">
                <ButtonContact />
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

      {/*Sektion: Forretningsbetingelser */}
      <section
        id="betingelser"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-center md:flex"
      >
        <article className="md:w-3/4 lg:w-2/3">
          <div className="justify-start text-CTA-black text-3xl md:text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
            <h2>Forretningsbetingelser</h2>
          </div>

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Vi vil gerne være så transparante som muligt, så derfor kan du
              naturligvis også tilgå vores
              <strong> forretningsbetingelser</strong>. <br /> <br />
              Du skal blot downloade PDF’en ved at klikke på på knappen herunder
              eller på ikonet.
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonDownload documentPath={documentUrls.betingelser} />
          </div>
        </article>
        <article className="w-32 h-32 mt-12.5" data-aos="fade-in">
          <ButtonPDF documentPath={documentUrls.betingelser} />
        </article>
      </section>

      {/*Sektion: Privatlivspolitik */}
      <section
        id="privat"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) pb-12.5 pt-12.5 lg:flex lg:justify-between lg:items-center md:flex"
      >
        <article className="md: w-3/4 lg:w-2/3">
          <div className="justify-start text-CTA-black text-4xl font-bold font-['Inter'] flex items-end gap-3 leading-7">
            <h2>Privatlivspolitik</h2>
          </div>

          <div
            className="mt-5 w-full lg:max-w-2/3 h-auto md:w-[80%]"
            data-aos="fade-in"
          >
            <p>
              Her kan du få indblik i hvordan vi behandler din data via vores
              <strong> privatlivspolitik</strong>. <br /> <br />
              Du skal blot downloade PDF’en ved at klikke på på knappen herunder
              eller på ikonet.
            </p>
          </div>
          <div className="mt-7.5">
            <ButtonDownload documentPath={documentUrls.privatliv} />
          </div>
        </article>
        <article className="w-32 h-32 mt-12.5" data-aos="fade-in">
          <ButtonPDF documentPath={documentUrls.privatliv} />
        </article>
      </section>

      {/*Sektion: Bankoplysninger */}
      <section
        id="bank"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--secondary-bg) pb-12.5 pt-12.5 lg:justify-between lg:items-start "
      >
        <div className="lg:flex">
          <article>
            <div className="w-max justify-start text-CTA-black text-4xl font-bold font-['Inter'] leading-7">
              <h2>Bankoplysninger</h2>
            </div>

            <div className="lg:flex lg:justify-between">
              <div
                className="mt-5 w-full md:max-w-[80%] lg:max-w-2/3 h-auto"
                data-aos="fade-in"
              >
                <p>
                  Her kan du finde vores <strong>bankoplysninger</strong>{" "}
                  angående vores advokatvirksomhed. <br /> <br />
                  Har du spørgsmål til din faktura eller andre henvendelser
                  omkring <strong>økonomi</strong>, så kontakt vores
                  økonomiafdeling på følgende mail:{" "}
                  {
                    <a href={`mailto: mba@advosion.dk`}>
                      <button
                        className="hover:cursor-pointer underline"
                        type="mailto"
                      >
                        mba@advosion.dk
                      </button>
                    </a>
                  }
                  <br /> <br />
                  ADVOSION Advokatpartnerselskab CVR nr: 37 55 75 60
                </p>
              </div>
            </div>
          </article>
        </div>

        <article className="mt-12.5">
          <div
            className="w-full flex justify-start mb-2.5 xl:hidden"
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
          <BankoplysningerContainer
            typeId={15}
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
