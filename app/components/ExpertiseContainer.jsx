import ExpertiseCardA from "./cards/ExpertiseCardA";

export default async function ExpertiseContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/ekspertise?per_page=100&_embed",
    { next: { revalidate: 10 } },
  );

  const expertises = await res.json();

  const advokater = expertises.filter((m) => m.acf.rolle === "advokat");

  return (
    <div className="h-auto w-full flex overflow-x-auto gap-7.5 md:gap-15 rounded-2xl py-2.5 pr-17 md:pr-40 lg:flex-wrap lg:justify-center lg:pr-0 lg:gap-x-25 lg:gap-y-15">
      {expertises.map((expertise) => (
        <ExpertiseCardA key={expertise.id} expertise={expertise} />
      ))}
    </div>
  );
}
