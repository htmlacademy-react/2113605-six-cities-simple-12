import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSort,
  loadOffers,
  authorization,
  setLoadingStatus,
  getUserData,
  setReviewLoading,
  setOfferLoading,
  loadNearOffers,
  loadReviews,
  loadCurrentOffer,
} from './action';
import { AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT } from '../consts';
import { OfferType, UserDataType, ReviewType } from '../types';
import { SortType } from '../consts';

type InitialStateType = {
  city: string;
  offers: OfferType[];
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  isReviewLoading: boolean;
  isOfferLoading: boolean;
  userData: UserDataType | null;
  currentOffer: OfferType | null;
  reviews: ReviewType[];
  nearOffers: OfferType[];
};

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  isReviewLoading: false,
  isOfferLoading: false,
  userData: null,
  currentOffer: null,
  reviews: [],
  nearOffers: [],
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
    .addCase(setOfferLoading, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setReviewLoading, (state, action) => {
      state.isReviewLoading = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    });
});
