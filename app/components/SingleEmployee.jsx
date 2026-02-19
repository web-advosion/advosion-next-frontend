import AdvokatEmployeeCard from "./cards/AdvokatEmployeeCard";

export default async function SingleEmployee({ id }) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/medarbejder_kort/${id}?_embed`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) return <p>Kunne ikke hente medarbejder</p>;

  const medarbejder = await res.json();

  return (
    <div className="h-auto w-full">
      <AdvokatEmployeeCard medarbejder={medarbejder} />
    </div>
  );
}
