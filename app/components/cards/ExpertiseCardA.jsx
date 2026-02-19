export default function ExpertiseCardA({
  expertise,
  bgColor = "bg-white",
  textColor = "text-black",
}) {
  return (
    <div
      className={`${bgColor} ${textColor} min-w-72 max-w-72 min-h-48.5 h-auto rounded-3xl shadow-md p-4 flex items-start justify-center`}
    >
      <div>
        <h2 className=" text-xl font-bold font-['Inter'] leading-9">
          {expertise.acf?.titel}
        </h2>
        <div className=" text-base font-normal">
          <p>{expertise.acf?.beskrivelse}</p>
        </div>
      </div>
    </div>
  );
}
