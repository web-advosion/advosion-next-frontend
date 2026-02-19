import ExpertiseCardA from "./cards/ExpertiseCardA";

export default async function ExpertiseContainer({
  typeId,
  bgColor,
  textColor,
}) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/ekspertise?ekspertise_type=${typeId}&per_page=100&_embed`,
    { next: { revalidate: 10 } },
  );

  const expertises = await res.json();
  const expertisesData = Array.isArray(expertises) ? expertises : [];

  return (
    <div className="h-auto w-screen flex overflow-x-auto gap-7.5 md:gap-15 rounded-2xl  pr-17 md:pr-40 lg:flex-wrap lg:justify-center lg:pr-0 lg:gap-x-25 lg:gap-y-15">
      {expertisesData.map((expertise, index) => (
        <ExpertiseCardA
          key={expertise.id}
          expertise={expertise}
          bgColor={bgColor}
          textColor={textColor}
        />
      ))}
    </div>
  );
}
