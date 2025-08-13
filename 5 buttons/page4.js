import { useRef, useState } from "react";

const buttons = [
  { label: "Inventory", description: "Manage your stock and product availability.", link: "/inventory" },
  { label: "Orders", description: "Track and process customer orders.", link: "/orders" },
  { label: "Campaigns", description: "Plan and monitor marketing campaigns.", link: "/campaigns" },
  { label: "Analytics", description: "View sales data and insights.", link: "/analytics" },
  { label: "Settings", description: "Adjust your store’s configuration.", link: "/settings" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [offset, setOffset] = useState({ dx: 0, dy: 0 });
  const btnRefs = useRef([]);

  const handleClick = (index) => {
    // If this button is already active → go to page
    if (activeIndex === index) {
      window.location.href = buttons[index].link;
      return;
    }

    const el = btnRefs.current[index];
    if (!el) return;

    // 1) Measure current button center
    const rect = el.getBoundingClientRect();
    const btnCx = rect.left + rect.width / 2;
    const btnCy = rect.top + rect.height / 2;

    // 2) Viewport center
    const vpCx = window.innerWidth / 2;
    const vpCy = window.innerHeight / 2;

    // 3) Compute deltas
    const dx = vpCx - btnCx;
    const dy = vpCy - btnCy;

    // 4) Save which button is active and the deltas
    setActiveIndex(index);
    setOffset({ dx, dy });
  };

  return (
    <div className="page-container">
      <nav className="navbar">Nykaa – Compare UI</nav>

      {/* Top-aligned row */}
      <div className="button-row">
        {buttons.map((btn, i) => (
          <button
            key={btn.label}
            ref={(el) => (btnRefs.current[i] = el)}
            className={`nykaa-btn ${activeIndex === i ? "is-active" : ""}`}
            onClick={() => handleClick(i)}
            /* feed the deltas to CSS as variables when active */
            style={
              activeIndex === i
                ? ({ ["--dx"]: `${offset.dx}px`, ["--dy"]: `${offset.dy}px` })
                : undefined
            }
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Description below the screen center (only when a button is active) */}
      {activeIndex !== null && (
        <p className="description-fixed">{buttons[activeIndex].description}</p>
      )}
    </div>
  );
}

/* Button styling */
.nykaa-btn {
  background-color: #ec407a;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;

  /* smoothness */
  transition: transform 0.38s cubic-bezier(.2,.9,.3,1);
  will-change: transform;
}

.nykaa-btn:hover {
  transform: scale(1.03);
}

/* Active (moved) button: move via CSS variables we set from JS */
.nykaa-btn.is-active {
  transform: translate(var(--dx, 0px), var(--dy, 0px)) scale(1.03);
  z-index: 10; /* keep it above the row while it's centered */
}

/* Description fixed under screen center */
.description-fixed {
  position: fixed;
  left: 50%;
  top: calc(50% + 56px); /* just below the centered button */
  transform: translateX(-50%);
  text-align: center;
  font-size: 1rem;
  color: #d1d1d1;
  pointer-events: none; /* so clicks pass through if you like */
}