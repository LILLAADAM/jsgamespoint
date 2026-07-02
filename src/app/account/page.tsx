import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AccountLoader from "@/components/account/AccountLoader";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Account",
    description:
      "Sign in to your JSGamesPoint account to manage your profile and access future features like Orders and Wallet.",
    path: "/account",
    keywords: ["account", "login", "sign in", "register", "firebase authentication"],
  }),
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <PageShell>
      <AccountLoader />
    </PageShell>
  );
}

