import { createAction } from '@reduxjs/toolkit';
import { Cities } from '../mocks';

export const setCity = createAction<{currentCity: typeof Cities[number]}>('offer/setCity');
export const updateOffers = createAction('offer/updateOffers');
