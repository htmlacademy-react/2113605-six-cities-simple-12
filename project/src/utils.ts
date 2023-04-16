import { DEFAULT_CITY, DEFAULT_SORT, SortType } from './consts';
import { OfferType } from './types';

export const getActualOffers = (
  city: string = DEFAULT_CITY,
  offers: OfferType[]
) => offers.filter((offer) => offer.city.name === city);

export const getPercent = (val: number) => `${String(Math.round(val) / 0.05)}`;

export const getSortingOffers = (
  offers: OfferType[],
  sortType = DEFAULT_SORT
) => {
  switch (sortType) {
    case SortType.LowPrice:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.HightPrice:
      return offers.slice().sort((b, a) => a.price - b.price);
    case SortType.Rating:
      return offers.slice().sort((b, a) => a.rating - b.rating);
    default:
      return offers;
  }
};
