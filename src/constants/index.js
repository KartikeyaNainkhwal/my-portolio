import {
  // language/tool icons
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,

  // company/org/project icons
 
  blockchain,
} from "../assets";
// If you add custom icons later, import them here and replace the mappings below:
// import { webdev, uiux, blockchain, devops, ai } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "certificates", title: "Certificates" },
  { id: "contact", title: "Contact" },
];

// ✅ Updated: highlight what you do (not just languages)
export const services = [
  {
    title: "Web Development",
    // replace with your own icon later (e.g., webdev)
    icon: reactjs,
  },
  
  {
    title: "Blockchain Development",
    // replace with your own icon later (e.g., blockchain)
    icon: blockchain,
  },
  {
    title: "DevOps & Cloud",
    // replace with your own icon later (e.g., devops)
    icon: git,
  },
  {
    title: "AI & Machine Learning",
    // replace with your own icon later (e.g., ai)
    icon: python,
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs }, // fixed typo
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

export const certificates = [
  {
    title: "Master Non Linear Data Structures",
    platform: "codedamn",
  description: "Advanced mastery of trees, graphs, and complex data organization techniques",
  icon: "/certificates/nonlinear.png.png",
    year: 2023,
    link: "https://codedamn.com/certificate/verify/112c9a0d0c200634ad28aa79ca131da0d9d5b12e", // add actual certificate link if available
  },
  {
    title: "Master Linear Data Structures",
    platform: "codedamn",
  description: "Comprehensive understanding of arrays, linked lists, stacks, and queues",
  icon: "/certificates/linear.png.png",
    year: 2023,
    link: "https://s3.amazonaws.com/user-assets.codedamn.com/667d41e51dfe780009cc0dd9/certificates/3ed9b8e39c1d5768ffaa29bf898a12d6e15e9c28.pdf",
  },
  {
    title: "0-100 Full Stack Web Development Course",
    platform: "100xdevs",
  description: "Complete training in modern full stack development from basics to advanced concepts",
  icon: "/certificates/fullstack.png.png",
    year: 2023,
    link: "https://drive.google.com/file/d/1OvquZbzm0wRyUfnlnifoedI5TywE8kZE/preview",
  },
  {
    title: "Mastering Algorithms",
    platform: "codedamn",
  description: "Expert-level algorithm design, analysis, and optimization techniques",
  icon: "/certificates/algorithms.png.png",
    year: 2023,
    link: "https://codedamn.com/certificate/verify/89488fa1a15dc3cba82491af217a79a2a57a7c49",
  },
];


export const projects = [
  {
    name: "Muser (Social Music Platform)",
    description:
      "Real-time platform where users join rooms, vote on songs, and collectively decide playlists. Built with an interactive voting system and seamless UI/UX for group experiences.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "yellow-text-gradient" },
    ],
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKbb2cL_yp22rYcvUaENxOw1gzn3USoXyibqwtYu1cygyM_0Ev0gQaY-2FcLl4iuGU9I&usqp=CAU",
  source_code_link: "https://github.com/KartikeyaNainkhwal/SolDrop", // update link
  },
  {
    name: "Chat Application",
    description:
      "Secure real-time messaging platform with authentication, media sharing, and group/private chats. Integrated Cloudinary for media storage and Pusher for live updates.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "yellow-text-gradient" },
      { name: "Pusher", color: "purple-text-gradient" },
      { name: "Cloudinary", color: "orange-text-gradient" },
      { name: "NextAuth", color: "red-text-gradient" },
    ],
  image: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  source_code_link: "https://github.com/KartikeyaNainkhwal/chat-application", // update link
  },
  {
    name: "Medium Clone",
    description:
      "Online publishing platform with content monetization and responsive design. Backend engineered with Prisma ORM and PostgreSQL for scalability.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Redux", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Express", color: "purple-text-gradient" },
      { name: "PostgreSQL", color: "orange-text-gradient" },
      { name: "Prisma", color: "red-text-gradient" },
    ],
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  source_code_link: "https://github.com/KartikeyaNainkhwal/medium-project", // update link
  },
  {
    name: "Basic Paytm Clone",
    description:
      "Digital wallet app with secure payment processing and rollback support. Features real-time transaction updates and reliable database handling.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "yellow-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
    ],
  image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  source_code_link: "https://github.com/KartikeyaNainkhwal/PayLink", // update link
  },
  {
    name: "SolDrop",
    description:
      "Solana Devnet SOL airdrop tool with wallet integration. Built with blockchain transaction handling and a user-friendly UI.",
    tags: [
      { name: "Solana", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Wallet Adapter", color: "pink-text-gradient" },
    ],
  image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  source_code_link: "https://github.com/KartikeyaNainkhwal/SolDrop", // update link
  },
];
