"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How to use InfluAgent?",
    answer:
      "Using InfluAgent is simple. After signing up, you'll set your social media goals and preferences. Our AI agent will then create a customized growth plan and start executing daily tasks automatically. You can monitor progress and make adjustments through our collaborative dashboard.",
  },
  {
    question: "Will my account get banned if I use InfluAgent?",
    answer:
      "InfluAgent is designed to work within the guidelines of social media platforms. We use advanced AI to mimic natural human behavior and respect rate limits. While no tool can guarantee 100% safety, we prioritize account security and have measures in place to minimize risks.",
  },
  {
    question: "What platforms does InfluAgent support?",
    answer:
      "Currently, InfluAgent primarily supports Twitter (X). We are actively working on expanding our support to other major social media platforms like Instagram, LinkedIn, and TikTok in the near future.",
  },
  {
    question: "How is InfluAgent different from other competitors?",
    answer:
      "InfluAgent stands out with its advanced AI technology that goes beyond simple automation. We offer personalized growth strategies, real-time adaptability to platform changes, and a collaborative dashboard for team management. Our focus on natural engagement and long-term growth sets us apart from competitors.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

