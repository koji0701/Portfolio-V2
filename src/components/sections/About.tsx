import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubContributions } from "@/components/ui/github-contributions";

const About = () => {
  return (
    <section id="about" className="py-32 bg-luxurious-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-red-900/5" />
      
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="space-y-24">
          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-gradient-purple font-typewriter tracking-widest uppercase">
            About
          </h2>
          
          <Card className="bg-black/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-700 rounded-none">
            <CardContent className="p-12 sm:p-16">
              <div className="grid lg:grid-cols-3 gap-16 items-center">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <img
                      src="koji.jpg"
                      alt="Profile"
                      className="w-64 h-64 object-cover border border-gray-800 group-hover:border-purple-500 transition-all duration-700 grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
                
                {/* Bio Content */}
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="text-2xl lg:text-3xl font-light text-white font-typewriter tracking-wide">
                    Koji Wong
                  </h3>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed font-typewriter text-sm tracking-wide">
                    <p>
                      Computer Science + Mathematics student at Washington University in St. Louis with a 3.9 GPA and Dean's List recognition. 
                      Passionate about building innovative solutions that bridge technology and real-world impact.
                    </p>
                    
                    <p>
                      From leading hackathons with $5,000 prizes to developing AI-powered tools and full-stack applications, 
                      I thrive on creating meaningful technology that solves complex problems and enhances user experiences.
                    </p>
                  </div>
                  
                  {/* Resume Button */}
                  <Button
                    variant="outline"
                    className="border border-gray-700 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 px-8 py-4 font-typewriter tracking-widest uppercase rounded-none"
                    aria-label="Download resume"
                  >
                    View Resume
                    <ExternalLink size={16} className="ml-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* GitHub Contributions Graph */}
          <div className="flex justify-center">
            <GitHubContributions username="koji0701" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
