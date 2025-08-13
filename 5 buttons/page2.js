import { useState } from "react";

const buttons = [
  { label: "Inventory", description: "Manage your stock and product availability.", link: "/inventory" },
  { label: "Orders", description: "Track and process customer orders.", link: "/orders" },
  { label: "Campaigns", description: "Plan and monitor marketing campaigns.", link: "/campaigns" },
  { label: "Analytics", description: "View sales data and insights.", link: "/analytics" },
  { label: "Settings", description: "Adjust your store’s configuration.", link: "/settings" },
];

export default function Home() {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleClick = (index) => {
    if (highlightedIndex === index) {
      // Instead of router.push, we just navigate directly
      window.location.href = buttons[index].link;
      return;
    }
    setHighlightedIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1020] text-white font-sans">
      <nav className="bg-pink-600 shadow-lg p-4 text-center font-bold text-lg">
        Nykaa – Compare UI
      </nav>

      <main className="flex flex-1 items-center justify-center relative overflow-hidden px-4">
        <div
          className={`flex gap-6 transition-opacity duration-300 ${
            highlightedIndex !== null ? "opacity-30 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Button row"
        >
          {buttons.map(({ label }, i) => (
            <button
              key={label}
              className="nykaa-btn whitespace-nowrap"
              onClick={() => handleClick(i)}
              aria-pressed={highlightedIndex === i}
            >
              {label}
            </button>
          ))}
        </div>

        {highlightedIndex !== null && (
          <div
            aria-live="polite"
            className="absolute top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-20"
          >
            <button
              onClick={() => handleClick(highlightedIndex)}
              className="nykaa-btn scale-110"
            >
              {buttons[highlightedIndex].label}
            </button>
            <p className="text-gray-300 text-center px-4">
              {buttons[highlightedIndex].description}
            </p>
            {/* Also add a visible "Go" link */}
            <a
              href={buttons[highlightedIndex].link}
              className="mt-2 underline text-pink-400 hover:text-pink-300"
            >
              Go to page
            </a>
          </div>
        )}
      </main>
    </div>
  );
}