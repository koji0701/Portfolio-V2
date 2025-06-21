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
    company: "New York City Mayor's Office for Economic Opportunity",
    role: "Software Engineering Intern",
    duration: "May 2025 - Present",
    description: "Backend dev to help New Yorkers with benefits programs",
    technologies: ["Python", "AWS Lambda", "AWS API Gateway"],
    current: true
  },
  {
    id: "2",
    company: "Washington University in St. Louis - Dr. Sibai",
    role: "Artificial Intelligence Research Assistant",
    duration: "Nov 2024 - Present",
    description: "Safe autonomous vehicle decision systems",
    technologies: ["Python", "PyTorch", "Habitat", "AI/ML"],
    current: true
  },
  {
    id: "3",
    company: "Google Developer Group WashU",
    role: "Software Engineer Team Lead",
    duration: "Sep 2024 - Present",
    description: "Technical consulting for WashU medical lab",
    technologies: ["React", "TypeScript", "FastAPI", "GCP"],
    current: true
  },
  {
    id: "4",
    company: "WURocketry",
    role: "Unified Flight Software Developer",
    duration: "Sep 2024 - Mar 2025",
    description: "Embedded systems programming",
    technologies: ["C++"],
    current: false // Assuming current date is after Mar 2025 or it's a planned future end
  },
  {
    id: "5",
    company: "Social Fabric LLC",
    role: "Founding Software Engineer",
    duration: "Oct 2024 - Feb 2025",
    description: "Founding software dev for student-run tech startup",
    technologies: ["React Native", "Expo", "TypeScript"],
    current: false
  },

  {
    id: "6",
    company: "Stanford Medicine, Dept. of Psychiatry & Behavioral Sciences",
    role: "Neuroimaging Research Assistant",
    duration: "Jun 2022 - Jul 2022",
    description: "Functional near-infrared spectroscopy",
    technologies: ["Python", "fNIRS", "Autoencoders"],
    current: false
  },
  {
    id: "7",
    company: "TriValley CoderDojo",
    role: "Leadership Council",
    duration: "Sep 2018 - Sep 2022",
    description: "Taught coding \& helped run org",
    technologies: ["Java", "Python", "Management"],
    current: false
  }
];