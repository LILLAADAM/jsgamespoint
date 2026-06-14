import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "JSGamesPoint Terms of Service — coming soon. Review our Privacy Policy and Refund Policy in the meantime.",
  path: "/terms",
  keywords: ["terms of service", "terms and conditions"],
});

export default function TermsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Terms of Service</h1>
        <p className="mt-6 text-lg text-zinc-400">
          Our Terms of Service are being finalized and will be published here soon.
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          In the meantime, please review our legal policies:
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300">
            Refund Policy
          </Link>
          <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">
            Cookie Policy
          </Link>
        </nav>
      </div>
    </PageShell>
  );
}
