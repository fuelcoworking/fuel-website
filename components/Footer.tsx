import Link from "next/link";
import {
  footerNavColumnOne,
  footerNavColumnTwo,
  legalLinks,
} from "@/lib/site-links";

function FooterNavLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "font-display block text-xl leading-tight text-cream transition-opacity hover:opacity-70 md:text-2xl lg:text-[1.75rem]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark px-6 py-20 lg:px-10 lg:py-28 xl:px-12 xl:py-32">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <Link
            href="/"
            className="font-display block text-[clamp(3.75rem,14vw,8.5rem)] font-bold leading-[0.88] tracking-tight text-cream"
          >
            FUEL
            <br />
            Coworking
          </Link>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-5 sm:gap-x-24 lg:gap-x-28">
            <ul className="space-y-5 md:space-y-6">
              {footerNavColumnOne.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
            <ul className="space-y-5 md:space-y-6">
              {footerNavColumnTwo.map((link) => (
                <li key={link.label}>
                  <FooterNavLink
                    href={link.href}
                    label={link.label}
                    external={link.external}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs text-cream/40 transition-colors hover:text-cream/65 md:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-body text-xs text-cream/40 md:text-sm">
            &copy; {year} FUEL Coworking
          </p>
        </div>
      </div>
    </footer>
  );
}
