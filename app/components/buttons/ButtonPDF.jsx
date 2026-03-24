import Image from "next/image";

export default function ButtonPDF({ documentPath, imageURL }) {
  return (
    <a href={documentPath} download>
      <Image
        className="w-full h-full"
        src={imageURL}
        width={130}
        height={130}
        alt="swipe icon"
      ></Image>
    </a>
  );
}
