import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { offerData } from './offer-process/offer-process';
import { reviewsData } from './review-process/review-process';
import { userData } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offerData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.User]: userData.reducer,
});
