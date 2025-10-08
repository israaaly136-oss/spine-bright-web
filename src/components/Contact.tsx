import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-background" id="contact">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to get back on track? We're here to help you on your journey to better health and wellness. 
            Reach out today to schedule your appointment.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Cards */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Email</h4>
                    <a 
                      href="mailto:info@backontrack.life" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@backontrack.life
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Phone</h4>
                    <a 
                      href="tel:+46734294410" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      073-429 44 10
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Location</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Sofielundsvägen+7,+121+32,+Enskededalen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Sofielundsvägen 7<br />
                      121 32, Enskededalen
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Sat: 9:00 AM - 2:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Start Your Journey?</h3>
            <div className="bg-card rounded-2xl p-8 border border-border h-full flex flex-col">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Book Your Appointment</h4>
                <p className="text-muted-foreground mb-8">
                  Whether you need chiropractic care, naprapathy treatment, or wellness consultation, 
                  we're here to help you achieve optimal health and get back on track to living your best life.
                </p>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="tel:+46734294410">
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
