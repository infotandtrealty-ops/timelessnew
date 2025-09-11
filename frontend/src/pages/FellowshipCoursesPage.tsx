import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FellowshipCoursesPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/courses-banner.jpeg"
          alt="Fellowship Courses Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-serif font-bold tracking-wide">Fellowship Courses</h1>
          <p className="mt-2 text-sm opacity-90">Home / Courses / Fellowship</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">About the Fellowship</h2>
          <p className="text-gray-600">
            Advanced clinical training with mentored, hands-on exposure to real cases.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FellowshipCoursesPage;


