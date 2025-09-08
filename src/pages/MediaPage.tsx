import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  tags: string[];
}

const MediaPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'blogs' | 'gallery'>('blogs');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract media type from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const mediaType = pathSegments[1]; // 'blogs' or 'gallery'
    
    if (mediaType === 'blogs') {
      setActiveTab('blogs');
      loadBlogPosts();
    } else if (mediaType === 'gallery') {
      setActiveTab('gallery');
      loadGalleryItems();
    } else {
      setActiveTab('blogs');
      loadBlogPosts();
    }
  }, [location.pathname]);

  const loadBlogPosts = () => {
    setLoading(true);
    
    // Sample blog posts data
    const posts: BlogPost[] = [
      {
        id: '1',
        title: 'The Complete Guide to Permanent Makeup Aftercare',
        excerpt: 'Learn everything you need to know about caring for your permanent makeup to ensure the best results and longevity.',
        content: 'Permanent makeup aftercare is crucial for achieving optimal results...',
        author: 'Dr. Anshul',
        date: '2024-01-15',
        category: 'Permanent Makeup',
        image: '/assets/blogs/1.jfif',
        readTime: '5 min read',
        tags: ['aftercare', 'permanent makeup', 'tips']
      },
      {
        id: '2',
        title: 'Understanding Different Types of Chemical Peels',
        excerpt: 'Discover the various types of chemical peels available and which one might be right for your skin concerns.',
        content: 'Chemical peels are one of the most effective treatments for skin rejuvenation...',
        author: 'Dr. Anshul',
        date: '2024-01-10',
        category: 'Cosmetology',
        image: '/assets/blogs/2.jfif',
        readTime: '7 min read',
        tags: ['chemical peels', 'skin care', 'cosmetology']
      },
      {
        id: '3',
        title: 'Botox vs Fillers: What\'s the Difference?',
        excerpt: 'A comprehensive comparison of Botox and dermal fillers to help you understand which treatment is right for you.',
        content: 'Botox and dermal fillers are both popular aesthetic treatments...',
        author: 'Dr. Anshul',
        date: '2024-01-05',
        category: 'Facial Aesthetics',
        image: '/assets/blogs/3.jfif',
        readTime: '6 min read',
        tags: ['botox', 'fillers', 'facial aesthetics']
      },
      {
        id: '4',
        title: 'The Science Behind HydraFacial Treatment',
        excerpt: 'Explore the advanced technology and benefits of HydraFacial treatment for healthy, glowing skin.',
        content: 'HydraFacial is a revolutionary skin treatment that combines cleansing...',
        author: 'Dr. Anshul',
        date: '2024-01-01',
        category: 'Cosmetology',
        image: '/assets/blogs/4.jfif',
        readTime: '4 min read',
        tags: ['hydrafacial', 'skin care', 'technology']
      }
    ];
    
    setBlogPosts(posts);
    setLoading(false);
  };

  const loadGalleryItems = () => {
    setLoading(true);
    
    // Sample gallery items data
    const items: GalleryItem[] = [
      {
        id: '1',
        title: 'Before & After: Microblading Results',
        description: 'Stunning transformation showing natural-looking eyebrow enhancement',
        image: '/assets/before-after/1.webp',
        category: 'Permanent Makeup',
        date: '2024-01-15',
        tags: ['microblading', 'eyebrows', 'before-after']
      },
      {
        id: '2',
        title: 'Chemical Peel Transformation',
        description: 'Amazing skin improvement after professional chemical peel treatment',
        image: '/assets/before-after/2.webp',
        category: 'Cosmetology',
        date: '2024-01-10',
        tags: ['chemical peel', 'skin care', 'transformation']
      },
      {
        id: '3',
        title: 'Botox Treatment Results',
        description: 'Smooth, youthful appearance achieved with Botox treatment',
        image: '/assets/before-after/3.webp',
        category: 'Facial Aesthetics',
        date: '2024-01-05',
        tags: ['botox', 'anti-aging', 'results']
      },
      {
        id: '4',
        title: 'HydraFacial Glow',
        description: 'Radiant, healthy skin after HydraFacial treatment',
        image: '/assets/before-after/4.webp',
        category: 'Cosmetology',
        date: '2024-01-01',
        tags: ['hydrafacial', 'glowing skin', 'results']
      }
    ];
    
    setGalleryItems(items);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading content...</p>
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
              {activeTab === 'blogs' ? 'Our Blog' : 'Gallery'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {activeTab === 'blogs' 
                ? 'Stay updated with the latest trends, tips, and insights in aesthetic medicine'
                : 'Explore our amazing before & after results and treatment galleries'
              }
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4">
              <Button
                variant={activeTab === 'blogs' ? 'default' : 'outline'}
                onClick={() => {
                  setActiveTab('blogs');
                  loadBlogPosts();
                }}
                className="text-white border-white hover:bg-white hover:text-luxury-dark"
              >
                Blogs
              </Button>
              <Button
                variant={activeTab === 'gallery' ? 'default' : 'outline'}
                onClick={() => {
                  setActiveTab('gallery');
                  loadGalleryItems();
                }}
                className="text-white border-white hover:bg-white hover:text-luxury-dark"
              >
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'blogs' ? (
          <div className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-muted" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-luxury-muted">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-luxury-muted mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                      <Link to={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Gallery Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm">Permanent Makeup</Button>
                <Button variant="outline" size="sm">Cosmetology</Button>
                <Button variant="outline" size="sm">Facial Aesthetics</Button>
                <Button variant="outline" size="sm">Dentistry</Button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-luxury-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                      <Link to={`/gallery/${item.id}`} className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    
      <Footer />
    </div>
  );
};

export default MediaPage;
