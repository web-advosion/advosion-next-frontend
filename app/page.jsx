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
import AdvokatCardMobile from "./components/cards/AdvokatCardMobile";
import RevisorCardMobile from "./components/cards/RevisorCardMobile";
import ContactCardMobile from "./components/cards/ContactCardMobile";
import ContactCardTablet from "./components/cards/ContactCardTablet";

export default async function HomePage() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/pages?slug=forside",
    { next: { revalidate: 10 } }, // ISR: rebuild hver 10 sekunder
  );
  const pages = await res.json();
  const page = pages[0];

  return (
    <>
      <main className="w-screen h-auto overflow-hidden flex flex-col items-center">
        {/*Hero sektion */}

        <section
          id="hero"
          className="w-screen h-screen bg-[url('https://cms.advosion.dk/wp-content/uploads/2026/02/placeholder-hero.png')] bg-no-repeat bg-cover relative"
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
          <div className="flex flex-col justify-center w-fulll h-full items-start text-white relative animate__animated animate__fadeInDown animate__slow px-7.5 md:px-10.75 lg:px-48 2xl:px-100">
            <div className="w-72 h-30">
              <Image
                src="https://cms.advosion.dk/wp-content/uploads/2026/02/logo-advosion-slogan.svg"
                width={320}
                height={120}
                alt="Advosion logo"
                priority
              />

              <p className="mt-4">{page.acf.hero_description}</p>
            </div>
          </div>

          <div className="absolute bottom-20 md:bottom-6 inset-x-0 flex justify-center z-10">
            <Image
              className="animate__animated animate__pulse animate__infinite animate__fast"
              src="https://cms.advosion.dk/wp-content/uploads/2026/02/icon_arrow_white.svg"
              width={48}
              height={48}
              alt="Hvid pil"
            />
          </div>
        </section>

        {/*Sektion: Hvem er vi */}
        <section className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5 leading-7">
              Hvem er vi?
            </h1>
          </Link>
          <div className="w-full flex justify-start mt-5 lg:hidden">
            <Image
              className="w-35 h-10"
              src="/img/icon-swipe.svg"
              width={150}
              height={50}
              alt="swipe icon"
            ></Image>
          </div>

          {/*Card container */}
          <div
            data-aos="fade-in"
            className="mt-2.5 lg:mt-7.5 w-screen lg:w-full overflow-x-auto gap-5 flex justify-between  mb-12.5 rounded-3xl md:gap-20 py-2.5 pr-24 lg:pr-0 lg:overflow-visible "
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
        <section className=" w-screen h-auto bg-(--secondary-bg) px-7.5 md:px-10.75 lg:px-48 2xl:px-100">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5 leading-7">
              Ydelser
            </h1>
          </Link>

          {/*Card container */}
          <div
            data-aos="fade-right"
            className="mt-7.5 w-full mb-12.5 lg:w-179 "
          >
            <div className="hidden md:block">
              <AdvokatCard />
            </div>

            <div className="md:hidden">
              <AdvokatCardMobile />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="mt-12.5 w-full mb-12.5 lg:w-179 lg:justify-self-end "
          >
            <div className="hidden md:block">
              <RevisorCard />
            </div>

            <div className=" md:hidden">
              <RevisorCardMobile />
            </div>
          </div>
        </section>

        {/*Sektion: kontakt */}
        <section className=" w-screen h-auto bg-(--primary-bg) px-7.5 md:px-10.75 lg:px-48 2xl:px-100">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5 leading-7">
              Kontakt
            </h1>
          </Link>

          {/*Card container */}
          <div data-aos="fade-in" className="mt-7.5 w-full mb-25">
            <div className="hidden md:hidden lg:block">
              <ContactCard />
            </div>

            <div className="hidden md:block lg:hidden">
              <ContactCardTablet />
            </div>

            <div className="md:hidden">
              <ContactCardMobile />
            </div>
          </div>
        </section>

        {/*Sektion: Kunde statements */}
        <section className=" w-screen h-auto bg-(--secondary-bg) px-7.5 pb-25 md:px-10.75 lg:px-48 2xl:px-100">
          <Link href="/">
            <h1 className="font-bold text-3xl text-(--cta-black) mt-12.5 mb-5 leading-7">
              Det siger vores kunder
            </h1>
          </Link>

          {/*Card gallery */}
          <div data-aos="fade-in" className="mt-2.5 w-screen h-auto">
            <div className="w-full flex justify-start mb-0 ">
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
