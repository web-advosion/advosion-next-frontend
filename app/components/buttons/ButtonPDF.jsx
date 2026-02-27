import Image from "next/image";

export default function ButtonPDF({ documentPath }) {
  return (
    <a href={`${documentPath}`} download>
      <Image
        className="w-full h-full"
        src="/img/icon-pdf.svg"
        width={130}
        height={130}
        alt="swipe icon"
      ></Image>
    </a>
  );
}
