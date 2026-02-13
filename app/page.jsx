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
          <div className="flex flex-col justify-center w-fulll h-full items-start text-white relative animate__animated animate__fadeInDown animate__slow px-7.5">
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
      </main>
    </>
  );
}
