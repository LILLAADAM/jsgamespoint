"use client";

import Link from "next/link";
import { footer, site } from "@data/index";
import { SocialIcon } from "./Icons";
import { openCookieSettings } from "@/lib/cookies";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white">
                JS
              </span>
              <span className="font-display text-lg font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">{footer.description}</p>

            <div className="mt-5 space-y-2 text-sm text-zinc-500">
              <p>
                Email:{" "}
                <a href={`mailto:${footer.email}`} className="text-blue-400 hover:text-blue-300">
                  {footer.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${footer.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  {footer.whatsapp}
                </a>
              </p>
              <p>{footer.address}</p>
            </div>

            <div className="mt-6 flex gap-3">
              {footer.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footer.links).map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {"action" in item && item.action === "cookie-settings" ? (
                      <button
                        type="button"
                        onClick={openCookieSettings}
                        className="text-sm text-zinc-400 transition-colors hover:text-blue-400"
                      >
                        {item.label}
                      </button>
                    ) : "comingSoon" in item && item.comingSoon ? (
                      <span className="text-sm text-zinc-500">
                        {item.label}{" "}
                        <span className="text-xs text-zinc-600">(Coming Soon)</span>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-blue-400"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {year} {footer.copyright}
          </p>
          <nav aria-label="Footer legal links" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy-policy" className="text-zinc-500 hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="text-zinc-500 hover:text-blue-400">
              Refund Policy
            </Link>
            <Link href="/cookie-policy" className="text-zinc-500 hover:text-blue-400">
              Cookie Policy
            </Link>
            <Link href="/invite-earn" className="text-zinc-500 hover:text-blue-400">
              Invite &amp; Earn
            </Link>
            <Link href="/#contact" className="text-zinc-500 hover:text-blue-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
