import ReviewsItem from './reviews-item';
import { ReviewType } from '../../types';

function ReviewsList({ reviews }: { reviews: ReviewType[] }) {
  function dafdag() {
    return Array.from(reviews)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10);
  }

  return (
    <ul className="reviews__list">
      {dafdag().map((item) => (
        <ReviewsItem key={item.id} review={item} />
      ))}
    </ul>
  );
}

export default ReviewsList;
