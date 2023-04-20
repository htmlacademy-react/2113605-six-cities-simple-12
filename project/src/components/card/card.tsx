import { Link } from 'react-router-dom';
import { LocationApp } from '../../consts';
import { OfferType } from '../../types';
import { getPercent } from '../../utils';

type CardType = {
  offer: OfferType;
  className: string;
  onHoverCard?: (offer: OfferType | null) => void;
};

function Card({ offer, onHoverCard, className }: CardType): JSX.Element {
  const collectPath = (id: number) => LocationApp.Offer + String(id);
  const { isPremium, previewImage, price, title, type, id, rating } = offer;

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onHoverCard && onHoverCard(offer)}
      onMouseLeave={() => onHoverCard && onHoverCard(null)}
    >
      {isPremium ?? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={collectPath(id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getPercent(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={collectPath(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.toUpperCase()}</p>
      </div>
    </article>
  );
}

export default Card;
