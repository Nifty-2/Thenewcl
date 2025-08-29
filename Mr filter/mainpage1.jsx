import { useState } from "react";
import filters from "../data/filters.json";
import MultiFilter from "../components/MultiFilter";

export default function FiltersPage() {
  const defaultUrl = "/products";
  const [url, setUrl] = useState(defaultUrl);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateFilters = (filterKey, values) => {
    setSelectedFilters({ ...selectedFilters, [filterKey]: values });
  };

  const applyFilters = () => {
    const params = [];
    for (const key in selectedFilters) {
      if (selectedFilters[key]?.length > 0) {
        params.push(`${key}=${selectedFilters[key].join(",")}`);
      }
    }
    const newUrl = params.length > 0 ? `${defaultUrl}?${params.join("&")}` : defaultUrl;
    setUrl(newUrl);
    setIsModalOpen(false); // close modal
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setUrl(defaultUrl);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Page</h2>

      {/* Main Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: "10px 16px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Apply Filters
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h3>Filters</h3>

            <MultiFilter
              label="Color"
              filterKey="color_filter"
              options={filters.color}
              selected={selectedFilters}
              onChange={updateFilters}
            />
            <MultiFilter
              label="Category"
              filterKey="category_filter"
              options={filters.category}
              selected={selectedFilters}
              onChange={updateFilters}
            />
            <MultiFilter
              label="Country"
              filterKey="country_filter"
              options={filters.country}
              selected={selectedFilters}
              onChange={updateFilters}
            />

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={applyFilters}
                style={{
                  padding: "8px 14px",
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
              <button
                onClick={resetFilters}
                style={{
                  padding: "8px 14px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reset
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  marginLeft: "10px",
                  padding: "8px 14px",
                  background: "#ccc",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Current URL: {url}
      </div>
    </div>
  );
}