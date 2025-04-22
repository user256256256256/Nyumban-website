import React, { useState } from 'react'

const faqData = [
  {
    question: "How do I make an Accordion?",
    answer:
      "You can create an accordion using React state to track which item is open, and Tailwind classes to animate the height and visibility. This helps keep the UI clean and interactive.",
  },
  {
    question: "Is this project mobile responsive?",
    answer:
      "Yes, it uses Tailwind CSS, which includes mobile-first utility classes to ensure responsiveness on all screen sizes.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is securely stored on our encrypted servers. We follow best practices in data privacy and security compliance.",
  },
]

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-300 py-4">
    <button
      className="flex justify-between items-center w-full text-left font-medium text-lg cursor-pointer"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      {question}
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>

    <div
      className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
        isOpen ? 'max-h-96 mt-2' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
)

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="mx-auto w-11/12 md:w-4/5 my-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions <span className="text-blue-600">(FAQs)</span>
      </h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Faqs
