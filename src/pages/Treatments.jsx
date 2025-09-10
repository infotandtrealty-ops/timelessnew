import Header from "../components/Header";   // 👈 apne Header ka path dalna
import Footer from "../components/Footer";   // 👈 apne Footer ka path dalna


const Treatments = () => {
  return (
    <>
      {/* Header */}
      <Header />
    
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
            backgroundImage: "url('/images/our services/1.webp')", // 👈 public folder path
          }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-sm">Home / Our Services</p>
        </div>
      </div>

      {/* Page Heading */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto my-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to enhancing our clients’ natural facial features to
          help them feel more beautiful and confident with our services of
          permanent makeup, facial aesthetics and cosmetology.
        </p>
      </div>



      {/* Cards Section */}
<div className="container mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
  
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/1.webp" 
      alt="Permanent Makeup" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">PERMANENT MAKEUP</h3>
      <p className="text-sm text-gray-600 mb-4">
        Permanent makeup is a cosmetic technique using pigments to create 
        eyebrow, lip, and eyeliner enhancements.
      </p>
      <a 
        href="/permanent-makeup" 
        className="inline-block bg-gradient-to-r from-yellow-700 to-yellow-900 text-Black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/2.webp" 
      alt="Cosmetology" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">COSMETOLOGY</h3>
      <p className="text-sm text-gray-600 mb-4">
        Cosmetology is the art of beautifying the skin, face and hair to 
        enhance the physical appearance.
      </p>
      <a 
        href="/cosmetology" 
        className="inline-block bg-gradient-to-r from-yellow-700 to-yellow-900 text-Black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/3.webp" 
      alt="Cosmetology" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      
      <h3 className="text-xl font-bold mb-2">COSMETOLOGY</h3>
      <p className="text-sm text-gray-600 mb-4">
        Cosmetology is the art of beautifying the skin, face and hair to 
        enhance the physical appearance.
      </p>
      <a 
        href="/cosmetology" 
        className="inline-block bg-gradient-to-r from-yellow-700 to-yellow-900 text-Black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </div>




  {/* Card 4 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/3.webp" 
      alt="Facial Aesthetics" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">FACIAL AESTHETICS</h3>
      <p className="text-sm text-gray-600 mb-4">
        Facial aesthetics includes non-surgical treatments like skincare, 
        injectables, and thread lifts.
      </p>
      <a 
        href="/facial-aesthetics" 
        className="inline-block bg-gradient-to-r from-yellow-700 to-yellow-900 text-Black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Read More
      </a>
    </div>
  </div>

</div>


  

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Treatments;
