// Pulls live events from the FUEL Eventbrite organization.
//
// Environment variables (set in Vercel):
//   EVENTBRITE_API_TOKEN  Private token from eventbrite.com → Account → Developer → API keys
//   EVENTBRITE_ORG_ID     Organization id, defaults to FUEL's (110692675491)
//
// If the token is missing or the request fails, getUpcomingEvents() returns an
// empty array and the Events section falls back to a simple Eventbrite link.

export type FuelEvent = {
  id: string;
  name: string;
  start: string; // ISO local start time
  url: string;
  imageUrl: string | null;
  venue: string | null;
};

type EventbriteApiEvent = {
  id: string;
  name: { text: string | null };
  start: { local: string };
  url: string;
  logo: { url: string | null } | null;
  venue: { name: string | null } | null;
};

const DEFAULT_ORG_ID = "110692675491";

export async function getUpcomingEvents(limit = 6): Promise<FuelEvent[]> {
  const token = process.env.EVENTBRITE_API_TOKEN;
  const orgId = process.env.EVENTBRITE_ORG_ID ?? DEFAULT_ORG_ID;

  if (!token) return [];

  const url =
    `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/` +
    `?status=live&order_by=start_asc&expand=venue,logo`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      // Re-fetch at most once an hour so the page stays current without
      // hitting Eventbrite on every request.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Eventbrite error:", res.status, await res.text());
      return [];
    }

    const data = (await res.json()) as { events?: EventbriteApiEvent[] };
    if (!data.events) return [];

    return data.events.slice(0, limit).map((event) => ({
      id: event.id,
      name: event.name.text ?? "Untitled event",
      start: event.start.local,
      url: event.url,
      imageUrl: event.logo?.url ?? null,
      venue: event.venue?.name ?? null,
    }));
  } catch (err) {
    console.error("Eventbrite request failed:", err);
    return [];
  }
}

export function formatEventDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
