import Link from "next/link";

export default function JobCard({
  jobopslag,
  bgColor = "bg-(--revision-blue)",
  textColor = "text-(--primary-bg)",
}) {
  return (
    <Link href="#">
      <div
        className={`min-w-64 max-w-64 h-125 ${bgColor} ${textColor} rounded-2xl shadow-md flex flex-col p-4`}
      >
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold font-['Inter'] leading-7">
            {jobopslag.acf?.job_type || "No type"}
          </h1>

          <h2 className="text-xl font-normal font-['Inter'] leading-7">
            {jobopslag.acf?.underoverskrift || "no subheader"}
          </h2>

          <div className="w-56 h-0 my-5 outline-1 outline-offset-[-0.50px] outline-(--revison-green)"></div>

          <p>{jobopslag.acf?.job_text || ""}</p>
        </div>

        <div className="mt-auto">
          <ButtonRead bgColor="bg-white" textColor="text-(--revision-blue)" />
        </div>
      </div>
    </Link>
  );
}
