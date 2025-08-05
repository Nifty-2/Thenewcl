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
    <div>
      <input
        value={input}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(input)}
        placeholder="Search fashion or beauty..."
      />
      {suggestions.map((s, i) => (
        <div key={i} onClick={() => handleSearch(s)}>{s}</div>
      ))}
    </div>
  );
}