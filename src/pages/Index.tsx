import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FeaturedClients from "@/components/FeaturedClients";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamMember from "@/components/TeamMember";
import BeforeAfterResults from "@/components/BeforeAfterResults";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <AboutSection />
        <TeamMember />
        <FeaturedClients />
        <WhyChooseUs />
        <BeforeAfterResults />
        <FAQ />
        <BlogSection /> {/* Blog preview section on home page */}
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
