import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-950/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
            Koji's Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              /about
            </button>
            <button 
              onClick={() => scrollToSection("experience")} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              /experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              /projects
            </button>
            <Button variant="outline" size="sm" className="border-gray-600 text-black hover:bg-gray-800" asChild>
              <Link to="/resume">Resume</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-800">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-gray-300 hover:text-white transition-colors text-left cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-gray-300 hover:text-white transition-colors text-left cursor-pointer"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="text-gray-300 hover:text-white transition-colors text-left cursor-pointer"
              >
                Projects
              </button>
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800 w-fit" asChild>
                <Link to="/resume">Resume</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
