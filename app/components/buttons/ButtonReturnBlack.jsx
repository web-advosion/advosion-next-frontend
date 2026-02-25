"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ButtonReturnBlack() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      onClick={goBack}
      className="w-12 h-12 bg-(--primary-bg) rounded-4xl flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer shadow-md/30"
    >
      <Image
        src="/img/icon-go-back.svg"
        width={28}
        height={28}
        alt="Gå tilbage"
      />
    </button>
  );
}
