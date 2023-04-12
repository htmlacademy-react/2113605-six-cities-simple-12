import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import RatingInput from '../rating-input/rating-input';
import { addReviewAction } from '../../../store/api-actions';

function FormComment({ currentOffer }: { currentOffer: number }): JSX.Element {
  const [value, setValue] = useState('');
  const [select, setSelect] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useAppDispatch();
  const setReviewLoading = useAppSelector((state) => state.isReviewLoading);

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onChangeChecked = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'rating') {
      setSelect(target.value);
    }
  };

  useEffect(() => {
    setIsSubmit(select === '' || value.length < 50 || value.length > 300);
  }, [select, value.length]);

  const onClickSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (value && select) {
      dispatch(
        addReviewAction({
          id: currentOffer,
          comment: value,
          rating: Number(select),
        })
      );
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput
        select={select}
        onChangeChecked={onChangeChecked}
        isDisabled={setReviewLoading}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={value}
        onChange={onChangeValue}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit htmlForm__submit button"
          type="submit"
          onClick={onClickSubmit}
          disabled={isSubmit || setReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
