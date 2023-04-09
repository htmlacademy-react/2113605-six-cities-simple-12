import { store } from '../store';
import { Cities } from '../consts';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type CityType = {
  location: LocationType;
  name: typeof Cities[number];
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferType = {
  id: number;
  bedrooms: number;
  description: string | string[];
  goods: string[];
  images: string[];
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  host: HostType;
  city: CityType;
  location: LocationType;
};

export type CardType = {
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
};

export type CityNameType = typeof Cities[number];

export type AuthDataType = {
  login: string;
  password: string;
};

export type HostType = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

export type ReviewType = {
  avatarUrl: string;
  name: string;
  score: number;
  date: string;
  text: string;
}

export type ReviewsItemType = {
  id: number;
  review: ReviewType[];
};

export type UserDataType = {
  id: number;
  email: string;
  token: string;
};
