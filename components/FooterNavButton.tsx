import Link from "next/link";

export function FooterNavButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="font-body inline-flex rounded-full border border-cream/25 px-4 py-2 text-[15px] text-cream transition-colors hover:border-cream/50 hover:bg-cream/10"
    >
      {label}
    </Link>
  );
}
