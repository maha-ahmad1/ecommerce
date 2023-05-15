import React from "react";
import { Star } from "lib/@heroicon";
export const Stars = ({ selected = false, onSelect }) => {
    const starColor = selected ? "text-red-500" : "text-gray-500";

  const starss = Array(5).fill(0);
  return (
    <div >
    <Star className={`w-4 h-4 ${starColor} cursor-pointer`}  onClick={onSelect} />
    </div>
  );
};
export default Stars;
