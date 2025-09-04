import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Sparkles } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Courses",
      description: "A long list of professional aesthetics courses taught by leading industry experts in India.",
      link: "/courses",
      icon: GraduationCap,
      gradient: "from-luxury-gold/20 to-luxury-cream"
    },
    {
      title: "Treatments", 
      description: "The best non-surgical beauty treatments for skin care, aging, and rejuvenation.",
      link: "/services",
      icon: Sparkles,
      gradient: "from-luxury-cream to-luxury-gold/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 border-luxury-cream/50 bg-gradient-to-br from-white to-luxury-cream/30">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="font-playfair text-2xl text-luxury-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-luxury-muted text-lg mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="luxury-outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;