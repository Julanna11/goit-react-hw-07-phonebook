import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },

  reducers: {
    changeFilter(state, { payload }) {
      state.filterValue = payload;
    },
  },
});

export const getFilter = state => state.filter.filterValue;

export const { changeFilter } = contactsSlice.actions;

export const filterReducer = contactsSlice.reducer;
