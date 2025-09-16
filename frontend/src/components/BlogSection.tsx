import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Profhilo – The Science Behind Skin Hydration and Bio-Remodeling",
    description:
      "What is Profhilo? Profhilo is a next-generation injectable treatment design...",
    image: "/src/assets/blogs/1.jfif",
  },
  {
    id: 2,
    title: "PDRN – A Regenerative Approach to Aesthetic Care",
    description:
      "Understanding PDRN and its role in skin rejuvenation in aesthetic medicine...",
    image: "/src/assets/blogs/2.jfif",
  },
  {
    id: 3,
    title: "From Botox to Laser Hair Reduction: Explore Our Services",
    description:
      "In today’s fast-paced world, aesthetic treatments have become more than...",
    image: "/src/assets/blogs/3.jfif",
  },
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMore = (id: number) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Our Latest Blog
          </h2>
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 border-2 border-[#D4AF37]"
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-playfair font-bold text-[#3B2F2F] mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[#555555] text-sm mb-4 line-clamp-2 font-lato">
                  {blog.description}
                </p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="text-sm font-medium text-[#D4AF37] hover:text-[#B8912C] transition-colors duration-200"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
