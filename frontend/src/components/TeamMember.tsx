import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const TeamMember: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const teamMembers: TeamMemberData[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Director",
      image: "/src/assets/team-member/sania-fotor.jpeg",
      shortDescription:
        "Leading aesthetic specialist with over 15 years of experience in cosmetic procedures and patient care.",
      fullDescription:
        "Dr. Sarah Johnson is a board-certified aesthetic specialist with over 15 years of experience in cosmetic procedures...",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Senior Aesthetic Surgeon",
      image: "/src/assets/team-member/Aastha_ .jpeg",
      shortDescription:
        "Expert in minimally invasive procedures and advanced surgical techniques for facial and body contouring.",
      fullDescription:
        "Dr. Michael Chen is a renowned aesthetic surgeon with expertise in minimally invasive procedures...",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Dermatology Specialist",
      image: "/src/assets/team-member/Dr. Anshul.webp",
      shortDescription:
        "Board-certified dermatologist specializing in skin health, anti-aging treatments, and medical aesthetics.",
      fullDescription:
        "Dr. Emily Rodriguez is a board-certified dermatologist with extensive experience in medical aesthetics...",
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      role: "Anesthesiologist",
      image: "/src/assets/team-member/Prabhneet.webp",
      shortDescription:
        "Specialized in patient safety and comfort during aesthetic procedures with over 12 years of experience.",
      fullDescription:
        "Dr. James Thompson is a board-certified anesthesiologist specializing in aesthetic procedures...",
    },
  ];

  const openModal = (member: TeamMemberData) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  // ✅ Auto-scroll Carousel (always left → right → reset to 0)
  useEffect(() => {
    const scrollContainer = document.getElementById("team-carousel");
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector("div");
    if (!card) return;

    const cardWidth = (card as HTMLElement).offsetWidth + 24;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < teamMembers.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }

      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our highly qualified professionals dedicated to providing exceptional aesthetic care
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          <div
            id="team-carousel"
            className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4"
            style={{ width: "100%", maxWidth: "960px" }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 snap-center"
              >
                {/* Image */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {member.shortDescription}
                  </p>
                  <button
                    onClick={() => openModal(member)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              >
                <X size={28} />
              </button>

              {/* Modal Content */}
              <div>
                {/* ✅ Fixed image (centered, no crop distortion) */}
                <div className="w-full bg-black flex items-center justify-center rounded-t-2xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="max-h-[350px] w-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedMember.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{selectedMember.role}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedMember.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
