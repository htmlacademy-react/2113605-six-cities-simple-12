import { Fragment } from 'react';

type RatingDataType = {
  value: string;
  id: string;
  title: string;
};

const ratingData: RatingDataType[] = [
  {
    value: '1',
    id: '1-stars',
    title: 'terribly',
  },
  {
    value: '2',
    id: '2-stars',
    title: 'badly',
  },
  {
    value: '3',
    id: '3-stars',
    title: 'not bad',
  },
  {
    value: '4',
    id: '4-stars',
    title: 'good',
  },
  {
    value: '5',
    id: '5-stars',
    title: 'perfect',
  },
];

function RatingInput(): JSX.Element {
  return (
    <div className="reviews__rating-htmlForm htmlForm__rating">
      {ratingData.map(({ id, value, title }) => (
        <Fragment key={id}>
          <input
            className="htmlForm__rating-input visually-hidden"
            name="rating"
            value={value}
            id={id}
            type="radio"
          />
          <label
            htmlFor={id}
            className="reviews__rating-label htmlForm__rating-label"
            title={title}
          >
            <svg className="htmlForm__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingInput;
