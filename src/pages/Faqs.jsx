import React, { useState } from 'react'
import { faqData } from '../constants'


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
    <main className='relative'>
      <section className="mx-auto w-11/12 md:w-4/5 my-10 mt-40 ">
      <h1 className="text-[50px] font-bold mb-8 font-palanquin">
        Frequently Asked Questions <span className='text-vivid-orange'>(FAQs)</span>
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
    </main>
  )
}

export default Faqs
