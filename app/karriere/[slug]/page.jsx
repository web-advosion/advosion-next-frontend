import ButtonApply from "../../components/buttons/ButtonApply";
import ButtonContact from "../../components/buttons/ButtonContact";

export default async function DetailPage({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/jobopslag?slug=${slug}&_embed`,
    { next: { revalidate: 10 } },
  );

  const data = await res.json();
  const jobopslag = data[0];

  if (!jobopslag) {
    return <div>Jobopslaget blev ikke fundet.</div>;
  }

  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center bg-(--revision-blue)">
      <section
        id="primary"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 mt-12.5 relative"
      >
        <h1 className="text-4xl font-bold">{jobopslag.title.rendered}</h1>

        <h2 className="text-xl font-normal font-['Inter'] leading-7">
          {jobopslag.acf?.underoverskrift || "no subheader"}
        </h2>

        <p>{jobopslag.acf?.job_text || "no job description"}</p>

        <h2>Arbejdsopgaver</h2>
        <p>{jobopslag.acf?.arbejdsopgaver || "no job description"}</p>
      </section>

      {/*Sektion: Din profil */}
      <section
        id="profil"
        className="w-screen h-auto px-7.5 mx-7.5 md:px-10.75 lg:px-48 2xl:px-100 mb-12.5 lg:mb-20 mt-12.5 relative"
      >
        <div className="w-80 h-160 p-4 origin-top-left bg-(--primary-bg) rounded-2xl">
          <h1 className="text-4xl font-bold">Din profil</h1>

          <p>{jobopslag.acf?.profilbeskrivelse || "no job description"}</p>

          <article className="flex gap-2 py-7.5">
            <div>
              <ButtonContact />
            </div>
            <div>
              <ButtonApply />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
