import JobCard from "./cards/JobCard";

export default async function JobContainer({ typeId, bgColor, textColor }) {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/jobopslag?job_type=${typeId}&_embed&per_page=100`,
    { next: { revalidate: 10 } },
  );

  const jobs = await res.json();
  const jobsData = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="h-auto w-full flex overflow-x-auto gap-19.5 rounded-2xl py-2.5 pr-30 md:pr-40 lg:pr-100 xl:pr-200">
      {jobsData.map((job) => (
        <JobCard
          key={job.id}
          jobopslag={job}
          bgColor={bgColor}
          textColor={textColor}
        />
      ))}
    </div>
  );
}
