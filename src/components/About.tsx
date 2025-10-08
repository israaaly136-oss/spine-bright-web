import { Award, Clock, Heart } from "lucide-react";
import pjaImage from "@/assets/pja-naprapath.png";

const About = () => {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" id="about">
              Expert Care You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              P.J.A Naprapati brings years of experience in naprapathic care, dedicated to 
              addressing the root cause of your discomfort, not just the symptoms.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Combining evidence-based techniques with a personalized approach to help 
              you achieve lasting results and get back on track to optimal wellness.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Licensed & Certified</h3>
                  <p className="text-muted-foreground">
                    Licensed naprapath with extensive training and expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Flexible Hours</h3>
                  <p className="text-muted-foreground">
                    Evening and weekend appointments available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Patient-Centered</h3>
                  <p className="text-muted-foreground">
                    Individualized treatment plans for your unique needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={pjaImage} 
              alt="P.J.A Naprapati - Licensed naprapath at Back on Track clinic in Enskededalen"
              className="w-full rounded-2xl shadow-[var(--shadow-soft)] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
