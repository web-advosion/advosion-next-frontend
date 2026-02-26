import JobCard from "./cards/JobCard";

export default async function JobContainer() {
  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/jobopslag?_embed&per_page=100`,
    { next: { revalidate: 10 } },
  );

  const jobs = await res.json();
  const jobsData = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="h-auto w-screen flex overflow-x-auto gap-10 md:gap-16 rounded-2xl py-2.5 pr-30 md:pr-40 lg:pr-100 xl:pr-200">
      {jobsData.map((job) => (
        <JobCard key={job.id} jobopslag={job} />
      ))}
    </div>
  );
}
