import { OffersPropsType } from '../../mocks/index';
import { Link } from 'react-router-dom';
import { LocationApp } from '../../components/app/app';

type CardType = {
  offer: OffersPropsType;
  isNear: boolean;
  selectOffer?: (value: OffersPropsType | null) => void;
};

const getCurrentClass = (isNear: boolean) => {
  if (isNear) {
    return 'near-places__card place-card';
  } else {
    return 'cities__card place-card';
  }
};

function Card({ offer, isNear, selectOffer }: CardType): JSX.Element {
  const handleOfferHover = (value: OffersPropsType | null) => {
    if (selectOffer) {
      selectOffer(value);
    }
  };

  const collectPath = (id: string) => LocationApp.Room + id;
  const { mark, imageSrc, priceValue, name, type, id } = offer;

  return (
    <article
      className={getCurrentClass(isNear)}
      onMouseEnter={() => handleOfferHover(offer)}
      onMouseLeave={() => handleOfferHover(null)}
    >
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={collectPath(id)}>
          <img
            className="place-card__image"
            src={imageSrc}
            width="260"
            height="200"
            alt=""
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <button>{name}</button>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
