"use client";

import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "Q: What makes DIANO different from other jewelry brands?",
    answer:
      "DIANO specializes in rare, ethically sourced gemstones, cinematic AI visuals, and exclusive collections curated by gemologists. Each piece is one-of-a-kind and designed to last a lifetime.",
  },
  {
    question: "Q: Are all your gemstones natural?",
    answer:
      "Yes. All DIANO gemstones are 100% natural and ethically sourced. Each gem undergoes a rigorous selection and certification process to ensure exceptional quality and authenticity.",
  },
  {
    question: "Q: Where is DIANO based?",
    answer:
      "DIANO is proudly based in India, with a private design studio that blends traditional craftsmanship with global aesthetics. Our services are available both in-person and virtually for clients worldwide.",
  },
  {
    question: "Q: Can I request a custom piece?",
    answer:
      "Absolutely. DIANO specializes in bespoke jewelry. Whether it’s a redesign of a cherished heirloom or a brand-new vision, our designers work with you to create a piece that reflects your individuality.",
  },
  {
    question: "Q: How do I start a custom order?",
    answer:
      "To begin, simply reach out via our contact form or schedule a design consultation. We’ll guide you through the gemstone selection, concept sketches, and approvals—ensuring you’re part of the journey every step of the way.",
  },
  {
    question: "Q: Are your pieces ready-to-ship or made to order?",
    answer:
      "We offer both. While our curated collection includes ready-to-ship designs, many of our pieces are crafted on demand to ensure perfect fit and personalization.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAF8F2] py-16 px-4 md:px-24">
      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg border border-[rgba(214,197,160,0.8)] transition-all duration-300 ${
                isOpen ? "bg-[#D6C5A0]" : "bg-transparent"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-6 px-6 text-left focus:outline-none"
              >
                <span
                  style={{ fontFamily: "Playfair Display", fontWeight: 400 }}
                  className="text-lg text-[rgba(46,43,40,0.85)]"
                >
                  {faq.question}
                </span>
                {isOpen ? (
                  <FaTimes className="text-[#2E2B28] text-sm" />
                ) : (
                  <FaPlus className="text-[#2E2B28] text-sm" />
                )}
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-6 pb-6">
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 200,
                      color: "rgba(255,255,255,0.8)",
                      fontSize : "20px"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQAccordion;
