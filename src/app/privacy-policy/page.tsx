import type { Metadata } from "next";
import { privacyPolicy } from "@data/index";
import PageShell from "@/components/layout/PageShell";
import LegalDocument from "@/components/legal/LegalDocument";
import JsonLd from "@/components/legal/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: privacyPolicy.path,
  keywords: ["privacy policy", "data protection", "GDPR", "CCPA"],
});

export default function PrivacyPolicyPage() {
  const schema = createWebPageSchema({
    title: privacyPolicy.title,
    description: privacyPolicy.description,
    path: privacyPolicy.path,
  });

  return (
    <PageShell>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <LegalDocument data={privacyPolicy} />
      </div>
    </PageShell>
  );
}
