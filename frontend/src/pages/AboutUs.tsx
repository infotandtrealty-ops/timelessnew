import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import FeaturedClients from "@/components/FeaturedClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterResults from "@/components/BeforeAfterResults";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import banner from "@/assets/courses/courses-banner.jpeg";
import aboutImg from "@/assets/about-us.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img src={banner} alt="About Timeless Aesthetics" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">Timeless Aesthetics</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Timeless Aesthetics is the best aesthetic clinic in Gurgaon that offers a diverse range of non-surgical aesthetic treatments, focusing on Permanent Makeup, Facial Aesthetics, and Modern Cosmetology. The Academy provides certified training programs, and the shop offers exclusive, health-compliant products. Initiatives like Timeless Promise showcase the brand's commitment to supporting survivors and reshaping beauty standards, while the skin and hair clinic aspires to become a global authority in aesthetics.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Timeless Aesthetics pioneered Permanent Makeup, Cosmetology, and Facial Aesthetics in India, founded and led by Dr. Shikha Baghi, BDS, MDS (Endodontics). She is one of the first Master Artists and Trainers in Permanent Makeup, Cosmetology, and Facial Aesthetics in the nation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Baghi is also the only Diamond Trainer of the American Academy of Micropigmentation (AAM). As the face of the company, she has given exposure to this industry on an unparalleled scale. With her clear vision and unwavering will, she continues to grow Timeless Aesthetics to new heights in terms of clients, partners, and delegates. While the front end of the business is in Dr. Baghi's capable hands, the business development, sales, and marketing of Timeless Aesthetics are under the guidance of Mr. Ashish Thapar. He holds a B.E. in Production Engineering and is the Founder and Managing Director of TandT Realty Services Pvt. Ltd.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Timeless Aesthetics offers a diverse range of non-surgical treatment options, with a focus on Permanent Makeup, Facial Aesthetics, and Modern Cosmetology. While the clinics are a vital aspect of the brand, TA also has a state-of-the-art academy that provides professional training programs for those who wish to enter this highly competitive and lucrative industry. The academy holds courses all across India throughout the year, with hundreds of students joining each year to earn coveted TA Master’s and Fellowship certificates. Moreover, the TA shop offers a selection of exclusive, health-compliant products. This extensive inventory includes some of the best products and equipment that aestheticians need to perform at their best. Last but not least, the Timeless Promise underscores the brand's commitment to supporting underprivileged individuals, including acid attack survivors and others facing misfortune, by offering them free treatments.
            </p>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="About Timeless Aesthetics" className="w-full h-auto rounded-xl shadow-lg border-4 border-luxury-gold" />
          </div>
        </div>
      </section>

      {/* Enrichment Sections */}
      <WhyChooseUs />
      <BeforeAfterResults />
      <FeaturedClients />
      <TeamMember />
      <FAQ />
      <BlogSection />

      <Footer />
    </div>
  );
};

export default AboutUs;


