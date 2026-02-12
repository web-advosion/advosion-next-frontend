import Image from "next/image";

export default function StatementCard({ statement }) {
  return (
    <div className="w-64 h-125 bg-(--cards) rounded-2xl shadow-md  justify-start flex flex-col gap-4 p-4">
      <Image
        src={statement._embedded["wp:featuredmedia"][0].source_url}
        alt={statement.title.rendered}
        width={236}
        height={192}
      />
      <div className="w-56 h-60 justify-start">
        <h1 className="text-(--advokat-blue) text-lg font-bold font-['Inter'] leading-7">
          {statement.acf.statement_title}
        </h1>

        <div clasname="text-(--advokat-blue) italic">
          <p className="italic">{statement.acf.statement_text}</p>
        </div>

        <div className="mt-8">
          <p>{statement.acf.client_name}</p>
        </div>
      </div>
    </div>
  );
}
