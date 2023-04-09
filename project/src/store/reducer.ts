import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  loadOffers,
  authorization,
  setLoadingStatus,
  getUserData,
} from './action';
import { AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT } from '../consts';
import { OfferType, UserDataType } from '../types';
import { SortType } from '../consts';

type InitialStateType = {
  city: string;
  offers: OfferType[];
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  userData: UserDataType | null;
};

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(authorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
