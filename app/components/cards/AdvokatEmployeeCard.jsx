import Image from "next/image";

export default function AdvokatEmployeeCard({ medarbejder }) {
  const billede =
    medarbejder._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/img/image-error-message.svg";

  return (
    <div className="min-w-64 max-w-64 h-auto bg-(--advokat-blue) rounded-2xl shadow-md flex flex-col overflow-hidden">
      <div>
        <Image
          className="overflow-hidden  w-full h-48 object-cover"
          src={billede}
          alt={medarbejder.title?.rendered || "Ingen titel"}
          width={222}
          height={196}
        />
      </div>

      <div className="flex flex-col flex-1 gap-5 text-(--primary-bg) p-4">
        <div>
          <h1 className="text-xl font-bold">{medarbejder.acf.navn}</h1>
          <h2 className="text-base font-normal">{medarbejder.acf.stilling}</h2>
          <p className="italic text-sm font-normal mt-2">
            {medarbejder.acf.ekspertise || "Ingen beskrivelse"}
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
              className="hover:font-extrabold"
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
            <a
              href={`mailto:${medarbejder.acf.emailadresse}`}
              className="hover:font-extrabold"
            >
              {medarbejder.acf.emailadresse}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
