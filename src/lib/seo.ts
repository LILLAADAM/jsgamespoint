import type { Metadata } from "next";
import { site } from "@data/index";

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageSeoOptions): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    keywords: [...site.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
