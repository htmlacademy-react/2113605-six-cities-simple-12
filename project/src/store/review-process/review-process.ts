import { createSlice } from '@reduxjs/toolkit';
import { ReviewDataType } from '../../types/process-state';
import { NameSpace } from '../../consts';
import { addReviewAction, fetchReviewsAction } from '../api-actions';

const initialState: ReviewDataType = {
  reviews: [],
  isReviewLoading: false,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewLoading = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewLoading = false;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewLoading = true;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isReviewLoading = false;
      });
  },
});
