import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType, LocationApp } from '../consts';
import { OfferType, UserDataType, ReviewType } from '../types/';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({ payload: location })
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({ payload: sort })
);

export const loadOffers = createAction<OfferType[]>(
  'offers/loadOffers'
);

export const loadCurrentOffer = createAction<OfferType>(
  'offers/loadCurrentOffer'
);

export const loadReviews = createAction<ReviewType[]>(
  'data/loadReviews'
);

export const getUserData = createAction(
  'user/userData',
  (userData: UserDataType) => ({payload: userData})
);

export const setLoadingStatus = createAction<boolean>(
  'data/isLoadingStatus'
);

export const setOfferLoading = createAction<boolean>(
  'data/isOfferLoading'
);

export const setReviewLoading = createAction<boolean>(
  'data/isReviewLoading'
);

export const authorization = createAction<AuthorizationStatus>(
  'user/authorization'
);

export const redirect = createAction<LocationApp>(
  'app/redirect'
);

export const loadNearOffers = createAction<OfferType[]>(
  'offers/loadNearOffers'
);

export const setNewReview = createAction<ReviewType>(
  'data/setNewReview'
);
