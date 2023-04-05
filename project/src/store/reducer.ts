import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, offers } from '../mocks/index';
import { setCity, updateOffers } from './action';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: offers.filter(({ city }) => city === DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const { currentCity } = action.payload;
      state.activeCity = currentCity;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers.filter(({ city }) => city === state.activeCity);
    });
});

export { reducer };
