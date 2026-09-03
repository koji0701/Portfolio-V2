import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { GitHubContributions } from "@/components/ui/github-contributions";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section py-32">
      {/* Subtle gradient background */}
      <div className="section-gradient-overlay bg-gradient-to-br from-purple-900/5 via-transparent to-red-900/5" />
      
      <div className="section-container">
        <div className="space-y-24">
          {/* Section title */}
          <h2 className="section-title">
            Hi, I'm Koji!
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
                      I study CS + Math at WashU. Currently, I'm interested in simulation environments, inference, and startups.



                    </p>
                    <p>
                      I'm on a gap semester in SF working on population health at Amazon.

                    </p>
                    <p>
                        I previously built the redactions product at Code Four (YC X25). Before that, I researched simulation environments for autonomous vehicles at WashU and built the open-source rules engine behind access.nyc.gov.
                    </p>
                    {/* <div className="space-y-2">
                      <p>Previously, I've:</p>
                      <ul className="space-y-2 pl-4">
                        <li>
                          - Built the first iteration of the redactions product at Code Four (YC X25)
                        </li>
                        <li>
                          - Worked on the <a href="https://access.nyc.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 underline decoration-gray-500 hover:decoration-gray-400 transition-all">Access NYC backend</a> at the NYC Mayor's Office for Economic Opportunity
                        </li>
                        <li>
                          - Built virtual environments for simulating autonomous vehicle and humanoid decision systems at WashU
                        </li>
                        <li>
                          - Built backend systems at Capital One
                        </li>
                        <li>
                          - Spent a semester as a swe @ the world's smallest sport (biotech, iykyk)
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  
                  {/* Resume Button - temporarily commented out
                  <Button
                    variant="outline"
                    className="btn btn-custom-outline px-8 py-4"
                    aria-label="View resume"
                    asChild
                  >
                    <Link to="/resume">
                      View Resume
                      <ExternalLink size={16} className="ml-3" />
                    </Link>
                  </Button>
                  */}
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
