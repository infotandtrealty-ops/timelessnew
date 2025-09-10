import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FacialAestheticsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/cc.png"
          alt="Facial Aesthetics Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-serif font-bold tracking-wide">Facial Aesthetics</h1>
          <p className="mt-2 text-sm opacity-90">Home / Courses / Facial Aesthetics</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">About the Course</h2>
          <p className="text-gray-600">
            Master injectables, skin rejuvenation, and non-surgical facial enhancement.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FacialAestheticsPage;


