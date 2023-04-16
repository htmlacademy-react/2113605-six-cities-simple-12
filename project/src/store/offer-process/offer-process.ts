import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { OfferDataType } from '../../types/process-state';
import {
  fetchOffersAction,
  fetchCurrentOfferAction,
  fetchNearOffersAction,
} from '../api-actions';

const initialState: OfferDataType = {
  offers: [],
  isLoading: false,
  currentOffer: null,
  nearOffers: [],
  isOfferLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferLoading = true;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  },
});
