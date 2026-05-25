"use client";

import { useState } from "react";

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const navLinks = [
  { href: "#workspaces", label: "Memberships", dropdown: true },
  { href: "/mission", label: "About", dropdown: false },
  { href: "#events", label: "Stories", dropdown: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-6 lg:px-10 xl:px-12">
        <a
          href="#"
          className="font-display text-xl font-bold uppercase leading-none tracking-tight text-dark"
        >
          FUEL
        </a>

        <div className="hidden items-center xl:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body inline-flex items-center gap-1 text-[15px] font-normal text-dark transition-opacity hover:opacity-70"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-7 flex items-center gap-5 border-l border-neutral-300 pl-7">
            <a
              href="#"
              className="font-body text-[15px] font-normal text-dark transition-opacity hover:opacity-70"
            >
              Member Login
            </a>
            <a
              href="#contact"
              className="font-body rounded-full bg-dark px-4 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-85"
            >
              Try a free day
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <a
            href="#contact"
            className="font-body hidden rounded-full bg-dark px-4 py-2 text-sm font-bold text-white sm:inline-block"
          >
            Try a free day
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-dark"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                aria-hidden
              >
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                aria-hidden
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white xl:hidden">
          <ul className="px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body flex items-center justify-between py-3 text-[15px] text-dark"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown />}
                </a>
              </li>
            ))}
            <li className="border-t border-neutral-200 pt-3">
              <a
                href="#"
                className="font-body block py-3 text-[15px] text-dark"
                onClick={() => setOpen(false)}
              >
                Member Login
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-body mt-2 inline-block rounded-full bg-dark px-5 py-2.5 text-[15px] font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Try a free day
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
