import visitorImg from '../assets/projects/visitor-mgmt.JPG';
import freelanceImg from '../assets/projects/freelance-flow.JPG';
import clereviewImg from '../assets/projects/clereview.JPG';
export const projects = [
  {
    id: 1,
    title: "Visitors Management System",
    description: "A visitor management system that enables real-time communication between VIPs and secretaries for handling and approving visitor requests.",
    tech: ["Nuxt.js", "websocket", "MongoDB"],
    liveUrl: "https://visitor-mgmt.onrender.com/",
    githubUrl: "https://github.com/Ife-codez/visitor-mgmt",
    image: visitorImg, // we'll add images later
  },
  {
    id: 2,
    title: "Freelance-flow frontend",
    description: "A freelancer management dashboard that helps organize clients, projects, and payments in one place.",
    tech: ["React","Tailwind", "framer motion"],
    liveUrl: "https://freelance-flow-ashy.vercel.app/",
    githubUrl: "https://github.com/Ife-codez/FreelanceFlow-frontend",
    image: freelanceImg,
  },
  {
    id: 3,
    title: "Freelance-flow backend",
    description: "Built a scalable backend for freelanceFlow using Node.js and Express, with postgreSQL and prisma for data management.",
    tech: [ "Node.js", "Postgresql", "JWT",],
    liveUrl: null,
    githubUrl: "https://github.com/Ife-codez/FreelanceFlow-backend",
    image: freelanceImg,
  },
  {
    id: 4,
    title: "Clereview",
    description: "Contributed to the development of a review platform, focusing on frontend implementation, API integration, and user experience improvements.",
    tech: ["Nuxt.js", "Tailwind", "REST API"],
    liveUrl: null,
    githubUrl: "https://github.com/build-aerglo/frontend", // private repo is fine, just set to null
    image: clereviewImg,
  },
]