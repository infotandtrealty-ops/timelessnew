import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    }
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                  {course.name}
                </h4>
                <Link
                  to={course.link}
                  className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseIndex;
