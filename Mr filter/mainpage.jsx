import { useState } from "react";
import filters from "../data/filters.json";
import MultiFilter from "../components/MultiFilter";

export default function FiltersPage() {
  const defaultUrl = "/products";
  const [url, setUrl] = useState(defaultUrl);
  const [selectedFilters, setSelectedFilters] = useState({});

  const updateFilters = (filterKey, values) => {
    const newFilters = { ...selectedFilters, [filterKey]: values };
    setSelectedFilters(newFilters);

    // build query string
    const params = [];
    for (const key in newFilters) {
      if (newFilters[key].length > 0) {
        params.push(`${key}=${newFilters[key].join(",")}`);
      }
    }

    const newUrl = params.length > 0 ? `${defaultUrl}?${params.join("&")}` : defaultUrl;
    setUrl(newUrl);
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setUrl(defaultUrl);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Filters</h2>

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

      <button
        onClick={resetFilters}
        style={{
          marginTop: "20px",
          padding: "8px 14px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Filters
      </button>

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Current URL: {url}
      </div>
    </div>
  );
}