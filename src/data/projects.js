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
    title: "Freelance-flow",
    description: "A freelancer management dashboard that helps organize clients, projects, and payments in one place.",
    tech: ["React", "Node.js", "Tailwind", "Postgresql"],
    liveUrl: "https://freelance-flow-ashy.vercel.app/",
    githubUrl: "https://github.com/Ife-codez/FreelanceFlow-frontend",
    image: freelanceImg,
  },
  {
    id: 3,
    title: "Clereview",
    description: "Contributed to the development of a review platform, focusing on frontend implementation, API integration, and user experience improvements.",
    tech: ["Nuxt.js", "Tailwind", "REST API"],
    liveUrl: null,
    githubUrl: "https://github.com/build-aerglo/frontend", // private repo is fine, just set to null
    image: clereviewImg,
  },
]