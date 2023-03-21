import { ReviewsType } from '../../mocks';
import ReviewsItem from './reviews-item';

function ReviewsList({ reviews }: { reviews: ReviewsType[] }) {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <ReviewsItem key={item.id} review={item} />
      ))}
    </ul>
  );
}

export default ReviewsList;
