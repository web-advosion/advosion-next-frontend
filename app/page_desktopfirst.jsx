import Image from "next/image";
import WhoCardRight from "./components/cards/WhoCardRight";
import WhoCardLeft from "./components/cards/WhoCardLeft";
import WhoCardMid from "./components/cards/WhoCardMid";
import ButtonMeet from "./components/buttons/ButtonMeet";
import AdvokatCard from "./components/cards/AdvokatCard";
import RevisorCard from "./components/cards/RevisorCard";
import ContactCard from "./components/cards/ContactCard";
import StatementContainer from "./components/StatementContainer";
import Link from "next/link";

export default async function HomePage() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/pages?slug=forside",
    { next: { revalidate: 10 } }, // ISR: rebuild hver 10 sekunder
  );
  const pages = await res.json();
  const page = pages[0];

  return (
    <>
      <main className="max-w-screen h-auto flex flex-col items-center">
        {/*Hero sektion */}

        <section
          id="hero"
          className="w-full h-screen bg-[url('https://cms.advosion.dk/wp-content/uploads/2026/02/placeholder-hero.png')] bg-no-repeat bg-cover relative px-48"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="relative w-full h-full object-cover z-0"
        >
          <source
            src="https://cms.advosion.dk/wp-content/uploads/2026/02/VID_20260209_135839.mp4"
            type="video/mp4"
          />
        </video> */}
          <div className="flex flex-col justify-center w-fulll h-full align-start text-white relative z-10 animate__animated animate__fadeInDown animate__slow">
            <div>
              <Image
                src="https://cms.advosion.dk/wp-content/uploads/2026/02/logo-advosion-slogan.svg"
                width={320}
                height={120}
                alt="Advosion logo"
                priority
              />

              <p className="mt-4 max-w-102">{page.acf.hero_description}</p>
            </div>
          </div>

          <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
            <Image
              className="animate__animated animate__pulse animate__infinite animate__fast"
              src="https://cms.advosion.dk/wp-content/uploads/2026/02/icon_arrow_white.svg"
              width={48}
              height={48}
              alt="Hvid pil"
            />
          </div>
        </section>

        {/*Hvem er vi */}
        <section className=" w-full h-full bg-(--primay-bg) px-48">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5">
              Hvem er vi?
            </h1>
          </Link>

          {/*Card container */}
          <div
            data-aos="fade-in"
            className="mt-7.5 w-full flex justify-between mb-12.5"
          >
            <WhoCardLeft />
            <WhoCardMid />
            <WhoCardRight />
          </div>

          <div className="my-12.5 flex justify-end w-full">
            <ButtonMeet />
          </div>
        </section>

        {/*Ydelser */}
        <section className=" w-full h-full bg-(--secondary-bg) px-48">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5">
              Ydelser
            </h1>
          </Link>

          {/*Card container */}
          <div data-aos="fade-right" className="mt-7.5 w-full mb-12.5">
            <AdvokatCard />
          </div>
          <div
            data-aos="fade-left"
            className="mt-22.5 w-full mb-12.5 flex justify-end"
          >
            <RevisorCard />
          </div>
        </section>

        {/*Sektion: kontakt */}
        <section className=" w-full h-full bg-(--primary-bg) px-48">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5">
              Kontakt
            </h1>
          </Link>

          {/*Card container */}
          <div data-aos="fade-in" className="mt-7.5 w-full mb-31.25">
            <ContactCard />
          </div>
        </section>

        {/*Kunde statements */}
        <section className=" w-full h-full bg-(--secondary-bg) px-48">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5">
              Det siger vores kunder
            </h1>
          </Link>

          {/*Card gallery */}
          <div data-aos="fade-in" className="mt-5 w-full h-full mb-31.5">
            <div className="w-full flex justify-end mb-0">
              <Image
                className="w-35 h-10"
                src="/img/icon-swipe.svg"
                width={150}
                height={50}
                alt="swipe icon"
              ></Image>
            </div>
            <StatementContainer />
          </div>
        </section>
      </main>
    </>
  );
}
