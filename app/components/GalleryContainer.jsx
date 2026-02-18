import PictureCard from "./cards/PictureCard";

export default async function GalleryContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/billedgalleri?per_page=100&_embed",
    { next: { revalidate: 10 } },
  );

  const billeder = await res.json();

  return (
    <div className=" overflow-x-auto pb-2">
      <div className="flex flex-col flex-wrap gap-5 h-144.5 w-full">
        {billeder.map((billede, index) => {
          const pattern = index % 4;

          let heightClass = "";

          if (pattern === 0) heightClass = "h-[339px]";
          if (pattern === 1) heightClass = "h-[219px]";
          if (pattern === 2) heightClass = "h-[219px]";
          if (pattern === 3) heightClass = "h-[339px]";

          return (
            <PictureCard
              key={billede.id}
              billede={billede}
              className={heightClass}
            />
          );
        })}
      </div>
    </div>
  );
}
