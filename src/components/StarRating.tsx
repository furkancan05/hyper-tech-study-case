import React from "react";

// Component for a fully filled star
const FullStar = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="#FFD601">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Component for an empty (outlined) star
const EmptyStar = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD601"
    strokeWidth="1"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Component for a half-filled star (left half filled)
const HalfStar = () => (
  <div style={{ position: "relative", width: 20, height: 20 }}>
    <EmptyStar />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        overflow: "hidden",
      }}
    >
      <FullStar />
    </div>
  </div>
);

// Main StarRating component
const StarRating = ({ value }: { value: number }) => {
  // Determine if a star should be full, half, or empty
  const getStarFill = (value: number, index: number) => {
    if (value >= index + 1) return "full";
    if (value >= index + 0.5) return "half";
    return "empty";
  };

  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((_, index) => {
        const fill = getStarFill(value, index);
        return (
          <div key={index} style={{ width: 20, height: 20 }}>
            {fill === "full" && <FullStar />}
            {fill === "half" && <HalfStar />}
            {fill === "empty" && <EmptyStar />}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
