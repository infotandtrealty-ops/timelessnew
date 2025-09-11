import { useEffect, useRef } from "react";

// import all client logos (1–10.jpg)
import img1 from "@/assets/clients/1.jpg";
import img2 from "@/assets/clients/2.jpg";
import img3 from "@/assets/clients/3.jpg";
import img4 from "@/assets/clients/4.jpg";
import img5 from "@/assets/clients/5.jpg";
import img6 from "@/assets/clients/6.jpg";
import img7 from "@/assets/clients/7.jpg";
import img8 from "@/assets/clients/8.jpg";
import img9 from "@/assets/clients/9.jpg";
import img10 from "@/assets/clients/10.jpg";

const FeaturedClients = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0; // reset for infinite loop
        }
      }
    };

    const interval = setInterval(scrollStep, 30); // speed control
    return () => clearInterval(interval);
  }, []);

  // all client logos
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-luxury-dark mb-8">
        We Are Featured
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-12"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate logos for infinite effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-120 h-80 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedClients;
