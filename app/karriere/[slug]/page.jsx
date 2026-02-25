import ButtonApply from "../../components/buttons/ButtonApply";
import ButtonContact from "../../components/buttons/ButtonContact";
import ButtonReturn from "../../components/buttons/ButtonReturn";

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

  const bullets =
    jobopslag.acf?.arbejdsopgaver_liste
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean) || [];

  const bulletsProfile =
    jobopslag.acf?.profil_liste
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean) || [];

  {
    /*Theme logic done with AI help */
  }
  const themeMap = {
    revisor: {
      bg: "bg-(--revision-blue)",
      textWhite: "text-(--primary-bg)",
      textColored: "text-(--revision-blue)",
      buttonBg: "bg-(--primary-bg)",
      buttonText: "text-(--revision-blue)",
      buttonContactBg: "bg-(--revision-blue)",
      buttonContactText: "text-(--primary-bg)",
      buttonApplyBg: "bg-(--primary-bg)",
      buttonApplyText: "text-(--revision-blue)",
      borderYes: "border-2",
      borderColor: "border-(--revision-blue)",
    },
    advokat: {
      bg: "bg-(--advokat-blue)",
      textWhite: "text-(--primary-bg)",
      textColored: "text-(--advokat-blue)",
      buttonBg: "bg-white",
      buttonText: "text-(--advokat-blue)",
      buttonContactBg: "bg-(--advokat-blue)",
      buttonContactText: "text-(--primary-bg)",
      buttonApplyBg: "bg-(--primary-bg)",
      buttonApplyText: "text-(--advokat-blue)",
      borderYes: "border-2",
      borderColor: "border-(--advokat-blue)",
    },
    andet: {
      bg: "bg-(--cta-black)",
      textWhite: "text-(--primary-bg)",
      textColored: "text-(--cta-black)",
      buttonBg: "bg-(--primary-bg)",
      buttonText: "text-(--cta-black)",
      buttonContactBg: "bg-(--cta-black)",
      buttonContactText: "text-(--primary-bg)",
      buttonApplyBg: "bg-(--primary-bg)",
      buttonApplyText: "text-(--cta-black)",
      borderYes: "border-2",
      borderColor: "border-(--cta-black)",
    },
  };

  const type = jobopslag.acf?.job_type?.toLowerCase().trim();
  const theme = themeMap[type] || themeMap.andet;

  return (
    <main
      className={`w-screen h-auto overflow-hidden flex flex-col items-center ${theme.bg}`}
    >
      <section
        id="primary"
        className={`w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 mb-12.5 ${theme.textWhite} lg:mb-20 pt-12.5 relative`}
      >
        <article>
          <h1 className="text-4xl font-bold">{jobopslag.acf?.job_type}</h1>
          <h2 className="text-3xl font-normal font-['Inter'] leading-9">
            {jobopslag.acf?.underoverskrift || "no subheader"}
          </h2>
        </article>

        <article className="mt-5 text-base font-normal">
          <p>{jobopslag.acf?.job_text || "no job description"}</p>
        </article>

        <article>
          <h2 className="text-3xl font-bold mt-12.5">Arbejdsopgaver</h2>
          <ul className="list-disc pl-6 mt-5 space-y-1 font-normal">
            {bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mt-5 text-base font-normal">
            {jobopslag.acf?.arbejdsopgaver_tekst || "no job description"}
          </p>

          <p className="my-5 text-base font-normal">
            <strong>Ansøgningsfrist:</strong>{" "}
            {jobopslag.acf?.deadline || "no deadline"}
          </p>
        </article>
      </section>

      {/*Sektion: Din profil */}
      <section
        id="profil"
        className={`w-screen h-auto px-7.5 mx-7.5 md:px-10.75 lg:px-48 2xl:px-100 mb-12.5 lg:mb-20 mt-12.5 relative ${theme.textColored}`}
      >
        <div className="w-80 h-auto p-4 origin-top-left bg-(--primary-bg) rounded-2xl flex flex-col">
          <h1 className="text-3xl font-bold">Din profil</h1>

          <p className="mt-5">
            {jobopslag.acf?.profilbeskrivelse_top || "no job description"}
          </p>

          <ul className="list-disc pl-6 mt-5 space-y-1 font-bold">
            {bulletsProfile.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <article className="flex flex-col gap-5 pt-7.5 mt-auto">
            <div>
              <p className="mt-5">
                {jobopslag.acf?.kontakttekst_bund || "no job description"}
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <ButtonContact
                  bgColor={theme.buttonContactBg}
                  textColor={theme.buttonContactText}
                />
              </div>
              <div>
                <ButtonApply
                  bgColor={theme.buttonApplyBg}
                  textColor={theme.buttonApplyText}
                  borderYes={theme.borderYes}
                  borderColor={theme.borderColor}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <div>
        <ButtonReturn />
      </div>
    </main>
  );
}
