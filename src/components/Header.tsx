import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, ChevronDown, ChevronRight } from "lucide-react";

interface SubmenuItem {
  label: string;
  link?: string;
  submenu?: SubmenuItem[];
}

interface MenuItem {
  label: string;
  link?: string;
  submenu?: SubmenuItem[];
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const navigationItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Courses",
      submenu: [
        {
          label: "Permanent Makeup",
          submenu: [
            { label: "Master's in Permanent Eyebrows", link: "/courses/permanent-makeup/masters-eyebrows" },
            { label: "Master class in Scalp Micropigmentation", link: "/courses/permanent-makeup/master-scalp" },
            { label: "PG Diploma in Permanent Make up", link: "/courses/permanent-makeup/pg-diploma" },
            { label: "Certificate Course in Lip Micropigmentation", link: "/courses/permanent-makeup/cert-lip" },
            { label: "Certificate in Brows and Lash Lift", link: "/courses/permanent-makeup/cert-brows-lash" },
            { label: "Certificate in Scalp Micropigmentation", link: "/courses/permanent-makeup/cert-scalp" },
            { label: "Certificate course in Laser Hair Reduction", link: "/courses/permanent-makeup/cert-laser-hair" },
            { label: "Certificate Course Skin Technicial", link: "/courses/permanent-makeup/cert-skin-tech" }
          ]
        },
        {
          label: "Cosmetology",
          submenu: [
            { label: "Master Class in Chemical Peels", link: "/courses/cosmetology/master-chemical-peels" },
            { label: "Diploma in Advanced Cosmetology", link: "/courses/cosmetology/diploma-advanced" },
            { label: "Certificate in Professional Cosmetology", link: "/courses/cosmetology/cert-professional" },
            { label: "Certificate Course in Medicated Hydrafacial", link: "/courses/cosmetology/cert-hydrafacial" },
            { label: "Certificate Courses in Chemical Peels", link: "/courses/cosmetology/cert-chemical-peels" }
          ]
        },
        {
          label: "Facial Aesthetics",
          submenu: [
            { label: "Masters in Facial Aesthetics", link: "/courses/facial-aesthetics/masters" },
            { label: "Master Class In Lipolytic Injections", link: "/courses/facial-aesthetics/master-lipolytic" },
            { label: "Master Class in Nose correction", link: "/courses/facial-aesthetics/master-nose" },
            { label: "Master Class In Acne Scar Treatment", link: "/courses/facial-aesthetics/master-acne" },
            { label: "Masters Class in Plasma Pen", link: "/courses/facial-aesthetics/master-plasma" },
            { label: "Master class in Under eye rejuvenation", link: "/courses/facial-aesthetics/master-undereye" },
            { label: "Master class in Lip Fillers", link: "/courses/facial-aesthetics/master-fillers" },
            { label: "PG Diploma in Facial Aesthetics", link: "/courses/facial-aesthetics/pg-diploma" },
            { label: "Certificate Course in Lipolytic Injections", link: "/courses/facial-aesthetics/cert-lipolytic" }
          ]
        },
        {
          label: "Fellowship Courses",
          submenu: [
            { label: "Fellowship in Permanent Make up and Cosmetology", link: "/courses/fellowship/permanent-cosmetology" },
            { label: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology", link: "/courses/fellowship/facial-permanent-cosmetology" },
            { label: "Fellowship in Facial Aesthetics", link: "/courses/fellowship/facial-aesthetics" },
            { label: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/permanent-micropigmentation" },
            { label: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/facial-permanent-micropigmentation" }
          ]
        }
      ]
    },
    {
      label: "Services",
      submenu: [
        { label: "Permanent Makeup Services", link: "/services/permanent-makeup" },
        { label: "Cosmetology Services", link: "/services/cosmetology" },
        { label: "Facial Aesthetics Services", link: "/services/facial-aesthetics" },
        { label: "Laser & Skin Services", link: "/services/laser-skin" }
      ]
    },
    { label: "Media", link: "/media" },
    { label: "Academy", link: "/academy" },
    { label: "Contact Us", link: "/contact" },
    { label: "Our Clinics", link: "/clinics" },
    { label: "Shop", link: "/shop" }
  ];

  const toggleMobileSubmenu = (itemLabel: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItems([]);
  };

  return (
    <header className="bg-background shadow-subtle sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="border-b border-border py-2 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-luxury-muted">
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +91 8750027070
              </span>
              <span>info@timelessaesthetics.in</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="luxury-ghost" size="sm">We Are Featured</Button>
              <Button variant="luxury" size="sm">Login</Button>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src="src/assets/logo-1.png"
                  alt="Timeless Aesthetics Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.link || "#"}
                    className="text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </a>
                  
                  {/* First Level Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.label} className="relative group/sub">
                            <a
                              href={subItem.link || "#"}
                              className="block px-4 py-2 text-luxury-dark hover:text-luxury-gold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                            >
                              {subItem.label}
                              {subItem.submenu && <ChevronRight className="h-4 w-4" />}
                            </a>
                            
                            {/* Second Level Dropdown */}
                            {subItem.submenu && (
                              <div className="absolute top-0 left-full ml-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ease-in-out transform scale-95 group-hover/sub:scale-100 z-50">
                                <div className="py-2">
                                  {subItem.submenu.map((subSubItem) => (
                                    <a
                                      key={subSubItem.label}
                                      href={subSubItem.link || "#"}
                                      className="block px-4 py-2 text-luxury-dark hover:text-luxury-gold hover:bg-gray-50 transition-colors duration-200 text-sm"
                                    >
                                      {subSubItem.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />

          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg text-luxury-dark">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="w-full flex items-center justify-between text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-2"
                      >
                        {item.label}
                        {expandedMobileItems.includes(item.label) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      {/* First Level Mobile Submenu */}
                      {expandedMobileItems.includes(item.label) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.label}>
                              {subItem.submenu ? (
                                <div>
                                  <button
                                    onClick={() => toggleMobileSubmenu(`${item.label}-${subItem.label}`)}
                                    className="w-full flex items-center justify-between text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-1 text-sm"
                                  >
                                    {subItem.label}
                                    {expandedMobileItems.includes(`${item.label}-${subItem.label}`) ? (
                                      <ChevronDown className="h-3 w-3" />
                                    ) : (
                                      <ChevronRight className="h-3 w-3" />
                                    )}
                                  </button>
                                  
                                  {/* Second Level Mobile Submenu */}
                                  {expandedMobileItems.includes(`${item.label}-${subItem.label}`) && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      {subItem.submenu.map((subSubItem) => (
                                        <a
                                          key={subSubItem.label}
                                          href={subSubItem.link || "#"}
                                          className="block text-luxury-dark hover:text-luxury-gold transition-colors duration-300 py-1 text-xs"
                                          onClick={closeMobileMenu}
                                        >
                                          {subSubItem.label}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <a
                                  href={subItem.link || "#"}
                                  className="block text-luxury-dark hover:text-luxury-gold transition-colors duration-300 py-1 text-sm"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.label}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link || "#"}
                      className="block text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
