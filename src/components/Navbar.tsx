"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@data/index";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${site.whatsapp.replace("+", "")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
            JS
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-blue-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/account"
              className="text-sm font-semibold text-white/90 transition-colors hover:text-blue-400"
            >
              Account
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/account"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Account
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            {site.cta.primary}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/account"
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                Account
              </Link>
            </li>
            <li className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {site.cta.primary}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
