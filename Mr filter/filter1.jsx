export default function MultiFilter({ label, filterKey, options, selected, onChange }) {
  const toggleFilter = (value) => {
    let existing = selected[filterKey] ? [...selected[filterKey]] : [];

    if (existing.includes(value)) {
      existing = existing.filter((v) => v !== value);
    } else {
      existing.push(value);
    }

    onChange(filterKey, existing);
  };

  const activeValues = selected[filterKey] || [];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ fontWeight: "bold" }}>{label}:</label>

      {/* Selected Row */}
      {activeValues.length > 0 && (
        <div style={{ marginBottom: "6px" }}>
          {activeValues.map((val) => {
            const opt = options.find((o) => o.id === val);
            return (
              <button
                key={val}
                onClick={() => toggleFilter(val)}
                style={{
                  margin: "2px",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1px solid blue",
                  background: "#e6f0ff",
                  cursor: "pointer",
                }}
              >
                {opt?.name} ✕
              </button>
            );
          })}
        </div>
      )}

      {/* Buttons */}
      <div>
        {options
          .filter((opt) => !activeValues.includes(opt.id))
          .map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleFilter(opt.id)}
              style={{
                margin: "4px",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              {opt.name}
            </button>
          ))}
      </div>
    </div>
  );
}