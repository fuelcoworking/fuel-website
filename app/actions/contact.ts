"use server";

import { resend } from "@/lib/resend";

export type ContactState = {
  success: boolean;
  error: string | null;
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

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service is not configured." };
  }

  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    return { success: false, error: "Recipient email is not configured." };
  }

  const from = process.env.CONTACT_EMAIL_FROM ?? "FUEL <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
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

  if (error) {
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true, error: null };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
