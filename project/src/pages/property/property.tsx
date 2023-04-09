import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import FormComment from '../../components/form/form-comment/form-comment';
// import OfferList from '../../components/offer-list/offer-list';
// import ReviewsList from '../../components/reviews/reviews-list';
import { useAppSelector } from '../../hooks/redux';
import PropertyGalleryImg from '../../components/property-gallery-img/property-gallery-img';
import { convertPercentage } from '../../utils';
import {AuthorizationStatus} from '../../consts';
import Map from '../../components/map/map';

function Property(): JSX.Element {
  const { id } = useParams();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const offers = useAppSelector((state) => state.offers);
  const location = useAppSelector((state) => state.city);
  const property = offers.find((offer) => String(offer.id) === String(id));
  if (property === undefined) {
    return <Navigate to={'/page-not-found'} replace />;
  }
  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = property;

  return (
    <div className="page">
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((url: string, index: number) => (
                <PropertyGalleryImg
                  key={String(url) + String(index)}
                  url={url}
                />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: convertPercentage(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type.toUpperCase()}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods &&
                    goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper ${
                      host.isPro ? 'property__avatar-wrapper--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name"> {host.name}</span>
                  {host.isPro ? (
                    <span className="property__user-status">Pro</span>
                  ) : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  {/* <span className="reviews__amount">{reviews.length}</span> */}
                </h2>
                {/* <ReviewsList reviews={reviews} /> */}
                { authStatus === AuthorizationStatus.Auth ? <FormComment /> : null}
              </section>
            </div>
          </div>
          <Map className={'property'} offers={offers} page={property} location={location} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {/* <OfferList offers={offers} /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
