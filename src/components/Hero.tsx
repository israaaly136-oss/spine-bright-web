import { Button } from "@/components/ui/button";
import heroImage from "@/assets/clinic-interior.png";

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
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Get Your Life{" "}
            <span className="bg-clip-text text-transparent bg-[var(--gradient-hero)]">
              Back on Track
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expert naprapathic care by P.J.A Naprapati. 
            Restore balance, reduce pain, and optimize your health naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="https://www.bokadirekt.se/places/back-on-track-by-pja-naprapati-130868" target="_blank" rel="noopener noreferrer">
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
