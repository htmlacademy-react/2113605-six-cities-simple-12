import { NameSpace } from '../../consts';
import { State } from '../../types/process-state';

export const getCity = (state: State) => state[NameSpace.City].city;
export const getSortType = (state: State) => state[NameSpace.City].sortType;
