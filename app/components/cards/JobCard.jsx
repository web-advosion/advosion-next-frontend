import Link from "next/link";
import ButtonRead from "../buttons/ButtonRead";

export default function JobCard({ jobopslag }) {
  const type = jobopslag.acf?.job_type?.toLowerCase();

  {
    /*Theme logic done with AI help */
  }
  const themeMap = {
    revisor: {
      bg: "bg-(--revision-blue)",
      text: "text-(--primary-bg)",
      buttonBg: "bg-(--primary-bg)",
      buttonText: "text-(--revision-blue)",
    },
    advokat: {
      bg: "bg-(--advokat-blue)",
      text: "text-white",
      buttonBg: "bg-white",
      buttonText: "text-(--advokat-blue)",
    },
    andet: {
      bg: "bg-(--cta-black)",
      text: "text-(--primary-bg)",
      buttonBg: "bg-(--primary-bg)",
      buttonText: "text-(--cta-black)",
    },
  };

  const theme = themeMap[type] || themeMap["andet"];

  return (
    <Link href={`/karriere/${jobopslag.slug}`}>
      <div
        className={`min-w-64 max-w-64 h-125 ${theme.bg} ${theme.text} rounded-2xl shadow-md flex flex-col p-4`}
      >
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold font-['Inter'] leading-7">
            {jobopslag.acf?.job_type || "no type"}
          </h1>

          <h2 className="text-xl font-normal font-['Inter'] leading-7">
            {jobopslag.acf?.underoverskrift || "no subheader"}
          </h2>

          <div className="w-56 h-0 my-5 outline-1 outline-offset-[-0.50px] outline-revison-green"></div>

          <p>{jobopslag.acf?.job_text || "no job description"}</p>
        </div>

        <div className="py-5">
          <p>
            <strong>Ansøgningsfrist:</strong>{" "}
            {jobopslag.acf?.deadline || "no deadline"}
          </p>
        </div>

        <div className="mt-auto">
          <ButtonRead bgColor={theme.buttonBg} textColor={theme.buttonText} />
        </div>
      </div>
    </Link>
  );
}
