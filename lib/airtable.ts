// Lightweight Airtable REST client (no SDK dependency).
//
// Required environment variables (set these in Vercel — never commit them):
//   AIRTABLE_TOKEN      Personal access token with data.records:write on the base
//   AIRTABLE_BASE_ID    The base id, looks like "appXXXXXXXXXXXXXX"
//   AIRTABLE_TABLE_NAME Table name, defaults to "Free Day Trials"
//
// The target table should have these fields (types in parentheses):
//   Name           (Single line text)
//   Email          (Email)
//   Company        (Single line text)
//   Preferred Date (Date)
//   Notes          (Long text)
//   Status         (Single select: New, Scheduled, Visited, No-show)
//   Source         (Single line text)

export type AirtableFields = Record<string, string | number | boolean | null>;

export type AirtableResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

export async function createAirtableRecord(
  fields: AirtableFields
): Promise<AirtableResult> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE_NAME ?? "Free Day Trials";

  if (!token || !baseId) {
    return { ok: false, error: "Airtable is not configured." };
  }

  // Drop empty values so we never try to write to a field with a blank.
  const cleaned: AirtableFields = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value !== null && value !== "") cleaned[key] = value;
  }

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: [{ fields: cleaned }], typecast: true }),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("Airtable error:", res.status, detail);
      return { ok: false, error: "Could not save your request." };
    }

    const data = (await res.json()) as { records: { id: string }[] };
    return { ok: true, id: data.records[0]?.id ?? "" };
  } catch (err) {
    console.error("Airtable request failed:", err);
    return { ok: false, error: "Could not save your request." };
  }
}
