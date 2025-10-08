import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="contact">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to get back on track? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border-0">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Last Name" className="w-full" />
                </div>
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="w-full" />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" className="w-full" />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Sofielundsvägen 7<br />
                    121 32, Enskededalen
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+46734294410" className="hover:text-primary transition-colors">073-429 44 10</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@backontrack.life" className="hover:text-primary transition-colors">info@backontrack.life</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Hours</h4>
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
      </div>
    </section>
  );
};

export default Contact;
