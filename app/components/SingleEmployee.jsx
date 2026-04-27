import AdvokatEmployeeCard from "./cards/AdvokatEmployeeCard";
import RevisorEmployeeCard from "./cards/RevisorEmployeeCard";

export default async function SingleEmployee({ id, type }) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/medarbejder_kort/${id}?_embed`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) return <p>Kunne ikke hente medarbejder</p>;

  const medarbejder = await res.json();

  // fallback to API if type not passed
  const resolvedType = type || medarbejder?.acf?.type;

  return (
    <div className="h-auto w-full">
      {resolvedType === "advokat" && (
        <AdvokatEmployeeCard medarbejder={medarbejder} />
      )}
      {resolvedType === "revisor" && (
        <RevisorEmployeeCard medarbejder={medarbejder} />
      )}
    </div>
  );
}
