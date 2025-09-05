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
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(
    null
  );

  const teamMembers: TeamMemberData[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Director",
      image: "/src/assets/team-member/sania-fotor.jpeg",
      shortDescription:
        "Leading aesthetic specialist with over 15 years of experience in cosmetic procedures and patient care.",
      fullDescription:
        "Dr. Sarah Johnson is a board-certified aesthetic specialist with over 15 years of experience in cosmetic procedures. She graduated from Harvard Medical School and completed her residency at Johns Hopkins Hospital. Dr. Johnson specializes in non-invasive treatments, laser therapies, and advanced facial rejuvenation techniques. She has published numerous research papers in leading medical journals and is a member of the American Society for Aesthetic Plastic Surgery. Her passion for helping patients achieve their aesthetic goals while maintaining the highest standards of safety and care has made her a trusted leader in the field.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Senior Aesthetic Surgeon",
      image: "/src/assets/team-member/Aastha_ .jpeg",
      shortDescription:
        "Expert in minimally invasive procedures and advanced surgical techniques for facial and body contouring.",
      fullDescription:
        "Dr. Michael Chen is a renowned aesthetic surgeon with expertise in minimally invasive procedures and advanced surgical techniques. He completed his medical degree at Stanford University and his plastic surgery fellowship at the Mayo Clinic. Dr. Chen has performed over 5,000 successful procedures and is known for his innovative approaches to facial and body contouring. He regularly speaks at international conferences and has trained numerous surgeons in advanced techniques. His commitment to patient safety and natural-looking results has earned him recognition as one of the top aesthetic surgeons in the region.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Dermatology Specialist",
      image: "/src/assets/team-member/Dr. Anshul.webp",
      shortDescription:
        "Board-certified dermatologist specializing in skin health, anti-aging treatments, and medical aesthetics.",
      fullDescription:
        "Dr. Emily Rodriguez is a board-certified dermatologist with extensive experience in medical aesthetics and skin health. She received her medical degree from Columbia University and completed her dermatology residency at Mount Sinai Hospital. Dr. Rodriguez specializes in anti-aging treatments, skin cancer prevention, and advanced dermatological procedures. She is certified in multiple laser technologies and has developed innovative treatment protocols for various skin conditions. Her holistic approach to skin health combines medical expertise with aesthetic artistry, helping patients achieve healthy, radiant skin at every age.",
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      role: "Anesthesiologist",
      image: "/src/assets/team-member/Prabhneet.webp",
      shortDescription:
        "Specialized in patient safety and comfort during aesthetic procedures with over 12 years of experience.",
      fullDescription:
        "Dr. James Thompson is a board-certified anesthesiologist specializing in aesthetic procedures and patient safety. He graduated from Yale Medical School and completed his anesthesiology residency at Massachusetts General Hospital. Dr. Thompson has over 12 years of experience ensuring patient comfort and safety during various aesthetic procedures. He is certified in advanced cardiac life support and has extensive training in managing patients with complex medical histories. His meticulous attention to detail and compassionate approach to patient care ensures that every procedure is performed with the highest level of safety and comfort.",
    },
  ];

  const openModal = (member: TeamMemberData) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  // ✅ Auto-scroll Carousel
  useEffect(() => {
    const scrollContainer = document.getElementById("team-carousel");
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector("div");
    if (!card) return;

    // card width + gap (gap-6 = 24px)
    const cardWidth = (card as HTMLElement).offsetWidth + 24;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });

      // Reset back to start if reached end
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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our highly qualified professionals dedicated to providing
            exceptional aesthetic care
          </p>
        </div>

        {/* Carousel */}
        <div
          id="team-carousel"
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-transform duration-300 snap-center"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
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

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="relative bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              >
                <X size={28} />
              </button>

              {/* Modal Content */}
              <div>
                <div className="h-56 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedMember.fullDescription}
                  </p>
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
