import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-luxurious-black">
      <Navigation />
      
      <main className="pt-24">
        <section className="py-32 bg-luxurious-black relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-red-900/5" />
          
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
            <div className="space-y-24">
              {/* Section title */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gradient-purple font-typewriter tracking-widest uppercase">
                  All Projects
                </h1>
                <p className="text-gray-400 font-typewriter text-sm tracking-wider uppercase">
                  {projects.length} Total Projects
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group bg-black/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-2 rounded-none"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <CardContent className="p-0 overflow-hidden">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 object-contain transition-transform duration-700 group-hover:scale-110 bg-black"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        
                        {/* Featured badge */}
                        {project.featured && (
                          <Badge className="absolute top-4 right-4 bg-purple-600/20 border border-purple-500/50 text-purple-300 font-typewriter tracking-widest uppercase">
                            Featured
                          </Badge>
                        )}
                        
                        {/* Hover actions */}
                        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                          hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}>
                          {project.demo && (
                            <Button
                              size="sm"
                              className="bg-white text-black hover:bg-gray-200 rounded-none font-typewriter tracking-wider uppercase"
                              asChild
                            >
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} demo`}
                              >
                                <ExternalLink size={14} />
                              </a>
                            </Button>
                          )}
                          {project.github && (
                            <Button
                              size="sm"
                              className="bg-black text-white hover:bg-gray-800 rounded-none font-typewriter tracking-wider uppercase"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code`}
                              >
                                <Github size={14} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-8">
                        <h3 className="text-xl font-light text-white mb-4 group-hover:text-gradient-purple transition-colors duration-500 font-typewriter tracking-wide">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed font-typewriter text-sm tracking-wide">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-transparent border border-gray-800 text-gray-400 text-xs font-typewriter tracking-wider hover:border-gray-600 hover:text-white transition-all duration-500 uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Learn More Link */}
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-typewriter text-sm tracking-widest uppercase transition-colors duration-500 group/link"
                        >
                          Learn More
                          <ArrowRight size={14} className="ml-2 transition-transform duration-500 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects; 