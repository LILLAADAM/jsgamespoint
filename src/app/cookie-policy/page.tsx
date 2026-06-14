import type { Metadata } from "next";
import { cookiePolicy } from "@data/index";
import PageShell from "@/components/layout/PageShell";
import LegalDocument from "@/components/legal/LegalDocument";
import JsonLd from "@/components/legal/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: cookiePolicy.title,
  description: cookiePolicy.description,
  path: cookiePolicy.path,
  keywords: ["cookie policy", "cookies", "localStorage", "consent"],
});

export default function CookiePolicyPage() {
  const schema = createWebPageSchema({
    title: cookiePolicy.title,
    description: cookiePolicy.description,
    path: cookiePolicy.path,
  });

  return (
    <PageShell>
      <JsonLd data={schema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <LegalDocument data={cookiePolicy} />
      </div>
    </PageShell>
  );
}
