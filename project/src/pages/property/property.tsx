import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FormComment from '../../components/form/form-comment/form-comment';
import {
  fetchNearOffersAction,
  fetchCurrentOfferAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import {
  getCurrentOffer,
  getLoadingCurrentOffer,
  getNearOffers,
} from '../../store/offer-process/selector';
import { getAuthStatus } from '../../store/user-process/selector';
import { getReviews } from '../../store/review-process/selector';
import OfferList from '../../components/offer-list/offer-list';
import ReviewsList from '../../components/reviews/reviews-list';
import PropertyGalleryImg from '../../components/property-gallery-img/property-gallery-img';
import { AuthorizationStatus } from '../../consts';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loader from '../../components/loader/loader';
import { getPercent } from '../../utils';

function Property(): JSX.Element {
  const { id } = useParams();
  const currentOfferId = Number(id);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const isOfferLoading = useAppSelector(getLoadingCurrentOffer);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviews);
  const similarOffers = useAppSelector(getNearOffers);

  useEffect(() => {
    dispatch(fetchCurrentOfferAction(currentOfferId));
    dispatch(fetchReviewsAction(currentOfferId));
    dispatch(fetchNearOffersAction(currentOfferId));
  }, [dispatch, currentOfferId]);

  if (currentOffer === null) {
    return <Loader />;
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
  } = currentOffer;

  if (!isOfferLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images?.slice(0, 6).map((url: string, index: number) => (
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
                  <span style={{ width: `${getPercent(rating)}%` }}></span>
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
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                {authStatus === AuthorizationStatus.Auth ? (
                  <FormComment currentOffer={currentOfferId} />
                ) : null}
              </section>
            </div>
          </div>
          <Map
            className={'property'}
            offers={similarOffers.concat(currentOffer)}
            page={currentOffer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {similarOffers && <OfferList isNear offers={similarOffers} />}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
