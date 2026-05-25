type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const EVENTBRITE_URL = "https://www.eventbrite.com/o/110692675491";
export const INSTAGRAM_URL = "https://www.instagram.com/fuel.coworking/";

export const headerNavLinks: FooterLink[] = [
  { href: "/#workspaces", label: "Memberships" },
  { href: EVENTBRITE_URL, label: "Events", external: true },
  { href: "/mission", label: "Our mission" },
];

export const footerNavColumnOne: FooterLink[] = [
  { href: "/#workspaces", label: "Memberships" },
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
