const links = [
  { href: "#workspaces", label: "Workspaces" },
  { href: "#events", label: "Events" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-8 bg-maroon">
      <nav className="mx-auto flex h-full max-w-site items-center justify-between px-8 md:px-12 lg:px-16">
        <a href="#" className="font-display text-[13px] font-normal text-white">
          FUEL
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[13px] font-normal text-white transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
