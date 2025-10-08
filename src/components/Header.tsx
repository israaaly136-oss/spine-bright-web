import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8] backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Back on Track - Naprapathy Care by P.J.A Naprapati" 
              className="h-48 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
