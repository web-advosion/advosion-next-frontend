import Image from "next/image";

export default function AndetEmployeeCard({ medarbejder }) {
  const billede =
    medarbejder._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/img/image-error-message.svg"; // fallback image

  return (
    <div className="min-w-64 max-w-64 h-auto bg-(--revision-green) rounded-2xl shadow-md flex flex-col p-4">
      {/* Billede */}
      <div>
        <Image
          className="overflow-hidden rounded-2xl w-full h-48 object-cover"
          src={billede}
          alt={medarbejder.title.rendered}
          width={222}
          height={196}
        />
      </div>

      <div className="flex flex-col flex-1 mt-3 gap-5 text-(--primary-bg)">
        <div>
          <h1 className="text-xl font-bold">{medarbejder.acf.navn}</h1>
          <h2 className="text-base font-normal">{medarbejder.acf.stilling}</h2>
          <p className="italic text-sm font-normal mt-2">
            {medarbejder.acf.ekspertise}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="text-sm font-medium flex items-center gap-2">
            <Image
              src="/img/icon-phone-white.svg"
              width={22}
              height={22}
              alt="telefon ikon"
            />
            <a
              href={`tel:${medarbejder.acf.telefonnummer}`}
              className="hover:underline"
            >
              {medarbejder.acf.telefonnummer}
            </a>
          </div>

          <div className="text-sm font-medium flex items-center gap-2">
            <Image
              src="/img/icon-mail-white.svg"
              width={22}
              height={22}
              alt="mail ikon"
            />
            <a href={`mailto:${medarbejder.acf.emailadresse}`}>
              {medarbejder.acf.emailadresse}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
