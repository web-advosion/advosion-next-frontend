"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ButtonReturnWhite() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer "
    >
      <Image
        src="/img/icon-go-back-white.svg"
        width={28}
        height={28}
        alt="Gå tilbage"
      />
    </button>
  );
}
