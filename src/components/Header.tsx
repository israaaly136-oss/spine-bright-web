import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8] shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Row - Logo and Contact Info */}
        <div className="flex items-center justify-between py-3 border-b border-border/30">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+46734294410" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <span>📞</span>
              <span className="hidden sm:inline">073-429 44 10</span>
            </a>
            <a href="mailto:info@backontrack.life" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <span>✉️</span>
              <span className="hidden sm:inline">info@backontrack.life</span>
            </a>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={logo} 
              alt="Back on Track - Naprapathy Care by P.J.A Naprapati" 
              className="h-16 w-auto"
            />
          </div>

          <div className="flex items-center">
            <Button variant="default" size="sm" asChild className="font-semibold">
              <a href="https://www.bokadirekt.se/places/back-on-track-by-pja-naprapati-130868" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <nav className="flex items-center justify-center gap-8 py-4">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
