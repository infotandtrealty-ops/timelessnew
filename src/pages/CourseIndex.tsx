import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CourseIndex: React.FC = () => {
  const courses = [
    {
      name: "Permanent Makeup",
      image: "/images/goo.jpg",
      link: "/courses/permanent-makeup",
    },
    {
      name: "Cosmetology",
      image: "/images/mm.webp",
      link: "/courses/cosmetology",
    },
    {
      name: "Facial Aesthetics",
      image: "/images/faical.webp",
      link: "/courses/facial-aesthetics",
    },
    {
      name: "Fellowship Courses",
      image: "/images/goo.jpg",
      link: "/courses/fellowship",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/our services/000.webp"
          alt="Timeless Academy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-serif font-bold tracking-wide">
            Aesthetics Academy
          </h1>
          <p className="mt-2 text-sm opacity-90">Home / Aesthetics Academy</p>
        </div>
      </div>

      {/* Academy Intro */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Timeless Academy
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Timeless Aesthetics Academy is a{" "}
            <span className="font-semibold text-yellow-800">
              one-of-a-kind training institute
            </span>{" "}
            for professional aesthetic courses. Our programs include both{" "}
            <span className="font-medium">online and in-person</span> modules.
            Furthermore, we have developed a curriculum in three major segments
            of the aesthetics industry covering the entirety of current treatment
            lines available in the world.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-3">
            Our courses include:
          </h3>
          <ul className="text-gray-700 space-y-2 text-lg">
            <li>✨ Permanent Makeup</li>
            <li>✨ Facial Aesthetics</li>
            <li>✨ Modern Cosmetology</li>
          </ul>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image with overlay */}
              <div className="h-64 w-full relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content - Glass effect */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg group-hover:bg-white/90 transition">
                  <h4 className="text-lg font-serif font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                    {course.name}
                  </h4>
                  <Link
                    to={course.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Sections */}
      <WhyChooseUs />
      <BlogSection />
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseIndex;
