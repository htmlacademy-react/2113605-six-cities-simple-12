import { ReviewsType } from '../../mocks';

function ReviewsItem({ review }: { review: ReviewsType }) {
  const { avatar, user, rating, text, time } = review;
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={avatar}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{user}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${rating}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{text}</p>
        <time className='reviews__time' dateTime={time}>
          {formatDate(time)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
