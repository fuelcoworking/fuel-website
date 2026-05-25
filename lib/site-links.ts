type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const footerNavColumnOne: FooterLink[] = [
  { href: "/#workspaces", label: "Memberships" },
  { href: "/#events", label: "Events" },
  { href: "/mission", label: "Our mission" },
];

export const footerNavColumnTwo: FooterLink[] = [
  { href: "/#contact", label: "Contact" },
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
];

export const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];
