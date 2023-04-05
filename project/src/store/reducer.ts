import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, offers, DEFAULT_SORT } from '../mocks/index';
import { changeCity, updateOffers, changeSort } from './action';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: offers.filter(({ city }) => city === DEFAULT_CITY),
  sortType: DEFAULT_SORT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { currentCity } = action.payload;
      state.activeCity = currentCity;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers.filter(({ city }) => city === state.activeCity);
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    });
});

export { reducer };
