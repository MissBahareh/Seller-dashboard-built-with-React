import { useState } from "react";
import { StarFill } from "react-bootstrap-icons";

export default function StarRating() {
  const [activeStar, setActiveStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const getStarStyle = (starNumber) => ({
    fill:
      hoveredStar >= starNumber || activeStar >= starNumber
        ? "rgb(252, 168, 43)"
        : "rgba(84, 66, 66, 0.24)",
    transition: "fill 0.2s ease",
  });

  return (
    <div>
      {stars.map((starNumber) => (
        <button
          key={starNumber}
          onClick={() => setActiveStar(starNumber)}
          onMouseEnter={() => setHoveredStar(starNumber)}
          onMouseLeave={() => setHoveredStar(0)}
          style={{
            border: "none",
            background: "rgba(255, 255, 255, 0.242)",
            cursor: "pointer",
          }}
        >
          <StarFill style={getStarStyle(starNumber)} />
        </button>
      ))}
    </div>
  );
}
