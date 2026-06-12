export const contactSection = {
  title: "Get in Touch with JSGamesPoint Today!",
  subtitle:
    "Have questions or need assistance? Reach out to us using the form below, and our support team will get back to you as soon as possible. Your satisfaction is our priority.",
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "How can we help?",
    messageLabel: "Message",
    messagePlaceholder: "Tell us more about your inquiry...",
    submit: "Send",
    success:
      "Thank you! Your message has been received. Our team will respond as soon as possible.",
  },
} as const;

export const contactInfo = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+923018938419",
    href: "https://wa.me/923018938419",
    icon: "phone",
  },
  {
    id: "email",
    label: "Email",
    value: "Official@jsgamespoint.com",
    href: "mailto:Official@jsgamespoint.com",
    icon: "mail",
  },
  {
    id: "address",
    label: "Address",
    value: "JSGamespoint Office Blue Area Islamabad Pakistan",
    icon: "location",
  },
  {
    id: "hours",
    label: "Support Hours",
    value: "24/7 — Every Day",
    icon: "clock",
  },
] as const;
