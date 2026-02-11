import Image from "next/image";
import WhoCardDark from "./components/who-card-light";
import WhoCardLight from "./components/who-card-dark";

export default async function HomePage() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/pages?slug=forside",
    { next: { revalidate: 10 } }, // ISR: rebuild hver 10 sekunder
  );
  const pages = await res.json();
  const page = pages[0];

  return (
    <main className="flex flex-col items-center">
      {/*Hero sektion */}

      <section
        id="hero"
        className="w-full h-screen bg-[url('https://cms.advosion.dk/wp-content/uploads/2026/02/placeholder-hero.png')] bg-no-repeat bg-cover relative"
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
        <div className="flex flex-col justify-center w-full h-full align-start text-white relative z-10">
          <div>
            <Image
              src="https://cms.advosion.dk/wp-content/uploads/2026/02/logo-advosion-slogan.svg"
              width={320}
              height={120}
              alt="Advosion logo"
              priority
            />

            <p
              className="mt-4 max-w-102"
              dangerouslySetInnerHTML={{ __html: page.acf.hero_description }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
          <Image
            src="https://cms.advosion.dk/wp-content/uploads/2026/02/icon_arrow_white.svg"
            width={48}
            height={48}
            alt="Hvid pil"
          />
        </div>
      </section>

      {/*Hvem er vi */}
      <section className=" w-full h-screen bg-(--primay-bg) px-48">
        <h1 className="font-bold text-3xl text-(--cta-black) mt-12,5">
          Hvem er vi?
        </h1>

        {/*Card container */}
        <div className="mt-7.5 w-full flex justify-between">
          <WhoCardDark />
          <WhoCardLight className="bg-blue-500" />
          <WhoCardDark />
        </div>
      </section>
    </main>
  );
}
