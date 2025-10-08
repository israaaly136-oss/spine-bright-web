import { Button } from "@/components/ui/button";
import heroImage from "@/assets/clinic-interior.png";
import backOnTrackLogo from "@/assets/back-on-track-text-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Back on Track naprapathy clinic interior in Enskededalen, Stockholm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <img
              src={backOnTrackLogo}
              alt="Back on Track - Naprapathy Care by P.J.A Naprapati"
              className="w-full max-w-lg md:max-w-xl h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Expert naprapathic care by P.J.A Naprapati. Restore balance, reduce pain, and optimize your health
            naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.bokadirekt.se/places/back-on-track-by-pja-naprapati-130868"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
