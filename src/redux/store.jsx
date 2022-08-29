import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './ContactsApi';
import contactsSlice from './ContactSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
