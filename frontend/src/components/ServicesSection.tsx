import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Courses",
    image: "/src/assets/services/courses.jpg",
    link: "/courses",
  },
  {
    id: 2,
    title: "Treatments",
    image: "/src/assets/services/treatment.jpg",
    link: "/treatments",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 tracking-tight">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => navigate(service.link)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white drop-shadow-2xl tracking-wide group-hover:scale-110 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Luxury hover underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
