import StatementCard from "./cards/StatementCard";

export default async function StatementContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/client_statement?_embed",
    { next: { revalidate: 10 } },
  );

  const statements = await res.json();

  return (
    <div className="h-auto w-full flex overflow-x-auto gap-19.5 rounded-2xl py-2.5">
      {statements.map((statement) => (
        <StatementCard key={statement.id} statement={statement} />
      ))}
    </div>
  );
}
