import StatementCard from "./cards/StatementCard";

export default async function StatementContainerEmployees() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/ansatte_statements?_embed",
    { next: { revalidate: 10 } },
  );

  const statements = await res.json();

  return (
    <div className="h-auto w-full flex overflow-x-auto gap-19.5 rounded-2xl py-2.5 pr-30 md:pr-40 lg:pr-100 xl:pr-200">
      {statements.map((statement) => (
        <StatementCard key={statement.id} statement={statement} />
      ))}
    </div>
  );
}
