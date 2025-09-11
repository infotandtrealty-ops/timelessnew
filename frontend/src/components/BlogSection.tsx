import React from "react";
import { useNavigate } from "react-router-dom";

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
    navigate(`/blogs/${id}`); // blog detail page route
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Our Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {blog.description}
                </p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="text-sm font-medium text-yellow-600 hover:text-yellow-700"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
