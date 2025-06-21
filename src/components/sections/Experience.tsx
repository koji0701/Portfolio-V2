import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-luxurious-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-red-900/5 via-transparent to-purple-900/5" />
      
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="space-y-16">
          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-gradient-purple font-typewriter tracking-widest uppercase">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
                          <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-red-500/50 to-purple-500/50"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 border-2 ${
                    exp.current 
                      ? "bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/20" 
                      : "bg-black border-gray-700"
                  } group-hover:scale-110 transition-transform duration-500`}>
                    {exp.current && (
                      <div className="absolute inset-0 bg-purple-500/30 animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12 flex-1">
                    <Card className="bg-black/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-700 hover:shadow-lg hover:shadow-purple-500/5 rounded-none">
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                          <h3 className="text-xl lg:text-2xl font-light text-white group-hover:text-gradient-purple transition-colors duration-500 font-typewriter tracking-wide">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-purple-600/20 border border-purple-500/50 text-purple-300 w-fit font-typewriter tracking-widest uppercase">
                              Current
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6 text-gray-400 font-typewriter text-sm tracking-wide">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="text-purple-300">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed font-typewriter text-sm tracking-wide">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-transparent border border-gray-800 text-gray-400 text-xs font-typewriter tracking-wider hover:border-gray-600 hover:text-white transition-all duration-500 uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
