'use client';

import { useState } from 'react';

const tabs = [
  { label: 'Tab 1', content: 'This is the content for Tab 1' },
  { label: 'Tab 2', content: 'Here’s what Tab 2 contains' },
  { label: 'Tab 3', content: 'Final content from Tab 3' },
];

export default function Page7() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Task 7: Tabs</h1>

      <div className="w-full max-w-xl">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`py-2 px-4 transition-colors border-b-2 ${
                activeTab === idx
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white p-4 border rounded shadow text-gray-700">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}