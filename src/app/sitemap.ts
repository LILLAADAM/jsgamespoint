import type { MetadataRoute } from "next";
import { site, privacyPolicy, refundPolicy, cookiePolicy, inviteEarnPage } from "@data/index";

const staticPages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: privacyPolicy.path, priority: 0.6, changeFrequency: "monthly" as const },
  { path: refundPolicy.path, priority: 0.6, changeFrequency: "monthly" as const },
  { path: cookiePolicy.path, priority: 0.5, changeFrequency: "monthly" as const },
  { path: inviteEarnPage.path, priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticPages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
