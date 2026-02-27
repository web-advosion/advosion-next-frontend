import BankCard from "./cards/BankCard";

export default async function BankoplysningerContainer({ bgColor, textColor }) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/bankoplysninger?per_page=100&_embed&orderby=title&order=asc`,
    { next: { revalidate: 10 } },
  );

  const data = await res.json();
  const dataArray = Array.isArray(data) ? data : [];

  return (
    <div className="h-auto w-screen  flex overflow-x-auto gap-7.5 md:gap-14 rounded-2xl pb-2.5 pr-17 md:pr-40 lg:pr-80 xl:pr-100 lg:w-full">
      {dataArray.map((data, index) => (
        <BankCard
          key={data.id}
          adresse={data.acf?.bankadresse}
          title={data.acf?.bankoplysning_titel}
          undertitel={data.acf?.undertitel}
          bgColor={bgColor}
          textColor={textColor}
          regNr={data.acf?.registreringsnummer}
          kontoNr={data.acf?.kontonummer}
          iban={data.acf?.iban}
          swift={data.acf?.swift}
        />
      ))}
    </div>
  );
}
