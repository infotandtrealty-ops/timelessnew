import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users, Clock } from "lucide-react";

const CourseIndex: React.FC = () => {
  const courseCategories = [
    {
      title: "Permanent Makeup",
      description: "Master the art of permanent makeup with our comprehensive courses",
      courses: [
        { name: "Master's in Permanent Eyebrows", link: "/courses/permanent-makeup/masters-eyebrows", duration: "5 Days", price: "₹45,000" },
        { name: "Master class in Scalp Micropigmentation", link: "/courses/permanent-makeup/master-scalp", duration: "4 Days", price: "₹55,000" },
        { name: "PG Diploma in Permanent Make up", link: "/courses/permanent-makeup/pg-diploma", duration: "10 Days", price: "₹85,000" },
        { name: "Certificate Course in Lip Micropigmentation", link: "/courses/permanent-makeup/cert-lip", duration: "3 Days", price: "₹35,000" },
        { name: "Certificate in Brows and Lash Lift", link: "/courses/permanent-makeup/cert-brows-lash", duration: "2 Days", price: "₹25,000" },
        { name: "Certificate in Scalp Micropigmentation", link: "/courses/permanent-makeup/cert-scalp", duration: "3 Days", price: "₹40,000" },
        { name: "Certificate course in Laser Hair Reduction", link: "/courses/permanent-makeup/cert-laser-hair", duration: "4 Days", price: "₹50,000" },
        { name: "Certificate Course Skin Technicial", link: "/courses/permanent-makeup/cert-skin-tech", duration: "5 Days", price: "₹45,000" }
      ]
    },
    {
      title: "Cosmetology",
      description: "Advanced cosmetology techniques and treatments",
      courses: [
        { name: "Master Class in Chemical Peels", link: "/courses/cosmetology/master-chemical-peels", duration: "3 Days", price: "₹35,000" },
        { name: "Diploma in Advanced Cosmetology", link: "/courses/cosmetology/diploma-advanced", duration: "6 Months", price: "₹1,20,000" },
        { name: "Certificate in Professional Cosmetology", link: "/courses/cosmetology/cert-professional", duration: "3 Months", price: "₹75,000" },
        { name: "Certificate Course in Medicated Hydrafacial", link: "/courses/cosmetology/cert-hydrafacial", duration: "2 Days", price: "₹30,000" },
        { name: "Certificate Courses in Chemical Peels", link: "/courses/cosmetology/cert-chemical-peels", duration: "2 Days", price: "₹25,000" }
      ]
    },
    {
      title: "Facial Aesthetics",
      description: "Non-surgical facial treatments and injectables",
      courses: [
        { name: "Masters in Facial Aesthetics", link: "/courses/facial-aesthetics/masters", duration: "6 Months", price: "₹2,50,000" },
        { name: "Master Class In Lipolytic Injections", link: "/courses/facial-aesthetics/master-lipolytic", duration: "3 Days", price: "₹60,000" },
        { name: "Master Class in Nose correction", link: "/courses/facial-aesthetics/master-nose", duration: "2 Days", price: "₹45,000" },
        { name: "Master Class In Acne Scar Treatment", link: "/courses/facial-aesthetics/master-acne", duration: "3 Days", price: "₹50,000" },
        { name: "Masters Class in Plasma Pen", link: "/courses/facial-aesthetics/master-plasma", duration: "2 Days", price: "₹40,000" },
        { name: "Master class in Under eye rejuvenation", link: "/courses/facial-aesthetics/master-undereye", duration: "2 Days", price: "₹45,000" },
        { name: "Master class in Lip Fillers", link: "/courses/facial-aesthetics/master-fillers", duration: "2 Days", price: "₹40,000" },
        { name: "PG Diploma in Facial Aesthetics", link: "/courses/facial-aesthetics/pg-diploma", duration: "4 Months", price: "₹1,80,000" },
        { name: "Certificate Course in Lipolytic Injections", link: "/courses/facial-aesthetics/cert-lipolytic", duration: "2 Days", price: "₹45,000" }
      ]
    },
    {
      title: "Fellowship Courses",
      description: "Comprehensive fellowship programs for complete expertise",
      courses: [
        { name: "Fellowship in Permanent Make up and Cosmetology", link: "/courses/fellowship/permanent-cosmetology", duration: "8 Months", price: "₹2,00,000" },
        { name: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology", link: "/courses/fellowship/facial-permanent-cosmetology", duration: "12 Months", price: "₹3,50,000" },
        { name: "Fellowship in Facial Aesthetics", link: "/courses/fellowship/facial-aesthetics", duration: "6 Months", price: "₹2,80,000" },
        { name: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/permanent-micropigmentation", duration: "10 Months", price: "₹3,00,000" },
        { name: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/facial-permanent-micropigmentation", duration: "15 Months", price: "₹4,50,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-luxury-dark to-luxury-gold text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Aesthetic Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Master the art of aesthetic medicine with our comprehensive training programs
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>27+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-luxury-muted max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">
                        {course.name}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <Badge variant="secondary" className="text-luxury-gold">
                            {course.price}
                          </Badge>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={course.link}>
                          View Course Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Journey?</CardTitle>
              <CardDescription>
                Join thousands of professionals who have transformed their careers with our courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  Contact Us
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseIndex;

