import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
};

// Temporary in-file lookup; will be replaced by shared data source
import { allProducts } from "@/pages/shopData";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const product: Product | undefined = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <p>Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    // TODO: add to cart state
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-xl border" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-2xl text-luxury-gold mb-6">{product.price}</p>
            <p className="text-gray-700 mb-8">{product.description || "Product details coming soon."}</p>
            <div className="flex gap-3">
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;


