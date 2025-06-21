import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Assuming Link might be used if Quick Links are uncommented

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          {/* On medium screens and up, this section will span 2 out of 3 columns */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-bold text-white">Koji Wong</h3>
            <p className="text-gray-400 leading-relaxed font-typewriter">
              CS + Math student building cool things
            </p>
          </div>
          
          {/* Quick Links (currently commented out, no changes needed here)
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link to="/experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </Link>
              <Link to="/resume" className="text-gray-400 hover:text-white transition-colors duration-300">
                Resume
              </Link>
            </div>
          </div> */}
          
          {/* Contact */}
          {/* On medium screens and up, this section will span 1 column and its content aligned to the right */}
          <div className="space-y-4 md:col-span-1 md:text-right">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            {/* On medium screens and up, justify the buttons to the end (right) */}
            <div className="flex gap-3 md:justify-end">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <a href="https://github.com/koji0701" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <a href="https://www.linkedin.com/in/koji-wong-452285225/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Twitter Profile"
                asChild
              >
                <a href="https://x.com/kojirwong" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Email Contact"
                asChild
              >
                <a href="mailto:k.r.wong@wustl.edu">
                  <Mail size={18} />
                </a>
              </Button>
            </div>

          </div>
        </div>
        
        {/* Bottom Bar (no changes needed here) */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Koji Wong. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Work in progress</span>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;