import Image from "next/image";

export default function AdvokatEmployeeCard({ medarbejder }) {
  const billede = medarbejder._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-w-64 h-104 bg-(--advokat-blue) rounded-2xl shadow-md flex flex-col p-4 gap-3">
      <article>
        <Image
          className="overflow-hidden rounded-2xl w-full h-48 object-cover"
          src={billede}
          alt={medarbejder.title.rendered}
          width={222}
          height={196}
        />
      </article>

      <article>
        <div className="w-full h-full text-(--primary-bg) flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">{medarbejder.acf.navn}</h1>
            <h2 className="text-base font-normal">
              {medarbejder.acf.stilling}
            </h2>
          </div>

          <div className="italic text-sm font-normal">
            <p>{medarbejder.acf.ekspertise}</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium flex gap-2">
              <Image
                src="/img/icon-phone-white.svg"
                width={22}
                height={22}
                alt="telefon ikon"
              />
              <p>{medarbejder.acf.telefonnummer}</p>
            </div>

            <div className="text-sm font-medium flex gap-2">
              <Image
                src="/img/icon-mail-white.svg"
                width={22}
                height={22}
                alt="mail ikon"
              />
              <p>{medarbejder.acf.emailadresse}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
