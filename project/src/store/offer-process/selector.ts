import { NameSpace } from '../../consts';
import { OfferType } from '../../types';
import { State } from '../../types/process-state';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].offers;
export const getOfferStatus = (state: State): boolean => state[NameSpace.Offers].isLoading;
export const getCurrentOffer = (state: State): OfferType | null => state[NameSpace.Offers].currentOffer;
export const getLoadingCurrentOffer = (state: State): boolean => state[NameSpace.Offers].isOfferLoading;
export const getNearOffers = (state: State): OfferType[] => state[NameSpace.Offers].nearOffers;
