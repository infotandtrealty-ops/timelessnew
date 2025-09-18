import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const courses = [
  { title: "Veneers Dentures", link: "/courses/fellowship/veneers-dentures", description: "Aesthetic and functional restoration with veneers and dentures.", image: "/images/courses/000.webp" },
  { title: "Smile Designing", link: "/courses/fellowship/smile-designing", description: "Digital smile design principles and workflow.", image: "/images/courses/1.webp" },
  { title: "Invisalign", link: "/courses/fellowship/invisalign", description: "Clear aligner therapy fundamentals and planning.", image: "/images/courses/2.webp" },
  { title: "Extractions", link: "/courses/fellowship/extractions", description: "Safe and effective dental extraction techniques.", image: "/images/courses/3.webp" },
  { title: "Gum Surgeries", link: "/courses/fellowship/gum-surgeries", description: "Periodontal surgeries and flap techniques.", image: "/images/courses/222.jpg" },
  { title: "Orthodontics", link: "/courses/fellowship/orthodontics", description: "Diagnosis and treatment planning in orthodontics.", image: "/images/courses/1.webp" },
  { title: "Teeth Whitening", link: "/courses/fellowship/teeth-whitening", description: "Evidence-based whitening procedures and safety.", image: "/images/courses/2.webp" },
  { title: "Dental Implants", link: "/courses/fellowship/dental-implants", description: "Implant planning, placement, and restoration.", image: "/images/courses/3.webp" },
  { title: "Crown & Bridges", link: "/courses/fellowship/crown-bridges", description: "Prosthodontic workflows for long-term success.", image: "/images/courses/000.webp" },
  { title: "Gum Depigmentation", link: "/courses/fellowship/gum-depigmentation", description: "Laser and surgical depigmentation techniques.", image: "/images/courses/1.webp" },
  { title: "Root Canal Treatment", link: "/courses/fellowship/root-canal", description: "Endodontic access, shaping, and obturation protocols.", image: "/images/courses/2.webp" },
  { title: "Tooth Colored Fillings", link: "/courses/fellowship/tooth-colored-fillings", description: "Aesthetic composite restorations and layering.", image: "/images/courses/3.webp" },
  { title: "Oral Cancer Screening", link: "/courses/fellowship/oral-cancer", description: "Early detection and referral pathways.", image: "/images/courses/222.jpg" },
];

const FellowshipCoursesPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/courses-banner.jpeg"
          alt="Fellowship Courses Banner"
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
            Fellowship Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90 font-lato"
          >
            Home / Courses / Fellowship
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/desktop.jpg"
            alt="About Fellowship"
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
              About the <span className="text-[#D4AF37]">Fellowship</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Advanced clinical training with mentored, hands-on exposure to real cases across dentistry specialties.
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

export default FellowshipCoursesPage;


