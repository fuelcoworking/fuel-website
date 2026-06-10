"use server";

import { createAirtableRecord } from "@/lib/airtable";
import { resend } from "@/lib/resend";
import { CONTACT_EMAIL } from "@/lib/site-links";

export type FreeDayState = {
  success: boolean;
  error: string | null;
  // When no email/Airtable backend is configured yet, we hand the visitor a
  // ready-to-send mailto link so their request still reaches us.
  mailto?: string | null;
};

export async function submitFreeDay(
  _prevState: FreeDayState,
  formData: FormData
): Promise<FreeDayState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const preferredDate = (formData.get("preferredDate") as string)?.trim();
  const notes = (formData.get("notes") as string)?.trim();

  if (!name || !email) {
    return { success: false, error: "Please add your name and email." };
  }

  // We consider the request submitted if at least one channel succeeds.
  let delivered = false;

  // 1) Email staff so they can issue the 24-hour Proximity pass on arrival.
  //    This is the primary channel and works with no extra setup.
  if (process.env.RESEND_API_KEY) {
    const from =
      process.env.CONTACT_EMAIL_FROM ?? "FUEL <onboarding@resend.dev>";
    try {
      const { error } = await resend.emails.send({
        from,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `Free day trial request from ${name}`,
        html: `
          <h2>New free-day trial request</h2>
          <p>Issue a 24-hour Proximity guest pass for this visitor on arrival.</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company / team:</strong> ${
            company ? escapeHtml(company) : "—"
          }</p>
          <p><strong>Preferred day:</strong> ${
            preferredDate ? escapeHtml(preferredDate) : "—"
          }</p>
          <p><strong>Notes:</strong> ${notes ? escapeHtml(notes) : "—"}</p>
        `,
      });
      if (error) console.error("Free-day notification email failed:", error);
      else delivered = true;
    } catch (err) {
      console.error("Free-day notification email failed:", err);
    }
  }

  // 2) Also log it in Airtable — but only once it's configured. Until then this
  //    is skipped silently so the email above is enough to go live.
  if (process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID) {
    const saved = await createAirtableRecord({
      Name: name,
      Email: email,
      Company: company || null,
      "Preferred Date": preferredDate || null,
      Notes: notes || null,
      Status: "New",
      Source: "Website — Try a free day",
    });
    if (saved.ok) delivered = true;
    else console.error("Free-day Airtable write failed:", saved.error);
  }

  // Nothing is wired up yet — give the visitor a pre-filled email to send so
  // their request still reaches the team. (Disappears once Resend is configured.)
  if (!delivered) {
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Preferred day: ${preferredDate || "—"}`,
      `Notes: ${notes || "—"}`,
    ].join("\n");
    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(`Free day trial request from ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    return { success: false, error: null, mailto };
  }

  return { success: true, error: null, mailto: null };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
