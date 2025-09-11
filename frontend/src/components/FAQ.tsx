import React, { useState } from "react";

const faqs = [
  {
    question: "Does permanent makeup hurt?",
    answer:
      "Some discomfort may be experienced, but numbing agents are used to minimize pain.",
  },
  {
    question: "How long does the procedure take?",
    answer:
      "The procedure usually takes 1–2 hours depending on the area being treated.",
  },
  {
    question: "Are there any risks involved?",
    answer:
      "As with any cosmetic procedure, there are risks including infection, allergic reactions, and dissatisfaction with results. Choosing a skilled and licensed technician helps minimize these risks.",
  },
  {
    question: "What treatments fall under facial aesthetics?",
    answer:
      "Facial aesthetics includes treatments like Botox, dermal fillers, skin rejuvenation, and more.",
  },
  {
    question: "Are facial aesthetic treatments safe?",
    answer:
      "Yes, when performed by licensed professionals, these treatments are considered safe.",
  },
  {
    question: "At what age should I consider facial aesthetic treatments?",
    answer:
      "There is no fixed age. It depends on individual needs, usually after mid-20s when aging signs appear.",
  },
  {
    question: "What are the benefits of visiting a skin and hair clinic?",
    answer:
      "You get expert advice, professional treatments, and access to advanced technology for better skin and hair care.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-yellow-300 rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "✖" : "＋"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ ;
