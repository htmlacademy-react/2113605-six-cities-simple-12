import { createAction } from '@reduxjs/toolkit';
import { CityNameType, SortType } from '../mocks';

export const changeCity = createAction<{ currentCity: CityNameType }>(
  'offer/changeCity'
);

export const updateOffers = createAction('offer/updateOffers');

export const changeSort = createAction(
  'offer/changeSort',
  (sort: SortType) => ({ payload: sort })
);
