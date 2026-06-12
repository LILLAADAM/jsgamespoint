export type ServiceIcon = "bolt" | "shield" | "tag" | "headset" | "grid" | "star";

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ServiceIcon;
  gradient: string;
};

export const servicesSection = {
  title: "Our Digital Services",
  subtitle:
    "Explore our comprehensive range of digital services in detail — instant delivery, best pricing, and trusted support.",
  viewAll: "View All Services",
} as const;

export const services: Service[] = [
  {
    id: "pc-games-recharges",
    title: "PC Games Recharges",
    subtitle: "Instant top-ups for your favorite PC games.",
    description:
      "Experience seamless gaming with our instant PC game and apps recharge services. Whether you're playing popular titles or expanding your game library, we ensure your gaming account is fueled quickly and securely, allowing for uninterrupted gaming excitement.",
    icon: "bolt",
    gradient: "from-blue-600 via-blue-800 to-black",
  },
  {
    id: "mobile-games-topups",
    title: "Mobile Games & App Top-Ups",
    subtitle: "Recharge & Top-ups for popular mobile games like PUBG and Free Fire.",
    description:
      "Stay ahead in mobile gaming with our quick and reliable top-up options for games & apps like PUBG, Free Fire, Chamet, Poppo and more. We provide instant access to in-game currency and resources, equipping you for every battle and ensuring a captivating gaming experience.",
    icon: "grid",
    gradient: "from-cyan-500 via-blue-600 to-zinc-900",
  },
  {
    id: "discounted-gift-cards",
    title: "Discounted Gift Cards",
    subtitle: "Discounted gift cards for instant delivery on various platforms.",
    description:
      "Save on your favorite top & gaming platforms with our discounted gift cards service. Offering platforms like Razer, iTunes, and PlayStation, our codes come with instant delivery, maximizing your gaming and entertainment value at affordable prices.",
    icon: "tag",
    gradient: "from-indigo-600 via-blue-900 to-black",
  },
  {
    id: "graphic-design",
    title: "Graphic Design Services",
    subtitle: "Professional Graphic Designs we made for you",
    description:
      "We design professional logos, YouTube thumbnails, and digital branding materials tailored for businesses, creators, and gamers. High-quality, fast turnaround, and custom styles.",
    icon: "star",
    gradient: "from-blue-400 via-indigo-800 to-black",
  },
  {
    id: "redeem-codes",
    title: "Redeem Codes & Vouchers",
    subtitle: "Get Redeem Code for instant delivery on Best Price",
    description:
      "Get official redeem codes and vouchers for PUBG Mobile, Free Fire, Yalla Ludo, Call of Duty, Genshin Impact, and more. All codes are authentic, verified, and delivered instantly.",
    icon: "shield",
    gradient: "from-sky-500 via-blue-700 to-slate-900",
  },
  {
    id: "website-development",
    title: "Website Development & Design",
    subtitle: "Comprehensive website solutions with domain and hosting included",
    description:
      "Transform your online presence with our professional website development and design services. We create modern, responsive sites tailored to your needs, ensuring a seamless user experience from design to hosting, helping businesses grow and reach their audience effectively.",
    icon: "grid",
    gradient: "from-blue-500 via-slate-800 to-black",
  },
  {
    id: "video-photo-editing",
    title: "Video & Photo Editing",
    subtitle: "Professional Video & Photos Editing Service",
    description:
      "Professional video and photo editing for businesses, social media creators, and streamers. Our team delivers high-quality, fast, and creative edits for all platforms.",
    icon: "star",
    gradient: "from-blue-600 via-blue-800 to-black",
  },
  {
    id: "social-media-advertising",
    title: "Social Media Advertising & Promotion",
    subtitle: "Grow your Businesses with Our Best Advertising & Promotion",
    description:
      "Boost your brand with targeted social media campaigns on Facebook, Instagram, YouTube, Google, TikTok, and more. We provide professional advertising management to help your business grow.",
    icon: "bolt",
    gradient: "from-cyan-500 via-blue-600 to-zinc-900",
  },
  {
    id: "earning-live-hosting",
    title: "Earning & Live Hosting Solutions",
    subtitle: "Increase Your Earnings with us.",
    description:
      "We provide opportunities to earn through trusted digital platforms and offer live event and show hosting on popular apps and networks.",
    icon: "headset",
    gradient: "from-indigo-600 via-blue-900 to-black",
  },
  {
    id: "invite-earn",
    title: "Invite & Earn Programs",
    subtitle: "Earn with us for Invitations works",
    description:
      "Invite friends and businesses to our services & Platforms which we provide and earn a fair commission for every successful referral. Our program is transparent and easy to track — you'll receive secure payouts for each verified invite, with no hidden conditions. Start earning by sharing JSGamesPoint's trusted services & works which we give with others.",
    icon: "tag",
    gradient: "from-blue-400 via-indigo-800 to-black",
  },
];
