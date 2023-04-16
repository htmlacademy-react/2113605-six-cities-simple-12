export enum LocationApp {
  Main = '/',
  Login = '/login',
  Offer = '/offer/',
  notFound = '/page-not-found'
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  User = 'USER',
  City = 'CITY',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const DEFAULT_CITY = Cities[0];

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const DEFAULT_SORT = SortType.Popular;

export const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const SIMILAR_OFFERS_COUNT = 3;

