'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const sections = [
  { title: 'Section 1', content: 'This is the content of section 1.' },
  { title: 'Section 2', content: 'Content inside section 2 goes here.' },
  { title: 'Section 3', content: 'Here is some text for section 3.' }
];

export default function Page8() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Task 8: Accordion</h1>

      <div className="w-full max-w-xl">
        {sections.map((sec, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="mb-4 border border-gray-300 rounded-md shadow-sm bg-white">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                {sec.title}
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {isOpen && (
                <div className="px-4 py-3 border-t text-gray-600 bg-gray-50 transition-all duration-300">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}