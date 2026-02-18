import Image from "next/image";

export default function PictureCard({ billede, className }) {
  const imageURL =
    billede._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/img/image-error-message.svg";

  return (
    <div className={`w-full max-w-80 ${className} rounded-2xl overflow-hidden`}>
      <Image
        src={imageURL}
        alt={billede.title?.rendered || "Ingen titel"}
        width={339}
        height={339}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
