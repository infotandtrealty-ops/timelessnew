import TaClinic from "@/assets/Ta-clinic.jpg"; // ✅ import image

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-6">
            Why Timeless Aesthetics is the Best <br /> Aesthetic Clinic in India ?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Timeless Aesthetics aspires to become a global leader in aesthetics. 
            With our clinics and academies opening all across India, we're taking a 
            significant step in the right direction. At Timeless Aesthetics, we are not 
            just an Aesthetic clinic; we are a journey towards discovering your timeless beauty. 
            Here's why you should choose us:
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-dark">5k+</h3>
              <p className="text-gray-600 mt-2">No. of Graduates</p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-dark">11+</h3>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>

            <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-luxury-dark">20k+</h3>
              <p className="text-gray-600 mt-2">No. of Treatments Conducted</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
<div className="flex justify-center">
  <img
    src={TaClinic}   // ✅ imported image used here
    alt="Timeless Aesthetics Clinic"
    className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
  />
</div>



      </div>
    </section>
  );
};

export default WhyChooseUs ;


