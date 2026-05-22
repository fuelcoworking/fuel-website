const links = [
  { href: "#workspaces", label: "Workspaces" },
  { href: "#events", label: "Events" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-8 bg-[#7A1010]">
      <nav className="flex h-full items-center justify-between px-8">
        <a href="#" className="font-display text-[13px] font-normal text-white">
          FUEL
        </a>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[13px] font-normal text-white"
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
