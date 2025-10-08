import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Back on Track - Naprapathy Care by P.J.A Naprapati" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="secondary" size="lg" asChild className="font-semibold">
            <a href="https://www.bokadirekt.se/places/back-on-track-by-pja-naprapati-130868" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
