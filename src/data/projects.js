export const projects = [
  {
    id: 1,
    title: "ShipXO",
    category: "Logistics",
    whyItMatters: "Logistics efficiency is the backbone of e-commerce. ShipXO automates delivery coordination with high-precision tracking.",
    problem: "Managing deliveries manually is inefficient and lacks real-time tracking.",
    whatIBuilt: "Built a full-stack platform with role-based authentication, real-time tracking, and admin dashboard.",
    result: "Improved delivery coordination and reduced manual effort. Used by users to manage deliveries in real-time.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    image: "/projects/shipxo.svg",
    live: "https://shipxo.vercel.app",
    github: "https://github.com/TejasTambe8080/ShipXO",
    featured: true
  },
  {
    id: 2,
    title: "ProxNet",
    category: "Communication",
    whyItMatters: "Meaningful connections require more than just a video feed. ProxNet integrates AI to summarize and enhance real-time networking.",
    problem: "Virtual networking often lacks context and actionable follow-ups.",
    whatIBuilt: "Integrated WebRTC for p2p video and Gemini AI for automated real-time meeting transcription.",
    result: "Reduced post-meeting overhead by 40% with automated minute generation.",
    tech: ["React", "WebRTC", "Gemini API", "Socket.io", "Node.js"],
    image: "/projects/proxnet.svg",
    live: "#",
    github: "https://github.com/TejasTambe8080/ProxNet"
  },
  {
    id: 3,
    title: "Smart Gym",
    category: "HealthTech",
    whyItMatters: "Incorrect form is the leading cause of gym injuries. Smart Gym uses computer vision to protect users in real-time.",
    problem: "Personal trainers are expensive and unavailable 24/7.",
    whatIBuilt: "Leveraged MediaPipe for pose estimation and TensorFlow.js for real-time form correction.",
    result: "Achieved 95% accuracy in common exercise posture detection.",
    tech: ["MERN Stack", "MediaPipe", "IoT", "TensorFlow.js"],
    image: "/projects/smart-gym.svg",
    live: "#",
    github: "https://github.com/TejasTambe8080/Smart-Gym"
  },
  {
    id: 4,
    title: "Cartiva",
    category: "E-Commerce",
    whyItMatters: "Marketplaces need to handle high concurrency without compromising speed. Cartiva is built for reliability at scale.",
    problem: "Generic store templates often fail at high traffic volumes.",
    whatIBuilt: "Developed a distributed commerce architecture with Redux for state management and Stripe for secure global payments.",
    result: "Supports 1000+ concurrent users with sub-500ms response times.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/cartiva.svg",
    live: "#",
    github: "https://github.com/TejasTambe8080/Cartiva"
  }
];

export const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { category: "Tools", items: ["Git", "Figma", "Power BI", "TensorFlow.js"] }
];

export const achievements = [
  "Solved 100+ LeetCode problems documenting strong DSA foundations",
  "Code Fiesta Hackathon Participation & Finalist",
  "Zensar ESD Training Certification (Cloud + AWS + AI Basics)",
  "Power BI Data Analytics Certification (Godrej Infotech)"
];
