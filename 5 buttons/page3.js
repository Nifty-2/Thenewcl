import { useState } from "react";

const buttons = [
  { label: "Inventory", description: "Manage your stock and product availability.", link: "/inventory" },
  { label: "Orders", description: "Track and process customer orders.", link: "/orders" },
  { label: "Campaigns", description: "Plan and monitor marketing campaigns.", link: "/campaigns" },
  { label: "Analytics", description: "View sales data and insights.", link: "/analytics" },
  { label: "Settings", description: "Adjust your store’s configuration.", link: "/settings" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      // If clicked again, navigate
      window.location.href = buttons[index].link;
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="page-container">
      <nav className="navbar">Nykaa – Compare UI</nav>

      <div className="button-row">
        {buttons.map((btn, i) => (
          <button
            key={btn.label}
            className={`nykaa-btn ${activeIndex === i ? "centered" : ""}`}
            onClick={() => handleClick(i)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <p className="description">{buttons[activeIndex].description}</p>
      )}
    </div>
  );
}

/* Page layout */
.page-container {
  min-height: 100vh;
  background-color: #0f1020;
  color: white;
  font-family: sans-serif;
  position: relative;
}

/* Navbar */
.navbar {
  background-color: #ec407a;
  padding: 16px;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
}

/* Button row */
.button-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px; /* closer to top */
  position: relative;
}

/* Button styling */
.nykaa-btn {
  background-color: #ec407a;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  transition: transform 0.2s ease, top 0.3s ease, left 0.3s ease;
  cursor: pointer;
  border: none;
}

.nykaa-btn:hover {
  transform: scale(1.03);
}

/* Clicked button moves to center */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.03);
  z-index: 10;
}

/* Description text */
.description {
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
  color: #d1d1d1;
}