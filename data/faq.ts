export const faqSection = {
  title: "Frequently Asked Questions",
  subtitle:
    "Everything you need to know about buying and activating games on JSGamesPoint.",
} as const;

export const faqs = [
  {
    id: "how-delivery-works",
    question: "How does instant delivery work?",
    answer:
      "After your payment is confirmed, your game key is sent to your email and appears in your JSGamesPoint account dashboard within seconds. Simply copy the key and redeem it on the appropriate platform.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, PayPal, and select regional payment options. All transactions are processed through secure, encrypted payment gateways.",
  },
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer:
      "Unredeemed keys may be eligible for a refund within 14 days of purchase. Once a key has been revealed or redeemed, it cannot be refunded due to digital goods regulations.",
  },
  {
    id: "region-lock",
    question: "Are the game keys region-locked?",
    answer:
      "Region compatibility is listed on every product page. We clearly indicate which platforms and regions each key supports before you complete your purchase.",
  },
  {
    id: "account-required",
    question: "Do I need an account to purchase?",
    answer:
      "You can checkout as a guest, but creating a free JSGamesPoint account lets you track orders, store keys securely, and earn loyalty rewards on every purchase.",
  },
  {
    id: "support-contact",
    question: "How do I contact support?",
    answer:
      "Reach our support team 24/7 via the contact form below, by email at support@jsgamespoint.com, or through live chat on your account dashboard.",
  },
] as const;
