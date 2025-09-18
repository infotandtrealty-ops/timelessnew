import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const courses = [
  { title: "Botox", link: "/courses/facial-aesthetics/botox", description: "Hands-on training in neuromodulators for facial rejuvenation.", image: "/images/courses/000.webp" },
  { title: "Face Lift", link: "/courses/facial-aesthetics/face-lift", description: "Non-surgical facelift techniques for skin tightening.", image: "/images/courses/1.webp" },
  { title: "Thread Lift", link: "/courses/facial-aesthetics/thread-lift", description: "PDO thread lift procedures and patient selection.", image: "/images/courses/2.webp" },
  { title: "Nose Fillers", link: "/courses/facial-aesthetics/nose-fillers", description: "Non-surgical rhinoplasty using dermal fillers.", image: "/images/courses/3.webp" },
  { title: "Chin & Jawline Augmentation", link: "/courses/facial-aesthetics/chin-jawline", description: "Contouring lower face with advanced filler techniques.", image: "/images/courses/222.jpg" },
  { title: "Lip Fillers", link: "/courses/facial-aesthetics/lip-fillers", description: "Harmonious lip enhancement with safety-first approach.", image: "/images/courses/1.webp" },
  { title: "Chemical Peels", link: "/courses/facial-aesthetics/chemical-peels", description: "Protocols for superficial to medium-depth peels.", image: "/images/courses/2.webp" },
  { title: "Acne Scar Treatment", link: "/courses/facial-aesthetics/acne-scar", description: "Multi-modality management of acne scarring.", image: "/images/courses/3.webp" },
  { title: "Vitamin Drips", link: "/courses/facial-aesthetics/vitamin-drips", description: "IV nutrition therapies and clinical safety.", image: "/images/courses/000.webp" },
  { title: "PDRN", link: "/courses/facial-aesthetics/pdrn", description: "Skin regeneration using polynucleotides.", image: "/images/courses/1.webp" },
  { title: "Profhilo", link: "/courses/facial-aesthetics/profhilo", description: "Bio-remodelling with hyaluronic acid injections.", image: "/images/courses/2.webp" },
  { title: "Hyperhidrosis", link: "/courses/facial-aesthetics/hyperhidrosis", description: "Treat excessive sweating with neuromodulators.", image: "/images/courses/3.webp" },
  { title: "Polynucleotides", link: "/courses/facial-aesthetics/polynucleotides", description: "Advanced skin boosters: indications and techniques.", image: "/images/courses/222.jpg" },
  { title: "Exosomes", link: "/courses/facial-aesthetics/exosomes", description: "Next-gen regenerative aesthetics using exosomes.", image: "/images/courses/000.webp" },
  { title: "Neck Rejuvenation", link: "/courses/facial-aesthetics/neck-rejuvenation", description: "Comprehensive neck tightening strategies.", image: "/images/courses/1.webp" },
  { title: "Hands Rejuvenation", link: "/courses/facial-aesthetics/hands-rejuvenation", description: "Restore volume and texture in hands.", image: "/images/courses/2.webp" },
];

const FacialAestheticsPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/cc.png"
          alt="Facial Aesthetics Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold tracking-wide uppercase"
          >
            Facial Aesthetics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90 font-lato"
          >
            Home / Courses / Facial Aesthetics
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/faical.webp"
            alt="About Course"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300"
          />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              About the <span className="text-[#D4AF37]">Course</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Master injectables, skin rejuvenation, and non-surgical facial enhancement with clinical precision.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] mb-12 uppercase"
        >
          Available <span className="text-[#D4AF37]">Courses</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#555555] font-lato text-sm mb-4">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block px-5 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-medium font-lato hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FacialAestheticsPage;


