import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import About from "@/components/About";
import Footer from "@/components/footer";
import FeaturedClients from "@/components/FeaturedClients";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <AboutSection />   {/* ✅ fixed usage */}
        <FeaturedClients />
        <WhyChooseUs />
        <About />
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
