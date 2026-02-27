export default function ButtonRead({
  bgColor = "bg-black",
  textColor = "text-(--primary-bg)",
}) {
  return (
    <div
      className={` ${textColor} ${bgColor} max-w-40 h-8 px-8 rounded-2xl font-bold text-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-ou`}
    >
      <p className="">Læs mere</p>
    </div>
  );
}
