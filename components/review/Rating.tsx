import { FaRegStar, FaStar } from "react-icons/fa";

function Rating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return { isFilled: i + 1 <= rating, index: i };
  });

  return (
    <div className="flex items-center gap-x-1">
      {stars.map(({ isFilled, index }) => {
        const className = `w-3 h-3 ${isFilled ? "text-primary" : "text-gray-400"}`;
        return isFilled ? (
          <FaStar className={className} key={index} />
        ) : (
          <FaRegStar className={className} key={index} />
        );
      })}
    </div>
  );
}

export default Rating;
