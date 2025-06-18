
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Alex Johnson</h3>
            <p className="text-gray-400 leading-relaxed">
              Creative developer crafting digital experiences with modern web technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Resume
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail size={18} />
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
