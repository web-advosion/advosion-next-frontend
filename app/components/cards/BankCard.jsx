export default function BankCard({
  title,
  undertitel,
  adresse,
  regNr,
  kontoNr,
  iban,
  swift,
  bgColor = "bg-white",
  textColor = "text-black",
}) {
  return (
    <div
      className={`${bgColor} ${textColor} min-w-72 max-w-72 min-h-48.5 h-auto rounded-3xl shadow-md p-4 flex items-start justify-start`}
    >
      <div className="flex flex-col ">
        <article>
          {title && (
            <h2 className="text-xl font-bold font-['Inter'] leading-9">
              {title}
            </h2>
          )}

          {undertitel && (
            <div className="text-base font-normal">
              <p>
                <strong>{undertitel}</strong>
              </p>
            </div>
          )}

          {adresse && (
            <div className="text-base font-normal">
              <p>{adresse}</p>
            </div>
          )}
        </article>

        <article className="mt-auto">
          {regNr && (
            <div className="text-base font-normal">
              <p>
                <strong>Reg. nr.: </strong>
                {regNr}
              </p>
            </div>
          )}

          {kontoNr && (
            <div className="text-base font-normal">
              <p>
                <strong>Kontonr.: </strong>
                {kontoNr}
              </p>
            </div>
          )}

          {iban && (
            <div className="text-base font-normal">
              <p>
                <strong>IBAN: </strong>
                {iban}
              </p>
            </div>
          )}

          {swift && (
            <div className="text-base font-normal">
              <p>
                <strong>SWIFT: </strong>
                {swift}
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
