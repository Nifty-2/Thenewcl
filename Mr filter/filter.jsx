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
      <label>{label}:</label>
      <div>
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => toggleFilter(opt.id)}
            style={{
              margin: "4px",
              padding: "6px 10px",
              borderRadius: "6px",
              border: activeValues.includes(opt.id)
                ? "2px solid blue"
                : "1px solid #ccc",
              background: activeValues.includes(opt.id)
                ? "#e6f0ff"
                : "#fff",
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