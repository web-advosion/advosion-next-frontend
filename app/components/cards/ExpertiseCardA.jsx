export default function ExpertiseCardA({ expertise }) {
  return (
    <div className="min-w-72 max-w-72 h-72 bg-(--cards) rounded-3xl shadow-md p-4 flex items-start justify-center">
      <div className=" text-(--advokat-blue) ">
        <h2 className=" text-2xl font-medium font-['Inter'] leading-9">
          {expertise.acf?.titel}
        </h2>
        <div className=" text-base font-normal">
          <p>{expertise.acf?.beskrivelse}</p>
        </div>
      </div>
    </div>
  );
}
