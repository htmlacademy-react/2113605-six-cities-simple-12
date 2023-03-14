import RatingInput from '../rating-input/rating-input';
import { useState } from 'react';

type FormDataType = {
  review: string;
};

function FormComment(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    review: '',
  });

  const fieldChangeHandle: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="reviews__htmlForm htmlForm" action="#" method="post">
      <label className="reviews__label htmlForm__label" htmlFor="review">
        Your review
      </label>
      <RatingInput />
      <textarea
        className="reviews__textarea htmlForm__textarea"
        id="review"
        name="review"
        value={formData.review}
        onChange={fieldChangeHandle}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
