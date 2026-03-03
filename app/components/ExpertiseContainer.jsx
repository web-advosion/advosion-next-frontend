import ExpertiseCardA from "./cards/ExpertiseCardA";

export default async function ExpertiseContainer({
  typeId,
  bgColor,
  textColor,
}) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/ekspertise?ekspertise_type=${typeId}&per_page=100&_embed&orderby=title&order=asc`,
    { next: { revalidate: 10 } },
  );

  const expertises = await res.json();
  const expertisesData = Array.isArray(expertises) ? expertises : [];

  return (
    <div className="h-auto w-full  flex overflow-x-auto gap-7.5 md:gap-10 lg:gap-14 rounded-2xl pb-2.5 pr-auto">
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
