
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "NYC Mayor's Office for Economic Opportunity",
    role: "Software Engineering Intern",
    duration: "May 2025 - Aug 2025",
    description: "Developing backend systems for NYC programs",
    technologies: ["Python", "AWS"],
    current: true
  },
  {
    id: "2",
    company: "Washington University in St. Louis - Dr. Sibai",
    role: "Artificial Intelligence Research Assistant",
    duration: "Nov 2024 - Present",
    description: "Developing tools to improve autonomous vehicle decision systems accuracy using Python, PyTorch & Habitat. Working on cutting-edge AI research for urban mobility solutions.",
    technologies: ["Python", "PyTorch", "Habitat", "AI/ML"],
    current: true
  },
  {
    id: "3",
    company: "Google Developer Group WashU",
    role: "Software Engineer Team Lead",
    duration: "Oct 2024 - Present",
    description: "Leading team to engineer a full-stack WashU School of Medicine research tool for medical data harmony and visualization using React, TypeScript, FastAPI, Google Cloud Platform, Pandas.",
    technologies: ["React", "TypeScript", "FastAPI", "GCP", "Pandas"],
    current: true
  },
  {
    id: "4",
    company: "Social Fabric LLC",
    role: "Founding Software Engineer",
    duration: "Oct 2024 - Feb 2025",
    description: "Developed a social media-esc mobile app with $40k+ in nondilutive funding. Leading architectural decisions for mobile app UI/UX libraries, navigation & state management.",
    technologies: ["TypeScript", "Expo", "Zustand", "React Native"],
    current: false
  },
  {
    id: "5",
    company: "XR EDU",
    role: "President",
    duration: "Aug 2020 - Jun 2024",
    description: "Led 100+ person club to develop $2,500 winning project in Samsung Solve For Tomorrow competition. Co-founded annual hackathon 'Hack the Planet' with $5000 prize sponsored by Adobe, PG&E, AoPS, & Wolfram. Managed $100,000 club funds to establish the first maker space at high school.",
    technologies: ["Leadership", "Project Management", "Event Planning"],
    current: false
  }
];
