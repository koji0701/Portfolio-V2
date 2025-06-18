import { SkillCard } from "@/components/ui/skills-card";

interface SkillCategory {
  title: string
  skills: string[]
  variant: "primary" | "secondary" | "accent"
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      variant: "primary",
      skills: ["Python", "Java", "C", "C++", "C#", "Swift", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Zsh"]
    },
    {
      title: "AI & ML",
      variant: "secondary",
      skills: ["PydanticAI", "LangGraph", "PyTorch", "TensorFlow", "OpenCV", "Pandas"]
    },
    {
      title: "Frontend",
      variant: "accent",
      skills: ["React", "Next.js", "Expo", "Tailwind", "Electron"]
    },
    {
      title: "Backend",
      variant: "primary",
      skills: ["Express", "FastAPI", "PostgreSQL", "Supabase", "Google Cloud Platform", "Docker"]
    },
    {
      title: "Tools",
      variant: "secondary",
      skills: ["Git", "FastMCP", "Postman", "Zustand"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-luxurious-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/3 via-transparent to-red-900/3" />
      
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="space-y-12">
          {/* Section title */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gradient-purple font-typewriter tracking-widest uppercase">
              Technical Skills
            </h2>
            <p className="text-gray-400 font-typewriter text-xs tracking-wide">
              Technologies and tools I use to build solutions
            </p>
          </div>
          
          {/* Skills Grid - More compact layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="space-y-4"
                style={{
                  animationDelay: `${categoryIndex * 0.1}s`
                }}
              >
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-sm font-light text-white font-typewriter tracking-wide">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Cards */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill}
                      name={skill}
                      variant={category.variant}
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom indicator - more compact */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 text-gray-400 font-typewriter text-xs tracking-widest uppercase">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Always learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 