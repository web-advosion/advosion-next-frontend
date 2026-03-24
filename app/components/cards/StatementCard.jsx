import Image from "next/image";

export default function StatementCard({ statement }) {
  // safely get featured image or fallback
  const imageURL =
    statement._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/img/image-error-message.svg";

  return (
    <div className="w-64 h-125 bg-(--primary-bg) rounded-2xl shadow-md items-center justify-start flex flex-col gap-4 p-4">
      <Image
        className="overflow-hidden rounded-2xl w-59 h-48 object-cover"
        src={imageURL}
        alt={statement.title?.rendered || "No title"}
        width={236}
        height={192}
      />

      <div className="w-56 h-60 flex flex-col">
        <h1 className="text-(--advokat-blue) text-lg font-bold font-['Inter'] leading-7">
          {statement.acf?.statement_title || "No title"}
        </h1>

        <div className="text-(--advokat-blue) italic">
          <p>{statement.acf?.statement_text || ""}</p>
        </div>

        <div className="mt-auto">
          <p>{statement.acf?.client_name || ""}</p>
        </div>
      </div>
    </div>
  );
}
