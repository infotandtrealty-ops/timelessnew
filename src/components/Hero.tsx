import { Button } from "@/components/ui/button";
import heroImageDesktop from "@/assets/desktop.jpg";
import heroImageMobile from "@/assets/mobile.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (Mobile) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden" // 👈 only mobile
        style={{ backgroundImage: `url(${heroImageMobile})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/70 via-luxury-dark/50 to-transparent" />
      </div>

      {/* Background Image (Desktop) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block" // 👈 only desktop
        style={{ backgroundImage: `url(${heroImageDesktop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/60 via-luxury-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {/* <span className="text-luxury-gold">Your Heading</span> */}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {/* Your description goes here. */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button variant="luxury" size="xl" className="font-semibold">
              Explore Courses
            </Button> */}
            {/* <Button variant="luxury-outline" size="xl" className="font-semibold">
              Book Appointment
            </Button> */}
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
