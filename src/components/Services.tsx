import { Activity, Users, Stethoscope, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Spinal Adjustments",
    description: "Precise spinal manipulation to restore proper alignment and relieve pain naturally.",
  },
  {
    icon: Users,
    title: "Sports Injury Care",
    description: "Specialized treatment for athletes to recover faster and perform at their best.",
  },
  {
    icon: Stethoscope,
    title: "Therapeutic Massage",
    description: "Complementary soft tissue therapy to enhance healing and reduce muscle tension.",
  },
  {
    icon: Zap,
    title: "Wellness Programs",
    description: "Personalized care plans to maintain optimal health and prevent future issues.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="services">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive naprapathic care designed to help you live your best life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
