import type { LegalPageData } from "./types";

export const cookiePolicy: LegalPageData = {
  title: "Cookie Policy",
  description:
    "Learn how JSGamesPoint uses cookies, localStorage, and similar technologies for security, performance, analytics, and user preferences.",
  lastUpdated: "2025-08-21",
  path: "/cookie-policy",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "This Cookie Policy explains how JSGamesPoint (\"we\", \"us\", or \"our\") uses cookies, localStorage, and similar technologies when you visit jsgamespoint.com. It should be read alongside our Privacy Policy.",
        "By using our website and managing your preferences through our cookie consent banner, you can control non-essential cookies while necessary cookies remain active for core functionality.",
      ],
    },
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, improve security, and understand how visitors interact with content. Similar technologies include localStorage, sessionStorage, and pixels.",
      ],
    },
    {
      id: "necessary",
      title: "Necessary Cookies",
      paragraphs: [
        "Necessary cookies are essential for the website to function and cannot be disabled through our cookie settings. They are always enabled.",
      ],
      list: [
        "Session management and security authentication.",
        "Load balancing and infrastructure stability.",
        "Cookie consent preference storage (localStorage).",
        "Fraud prevention and abuse protection.",
        "Core navigation and accessibility features.",
      ],
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      paragraphs: [
        "Analytics cookies help us understand how visitors use our website — which pages are visited, how users navigate, and where improvements are needed. These cookies collect aggregated, anonymized data where possible.",
        "Analytics cookies are only activated if you choose \"Accept All\" or enable them in Cookie Settings. If rejected, analytics cookies will not be placed.",
      ],
      list: [
        "Page views and traffic sources.",
        "Session duration and bounce rates.",
        "Device and browser type (aggregated).",
        "Performance monitoring for Core Web Vitals.",
      ],
    },
    {
      id: "functional",
      title: "Functional Cookies",
      paragraphs: [
        "Functional cookies enable enhanced features and personalization such as remembering form inputs, language preferences, or UI settings. These are optional and require your consent.",
      ],
      list: [
        "Remembering user interface preferences.",
        "Enhanced contact form functionality.",
        "Service page personalization features.",
      ],
    },
    {
      id: "preferences",
      title: "Preference Cookies",
      paragraphs: [
        "Preference cookies store choices you make to improve your experience on return visits, such as dismissing announcements or saving display preferences. These cookies are optional.",
      ],
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      paragraphs: [
        "Marketing cookies are used to deliver relevant advertisements and measure campaign effectiveness. JSGamesPoint does not currently use marketing cookies or third-party advertising trackers.",
        "If we introduce marketing cookies in the future, this policy will be updated and your explicit consent will be required before activation.",
      ],
    },
    {
      id: "localstorage",
      title: "LocalStorage Usage",
      paragraphs: [
        "We use browser localStorage to store your cookie consent preferences so the consent banner does not appear on every visit. The stored record includes your choices for analytics, functional, and preference cookies, along with a timestamp and policy version.",
        "LocalStorage data remains on your device until you clear your browser storage or reset cookie preferences. Clearing site data will cause the consent banner to appear again.",
      ],
      list: [
        "Storage key: jsgp_cookie_consent",
        "Stores: consent version, category preferences, acceptance timestamp.",
        "Purpose: honor your privacy choices across sessions.",
      ],
    },
    {
      id: "security",
      title: "Security Usage",
      paragraphs: [
        "Certain cookies and storage mechanisms support security features that protect our website and users from automated abuse, unauthorized access, and fraudulent activity. These security-related technologies are classified as necessary and cannot be disabled.",
      ],
    },
    {
      id: "performance",
      title: "Performance Optimization",
      paragraphs: [
        "We may use performance-related technologies to optimize page load speed, cache static assets, and monitor service availability. Where these technologies are non-essential, they respect your cookie preferences.",
      ],
    },
    {
      id: "managing",
      title: "Managing Your Cookie Preferences",
      paragraphs: [
        "You can manage cookies through our website cookie banner (Accept All, Reject All, or Cookie Settings). You may also control cookies through your browser settings by blocking or deleting cookies.",
        "Please note that blocking necessary cookies may affect website functionality. For questions about your preferences, contact us at Official@jsgamespoint.com.",
      ],
    },
    {
      id: "future-updates",
      title: "Future Updates",
      paragraphs: [
        "As JSGamesPoint grows, we may add new cookies or technologies for analytics, affiliate tracking, advertising, or enhanced features. We will update this Cookie Policy and request renewed consent where required by law before activating new non-essential categories.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: ["For cookie-related inquiries, contact JSGamesPoint:"],
      list: [
        "Email: Official@jsgamespoint.com",
        "WhatsApp: +923018938419",
        "Address: JSGamespoint Office, Blue Area, Islamabad, Pakistan",
      ],
    },
  ],
};
