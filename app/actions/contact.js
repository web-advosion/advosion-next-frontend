"use server";

/*Made entirely with AI */

import nodemailer from "nodemailer";

export async function sendContact(formData) {
  const topic = formData.get("topic")?.toString() || "Kontaktformular";
  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";

  // Optional: simple email sanity check
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

  const file = formData.get("file");
  const attachments = [];

  if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({ filename: file.name, content: buffer });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("Missing SMTP_USER/SMTP_PASS in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    requireTLS: true,
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER, // e.g. web@advosion.dk
    to: "bhm@advosion.dk", // recipient inbox at the firm
    replyTo, // applicant email (if valid)
    subject: topic,
    text: `Navn: ${name}\nTelefon: ${phone}\nEmail: ${email}\n`,
    attachments,
  });
}
