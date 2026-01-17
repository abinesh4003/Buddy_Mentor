const RatingBadge = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-yellow-500">⭐</span>
      <span className="font-semibold">{rating}</span>
      <span className="text-gray-500">
        {reviews.toLocaleString()} reviews
      </span>
    </div>
  );
};

export default RatingBadge;
