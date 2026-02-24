export default async function DetailPage({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://cms.advosion.dk/wp-json/wp/v2/jobopslag?slug=${slug}&_embed`,
    { next: { revalidate: 10 } },
  );

  const data = await res.json();
  const jobopslag = data[0];

  if (!jobopslag) {
    return <div>Jobopslaget blev ikke fundet.</div>;
  }

  return (
    <main className="w-screen h-auto overflow-hidden flex flex-col items-center bg-(--revision-blue)">
      <section
        id="hero"
        className="w-screen h-auto px-7.5 md:px-10.75 lg:px-48 2xl:px-100 bg-(--primary-bg) mb-12.5 lg:mb-20 mt-12.5 relative"
      >
        <h1 className="text-4xl font-bold">{jobopslag.slug}</h1>
      </section>
    </main>
  );
}
