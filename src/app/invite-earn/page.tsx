import type { Metadata } from "next";
import { inviteEarnPage } from "@data/index";
import PageShell from "@/components/layout/PageShell";
import InviteEarnContent from "@/components/invite/InviteEarnContent";
import JsonLd from "@/components/legal/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createFaqSchema, createWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: inviteEarnPage.title,
  description: inviteEarnPage.description,
  path: inviteEarnPage.path,
  keywords: ["referral program", "invite and earn", "affiliate", "commissions"],
});

export default function InviteEarnPage() {
  const webPageSchema = createWebPageSchema({
    title: inviteEarnPage.title,
    description: inviteEarnPage.description,
    path: inviteEarnPage.path,
  });

  const faqSchema = createFaqSchema(
    inviteEarnPage.faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return (
    <PageShell>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <InviteEarnContent />
    </PageShell>
  );
}
