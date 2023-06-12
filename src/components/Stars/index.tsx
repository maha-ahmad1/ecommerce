import React from 'react';
import { Star  } from "lib/@heroicon";

interface StarRatingProps {
  rating: number;
}
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starClasses = i <= rating ? 'text-red-500' : 'text-gray-300';
    {console.log(rating)}
    stars.push(
      <Star key={i} className={`h-5 w-5 ${starClasses}`}/>
      
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
