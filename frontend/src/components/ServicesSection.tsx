import { useNavigate } from "react-router-dom";

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(service.link)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Bottom bar animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection ;
