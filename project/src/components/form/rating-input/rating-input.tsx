import { Fragment, ChangeEvent } from 'react';

type RatingDataType = {
  value: string;
  id: string;
  title: string;
};

type RatingInputType = {
  select: string;
  isDisabled: boolean;
  onChangeChecked: ({ target }: ChangeEvent<HTMLInputElement>) => void;
};

const ratingData: RatingDataType[] = [
  {
    value: '5',
    id: '5-stars',
    title: 'terribly',
  },
  {
    value: '4',
    id: '4-stars',
    title: 'badly',
  },
  {
    value: '3',
    id: '3-stars',
    title: 'not bad',
  },
  {
    value: '2',
    id: '2-stars',
    title: 'good',
  },
  {
    value: '1',
    id: '1-stars',
    title: 'perfect',
  },
];

function RatingInput({
  onChangeChecked,
  select,
  isDisabled,
}: RatingInputType): JSX.Element {
  return (
    <div
      className="reviews__rating-form form__rating"
      onChange={onChangeChecked}
    >
      {ratingData.map(({ id, value, title }) => (
        <Fragment key={id}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={id}
            defaultChecked={select === value}
            type="radio"
            disabled={isDisabled}
          />
          <label
            htmlFor={id}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RatingInput;
