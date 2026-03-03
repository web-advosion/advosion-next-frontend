"use server";

export async function sendContact(formData) {
  const endpoint = process.env.CMS_CONTACT_ENDPOINT;
  const secret = process.env.CMS_CONTACT_SECRET;

  if (!endpoint || !secret) throw new Error("Missing CMS env vars.");

  formData.set("contact_secret", secret);

  const res = await fetch(endpoint, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`WP contact failed: ${res.status} ${text}`);
  }

  return { ok: true };
}
