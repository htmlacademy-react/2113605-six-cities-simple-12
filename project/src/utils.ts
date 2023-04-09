import { DEFAULT_CITY, DEFAULT_SORT, SortType } from './consts';
import { OfferType } from './types';

export const getActualOffers = (city: string = DEFAULT_CITY, offers: OfferType[]) => offers.filter((offer) => offer.city.name === city);

export const convertPercentage = (item: number) => `${String(Math.round(item) / 0.05)}%`;

export const getSortingOffers = (city: string, offers: OfferType[], sortType = DEFAULT_SORT) => {
  const offersByLocation = getActualOffers(city, offers);

  switch(sortType) {
    case SortType.LowPrice:
      return offersByLocation.sort((a, b) => a.price - b.price);
    case SortType.HightPrice:
      return offersByLocation.sort((b, a) => a.price - b.price);
    case SortType.Rating:
      return offersByLocation.sort((b, a) => a.rating - b.rating);
    default:
      return offersByLocation;
  }
};
