export type Game = {
  id: string;
  title: string;
  genre: string;
  price: string;
  originalPrice?: string;
  rating: number;
  badge?: string;
  gradient: string;
};

export const gamesSection = {
  title: "Featured Games",
  subtitle:
    "Hand-picked titles with the best value. Every purchase includes instant key delivery.",
  viewAll: "View All Games",
} as const;

export const featuredGames: Game[] = [
  {
    id: "cyber-odyssey",
    title: "Cyber Odyssey",
    genre: "Action RPG",
    price: "$29.99",
    originalPrice: "$59.99",
    rating: 4.8,
    badge: "Hot Deal",
    gradient: "from-blue-600 via-blue-800 to-black",
  },
  {
    id: "stellar-frontier",
    title: "Stellar Frontier",
    genre: "Space Simulation",
    price: "$39.99",
    originalPrice: "$49.99",
    rating: 4.9,
    badge: "Bestseller",
    gradient: "from-sky-500 via-blue-700 to-slate-900",
  },
  {
    id: "shadow-protocol",
    title: "Shadow Protocol",
    genre: "Stealth Action",
    price: "$24.99",
    rating: 4.7,
    gradient: "from-indigo-600 via-blue-900 to-black",
  },
  {
    id: "arena-legends",
    title: "Arena Legends",
    genre: "Multiplayer",
    price: "$19.99",
    originalPrice: "$34.99",
    rating: 4.6,
    badge: "50% Off",
    gradient: "from-cyan-500 via-blue-600 to-zinc-900",
  },
  {
    id: "dungeon-crawler-x",
    title: "Dungeon Crawler X",
    genre: "Roguelike",
    price: "$14.99",
    rating: 4.5,
    gradient: "from-blue-400 via-indigo-800 to-black",
  },
  {
    id: "racing-velocity",
    title: "Racing Velocity",
    genre: "Racing",
    price: "$34.99",
    originalPrice: "$44.99",
    rating: 4.8,
    badge: "New",
    gradient: "from-blue-500 via-slate-800 to-black",
  },
];
