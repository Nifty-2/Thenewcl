import { useRef } from "react";

const buttons = [
  { label: "Inventory", description: "Manage your stock and product availability.", link: "/inventory" },
  { label: "Orders", description: "Track and process customer orders.", link: "/orders" },
  { label: "Campaigns", description: "Plan and monitor marketing campaigns.", link: "/campaigns" },
  { label: "Analytics", description: "View sales data and insights.", link: "/analytics" },
  { label: "Settings", description: "Adjust your store’s configuration.", link: "/settings" },
];

export default function Home() {
  const btnRefs = useRef([]);

  const handleClick = (index) => {
    window.location.href = buttons[index].link;
  };

  return (
    <div className="page-container">
      {/* Top and bottom background images */}
      <div className="bg-half top-half"></div>
      <div className="bg-half bottom-half"></div>

      {/* Button row */}
      <div className="button-row">
        {buttons.map((btn, i) => (
          <div className="btn-wrapper" key={btn.label}>
            {/* For buttons 1 & 4 (index 0 & 3), show description above */}
            {(i === 0 || i === 3) && (
              <div className="description above">{btn.description}</div>
            )}

            <button
              ref={(el) => (btnRefs.current[i] = el)}
              className="nykaa-btn"
              onClick={() => handleClick(i)}
            >
              {btn.label}
            </button>

            {/* For buttons 3 & 5 (index 2 & 4), show description below */}
            {(i === 2 || i === 4) && (
              <div className="description below">{btn.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



/* Container setup */
.page-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Split background */
.bg-half {
  position: absolute;
  width: 100%;
  height: 50%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.top-half {
  top: 0;
  background-image: url("https://via.placeholder.com/1920x540?text=Top+Image");
}
.bottom-half {
  bottom: 0;
  background-image: url("https://via.placeholder.com/1920x540?text=Bottom+Image");
}

/* Button row in center */
.button-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
  z-index: 2;
}

/* Wrapper for each button + description */
.btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* Button style */
.nykaa-btn {
  background-color: #e80071; /* Nykaa pink */
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.nykaa-btn:hover {
  transform: scale(1.03);
}

/* Description tooltip-like style */
.description {
  opacity: 0;
  transition: opacity 0.2s ease;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  max-width: 200px;
  text-align: center;
  font-size: 0.85rem;
  position: absolute;
  pointer-events: none;
}
.above {
  bottom: 100%;
  margin-bottom: 0.5rem;
}
.below {
  top: 100%;
  margin-top: 0.5rem;
}

/* Show description on hover */
.btn-wrapper:hover .description {
  opacity: 1;
}