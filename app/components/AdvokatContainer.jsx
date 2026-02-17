import AdvokatEmployeeCard from "./cards/AdvokatEmployeeCard";

export default async function AdvokatContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/medarbejder_kort?_embed",
    { next: { revalidate: 10 } },
  );

  const medarbejdere = await res.json();

  // Filtrer kun advokater
  const advokater = medarbejdere.filter((m) => m.acf.rolle === "advokat");

  return (
    <div className="h-auto w-full flex overflow-x-auto gap-7.5 rounded-2xl py-2.5 pr-30 md:pr-40 lg:pr-100 xl:pr-200">
      {advokater.map((medarbejder) => (
        <AdvokatEmployeeCard key={medarbejder.id} medarbejder={medarbejder} />
      ))}
    </div>
  );
}
