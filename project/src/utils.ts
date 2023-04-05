import { OffersPropsType, SortType } from './mocks';

export const getActualOffers = (city: string, offers: OffersPropsType[]) =>
  offers.filter((offer) => offer.city === city);

export const getSortingOffers = (
  city: string,
  offers: OffersPropsType[],
  sortType: string
) => {
  const offersByLocation = getActualOffers(city, offers);

  switch (sortType) {
    case SortType.LowPrice:
      return offersByLocation.sort((a, b) => a.priceValue - b.priceValue);
    case SortType.HightPrice:
      return offersByLocation.sort((b, a) => a.priceValue - b.priceValue);
    case SortType.Rating:
      return offersByLocation.sort((b, a) => a.rating - b.rating);
    default:
      return offersByLocation;
  }
};
