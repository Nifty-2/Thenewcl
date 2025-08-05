'use client';

import { useState, useEffect } from 'react';

const allDummyResults = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is a description of Product ${i + 1}`,
}));

export default function Home() {
  const [urlInput, setUrlInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [platform, setPlatform] = useState('android');
  const [affluence, setAffluence] = useState('low');
  const [results, setResults] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  // Simulate fetching results based on query + filters
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // Filter dummy data based on search query (basic match)
    const filtered = allDummyResults.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered.slice(start, end));
  }, [searchQuery, page]);

  // Simulate URL creation
  const buildUrlFromFilters = () => {
    return `/search?q=${searchQuery}&platform=${platform}&affluence=${affluence}`;
  };

  // Handle URL search
  const handleUrlSearch = () => {
    // Simulate parsing a URL (you can write your own rules here)
    const params = new URLSearchParams(urlInput.split('?')[1]);
    setSearchQuery(params.get('q') || '');
    setPlatform(params.get('platform') || 'android');
    setAffluence(params.get('affluence') || 'low');
    setPage(1);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ecommerce Search Tool</h1>

      {/* URL Input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Search by URL:</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="/search?q=dress&platform=ios&affluence=high"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUrlSearch()}
        />
      </div>

      {/* Regular Search */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Search Product:</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="Search for something (e.g., dress)"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Platform:</label>
          <select
            className="border px-3 py-2 rounded"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="android">Android</option>
            <option value="ios">iOS</option>
            <option value="web">Web</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Affluence:</label>
          <select
            className="border px-3 py-2 rounded"
            value={affluence}
            onChange={(e) => setAffluence(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {/* Display constructed URL */}
      <p className="mb-4 text-sm text-gray-500">
        Current Search URL: <code>{buildUrlFromFilters()}</code>
      </p>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4">
        {results.map((item) => (
          <div
            key={item.id}
            className="relative border rounded p-4 hover:bg-gray-50"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <h3 className="font-semibold">{item.name}</h3>

            {hoveredItem?.id === item.id && (
              <div className="absolute top-full mt-1 left-0 w-full bg-white shadow p-2 border rounded z-10">
                <p className="text-sm">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({
          length: Math.ceil(
            allDummyResults.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).length / ITEMS_PER_PAGE
          ),
        }).map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded border ${
              page === idx + 1 ? 'bg-black text-white' : 'bg-white'
            }`}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </main>
  );
}