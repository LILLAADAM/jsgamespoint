export const contactSection = {
  title: "Get In Touch",
  subtitle:
    "Have a question about an order, a game, or a partnership? We are here to help.",
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "How can we help?",
    messageLabel: "Message",
    messagePlaceholder: "Tell us more about your inquiry...",
    submit: "Send Message",
    success:
      "Thank you! Your message has been received. Our team will respond within 24 hours.",
  },
} as const;

export const contactInfo = [
  {
    id: "email",
    label: "Email",
    value: "support@jsgamespoint.com",
    href: "mailto:support@jsgamespoint.com",
    icon: "mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+1 (800) 555-0199",
    href: "tel:+18005550199",
    icon: "phone",
  },
  {
    id: "hours",
    label: "Support Hours",
    value: "24/7 — Every Day",
    icon: "clock",
  },
  {
    id: "location",
    label: "Headquarters",
    value: "San Francisco, CA",
    icon: "location",
  },
] as const;
