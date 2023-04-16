import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import RatingInput from '../rating-input/rating-input';
import { addReviewAction } from '../../../store/api-actions';
import { toast } from 'react-toastify';
import { getLoadingStatus } from '../../../store/review-process/selector';

function FormComment({ currentOffer }: { currentOffer: number }): JSX.Element {
  const [value, setValue] = useState('');
  const [select, setSelect] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useAppDispatch();
  const isReviewLoading = useAppSelector(getLoadingStatus);

  const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onChecked = ({ target }: ChangeEvent<HTMLInputElement>) => {

    if (target.name === 'rating') {
      setSelect(target.value);
    }
  };

  useEffect(() => {
    const checkInputValue = () => {
      if (select === '' || value.length < 50 || value.length > 300) {
        return true;
      }
      return false;
    };
    setIsSubmit(checkInputValue());
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
      if (!isReviewLoading) {
        if (select !== '0') {
          const raitingElement = document.getElementById(`${select}-stars`);
          if (raitingElement) {
            (raitingElement as HTMLInputElement).checked = false;
          }
        }
        setSelect('');
        setValue('');
      }
    }

    if (isReviewLoading === false) {
      toast.warn('Что-то пошло не так...попробуйте снова!');
    }

    if (isReviewLoading) {
      const currentStar = document.getElementById(`${select}-stars`);
      (currentStar as HTMLInputElement).checked = false;
      setSelect('');
      setValue('');
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput
        select={select}
        onChecked={onChecked}
        isDisabled={!isReviewLoading}
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
          disabled={isSubmit || !isReviewLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
