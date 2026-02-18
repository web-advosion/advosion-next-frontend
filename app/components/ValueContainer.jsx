import ValueCard from "./cards/ValueCard";

export default async function ValueContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/core_values?per_page=100&_embed",
    { next: { revalidate: 10 } },
  );

  const values = await res.json();

  return (
    <div className="h-auto w-screen flex overflow-x-auto gap-7.5 rounded-2xl py-2.5 pr-17 md:pr-40 lg:pr-100 xl:pr-200">
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
}
