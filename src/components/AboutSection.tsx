import aboutImg from "@/assets/about-us.webp";

const AboutSection = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-luxury-dark mb-6">
          Best Aesthetic Clinic in India
        </h2>

        {/* Intro Paragraph */}
        <p className="text-center max-w-4xl mx-auto text-gray-600 mb-12 leading-relaxed">
          Timeless Aesthetics seamlessly blends expert cosmetic treatments with
          top-tier professional education. As a clinic, it delivers advanced
          facial aesthetics, permanent makeup, and modern cosmetology, ensuring
          clients receive refined, high-quality care. Meanwhile, the academy
          empowers aspiring professionals through government-certified courses,
          hands-on training, and global accreditation and affiliations around
          the globe. Whether you're looking for transformative beauty treatments
          or a prestigious learning experience, Timeless Aesthetics stands as a
          hub of excellence in the industry.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg} // ✅ imported image
              alt="Dr. Shikha Baghi"
              className="w-200 h-96 object-cover rounded-lg shadow-lg border-4 border-luxury-gold"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-luxury-gold text-lg font-semibold mb-2">
              About
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-luxury-dark mb-6">
              Timeless Aesthetics
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Timeless Aesthetics is a pioneer in Permanent Makeup, Cosmetology
              & Facial Aesthetics in India led by{" "}
              <span className="font-semibold">Dr. Shikha Baghi</span> (Founder
              and Managing Director). She is BDS, MDS (Endodontist), and Master
              Trainer of Permanent Makeup, Cosmetology and Facial Aesthetics.
              She is the first Diamond Trainer of the American Academy Of
              Micropigmentation (AAM).
            </p>

            <p className="text-gray-600 leading-relaxed">
              Timeless Aesthetics in its business development, sales, and
              marketing is led by{" "}
              <span className="font-semibold">Mr. Ashish Thapar</span> (Founder
              & Managing Director). He has a B.E. in Production Engineering and
              is the Founder and Managing Director of T and T Realty Services
              Pvt. Ltd.
            </p>

            {/* Button */}
            <div className="mt-6">
              <a
                href="/about"
                className="inline-block px-6 py-3 border border-luxury-gold text-luxury-gold rounded-full font-medium hover:bg-luxury-gold hover:text-white transition duration-300"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
