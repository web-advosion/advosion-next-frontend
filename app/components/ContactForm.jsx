"use client";

import { useState, useEffect } from "react";
import { sendContact } from "@/app/actions/contact";
import Image from "next/image";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  // Auto-hide success after 4 seconds (optional but nice)
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [success]);

  async function handleSubmit(formData) {
    try {
      setIsPending(true);
      setError("");
      setSuccess(false);

      await sendContact(formData);

      // Reset the form inputs (including file input)
      const formEl = document.getElementById("contact-form");
      formEl?.reset();

      setSuccess(true);
    } catch (e) {
      setError("Der opstod en fejl. Prøv igen.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <form
        id="contact-form"
        action={handleSubmit}
        className="w-full md:w-[70%] lg:w-full overflow-hidden h-auto bg-(--cards) rounded-3xl p-6"
      >
        <div>
          <h2 className="text-3xl font-medium text-(--advokat-blue)">
            Kontaktformular
          </h2>
          <h3 className="text-lg font-normal text-(--revision-blue)">
            Vi glæder os til at høre fra dig!
          </h3>
        </div>

        <section className="flex flex-col gap-5 mt-7.5">
          <article className="flex items-center gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Emne</h3>
            </div>

            <div className="w-full flex flex-col justify-center h-auto ">
              <label htmlFor="topic"></label>
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="F.eks. Ansøgning: Revisor"
                className="w-full h-full p-4 bg-(--secondary-bg) rounded-2xl text-xs md:text-sm"
              />
            </div>
          </article>

          <article className="flex items-center gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Navn</h3>
            </div>
            <div className="w-full flex flex-col justify-center h-full">
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Dit fulde navn..."
                className="w-full p-4 bg-(--secondary-bg) rounded-2xl text-xs md:text-sm"
              />
            </div>
          </article>

          <article className="flex items-center gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Tlf. nr.</h3>
            </div>
            <div className="w-full flex flex-col justify-center h-full">
              <label htmlFor="phone"></label>
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder="+45 99 99 99 99"
                className="w-full p-4 bg-(--secondary-bg) rounded-2xl text-xs md:text-sm"
              />
            </div>
          </article>

          <article className="flex items-center gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Mail</h3>
            </div>
            <div className="w-full flex flex-col justify-center h-full ">
              <label htmlFor="email"></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="mail@mailadresse.dk"
                className="w-full p-4 bg-(--secondary-bg) rounded-2xl text-xs md:text-sm"
              />
            </div>
          </article>

          <article className="flex items-start gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Besked</h3>
            </div>

            <div className="w-full flex flex-col justify-center">
              <label htmlFor="message" className="sr-only">
                Besked
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Beskriv kort hvorfor du henvender dig..."
                className="w-full p-4 bg-(--secondary-bg) rounded-2xl text-xs md:text-sm resize-none"
              />
            </div>
          </article>

          <article className="flex items-center gap-5">
            <div className="w-1/3">
              <h3 className="text-md md:text-lg font-normal">Upload fil</h3>
            </div>

            <div className="w-full flex flex-col justify-center h-full text-black/40">
              <label htmlFor="file" className="hover:cursor-pointer">
                <div className="flex p-4 bg-(--secondary-bg) rounded-2xl items-center">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    multiple
                    className="w-full h-full hover:cursor-pointer text-xs md:text-sm"
                  />

                  <Image
                    src="/img/icon-file-upload.svg"
                    width={24}
                    height={24}
                    alt="upload fil ikon"
                    className="hover:cursor-pointer"
                  />
                </div>
              </label>
            </div>
          </article>

          <div className="w-full flex justify-end">
            <p className="italic ml-4 w-[70%] text-xs">
              *Træk dine filer hen på feltet herover eller klik på ikonet og
              tjek at filen er uploadet inden du klikker "send afsted"
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className={`w-40 h-10 bg-black rounded-3xl text-(--secondary-bg) font-bold mt-7.5 hover:cursor-pointer ${
                isPending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isPending ? "Sender..." : "Send afsted"}
            </button>
          </div>

          {success && (
            <div className="mt-2 p-3 bg-green-100 text-green-800 rounded-2xl">
              ✅ Din besked er sendt!
            </div>
          )}

          {error && (
            <div className="mt-2 p-3 bg-red-100 text-red-800 rounded-2xl">
              {error}
            </div>
          )}
        </section>
      </form>
    </>
  );
}
