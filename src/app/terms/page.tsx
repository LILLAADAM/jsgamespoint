import type { Metadata } from "next";
import { termsOfService } from "@data/index";
import PageShell from "@/components/layout/PageShell";
import LegalDocument from "@/components/legal/LegalDocument";
import JsonLd from "@/components/legal/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: termsOfService.title,
  description: termsOfService.description,
  path: termsOfService.path,
  keywords: ["terms of service", "terms and conditions", "user agreement"],
});

export default function TermsPage() {
  const schema = createWebPageSchema({
    title: termsOfService.title,
    description: termsOfService.description,
    path: termsOfService.path,
  });

  return (
    <PageShell>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <LegalDocument data={termsOfService} />
      </div>
    </PageShell>
  );
}
