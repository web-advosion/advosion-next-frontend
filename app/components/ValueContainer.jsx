import ValueCard from "./cards/ValueCard";

export default async function ValueContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/core_values?per_page=100&_embed",
    { next: { revalidate: 10 } },
  );

  const values = await res.json();

  return (
    <div className="h-auto w-full  md:w-full flex overflow-x-auto gap-7.5 md:gap-15 rounded-2xl py-2.5 pr-auto lg:flex-wrap lg:justify-center lg:gap-x-25 lg:gap-y-15">
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
}
