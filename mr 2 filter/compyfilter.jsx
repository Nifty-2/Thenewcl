import { useState, useEffect } from "react";

// Toggle this flag later for API
const USE_API = false;

// Dummy filters (used if USE_API = false)
const dummyFilters = {
  brand: [
    { id: "maybelline", label: "Maybelline" },
    { id: "loreal", label: "L'Oréal" },
    { id: "mac", label: "MAC" }
  ],
  color: [
    { id: "red", label: "Red" },
    { id: "pink", label: "Pink" },
    { id: "nude", label: "Nude" }
  ],
  finish: [
    { id: "matte", label: "Matte" },
    { id: "glossy", label: "Glossy" }
  ]
};

export default function FiltersButton({ baseSearchUrl, modalId }) {
  const [filters, setFilters] = useState(dummyFilters);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [apiUrl, setApiUrl] = useState(baseSearchUrl);

  // Later: integrate API
  useEffect(() => {
    if (USE_API && apiUrl) {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          setFilters(data.filters); // API structure expected
        })
        .catch(() => setFilters({})); // fallback
    }
  }, [apiUrl]);

  // Handle checkbox change
  const handleCheckboxChange = (category, optionId) => {
    setSelectedFilters(prev => {
      const current = prev[category] || [];
      let updated;

      if (current.includes(optionId)) {
        updated = current.filter(id => id !== optionId);
      } else {
        updated = [...current, optionId];
      }

      return { ...prev, [category]: updated };
    });
  };

  return (
    <div>
      <button onClick={() => document.getElementById(modalId).showModal()}>
        Filters
      </button>

      <dialog id={modalId}>
        <h2>Filters</h2>

        {/* Selected filter summary */}
        <div style={{ marginBottom: "1rem" }}>
          {Object.entries(selectedFilters).map(([cat, values]) =>
            values.map(v => (
              <span key={v} style={{ marginRight: "8px" }}>
                {cat}: {v}
              </span>
            ))
          )}
        </div>

        {/* Accordion */}
        <div>
          {Object.keys(filters).map(category => (
            <details key={category} open>
              <summary>{category}</summary>
              {filters[category].map(option => (
                <label key={option.id} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    checked={selectedFilters[category]?.includes(option.id) || false}
                    onChange={() => handleCheckboxChange(category, option.id)}
                  />
                  {option.label}
                </label>
              ))}
            </details>
          ))}
        </div>

        <button
          style={{ marginTop: "1rem" }}
          onClick={() => document.getElementById(modalId).close()}
        >
          Close
        </button>
      </dialog>
    </div>
  );
}