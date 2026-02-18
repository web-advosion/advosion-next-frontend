import Image from "next/image";

export default function PictureCard({ billede }) {
  const imageURL =
    billede._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/img/image-error-message.svg";

  return (
    <div className="w-full  h-auto rounded-2xl shadow-md">
      <div>
        <Image
          className="overflow-hidden rounded-2xl w-full h-48 object-cover"
          src={imageURL}
          alt={billede.title?.rendered || "Ingen titel"}
          width={222}
          height={196}
        />
      </div>
    </div>
  );
}
