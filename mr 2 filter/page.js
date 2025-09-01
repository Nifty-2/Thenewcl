import React, { useState } from "react";
import filtersData from "./filters.json";
import FilterModal from "./FilterModal";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("https://example.com/search");
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleApplyFilter = (category, filter) => {
    // ✅ Add to applied filters
    setAppliedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[category]) updated[category] = [];
      if (!updated[category].some((f) => f.id === filter.id)) {
        updated[category] = [...updated[category], filter];
      }
      return updated;
    });

    // ✅ Update URL
    setUrl((prevUrl) => {
      const newParam = `${category}_filter=${filter.id}`;
      return prevUrl.includes("?")
        ? `${prevUrl}&${newParam}`
        : `${prevUrl}?${newParam}`;
    });
  };

  const resetFilters = () => {
    setAppliedFilters({});
    setUrl("https://example.com/search");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShowModal(true)}>Apply Filters</button>

      {/* ✅ Show applied filters summary */}
      <div style={{ margin: "15px 0" }}>
        {Object.keys(appliedFilters).length > 0 && (
          <div>
            {Object.entries(appliedFilters).map(([category, filters]) => (
              <p key={category}>
                <strong>{category}:</strong> {filters.map((f) => f.name).join(", ")}
              </p>
            ))}
          </div>
        )}
      </div>

      <p><strong>Current URL:</strong> {url}</p>
      <button onClick={resetFilters}>Reset</button>

      {showModal && (
        <FilterModal
          filters={filtersData}
          onApply={handleApplyFilter}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default MainPage;