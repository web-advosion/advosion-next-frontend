"use server";

export async function sendContact(formData) {
  const endpoint = process.env.CMS_CONTACT_ENDPOINT;
  const secret = process.env.CMS_CONTACT_SECRET;

  if (!endpoint || !secret) {
    throw new Error("Missing CMS env vars.");
  }

  // Add secret
  formData.set("contact_secret", secret);

  // If your input name="file" and multiple is enabled,
  // Next automatically sends all files.
  // BUT to be safe we normalize them:

  const files = formData.getAll("file");

  // Remove original file field
  formData.delete("file");

  // Re-append properly as array (files[])
  files.forEach((file) => {
    if (file && file.size > 0) {
      formData.append("files[]", file);
    }
  });

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
