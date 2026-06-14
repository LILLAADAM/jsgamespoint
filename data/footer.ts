export const footer = {
  description:
    "JSGamesPoint is your trusted partner for gaming top-ups, gift cards, website development, design services, and digital advertising — serving gamers and businesses worldwide.",
  copyright: "JSGamesPoint. All rights reserved.",
  email: "Official@jsgamespoint.com",
  whatsapp: "+923018938419",
  address: "JSGamespoint Office, Blue Area, Islamabad, Pakistan",
  company: {
    name: "JSGamesPoint",
    location: "Islamabad, Pakistan",
    founded: "2020",
  },
  links: {
    company: {
      title: "Company",
      items: [
        { label: "About Us", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Products", href: "/#products" },
        { label: "Invite & Earn", href: "/invite-earn" },
      ],
    },
    support: {
      title: "Support",
      items: [
        { label: "Contact", href: "/#contact" },
        { label: "Help Center", href: "/#faq" },
        { label: "WhatsApp", href: "https://wa.me/923018938419" },
        { label: "Terms of Service", href: "/terms", comingSoon: true },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Cookie Settings", href: "#cookie-settings", action: "cookie-settings" as const },
      ],
    },
  },
  social: [
    { label: "WhatsApp", href: "https://wa.me/923018938419", icon: "whatsapp" as const },
    { label: "Facebook", href: "https://facebook.com/jsgamespoint", icon: "facebook" as const },
    { label: "YouTube", href: "https://youtube.com/jsgamespoint", icon: "youtube" as const },
    { label: "Instagram", href: "https://instagram.com/jsgamespoint", icon: "instagram" as const },
  ],
} as const;
