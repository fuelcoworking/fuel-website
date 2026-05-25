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
  {
    href: "https://www.linkedin.com/company/fuel-coworking/posts/?feedView=all",
    label: "LinkedIn",
    external: true,
  },
];

export const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];
