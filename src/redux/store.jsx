import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './ContactsApi';
import { filterReducer } from './ContactSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
