import React, { useEffect } from "react";

interface ResultItem {
  id: number;
  title: string;
  image: string;
}

const BeforeAfterResults: React.FC = () => {
  const results: ResultItem[] = [
    {
      id: 1,
      title: "Lip Filler",
      image: "/src/assets/before-after/1.webp",
    },
    {
      id: 2,
      title: "Full Face Lift",
      image: "/src/assets/before-after/2.webp",
    },
    {
      id: 3,
      title: "Permanent Eyebrows",
      image: "/src/assets/before-after/3.webp",
    },
    {
      id: 4,
      title: "Chin Filler",
      image: "/src/assets/before-after/4.webp",
    },
    // Add more items as needed
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("results-carousel");
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector("div");
    if (!card) return;

    const cardWidth = (card as HTMLElement).offsetWidth + 24; // 24px gap
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });

      // Reset when reaching end
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - cardWidth
      ) {
        currentIndex = 0;
        setTimeout(() => {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }, 600);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            BEFORE & AFTER RESULTS
          </h2>
        </div>

        {/* Carousel */}
        <div
          id="results-carousel"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth justify-center"
          >
          {results.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[250px] bg-white rounded-lg shadow-md overflow-hidden snap-center"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterResults ;
