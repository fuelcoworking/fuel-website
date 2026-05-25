import Link from "next/link";
import { footerNavLinks, legalLinks } from "@/lib/site-links";
import { FooterNavButton } from "@/components/FooterNavButton";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark px-6 py-12 lg:px-10 lg:py-14 xl:px-12">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-4xl font-bold leading-none text-cream md:text-5xl lg:text-6xl"
            >
              FUEL Coworking
            </Link>
            <p className="font-body mt-4 text-sm text-cream/70">
              809 W Main Ave, Suite 212 · Spokane, WA
            </p>
            <a
              href="https://fuelcoworking.com"
              className="font-body mt-1 inline-block text-sm text-cream/70 transition-colors hover:text-amber"
            >
              fuelcoworking.com
            </a>
          </div>

          <nav className="flex max-w-xl flex-wrap gap-3 lg:justify-end">
            {footerNavLinks.map((link) => (
              <FooterNavButton key={link.label} href={link.href} label={link.label} />
            ))}
            {legalLinks.map((link) => (
              <FooterNavButton key={link.label} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5 text-cream/60">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-amber"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-amber"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-amber"
            >
              <FacebookIcon />
            </a>
          </div>
          <p className="font-body text-sm text-cream/60">
            &copy; {year} FUEL Coworking
          </p>
        </div>
      </div>
    </footer>
  );
}
