import React, { useState } from "react";
import useScrollToTop from "./useScrollToTop";
const Faq = () => {
  useScrollToTop();
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const faqs = [
    { question: "What is Teach for Good?", answer: "Teach for Good is a platform connecting volunteers with NGOs focused on education." },
    { question: "How can I volunteer?", answer: "You can sign up on our website and apply for volunteering opportunities with registered NGOs." },
    { question: "Is there any fee for joining?", answer: "No, joining as a volunteer is completely free of cost." },
    { question: "Can I contribute without teaching?", answer: "Yes! You can help by fundraising, managing events, or donating educational materials." },
    { question: "How do NGOs register on the platform?", answer: "NGOs can sign up and submit their details through our registration portal." },
    { question: "Who can volunteer?", answer: "Anyone passionate about education and willing to make a difference can volunteer." }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '30px' }}>
      <h2 className="text-center mb-4"> ❓ Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="card mb-3">
            <div
              className="card-header bg-secondary text-white"
              onClick={() => toggleQuestion(index)}
              style={{ cursor: "pointer" }}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="card-body">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;





