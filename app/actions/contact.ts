"use server";

import { resend } from "@/lib/resend";
import { CONTACT_EMAIL } from "@/lib/site-links";

export type ContactState = {
  success: boolean;
  error: string | null;
  // Fallback mailto link when no email backend is configured yet.
  mailto?: string | null;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const interests = (formData.get("interests") as string)?.trim();

  if (!name || !email) {
    return { success: false, error: "Please add your name and email." };
  }

  if (!interests) {
    return {
      success: false,
      error: "Pick at least one option for what you're joining FUEL for.",
    };
  }

  const from = process.env.CONTACT_EMAIL_FROM ?? "FUEL <onboarding@resend.dev>";

  if (resend) {
    const { error } = await resend.emails.send({
      from,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Workspace inquiry from ${name}`,
      html: `
        <h2>New FUEL contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company / team:</strong> ${company ? escapeHtml(company) : "—"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Interested in:</strong> ${escapeHtml(interests)}</p>
      `,
    });

    if (!error) return { success: true, error: null, mailto: null };
    console.error("Contact email failed:", error);
  }

  // No email backend configured (or send failed) — hand the visitor a
  // pre-filled email so their message still reaches us.
  const body = [
    `Name: ${name}`,
    `Company: ${company || "—"}`,
    `Email: ${email}`,
    `Interested in: ${interests}`,
  ].join("\n");
  const mailto =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(`Workspace inquiry from ${name}`)}` +
    `&body=${encodeURIComponent(body)}`;

  return { success: false, error: null, mailto };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
