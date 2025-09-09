import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users, Clock } from "lucide-react";

// 👇 Import Header & Footer
import Header from "../components/Header";
import Footer from "../components/Footer";

const CourseIndex: React.FC = () => {
  const courseCategories = [
    // ... (same as before)
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Content */}
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
                          <Link to={course.link}>View Course Details</Link>
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseIndex;
