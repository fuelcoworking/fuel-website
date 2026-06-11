# FUEL Website — Setup Checklist

The site works today with **nothing configured** — forms fall back to a one-click
email, the events section shows an Eventbrite link, and the Member Login button
points at Proximity. Everything below is optional upgrades you can turn on later,
**in any order**, by adding environment variables in Vercel.

> **Where to add variables:** Vercel → your project → **Settings → Environment
> Variables**. Add each one for the **Production** (and Preview) environment, then
> **redeploy** (Deployments → ⋯ → Redeploy) for changes to take effect.

---

## 1. Email — make the contact + free-day forms deliver to your inbox  ⭐ do this first

Right now, when someone submits a form, they get a "click to send" pre-filled
email. Setting up Resend makes submissions arrive automatically at
**info@fuelcoworking.com**.

1. Create a free account at **https://resend.com**.
2. **Verify your domain:** Resend → **Domains → Add Domain** → enter
   `fuelcoworking.com`. Add the DNS records Resend gives you (TXT/CNAME) at your
   DNS provider. Wait for it to show **Verified**.
   - This is required to deliver to your own inbox. The default test sender only
     emails the Resend account owner.
3. Create an API key: Resend → **API Keys → Create**.
4. In Vercel, add:
   | Variable | Value |
   |---|---|
   | `RESEND_API_KEY` | the key from step 3 (starts with `re_`) |
   | `CONTACT_EMAIL_FROM` | `FUEL <website@fuelcoworking.com>` (any address on your verified domain) |
   | `CONTACT_EMAIL_TO` | `info@fuelcoworking.com` *(optional — this is already the default)* |
5. Redeploy, then submit the form yourself to confirm the email lands.

---

## 2. Member Login button → your Proximity portal

The button currently defaults to `https://app.proximity.space`. Point it at your
actual member login URL.

1. Find the URL members use to log in to Proximity (your account dashboard URL).
2. In Vercel, add:
   | Variable | Value |
   |---|---|
   | `NEXT_PUBLIC_PROXIMITY_LOGIN_URL` | your Proximity login URL |
3. Redeploy.

---

## 3. Live events from Eventbrite

Until configured, the Events section shows a clean "View our Eventbrite" panel.
Adding a token makes it auto-list your upcoming events.

1. Go to **https://www.eventbrite.com** → **Account Settings → Developer Links →
   API Keys**.
2. Copy your **private token**.
3. In Vercel, add:
   | Variable | Value |
   |---|---|
   | `EVENTBRITE_API_TOKEN` | your private token |
   | `EVENTBRITE_ORG_ID` | *leave unset — auto-discovered from the token* |
4. Redeploy. Live events appear automatically (cached up to 1 hour).

---

## 4. Airtable — log free-day trial signups

Until configured, free-day signups arrive by email only (step 1). Adding Airtable
also records each signup in a table you can track.

1. In Airtable, create a base with a table named **`Free Day Trials`** containing
   these fields:
   | Field | Type |
   |---|---|
   | `Name` | Single line text |
   | `Email` | Email |
   | `Company` | Single line text |
   | `Preferred Date` | Date |
   | `Notes` | Long text |
   | `Status` | Single select: New, Scheduled, Visited, No-show |
   | `Source` | Single line text |
2. Create a personal access token at **https://airtable.com/create/tokens** with
   the **`data.records:write`** scope, added to this base.
3. Find your **base id** (starts with `app…`) in the base URL or the Airtable API
   docs for your base.
4. In Vercel, add:
   | Variable | Value |
   |---|---|
   | `AIRTABLE_TOKEN` | your personal access token |
   | `AIRTABLE_BASE_ID` | your base id (`app…`) |
   | `AIRTABLE_TABLE_NAME` | `Free Day Trials` *(optional — already the default)* |
5. Redeploy. New signups now appear in Airtable **and** still email you.

---

## 5. (Optional) Google Maps Street View key

The Location section uses a free Street View embed by default. For a higher-quality
embed, add a Google Maps Embed API key:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` | your Google Maps Embed API key |

---

## Quick reference — all environment variables

| Variable | Required? | Purpose |
|---|---|---|
| `RESEND_API_KEY` | for email | Send form submissions |
| `CONTACT_EMAIL_FROM` | for email | Verified sender address |
| `CONTACT_EMAIL_TO` | optional | Recipient (default `info@fuelcoworking.com`) |
| `NEXT_PUBLIC_PROXIMITY_LOGIN_URL` | optional | Member Login destination |
| `EVENTBRITE_API_TOKEN` | optional | Live events |
| `EVENTBRITE_ORG_ID` | optional | Eventbrite org (default set) |
| `AIRTABLE_TOKEN` | optional | Log free-day signups |
| `AIRTABLE_BASE_ID` | optional | Airtable base |
| `AIRTABLE_TABLE_NAME` | optional | Table name (default set) |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` | optional | Higher-quality map |
