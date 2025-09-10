import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Pages
import Blog from "./pages/Blog";
import CoursePage from "./pages/CoursePage";
import CourseIndex from "./pages/CourseIndex";
import PermanentMakeupPage from "./pages/PermanentMakeupPage";
import CosmetologyPage from "./pages/CosmetologyPage";
import FacialAestheticsPage from "./pages/FacialAestheticsPage";
import FellowshipCoursesPage from "./pages/FellowshipCoursesPage";

import Treatments from "./pages/Treatments";








import ServicePage from "./pages/ServicePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import IndividualServicePage from "./pages/IndividualServicePage";
import MediaPage from "./pages/MediaPage";
import AcademyPage from "./pages/AcademyPage";
import ContactPage from "./pages/ContactPage";
import ClinicsPage from "./pages/ClinicsPage";
import ShopPage from "./pages/ShopPage";
import DemoRoutes from "./pages/DemoRoutes";
import TestRoute from "./pages/TestRoute";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

      <Routes>
          {/* Home Page */}
          <Route path="/" element={<Index />} />

          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />

          {/* Demo Routes Page */}
          <Route path="/demo-routes" element={<DemoRoutes />} />

          {/* Test Route */}
          <Route path="/test" element={<TestRoute />} />

          {/* Course Pages */}
          <Route path="/courses" element={<CourseIndex />} />
          {/* Top-level course category landing pages */}
          <Route path="/courses/permanent-makeup" element={<PermanentMakeupPage />} />
          <Route path="/courses/cosmetology" element={<CosmetologyPage />} />
          <Route path="/courses/facial-aesthetics" element={<FacialAestheticsPage />} />
          <Route path="/courses/fellowship" element={<FellowshipCoursesPage />} />
          {/* Fallback for nested specific course items */}
          <Route path="/courses/*" element={<CoursePage />} />

        
          <Route path="/treatments" element={<Treatments />} />



          {/* Specific Course Routes */}
          {/* Permanent Makeup Courses */}
          <Route path="/courses/permanent-makeup/masters-eyebrows" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/master-scalp" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/pg-diploma" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/cert-lip" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/cert-brows-lash" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/cert-scalp" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/cert-laser-hair" element={<CoursePage />} />
          <Route path="/courses/permanent-makeup/cert-skin-tech" element={<CoursePage />} />
          
          {/* Cosmetology Courses */}
          <Route path="/courses/cosmetology/master-chemical-peels" element={<CoursePage />} />
          <Route path="/courses/cosmetology/diploma-advanced" element={<CoursePage />} />
          <Route path="/courses/cosmetology/cert-professional" element={<CoursePage />} />
          <Route path="/courses/cosmetology/cert-hydrafacial" element={<CoursePage />} />
          <Route path="/courses/cosmetology/cert-chemical-peels" element={<CoursePage />} />
          
          {/* Facial Aesthetics Courses */}
          <Route path="/courses/facial-aesthetics/masters" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-lipolytic" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-nose" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-acne" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-plasma" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-undereye" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/master-fillers" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/pg-diploma" element={<CoursePage />} />
          <Route path="/courses/facial-aesthetics/cert-lipolytic" element={<CoursePage />} />
          
          {/* Fellowship Courses */}
          <Route path="/courses/fellowship/permanent-cosmetology" element={<CoursePage />} />
          <Route path="/courses/fellowship/facial-permanent-cosmetology" element={<CoursePage />} />
          <Route path="/courses/fellowship/facial-aesthetics" element={<CoursePage />} />
          <Route path="/courses/fellowship/permanent-micropigmentation" element={<CoursePage />} />
          <Route path="/courses/fellowship/facial-permanent-micropigmentation" element={<CoursePage />} />

          {/* Service Category Pages */}
          <Route path="/services/permanent-makeup" element={<ServiceCategoryPage />} />
          <Route path="/services/cosmetology" element={<ServiceCategoryPage />} />
          <Route path="/services/facial-aesthetics" element={<ServiceCategoryPage />} />
          <Route path="/services/dentistry" element={<ServiceCategoryPage />} />
          
          {/* Individual Service Pages */}
          {/* Permanent Makeup Services */}
          <Route path="/services/permanent-makeup/microblading" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/ombre-brows" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/powder-brows" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/combination-brows" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/lip-color" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/beauty-spot" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/lash-lift" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/eyebrows-lamination" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/scalp-micropigmentation" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/stretch-mark-camouflage" element={<IndividualServicePage />} />
          <Route path="/services/permanent-makeup/vitiligo-camouflage" element={<IndividualServicePage />} />
          
          {/* Cosmetology Services */}
          <Route path="/services/cosmetology/vampire-facial" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/mesotherapy" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/prp-hair" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/hydrafacial" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/dermaplaning" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/medicated-facial" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/laser-hair-reduction" element={<IndividualServicePage />} />
          <Route path="/services/cosmetology/wellness-drips" element={<IndividualServicePage />} />
          
          {/* Facial Aesthetics Services */}
          <Route path="/services/facial-aesthetics/botox" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/face-lift" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/thread-lift" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/nose-fillers" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/chin-jawline" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/lip-fillers" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/chemical-peels" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/acne-scar" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/vitamin-drips" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/pdrn" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/profhilo" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/hyperhidrosis" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/polynucleotides" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/exosomes" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/neck-rejuvenation" element={<IndividualServicePage />} />
          <Route path="/services/facial-aesthetics/hands-rejuvenation" element={<IndividualServicePage />} />
          
          {/* Dentistry Services */}
          <Route path="/services/dentistry/veneers-dentures" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/smile-designing" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/invisalign" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/extractions" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/gum-surgeries" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/orthodontics" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/teeth-whitening" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/dental-implants" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/crown-bridges" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/gum-depigmentation" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/root-canal" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/tooth-colored-fillings" element={<IndividualServicePage />} />
          <Route path="/services/dentistry/oral-cancer" element={<IndividualServicePage />} />
        
          {/* Media Pages */}
          <Route path="/media/blogs" element={<MediaPage />} />
          <Route path="/media/gallery" element={<MediaPage />} />

          {/* Academy Page */}
          <Route path="/academy" element={<AcademyPage />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Clinics Pages */}
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/clinics/amritsar" element={<ClinicsPage />} />
          <Route path="/clinics/gurgaon" element={<ClinicsPage />} />
          <Route path="/clinics/jammu" element={<ClinicsPage />} />

          {/* Shop Pages */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/permanent-makeup" element={<ShopPage />} />
          <Route path="/shop/cosmetology" element={<ShopPage />} />
          <Route path="/shop/facial-aesthetics" element={<ShopPage />} />

          {/* Dynamic Service Pages (Legacy) */}
          <Route path="/services/:slug" element={<ServicePage title="" description="" />} />

          {/* Catch All (404)  */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;






