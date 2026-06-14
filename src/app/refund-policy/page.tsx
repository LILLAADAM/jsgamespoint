import type { Metadata } from "next";
import { refundPolicy } from "@data/index";
import PageShell from "@/components/layout/PageShell";
import LegalDocument from "@/components/legal/LegalDocument";
import JsonLd from "@/components/legal/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: refundPolicy.title,
  description: refundPolicy.description,
  path: refundPolicy.path,
  keywords: ["refund policy", "digital products", "returns"],
});

export default function RefundPolicyPage() {
  const schema = createWebPageSchema({
    title: refundPolicy.title,
    description: refundPolicy.description,
    path: refundPolicy.path,
  });

  return (
    <PageShell>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <LegalDocument data={refundPolicy} />
      </div>
    </PageShell>
  );
}
