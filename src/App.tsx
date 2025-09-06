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
import ServicePage from "./pages/ServicePage";
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
          <Route path="/courses/*" element={<CoursePage />} />
          
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

          {/* Dynamic Service Pages */}
          <Route path="/services/:slug" element={<ServicePage title="" description="" />} />

          {/* Catch All (404)  */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;








