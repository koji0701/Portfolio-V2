import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { GitHubContributions } from "@/components/ui/github-contributions";
import { Link } from "react-router-dom";

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
          
          <Card className="bg-black/50 border border-gray-800 backdrop-blur-sm rounded-none">
            <CardContent className="p-12 sm:p-16">
              <div className="grid lg:grid-cols-3 gap-16 items-center">
                {/* Profile Image with “hover” style applied always */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <img
                      src="koji.jpg"
                      alt="Profile"
                      className="w-64 h-64 object-cover border border-gray-800 grayscale-0"
                      loading="lazy"
                    />
                    {/* keep the gradient overlay visible always */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-red-600/10 opacity-100"></div>
                  </div>
                </div>
                
                {/* Bio Content */}
                <div className="lg:col-span-2 space-y-8">
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed font-typewriter text-sm tracking-wide">
                    <p>
                      Hi, I'm Koji! I'm from the SF Bay Area and I'm interested in govtech, climate tech, and startups. Currently, I am: 
                      <ul>
                        <li>- addicted to side projects</li>
                        <li>- learning about ml for political campaign strategy</li>
                      </ul>

                    </p>
                    <p>
                      When I'm not coding, I'm usually:
                      <ul>
                        <li>- enjoying college with friends</li>
                        <li>- playing poker</li>
                        <li>- lowballing on Depop</li>
                      </ul>

                    </p>
                    
                  </div>
                  
                  {/* Resume Button */}
                  <Button
                    variant="outline"
                    className="border border-gray-700 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 px-8 py-4 font-typewriter tracking-widest uppercase rounded-none"
                    aria-label="View resume"
                    asChild
                  >
                    <Link to="/resume">
                      View Resume
                      <ExternalLink size={16} className="ml-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* GitHub Contributions Graph */}
          {/* <div className="flex justify-center">
            <GitHubContributions username="koji0701" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
