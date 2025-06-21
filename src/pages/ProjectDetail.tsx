import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 text-gray-400 hover:text-white"
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>

            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <User size={16} />
                <span>Personal Project</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>2024</span>
              </div>
              {project.featured && (
                <Badge className="bg-purple-600 text-white">
                  Featured Project
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              {project.demo && (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-black hover:bg-gray-800"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[500px] object-contain bg-black"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Description */}
              <div className="md:col-span-2 space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      About This Project
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>

                {/* Additional content sections could go here */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      Key Features
                    </h2>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Responsive design that works across all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Modern UI with smooth animations and transitions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Optimized performance and fast loading times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Clean, maintainable code architecture</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Links */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-12 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">
              Other Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map((otherProject) => (
                  <Card
                    key={otherProject.id}
                    className="group bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <img
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-48 object-contain bg-black rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {otherProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {otherProject.description}
                        </p>
                        <Link
                          to={`/projects/${otherProject.slug}`}
                          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                        >
                          View Project →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
