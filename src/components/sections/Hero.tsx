import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the Scene component directly - it already contains its own Canvas
import { Scene as RubikCubeScene } from "@/components/ui/rubik-s-cube"; 
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxurious-black">
      {/* Container for the Rubik's Cube Scene - it already contains Canvas */}
      <div className="absolute inset-0 z-0">
        <RubikCubeScene />
      </div>
      
      {/* Soft red spotlight illuminating the Rubik's cube */}
      <Spotlight
        className="top-10 left-1/2 transform -translate-x-1/2 md:left-60 md:top-20"
        fill="#dc2626"
      />
      
      {/* Additional spotlight from different angle for better illumination */}
      <Spotlight
        className="top-20 right-1/2 transform translate-x-1/2 md:right-60 md:top-32 rotate-45" // Note: rotate-45 is likely overridden by animation
        fill="#b91c1c"
      />
      
      {/* Purple spotlight from middle right, extending towards the center */}
      <Spotlight
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[150%] md:w-[120%]" // Adjusted classes
        fill="#6b21a8" 
      />
      
      {/* Subtle red gradient backgrounds to match the original purple styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/8 via-transparent to-red-800/4 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-900/4 to-red-700/8 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/4 via-transparent to-black/60 pointer-events-none z-[3]" />
      
      {/* Subtle red glow around the center text area */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-red-900/12 via-red-800/4 to-transparent blur-3xl pointer-events-none z-[4]" />
      
      {/* Dramatic gradient overlay for the Hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 pointer-events-none z-[5]" /> 
      
      {/* Content for the Hero section */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-wider text-white font-typewriter">
              KOJI WONG
            </h1>

          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed font-typewriter">
            cs + math student @ {" "}
            <a href="https://wustl.edu" target="_blank" rel="noopener noreferrer">washu in st. louis</a>
            <br />
            building cool things
          </p>
        </div>
        
        <div className="flex justify-center gap-8 mt-20 mb-16">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 transition-all duration-500 hover:bg-transparent"
            aria-label="GitHub Profile"
            asChild
          >
            <a href="https://github.com/koji0701" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-500 hover:bg-transparent"
            aria-label="LinkedIn Profile"
            asChild
          >
            <a href="https://linkedin.com/in/koji-wong-452285225/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border border-gray-800 text-gray-400 hover:text-white hover:border-red-500 transition-all duration-500 hover:bg-transparent"
            aria-label="Email Contact"
            asChild
          >
            <a href="mailto:k.r.wong@wustl.edu">
              <Mail size={20} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border border-gray-800 text-gray-400 hover:text-white hover:border-sky-500 transition-all duration-500 hover:bg-transparent"
            aria-label="Twitter Profile"
            asChild
          >
            <a href="https://x.com/kojirwong" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
          </Button>
        </div>

        <Button
          onClick={scrollToProjects}
          variant="outline"
          className="border border-gray-700 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 px-12 py-6 text-sm font-typewriter tracking-widest uppercase rounded-none"
          aria-label="View my projects"
        >
          View Projects
          <ArrowDown size={16} className="ml-4" />
        </Button>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-[5]"> {/* Ensure scroll indicator is above scene */}
        <div className="w-px h-20 bg-gradient-to-b from-gray-500 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;