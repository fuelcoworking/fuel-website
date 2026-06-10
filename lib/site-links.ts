type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const EVENTBRITE_URL = "https://www.eventbrite.com/o/110692675491";
export const INSTAGRAM_URL = "https://www.instagram.com/fuel.coworking/";

// Where contact + free-day form submissions are emailed.
// Override with CONTACT_EMAIL_TO in Vercel; falls back to this address.
export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL_TO ?? "info@fuelcoworking.com";

// Members manage their account, bookings, and access through Proximity.
// Override per environment with NEXT_PUBLIC_PROXIMITY_LOGIN_URL in Vercel.
export const PROXIMITY_LOGIN_URL =
  process.env.NEXT_PUBLIC_PROXIMITY_LOGIN_URL ?? "https://app.proximity.space";

// Free-day trial signup lives on its own focused page.
export const FREE_DAY_URL = "/free-day";

export const headerNavLinks: FooterLink[] = [
  { href: "/#workspaces", label: "Memberships" },
  { href: "/#location", label: "Location" },
  { href: EVENTBRITE_URL, label: "Events", external: true },
  { href: "/mission", label: "Our mission" },
];

export const footerNavColumnOne: FooterLink[] = [
  { href: "/#workspaces", label: "Memberships" },
  { href: "/#location", label: "Location" },
  { href: EVENTBRITE_URL, label: "Events", external: true },
  { href: "/mission", label: "Our mission" },
];

export const footerNavColumnTwo: FooterLink[] = [
  { href: "/#contact", label: "Contact" },
  {
    href: "https://www.linkedin.com/company/fuel-coworking/posts/?feedView=all",
    label: "LinkedIn",
    external: true,
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    external: true,
  },
];

export const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];
