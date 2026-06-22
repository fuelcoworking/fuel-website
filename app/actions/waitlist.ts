"use server";

import { resend } from "@/lib/resend";
import { CONTACT_EMAIL } from "@/lib/site-links";

export type WaitlistState = {
  success: boolean;
  error: string | null;
  // When no email backend is configured yet, we hand the visitor a
  // ready-to-send mailto link so their request still reaches us.
  mailto?: string | null;
};

export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const notes = (formData.get("notes") as string)?.trim();

  if (!name || !email) {
    return { success: false, error: "Please add your name and email." };
  }

  // Email the team about the new private-office waitlist request.
  if (resend) {
    const from =
      process.env.CONTACT_EMAIL_FROM ?? "FUEL <onboarding@resend.dev>";
    try {
      const { error } = await resend.emails.send({
        from,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `Private office waitlist request from ${name}`,
        html: `
          <h2>New private office waitlist request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company / team:</strong> ${
            company ? escapeHtml(company) : "—"
          }</p>
          <p><strong>Notes:</strong> ${notes ? escapeHtml(notes) : "—"}</p>
        `,
      });
      if (!error) return { success: true, error: null, mailto: null };
      console.error("Waitlist email failed:", error);
    } catch (err) {
      console.error("Waitlist email failed:", err);
    }
  }

  // Email isn't configured (or send failed) — hand the visitor a pre-filled
  // email so their request still reaches the team.
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Notes: ${notes || "—"}`,
  ].join("\n");
  const mailto =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(`Private office waitlist request from ${name}`)}` +
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
