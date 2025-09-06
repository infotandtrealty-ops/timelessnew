import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Star, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";





interface CourseData {
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  price: string;
  features: string[];
  curriculum: string[];
  requirements: string[];
  certification: string;
  image?: string;
}

const CoursePage = () => {
  const location = useLocation();
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract course path from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const coursePath = pathSegments.slice(1).join('/'); // Remove 'courses' from path
    
    // Load course data based on path
    loadCourseData(coursePath);
  }, [location.pathname]);

  const loadCourseData = (coursePath: string) => {
    setLoading(true);
    
    // Course data mapping based on the navigation structure
    const courseDataMap: Record<string, CourseData> = {
      // Permanent Makeup Courses
      "permanent-makeup/masters-eyebrows": {
        title: "Master's in Permanent Eyebrows",
        description: "Comprehensive training in advanced eyebrow micropigmentation techniques, including microblading, powder brows, and combination methods. Learn from industry experts and master the art of creating natural-looking, long-lasting eyebrows.",
        duration: "5 Days",
        level: "Advanced",
        category: "Permanent Makeup",
        price: "₹45,000",
        features: [
          "Hands-on practical training",
          "Latest equipment and techniques",
          "Small batch training (max 4 students)",
          "Certificate of completion",
          "Lifetime support and guidance",
          "Kit included in course fee"
        ],
        curriculum: [
          "Theory of micropigmentation",
          "Skin anatomy and color theory",
          "Microblading techniques",
          "Powder brow application",
          "Combination brow methods",
          "Aftercare and touch-ups",
          "Business setup guidance"
        ],
        requirements: [
          "Basic understanding of beauty industry",
          "No prior experience required",
          "Valid ID proof",
          "Medical fitness certificate"
        ],
        certification: "Certificate in Master's Permanent Eyebrows from Timeless Aesthetics Academy"
      },
      "permanent-makeup/master-scalp": {
        title: "Master class in Scalp Micropigmentation",
        description: "Specialized training in scalp micropigmentation for hair loss treatment. Learn advanced techniques to create natural-looking hair follicles and restore confidence in clients with hair loss.",
        duration: "4 Days",
        level: "Advanced",
        category: "Permanent Makeup",
        price: "₹55,000",
        features: [
          "Advanced SMP techniques",
          "Hair loss pattern analysis",
          "Color matching expertise",
          "Client consultation skills",
          "Business development guidance",
          "Professional equipment training"
        ],
        curriculum: [
          "Scalp anatomy and hair growth",
          "Hair loss types and patterns",
          "SMP needle configurations",
          "Color theory for scalp work",
          "Client consultation process",
          "Treatment planning",
          "Aftercare protocols"
        ],
        requirements: [
          "Previous micropigmentation experience preferred",
          "Understanding of hair loss conditions",
          "Valid medical license (if applicable)",
          "Portfolio review"
        ],
        certification: "Master Certificate in Scalp Micropigmentation"
      },
      "permanent-makeup/pg-diploma": {
        title: "PG Diploma in Permanent Make up",
        description: "Comprehensive postgraduate diploma covering all aspects of permanent makeup including eyebrows, lips, eyeliner, and areola restoration. Perfect for those seeking complete expertise in the field.",
        duration: "10 Days",
        level: "Professional",
        category: "Permanent Makeup",
        price: "₹85,000",
        features: [
          "Complete permanent makeup training",
          "All techniques covered",
          "Business management module",
          "Marketing strategies",
          "Client management system",
          "Advanced equipment training"
        ],
        curriculum: [
          "Foundation theory",
          "Eyebrow techniques",
          "Lip micropigmentation",
          "Eyeliner application",
          "Areola restoration",
          "Color theory and mixing",
          "Business setup and management",
          "Marketing and client acquisition"
        ],
        requirements: [
          "High school diploma or equivalent",
          "Basic computer skills",
          "Valid ID and address proof",
          "Medical fitness certificate"
        ],
        certification: "Post Graduate Diploma in Permanent Makeup"
      },
      "permanent-makeup/cert-lip": {
        title: "Certificate Course in Lip Micropigmentation",
        description: "Specialized training in lip micropigmentation techniques. Learn to enhance lip shape, color, and definition with safe and effective permanent makeup methods.",
        duration: "3 Days",
        level: "Intermediate",
        category: "Permanent Makeup",
        price: "₹35,000",
        features: [
          "Lip anatomy and color theory",
          "Shape correction techniques",
          "Color selection and mixing",
          "Pain management strategies",
          "Aftercare protocols",
          "Touch-up procedures"
        ],
        curriculum: [
          "Lip anatomy and physiology",
          "Color theory for lips",
          "Shape analysis and correction",
          "Needle selection and techniques",
          "Pain management",
          "Aftercare and healing process",
          "Touch-up timing and techniques"
        ],
        requirements: [
          "Basic beauty industry knowledge",
          "No prior experience required",
          "Valid ID proof",
          "Medical clearance"
        ],
        certification: "Certificate in Lip Micropigmentation"
      },
      "permanent-makeup/cert-brows-lash": {
        title: "Certificate in Brows and Lash Lift",
        description: "Comprehensive training in eyebrow and eyelash lifting techniques. Learn to enhance natural brows and lashes with safe, effective lifting methods.",
        duration: "2 Days",
        level: "Beginner",
        category: "Permanent Makeup",
        price: "₹25,000",
        features: [
          "Brow lifting techniques",
          "Lash lift procedures",
          "Chemical safety protocols",
          "Client consultation skills",
          "Aftercare guidance",
          "Product knowledge"
        ],
        curriculum: [
          "Hair structure and growth",
          "Chemical lifting principles",
          "Brow shaping and lifting",
          "Lash lift techniques",
          "Safety protocols",
          "Client consultation",
          "Aftercare instructions"
        ],
        requirements: [
          "No prior experience required",
          "Basic understanding of beauty treatments",
          "Valid ID proof",
          "Allergy testing recommended"
        ],
        certification: "Certificate in Brows and Lash Lift"
      },
      "permanent-makeup/cert-scalp": {
        title: "Certificate in Scalp Micropigmentation",
        description: "Foundation course in scalp micropigmentation for beginners. Learn the basics of creating natural-looking hair follicles for clients with hair loss.",
        duration: "3 Days",
        level: "Beginner",
        category: "Permanent Makeup",
        price: "₹40,000",
        features: [
          "Basic SMP techniques",
          "Hair loss understanding",
          "Client consultation basics",
          "Equipment handling",
          "Safety protocols",
          "Aftercare procedures"
        ],
        curriculum: [
          "Introduction to SMP",
          "Hair loss types",
          "Basic needle techniques",
          "Color selection",
          "Client consultation",
          "Treatment planning",
          "Aftercare protocols"
        ],
        requirements: [
          "No prior experience required",
          "Interest in hair loss solutions",
          "Valid ID proof",
          "Medical clearance"
        ],
        certification: "Certificate in Scalp Micropigmentation"
      },
      "permanent-makeup/cert-laser-hair": {
        title: "Certificate course in Laser Hair Reduction",
        description: "Professional training in laser hair reduction techniques. Learn safe and effective methods for permanent hair removal using advanced laser technology.",
        duration: "4 Days",
        level: "Intermediate",
        category: "Permanent Makeup",
        price: "₹50,000",
        features: [
          "Laser technology understanding",
          "Skin type analysis",
          "Safety protocols",
          "Treatment planning",
          "Client consultation",
          "Equipment maintenance"
        ],
        curriculum: [
          "Laser physics and safety",
          "Skin types and hair colors",
          "Treatment protocols",
          "Client consultation",
          "Pre and post care",
          "Equipment operation",
          "Business aspects"
        ],
        requirements: [
          "Basic medical knowledge preferred",
          "Valid ID proof",
          "Medical clearance",
          "Understanding of skin anatomy"
        ],
        certification: "Certificate in Laser Hair Reduction"
      },
      "permanent-makeup/cert-skin-tech": {
        title: "Certificate Course Skin Technicial",
        description: "Comprehensive training in skin analysis and treatment techniques. Learn to assess skin conditions and provide appropriate treatments for various skin concerns.",
        duration: "5 Days",
        level: "Intermediate",
        category: "Permanent Makeup",
        price: "₹45,000",
        features: [
          "Skin analysis techniques",
          "Treatment protocols",
          "Product knowledge",
          "Client consultation",
          "Safety procedures",
          "Equipment handling"
        ],
        curriculum: [
          "Skin anatomy and physiology",
          "Skin condition analysis",
          "Treatment selection",
          "Product application",
          "Client consultation",
          "Safety protocols",
          "Aftercare procedures"
        ],
        requirements: [
          "Basic understanding of skin care",
          "Valid ID proof",
          "Medical clearance",
          "Interest in skin treatments"
        ],
        certification: "Certificate in Skin Technology"
      },
      // Cosmetology Courses
      "cosmetology/master-chemical-peels": {
        title: "Master Class in Chemical Peels",
        description: "Advanced training in chemical peel treatments for various skin concerns. Learn to safely perform different types of chemical peels for optimal results.",
        duration: "3 Days",
        level: "Advanced",
        category: "Cosmetology",
        price: "₹35,000",
        features: [
          "Advanced peel techniques",
          "Skin type analysis",
          "Safety protocols",
          "Client consultation",
          "Treatment planning",
          "Aftercare procedures"
        ],
        curriculum: [
          "Chemical peel theory",
          "Skin analysis techniques",
          "Peel selection criteria",
          "Application methods",
          "Safety protocols",
          "Client consultation",
          "Aftercare and healing"
        ],
        requirements: [
          "Previous skin care experience",
          "Valid ID proof",
          "Medical clearance",
          "Understanding of skin anatomy"
        ],
        certification: "Master Certificate in Chemical Peels"
      },
      "cosmetology/diploma-advanced": {
        title: "Diploma in Advanced Cosmetology",
        description: "Comprehensive diploma program covering advanced cosmetology techniques including facials, chemical peels, microdermabrasion, and advanced skin treatments.",
        duration: "6 Months",
        level: "Professional",
        category: "Cosmetology",
        price: "₹1,20,000",
        features: [
          "Complete cosmetology training",
          "Advanced treatment techniques",
          "Business management",
          "Client consultation skills",
          "Product knowledge",
          "Practical experience"
        ],
        curriculum: [
          "Skin anatomy and physiology",
          "Advanced facial techniques",
          "Chemical peels and treatments",
          "Microdermabrasion",
          "LED light therapy",
          "Business management",
          "Client consultation",
          "Marketing strategies"
        ],
        requirements: [
          "High school diploma",
          "Basic computer skills",
          "Valid ID proof",
          "Medical clearance"
        ],
        certification: "Diploma in Advanced Cosmetology"
      },
      "cosmetology/cert-professional": {
        title: "Certificate in Professional Cosmetology",
        description: "Professional certification in cosmetology covering essential skin care treatments, facial techniques, and client consultation skills.",
        duration: "3 Months",
        level: "Professional",
        category: "Cosmetology",
        price: "₹75,000",
        features: [
          "Professional skin care training",
          "Facial treatment techniques",
          "Client consultation skills",
          "Product knowledge",
          "Safety protocols",
          "Business basics"
        ],
        curriculum: [
          "Skin anatomy and types",
          "Facial treatment protocols",
          "Product selection and application",
          "Client consultation",
          "Safety and hygiene",
          "Business fundamentals"
        ],
        requirements: [
          "High school education",
          "Interest in beauty industry",
          "Valid ID proof",
          "Medical clearance"
        ],
        certification: "Professional Certificate in Cosmetology"
      },
      "cosmetology/cert-hydrafacial": {
        title: "Certificate Course in Medicated Hydrafacial",
        description: "Specialized training in medicated HydraFacial treatments. Learn to customize treatments for various skin concerns using advanced HydraFacial technology.",
        duration: "2 Days",
        level: "Intermediate",
        category: "Cosmetology",
        price: "₹30,000",
        features: [
          "HydraFacial technology training",
          "Medicated treatment protocols",
          "Skin analysis techniques",
          "Client consultation",
          "Equipment operation",
          "Aftercare procedures"
        ],
        curriculum: [
          "HydraFacial technology",
          "Medicated serums and protocols",
          "Skin analysis and treatment selection",
          "Equipment operation and maintenance",
          "Client consultation",
          "Aftercare and follow-up"
        ],
        requirements: [
          "Basic skin care knowledge",
          "Valid ID proof",
          "Medical clearance",
          "Equipment training completion"
        ],
        certification: "Certificate in Medicated HydraFacial"
      },
      "cosmetology/cert-chemical-peels": {
        title: "Certificate Courses in Chemical Peels",
        description: "Foundation course in chemical peel treatments. Learn safe and effective methods for performing various types of chemical peels.",
        duration: "2 Days",
        level: "Beginner",
        category: "Cosmetology",
        price: "₹25,000",
        features: [
          "Chemical peel basics",
          "Safety protocols",
          "Skin type analysis",
          "Treatment selection",
          "Client consultation",
          "Aftercare procedures"
        ],
        curriculum: [
          "Introduction to chemical peels",
          "Skin anatomy and types",
          "Peel types and selection",
          "Safety protocols",
          "Application techniques",
          "Client consultation",
          "Aftercare procedures"
        ],
        requirements: [
          "No prior experience required",
          "Valid ID proof",
          "Medical clearance",
          "Interest in skin treatments"
        ],
        certification: "Certificate in Chemical Peels"
      },
      // Facial Aesthetics Courses
      "facial-aesthetics/masters": {
        title: "Masters in Facial Aesthetics",
        description: "Comprehensive master's program in facial aesthetics covering all aspects of non-surgical facial treatments including injectables, threads, and advanced techniques.",
        duration: "6 Months",
        level: "Master's",
        category: "Facial Aesthetics",
        price: "₹2,50,000",
        features: [
          "Complete facial aesthetics training",
          "Advanced injection techniques",
          "Thread lift procedures",
          "Business management",
          "Clinical experience",
          "Mentorship program"
        ],
        curriculum: [
          "Facial anatomy and aging",
          "Injectable treatments (Botox, Fillers)",
          "Thread lift techniques",
          "Advanced procedures",
          "Client consultation and assessment",
          "Business management and marketing",
          "Clinical practice and supervision"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Valid medical license",
          "Previous aesthetic experience preferred",
          "Portfolio review"
        ],
        certification: "Master's Degree in Facial Aesthetics"
      },
      "facial-aesthetics/master-lipolytic": {
        title: "Master Class In Lipolytic Injections",
        description: "Advanced training in lipolytic injection techniques for fat reduction and body contouring. Learn safe and effective methods for non-surgical fat reduction.",
        duration: "3 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹60,000",
        features: [
          "Advanced lipolytic techniques",
          "Anatomy and safety protocols",
          "Treatment planning",
          "Client consultation",
          "Complication management",
          "Business development"
        ],
        curriculum: [
          "Fat anatomy and physiology",
          "Lipolytic agents and mechanisms",
          "Injection techniques and protocols",
          "Treatment planning and assessment",
          "Safety protocols and complications",
          "Client consultation and consent"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous injection experience",
          "Portfolio review"
        ],
        certification: "Master Certificate in Lipolytic Injections"
      },
      "facial-aesthetics/master-nose": {
        title: "Master Class in Nose correction",
        description: "Specialized training in non-surgical nose correction using advanced filler techniques. Learn to reshape and enhance nose appearance without surgery.",
        duration: "2 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹45,000",
        features: [
          "Non-surgical nose correction",
          "Advanced filler techniques",
          "Anatomy and safety",
          "Treatment planning",
          "Client consultation",
          "Complication management"
        ],
        curriculum: [
          "Nose anatomy and structure",
          "Filler selection and techniques",
          "Treatment planning and assessment",
          "Injection protocols",
          "Safety and complications",
          "Client consultation and consent"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous filler experience",
          "Portfolio review"
        ],
        certification: "Master Certificate in Nose Correction"
      },
      "facial-aesthetics/master-acne": {
        title: "Master Class In Acne Scar Treatment",
        description: "Advanced training in acne scar treatment using various techniques including lasers, microneedling, and chemical peels for optimal scar reduction.",
        duration: "3 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹50,000",
        features: [
          "Advanced scar treatment techniques",
          "Multiple treatment modalities",
          "Treatment planning",
          "Client consultation",
          "Safety protocols",
          "Results optimization"
        ],
        curriculum: [
          "Acne scar types and classification",
          "Laser treatments for scars",
          "Microneedling techniques",
          "Chemical peel protocols",
          "Combination treatments",
          "Treatment planning and assessment"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Previous aesthetic experience",
          "Valid medical license",
          "Portfolio review"
        ],
        certification: "Master Certificate in Acne Scar Treatment"
      },
      "facial-aesthetics/master-plasma": {
        title: "Masters Class in Plasma Pen",
        description: "Comprehensive training in plasma pen technology for skin tightening, scar treatment, and skin rejuvenation. Learn advanced techniques for optimal results.",
        duration: "2 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹40,000",
        features: [
          "Plasma pen technology training",
          "Advanced treatment techniques",
          "Safety protocols",
          "Client consultation",
          "Treatment planning",
          "Aftercare procedures"
        ],
        curriculum: [
          "Plasma pen technology and principles",
          "Treatment protocols and techniques",
          "Safety protocols and precautions",
          "Client consultation and assessment",
          "Treatment planning",
          "Aftercare and healing process"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Previous aesthetic experience",
          "Valid medical license",
          "Equipment training completion"
        ],
        certification: "Master Certificate in Plasma Pen Treatment"
      },
      "facial-aesthetics/master-undereye": {
        title: "Master class in Under eye rejuvenation",
        description: "Specialized training in under-eye rejuvenation techniques including fillers, PRP, and advanced treatments for dark circles, bags, and fine lines.",
        duration: "2 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹45,000",
        features: [
          "Under-eye anatomy and aging",
          "Advanced treatment techniques",
          "Safety protocols",
          "Client consultation",
          "Treatment planning",
          "Complication management"
        ],
        curriculum: [
          "Under-eye anatomy and aging process",
          "Treatment options and selection",
          "Injection techniques and protocols",
          "Safety protocols and complications",
          "Client consultation and assessment",
          "Treatment planning and follow-up"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous injection experience",
          "Portfolio review"
        ],
        certification: "Master Certificate in Under-eye Rejuvenation"
      },
      "facial-aesthetics/master-fillers": {
        title: "Master class in Lip Fillers",
        description: "Advanced training in lip augmentation using dermal fillers. Learn to create natural-looking, beautiful lips with safe and effective techniques.",
        duration: "2 Days",
        level: "Advanced",
        category: "Facial Aesthetics",
        price: "₹40,000",
        features: [
          "Advanced lip filler techniques",
          "Anatomy and safety protocols",
          "Treatment planning",
          "Client consultation",
          "Complication management",
          "Results optimization"
        ],
        curriculum: [
          "Lip anatomy and structure",
          "Filler selection and techniques",
          "Treatment planning and assessment",
          "Injection protocols and safety",
          "Client consultation and consent",
          "Complications and management"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous filler experience",
          "Portfolio review"
        ],
        certification: "Master Certificate in Lip Fillers"
      },
      "facial-aesthetics/pg-diploma": {
        title: "PG Diploma in Facial Aesthetics",
        description: "Comprehensive postgraduate diploma in facial aesthetics covering all non-surgical treatments including injectables, threads, and advanced procedures.",
        duration: "4 Months",
        level: "Post Graduate",
        category: "Facial Aesthetics",
        price: "₹1,80,000",
        features: [
          "Complete facial aesthetics training",
          "Advanced injection techniques",
          "Thread lift procedures",
          "Business management",
          "Clinical experience",
          "Mentorship program"
        ],
        curriculum: [
          "Facial anatomy and aging",
          "Injectable treatments",
          "Thread lift techniques",
          "Advanced procedures",
          "Client consultation",
          "Business management",
          "Clinical practice"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Valid medical license",
          "Previous aesthetic experience preferred",
          "Portfolio review"
        ],
        certification: "Post Graduate Diploma in Facial Aesthetics"
      },
      "facial-aesthetics/cert-lipolytic": {
        title: "Certificate Course in Lipolytic Injections",
        description: "Foundation course in lipolytic injection techniques for fat reduction. Learn safe and effective methods for non-surgical body contouring.",
        duration: "2 Days",
        level: "Intermediate",
        category: "Facial Aesthetics",
        price: "₹45,000",
        features: [
          "Basic lipolytic techniques",
          "Anatomy and safety",
          "Treatment protocols",
          "Client consultation",
          "Safety procedures",
          "Aftercare protocols"
        ],
        curriculum: [
          "Fat anatomy and physiology",
          "Lipolytic agents and mechanisms",
          "Basic injection techniques",
          "Safety protocols",
          "Client consultation",
          "Aftercare procedures"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Basic injection experience",
          "Medical clearance"
        ],
        certification: "Certificate in Lipolytic Injections"
      },
      // Fellowship Courses
      "fellowship/permanent-cosmetology": {
        title: "Fellowship in Permanent Make up and Cosmetology",
        description: "Comprehensive fellowship program combining permanent makeup and cosmetology training. Perfect for those seeking expertise in both fields.",
        duration: "8 Months",
        level: "Fellowship",
        category: "Fellowship Courses",
        price: "₹2,00,000",
        features: [
          "Complete permanent makeup training",
          "Advanced cosmetology techniques",
          "Business management",
          "Clinical experience",
          "Mentorship program",
          "Research opportunities"
        ],
        curriculum: [
          "Permanent makeup techniques",
          "Advanced cosmetology",
          "Business management",
          "Client consultation",
          "Clinical practice",
          "Research methodology"
        ],
        requirements: [
          "High school diploma or equivalent",
          "Previous beauty industry experience preferred",
          "Valid ID proof",
          "Medical clearance"
        ],
        certification: "Fellowship in Permanent Makeup and Cosmetology"
      },
      "fellowship/facial-permanent-cosmetology": {
        title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology",
        description: "Comprehensive fellowship covering facial aesthetics, permanent makeup, and cosmetology. The ultimate program for complete aesthetic expertise.",
        duration: "12 Months",
        level: "Fellowship",
        category: "Fellowship Courses",
        price: "₹3,50,000",
        features: [
          "Complete aesthetic training",
          "All three specialties covered",
          "Advanced business management",
          "Clinical experience",
          "Research opportunities",
          "Mentorship program"
        ],
        curriculum: [
          "Facial aesthetics techniques",
          "Permanent makeup procedures",
          "Advanced cosmetology",
          "Business management",
          "Clinical practice",
          "Research and development"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Valid medical license",
          "Previous aesthetic experience",
          "Portfolio review"
        ],
        certification: "Fellowship in Facial Aesthetics, Permanent Makeup & Cosmetology"
      },
      "fellowship/facial-aesthetics": {
        title: "Fellowship in Facial Aesthetics",
        description: "Advanced fellowship program in facial aesthetics covering all non-surgical treatments and advanced procedures for comprehensive expertise.",
        duration: "6 Months",
        level: "Fellowship",
        category: "Fellowship Courses",
        price: "₹2,80,000",
        features: [
          "Advanced facial aesthetics training",
          "All injection techniques",
          "Thread lift procedures",
          "Business management",
          "Clinical experience",
          "Research opportunities"
        ],
        curriculum: [
          "Advanced facial anatomy",
          "Injectable treatments",
          "Thread lift techniques",
          "Advanced procedures",
          "Business management",
          "Clinical practice"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous aesthetic experience",
          "Portfolio review"
        ],
        certification: "Fellowship in Facial Aesthetics"
      },
      "fellowship/permanent-micropigmentation": {
        title: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
        description: "Comprehensive fellowship combining permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques for complete expertise.",
        duration: "10 Months",
        level: "Fellowship",
        category: "Fellowship Courses",
        price: "₹3,00,000",
        features: [
          "Complete permanent makeup training",
          "Advanced cosmetology",
          "Medical micropigmentation",
          "Plasma pen technology",
          "Business management",
          "Clinical experience"
        ],
        curriculum: [
          "Permanent makeup techniques",
          "Advanced cosmetology",
          "Medical micropigmentation",
          "Plasma pen procedures",
          "Business management",
          "Clinical practice"
        ],
        requirements: [
          "Medical degree or equivalent",
          "Valid medical license",
          "Previous aesthetic experience",
          "Portfolio review"
        ],
        certification: "Fellowship in Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen"
      },
      "fellowship/facial-permanent-micropigmentation": {
        title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
        description: "The ultimate fellowship program covering all aspects of aesthetic medicine including facial aesthetics, permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques.",
        duration: "15 Months",
        level: "Fellowship",
        category: "Fellowship Courses",
        price: "₹4,50,000",
        features: [
          "Complete aesthetic training",
          "All specialties covered",
          "Advanced business management",
          "Clinical experience",
          "Research opportunities",
          "Mentorship program"
        ],
        curriculum: [
          "Facial aesthetics techniques",
          "Permanent makeup procedures",
          "Advanced cosmetology",
          "Medical micropigmentation",
          "Plasma pen technology",
          "Business management",
          "Clinical practice",
          "Research methodology"
        ],
        requirements: [
          "Medical degree required",
          "Valid medical license",
          "Previous aesthetic experience",
          "Portfolio review"
        ],
        certification: "Fellowship in Facial Aesthetics, Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen"
      }
    };

    const course = courseDataMap[coursePath];
    if (course) {
      setCourseData(course);
    } else {
      setCourseData(null);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading course information...</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">Course Not Found</h1>
          <p className="text-luxury-muted mb-8">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  flex flex-col">
            <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-luxury-dark to-luxury-gold text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              {courseData.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {courseData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {courseData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{courseData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>{courseData.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Batch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-muted leading-relaxed">
                  {courseData.description}
                </p>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum</CardTitle>
                <CardDescription>
                  What you'll learn in this comprehensive course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>
                  Prerequisites for enrolling in this course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseData.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Duration:</span>
                  <span className="font-semibold">{courseData.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Level:</span>
                  <Badge variant="outline">{courseData.level}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Category:</span>
                  <span className="font-semibold">{courseData.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Price:</span>
                  <span className="text-2xl font-bold text-luxury-gold">{courseData.price}</span>
                </div>
                <Button className="w-full" size="lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Course Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certification */}
            <Card>
              <CardHeader>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-muted text-sm">
                  {courseData.certification}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
      <Footer />


    </div>
  );
};

export default CoursePage;
