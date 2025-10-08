import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" id="contact">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to get back on track? Contact us today
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Location Card */}
            <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Location</h4>
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

            {/* Phone Card */}
            <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Phone</h4>
                  <a href="tel:+46734294410" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    073-429 44 10
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card with Button */}
            <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Email</h4>
                  <Button variant="default" size="lg" asChild className="w-full">
                    <a href="mailto:info@backontrack.life">
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Hours</h4>
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

        {/* Google Maps Embed */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Sofielundsv%C3%A4gen+7,+121+32,+Enskededalen&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location - Sofielundsvägen 7, Enskededalen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
