import RevisorEmployeeCard from "./cards/RevisorEmployeeCard";

export default async function RevisorContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/medarbejder_kort?per_page=100&_embed&orderby=title&order=asc",
    { next: { revalidate: 10 } },
  );

  const medarbejdere = await res.json();

  // Filtrer kun revisorer
  const revisorer = medarbejdere.filter((m) => m.acf.rolle === "revisor");

  return (
    <div className="h-auto w-screen flex overflow-x-auto gap-7.5 rounded-2xl py-2 pr-auto">
      {revisorer.map((medarbejder) => (
        <RevisorEmployeeCard key={medarbejder.id} medarbejder={medarbejder} />
      ))}
    </div>
  );
}
