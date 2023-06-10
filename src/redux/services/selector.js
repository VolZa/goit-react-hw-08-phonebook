import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectShowingContacts = createSelector(
   [selectContacts, selectFilter],
   ({items}, filter) => {
      return items.filter(contact =>
         contact.name.toLowerCase().includes(filter.toLowerCase()))
   }
);