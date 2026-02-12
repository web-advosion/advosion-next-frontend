import Image from "next/image";

export default function StatementCard() {
  return (
    <div className="w-64 h-125 bg-(--cards) rounded-2xl shadow-md  justify-start flex flex-col gap-4 p-4">
      <Image
        src="/img/client-placeholder.png"
        width={236}
        height={192}
        alt="Placeholder billede"
      ></Image>

      <div className="w-56 h-60 justify-start">
        <h1 className="text-(--advokat-blue) text-lg font-bold font-['Inter'] leading-7">
          {" "}
          God og hurtig rådgiving
        </h1>

        <div clasname="text-(--advokat-blue) italic">
          <p className="italic">
            Vi havde brug for hurtig rådgivning indenfor xxx og vi er yderst
            tilfredse med den service vi har fået hos Advosion - kan klart
            anbefales!
            <br />
          </p>
        </div>

        <div className="mt-8">
          <p> -John (Firma A/S)</p>
        </div>
      </div>
    </div>
  );
}
