'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fashionKeywords } from '@/lib/data';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setSuggestions(
      fashionKeywords.filter(k => k.startsWith(val.toLowerCase())).slice(0, 5)
    );
  };

  const handleSearch = (term) => {
    const platform = searchParams.get('platform') || 'android';
    const affluence = searchParams.get('affluence') || 'AF1';
    router.push(`?term=${term}&platform=${platform}&affluence=${affluence}`);
    setInput('');
    setSuggestions([]);
  };

  return (
    <div className="relative w-full sm:max-w-md">
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(input)}
        placeholder="Search fashion or beauty..."
        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full shadow-md">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSearch(s)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}