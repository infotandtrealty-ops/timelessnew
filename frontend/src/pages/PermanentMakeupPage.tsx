import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const courses = [
  {
    title: "Master's in Permanent Eyebrows",
    link: "/courses/permanent-makeup/masters-eyebrows",
    description:
      "Master advanced eyebrow micropigmentation techniques to deliver natural and flawless results.",
    image: "/images/courses/222.jpg",
  },
  {
    title: "Master class in Scalp Micropigmentation",
    link: "/courses/permanent-makeup/master-scalp",
    description:
      "Learn industry-leading methods to replicate natural hair follicles and restore confidence.",
    image: "/images/courses/000.webp",
  },
  {
    title: "PG Diploma in Permanent Make up",
    link: "/courses/permanent-makeup/pg-diploma",
    description:
      "A complete diploma covering all aspects of permanent makeup artistry.",
    image: "/images/courses/1.webp",
  },
  {
    title: "Certificate Course in Lip Micropigmentation",
    link: "/courses/permanent-makeup/cert-lip",
    description:
      "Get certified in lip tinting and micropigmentation with modern techniques.",
    image: "/images/courses/2.webp",
  },
  {
    title: "Certificate in Brows and Lash Lift",
    link: "/courses/permanent-makeup/cert-brows-lash",
    description:
      "Enhance brows and lashes naturally with professional lifting methods.",
    image: "/images/courses/3.webp",
  },
  {
    title: "Certificate in Scalp Micropigmentation",
    link: "/courses/permanent-makeup/cert-scalp",
    description:
      "Specialized training in scalp micropigmentation for baldness and hair thinning.",
    image: "/images/courses/2.webp",
  },
  {
    title: "Certificate course in Laser Hair Reduction",
    link: "/courses/permanent-makeup/cert-laser-hair",
    description:
      "Gain expertise in safe and effective laser hair reduction techniques.",
    image: "/images/courses/2.webp",
  },
  {
    title: "Certificate Course Skin Technicial",
    link: "/courses/permanent-makeup/cert-skin-tech",
    description:
      "Learn the fundamentals of skin technology and advanced aesthetic care.",
    image: "/images/courses/222.jpg",
  },
];

const PermanentMakeupPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/aa.png"
          alt="Permanent Makeup Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-serif font-bold tracking-wide">
            Permanent Makeup
          </h1>
          <p className="mt-2 text-sm opacity-90">
            Home / Courses / Permanent Makeup
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            About the Course
          </h2>
          <p className="text-gray-600">
            Learn industry-standard techniques in micropigmentation and brow,
            lip, and scalp artistry. Our expert-designed curriculum ensures
            hands-on training and professional certification for a successful
            career in permanent makeup.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-serif font-bold text-center mb-10">
          Available Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-3 text-luxury-dark">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
              <div className="px-6 pb-6">
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

      <Footer />
    </>
  );
};

export default PermanentMakeupPage;
