import React, { useState } from "react";

const FilterModal = ({ filters, onApply, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>X</button>
        <h3>Select Filters</h3>

        {Object.keys(filters).map((category) => (
          <div key={category} style={{ marginBottom: "1rem" }}>
            <h4>{category.toUpperCase()}</h4>
            <div style={styles.btnGroup}>
              {filters[category]
                .filter((f) => f.count > 0) // only show filters with results
                .map((filter) => (
                  <button
                    key={filter.id}
                    style={styles.filterBtn}
                    onClick={() => onApply(category, filter)}
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center"
  },
  modal: {
    background: "#fff", padding: "20px", borderRadius: "8px", width: "400px", maxHeight: "80%", overflowY: "auto"
  },
  closeBtn: { float: "right", cursor: "pointer" },
  btnGroup: { display: "flex", flexWrap: "wrap", gap: "8px" },
  filterBtn: { padding: "6px 10px", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer" }
};

export default FilterModal;