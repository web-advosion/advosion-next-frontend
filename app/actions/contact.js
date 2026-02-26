"use server";

{
  /*Made entirely with AI */
}

import nodemailer from "nodemailer";

export async function sendContact(formData) {
  const topic = formData.get("topic")?.toString() || "Kontaktformular";
  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";

  const file = formData.get("file");
  const attachments = [];

  if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("Missing SMTP_USER/SMTP_PASS in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // STARTTLS on 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    requireTLS: true,
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER, // must typically match the authenticated mailbox
    to: "eaa24bdth@students.eaaa.dk",
    replyTo: email || undefined,
    subject: topic,
    text: `Navn: ${name}\nTelefon: ${phone}\nEmail: ${email}\n`,
    attachments,
  });
}
