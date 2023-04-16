import { store } from '../store';
import { OfferType, ReviewType, UserDataType } from '.';
import { AuthorizationStatus, SortType } from '../consts';

export type OfferDataType = {
  offers: OfferType[];
  isOfferLoading: boolean;
  currentOffer: OfferType | null;
  isLoading: boolean;
  nearOffers: OfferType[];
};

export type ReviewDataType = {
  reviews: ReviewType[];
  isReviewLoading: boolean;
};

export type UserType = {
  userData: UserDataType | null;
  authStatus: AuthorizationStatus;
};

export type filterDataType = {
  city: string;
  sortType: SortType;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
