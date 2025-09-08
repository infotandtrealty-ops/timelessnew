import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Filter, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

const ShopPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract category from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const category = pathSegments[1]; // 'permanent-makeup', 'cosmetology', 'facial-aesthetics', or 'all'
    
    if (category && category !== 'shop') {
      setActiveCategory(category);
      loadProducts(category);
    } else {
      setActiveCategory('all');
      loadProducts('all');
    }
  }, [location.pathname]);

  const loadProducts = (category: string) => {
    setLoading(true);
    
    // Sample products data
    const allProducts: Product[] = [
      // Permanent Makeup Products
      {
        id: 'pm-1',
        name: 'Professional Microblading Kit',
        description: 'Complete kit for microblading professionals with all essential tools',
        price: '₹15,000',
        originalPrice: '₹18,000',
        image: '/images/courses-banner.jpeg',
        category: 'permanent-makeup',
        rating: 4.8,
        reviews: 24,
        inStock: true,
        tags: ['professional', 'kit', 'microblading']
      },
      {
        id: 'pm-2',
        name: 'Permanent Makeup Pigments Set',
        description: 'High-quality pigments for permanent makeup procedures',
        price: '₹8,500',
        image: '/images/courses-banner.jpeg',
        category: 'permanent-makeup',
        rating: 4.9,
        reviews: 18,
        inStock: true,
        tags: ['pigments', 'colors', 'professional']
      },
      {
        id: 'pm-3',
        name: 'Aftercare Healing Ointment',
        description: 'Specialized ointment for post-treatment care and healing',
        price: '₹2,500',
        image: '/images/courses-banner.jpeg',
        category: 'permanent-makeup',
        rating: 4.7,
        reviews: 32,
        inStock: true,
        tags: ['aftercare', 'healing', 'ointment']
      },
      // Cosmetology Products
      {
        id: 'cos-1',
        name: 'HydraFacial Treatment Kit',
        description: 'Complete HydraFacial treatment kit for professional use',
        price: '₹25,000',
        originalPrice: '₹30,000',
        image: '/images/courses-banner.jpeg',
        category: 'cosmetology',
        rating: 4.9,
        reviews: 15,
        inStock: true,
        tags: ['hydrafacial', 'treatment', 'professional']
      },
      {
        id: 'cos-2',
        name: 'Chemical Peel Solutions Set',
        description: 'Professional-grade chemical peel solutions for various skin types',
        price: '₹12,000',
        image: '/images/courses-banner.jpeg',
        category: 'cosmetology',
        rating: 4.8,
        reviews: 22,
        inStock: true,
        tags: ['chemical peel', 'solutions', 'professional']
      },
      {
        id: 'cos-3',
        name: 'LED Light Therapy Device',
        description: 'Advanced LED light therapy device for skin rejuvenation',
        price: '₹45,000',
        image: '/images/courses-banner.jpeg',
        category: 'cosmetology',
        rating: 4.6,
        reviews: 8,
        inStock: false,
        tags: ['LED therapy', 'device', 'rejuvenation']
      },
      // Facial Aesthetics Products
      {
        id: 'fa-1',
        name: 'Dermal Filler Training Kit',
        description: 'Complete training kit for dermal filler procedures',
        price: '₹35,000',
        originalPrice: '₹40,000',
        image: '/images/courses-banner.jpeg',
        category: 'facial-aesthetics',
        rating: 4.9,
        reviews: 12,
        inStock: true,
        tags: ['dermal filler', 'training', 'kit']
      },
      {
        id: 'fa-2',
        name: 'Botox Injection Kit',
        description: 'Professional Botox injection kit with all necessary components',
        price: '₹18,000',
        image: '/images/courses-banner.jpeg',
        category: 'facial-aesthetics',
        rating: 4.7,
        reviews: 19,
        inStock: true,
        tags: ['botox', 'injection', 'kit']
      },
      {
        id: 'fa-3',
        name: 'Thread Lift Materials Set',
        description: 'High-quality thread lift materials for facial lifting procedures',
        price: '₹22,000',
        image: '/images/courses-banner.jpeg',
        category: 'facial-aesthetics',
        rating: 4.8,
        reviews: 14,
        inStock: true,
        tags: ['thread lift', 'materials', 'facial lifting']
      }
    ];

    let filteredProducts = allProducts;
    if (category !== 'all') {
      filteredProducts = allProducts.filter(product => product.category === category);
    }

    setProducts(filteredProducts);
    setLoading(false);
  };

  const categories = [
    { id: 'all', name: 'All Products', count: 9 },
    { id: 'permanent-makeup', name: 'Permanent Makeup', count: 3 },
    { id: 'cosmetology', name: 'Cosmetology', count: 3 },
    { id: 'facial-aesthetics', name: 'Facial Aesthetics', count: 3 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative text-white py-20 bg-gradient-to-r from-luxury-gold to-luxury-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Shop
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Premium products and equipment for aesthetic professionals
            </p>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => {
                      setActiveCategory(category.id);
                      loadProducts(category.id);
                    }}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Under ₹10,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">₹10,000 - ₹25,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Above ₹25,000</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">In Stock</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">On Sale</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-muted" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        Sale
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-luxury-gold fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-luxury-muted">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-luxury-gold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-luxury-muted line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1" 
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                      <Button variant="outline" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Products Message */}
            {products.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-luxury-dark mb-2">No products found</h3>
                <p className="text-luxury-muted">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-luxury-gold py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Products
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest product updates and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ShopPage;
