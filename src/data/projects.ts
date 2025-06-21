export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "generalized-cameraman-ai",
    title: "Generalized Cameraman AI Agent",
    description: "AI-powered cameraman that identifies main action and smoothly zooms/pans automatically.",
    longDescription: "Developed a generalized cameraman that can identify the 'main action' from a video and smoothly zoom in & pan. Used Kalman & Spline interpolation, OpenCV video processing, desktop GUI with React & Electron for seamless video editing automation.",
    image: "/Cameraman-proj.png",
    technologies: ["Python", "SciPy", "OpenCV", "React", "Electron"],
    github: "https://github.com/koji0701",
    demo: "https://use-cameraman.vercel.app/",
    featured: true
  },
  {
    id: "2",
    slug: "washu-sublet-connect",
    title: "WashU Sublet Connect",
    description: "Full-stack 2-sided marketplace web app for WashU students to sublet apartments.",
    longDescription: "Developed a comprehensive marketplace platform helping WashU students find and list apartment sublets. Features user authentication, listing management, search functionality, and messaging system. Successfully serving 30+ active users.",
    image: "/WashUSubletConnect-proj.png",
    technologies: ["React", "Supabase", "PostgreSQL", "TypeScript"],
    github: "https://github.com/koji0701",
    demo: "https://washu-sublet-connect.vercel.app/",
    featured: true
  },
  {
    id: "3",
    slug: "supabase-social-template",
    title: "Supabase Social Media Starter Template",
    description: "Modern social media starter template accepted into Supabase official community templates.",
    longDescription: "Opinionated modern social media starter template using TypeScript, React, Supabase, Zustand, TailwindCSS. Accepted into Supabase official community templates with 65 unique clones, 16 stars, and 3 active forks.",
    image: "/SupaSocial-proj.png",
    technologies: ["React", "TypeScript", "Supabase", "Zustand", "TailwindCSS"],
    github: "https://github.com/koji0701",
    demo: "https://supasocial-peach.vercel.app/",
    featured: true
  },
  {
    id: "4",
    slug: "unveil-ai",
    title: "Unveil AI (Finalist @ WashU Google Devfest)",
    description: "Gemini-powered codebase onboarding tool with AI call agent for walkthroughs.",
    longDescription: "Developed backend & frontend of a Gemini-powered codebase onboarding tool. Implemented Bland API with a vectorized knowledgebase to create an AI call agent for codebase walkthroughs. Finalist at WashU Google Devfest.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["NextJS", "FastAPI", "Python", "Gemini AI", "Bland API"],
    github: "https://github.com/koji0701",
    featured: false
  },
  {
    id: "5",
    slug: "internx",
    title: "InternX (2nd @ WashU Meta x 8VC hackathon)",
    description: "Llama-powered job application web app with intelligent matching.",
    longDescription: "Developed frontend & middleware of Llama-powered job application web app using Ant Design & Llama Stack. Won 2nd place at WashU Meta x 8VC hackathon with innovative approach to job matching and application optimization.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    technologies: ["JavaScript", "React", "Express", "Llama Stack", "Ant Design"],
    github: "https://github.com/koji0701",
    featured: false
  },
  {
    id: "6",
    slug: "bear-eats",
    title: "Bear Eats (Winner @ Hack WashU)",
    description: "Swift UIKit health app that won 1st place in emerging health category.",
    longDescription: "Led team to win 1st place @ Hack WashU in the emerging health category as a team of freshmen. Built with Swift UIKit and CoreData for local data persistence, focusing on nutrition tracking and health insights.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    technologies: ["Swift UIKit", "CoreData", "iOS", "Health"],
    github: "https://github.com/koji0701",
    featured: false
  }
];
