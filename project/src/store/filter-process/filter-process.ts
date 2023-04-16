import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT, NameSpace, SortType } from '../../consts';
import { filterDataType } from '../../types/process-state';

const initialState: filterDataType = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT,
};

export const filterData = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeCity, changeSortType} = filterData.actions;
