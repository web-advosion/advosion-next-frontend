import AndetEmployeeCard from "./cards/AndetEmployeeCard";

export default async function AndetContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/medarbejder_kort?per_page=100&_embed&orderby=title&order=asc",
    { next: { revalidate: 10 } },
  );

  const medarbejdere = await res.json();

  // Filtrer kun advokater
  const advokater = medarbejdere.filter((m) => m.acf.rolle === "andet");

  return (
    <div className="h-auto w-screen flex overflow-x-auto gap-7.5 rounded-2xl py-2 pr-17 md:pr-40 lg:pr-80 xl:pr-120">
      {advokater.map((medarbejder) => (
        <AndetEmployeeCard key={medarbejder.id} medarbejder={medarbejder} />
      ))}
    </div>
  );
}
