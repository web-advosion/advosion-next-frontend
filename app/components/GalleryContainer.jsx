import PictureCard from "./cards/PictureCard";

export default async function GalleryContainer() {
  const res = await fetch(
    "https://cms.advosion.dk/wp-json/wp/v2/billedgalleri?per_page=100&_embed",
    { next: { revalidate: 10 } },
  );

  const billeder = await res.json();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 grid-rows-2 gap-5">
        <div className="">
          {billeder.map((billede) => (
            <PictureCard key={billede.id} billede={billede} />
          ))}
        </div>
      </div>
    </div>
  );
}
