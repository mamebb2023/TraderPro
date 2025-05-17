export const DISCORD_INVITE_LINK = "https://discord.gg/Fu9sTTN3"

export const links = [
  { name: "Features", href: "/#features" },
  { name: "About", href: "/#why-choose-us"},
  { name: "Pricing", href: "/#pricing" },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for casual tracking",
    features: [
      "Track 1 wallet or token",
      "Wallet info (Balance, Name if know,...)",
      "Token details (Creation Date, Name, Holders,...)",
    ],
    cta: "Join Our Discord",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    description: "Best for active traders",
    features: [
      "Everything in Free",
      "Track 50+ wallets",
      "Website + Discord tracking",
      "Trending token recommendations (24h stats)",
      "Twitter Tracker (coming soon)",
      "Priority support",
      "2 days free trail"
    ],
    cta: "Track Now",
    popular: true,
  },
];

export const features = [
  {
    title: "Track Solana Wallets",
    description:
      "TrackerPro monitors multiple wallets with real-time updates on transactions",
    icon: "bx-wallet",
    color: "#57C785",
    bgcolor: "#1e442e"
  },
  {
    title: "Fast Notification Alerts",
    description:
      "Get instant alerts for important wallet activity with TrackerPro",
    icon: "bx-bell",
    color: "#78E6FF",
    bgcolor: "#1f3a40"
  },
  {
    title: "Beautiful Notification UI",
    description: "Clean, intuitive interface for reciving alerts",
    icon: "bx-message-square",
    color: "#E64C8E",
    bgcolor: "#3a1324"
  },
  {
    title: "Get Any Wallet Info",
    description:
      "Access detailed information about any Solana coin, including token balances and transaction history",
    icon: "bx-info-circle",
    color: "#FCB045",
    bgcolor: "#34240e"
  },
  {
    title: "Discord Integration",
    description: "Receive notifications in our TrackerPro Discord server",
    icon: "bxl-discord-alt",
    color: " #787FFF",
    bgcolor: "#14152a"
  },
];

export const steps = [
  // {
  //   title: "Secure Wallet Login",
  //   description: "Connect your Solana wallet with one click",
  //   icon: "bx bxs-lock",
  //   accent: "from-purple-500 to-indigo-500",
  //   borderColor: "border-purple-200",
  //   shadowColor: "shadow-purple-200",
  //   bgGradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
  // },
  {
    title: "Add Tracking Targets",
    description: "Paste any wallet address",
    icon: "bx bx-plus",
    accent: "from-blue-500 to-emerald-500",
    borderColor: "border-blue-200",
    shadowColor: "shadow-blue-200",
    bgGradient: "bg-gradient-to-br from-blue-500 to-emerald-500",
  },
  {
    title: "Real-Time Alerts",
    description: "Get notifications in our website or Discord",
    icon: "bx bxs-bell-ring",
    accent: "from-amber-500 to-pink-500",
    borderColor: "border-amber-200",
    shadowColor: "shadow-amber-200",
    bgGradient: "bg-gradient-to-br from-amber-500 to-pink-500",
  },
];

export const socialLinks = [
  { name: "Twitter", icon: "bx bxl-twitter", href: "https://x.com/" },
  { name: "Discord", icon: "bx bxl-discord-alt", href: DISCORD_INVITE_LINK },
];

export const why = [
  {
    title: "Affordable Pricing",
    description: "Get premium tracking at a fraction of competitors' costs",
    icon: "bx bx-dollar-circle",
    color: "text-green-500",
    bgColor: "bg-green-950",
  },
  {
    title: "Powerful Tracking",
    description: "Monitor wallets with our advanced Solana blockchain scanner",
    icon: "bx bx-radar",
    color: "text-blue-500",
    bgColor: "bg-blue-950",
  },
  {
    title: "Instant Alerts",
    description: "Real-time notifications for wallet activity",
    icon: "bx bx-bell",
    color: "text-purple-500",
    bgColor: "bg-purple-950",
  },
  {
    title: "Discord Integration",
    description: "Full control through our easy-to-use Discord server",
    icon: "bx bxl-discord-alt",
    color: "text-indigo-500",
    bgColor: "bg-indigo-950",
  },
  {
    title: "Twitter Tracker",
    description: "Monitor influencer wallets from their tweets",
    icon: "bx bxl-twitter",
    color: "text-sky-500",
    bgColor: "bg-sky-950",
    comingSoon: true,
  },
];
