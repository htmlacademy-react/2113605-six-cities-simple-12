import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType, LocationApp } from '../consts';
import { OfferType, UserDataType } from '../types/';

export const changeCity = createAction(
  'location/changeLocation',
  (location: string) => ({ payload: location })
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({ payload: sort })
);

export const loadOffers = createAction<OfferType[]>(
  'data/loadOffers'
);

export const getUserData = createAction(
  'user/userData',
  (userData: UserDataType) => ({payload: userData})
);

export const setLoadingStatus = createAction<boolean>(
  'data/isLoadingStatus'
);

export const authorization = createAction<AuthorizationStatus>(
  'user/authorization'
);

export const redirect = createAction<LocationApp>(
  'app/redirect'
);
