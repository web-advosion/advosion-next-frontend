"use server";

export async function sendContact(formData) {
  const endpoint = process.env.CMS_CONTACT_ENDPOINT;
  const secret = process.env.CMS_CONTACT_SECRET;

  if (!endpoint || !secret) {
    throw new Error(
      "Missing CMS_CONTACT_ENDPOINT / CMS_CONTACT_SECRET env vars.",
    );
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "X-Contact-Secret": secret,
    },
    body: formData, // includes file upload
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`WP contact failed: ${res.status} ${text}`);
  }

  return { ok: true };
}
