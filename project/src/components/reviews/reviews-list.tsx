import ReviewsItem from './reviews-item';
import { ReviewsItemType } from '../../types';

function ReviewsList({ reviews }: { reviews: ReviewsItemType }) {
  return (
    <ul className="reviews__list">
      {reviews.review.map((item, index) => (
        <ReviewsItem key={item.avatarUrl} review={item} />
      ))}
    </ul>
  );
}

export default ReviewsList;
