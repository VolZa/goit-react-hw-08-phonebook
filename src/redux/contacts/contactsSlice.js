import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { addContact, delContact, fetchContacts } from "redux/contacts/operations";

// import initContacts from "../constants";
const initialState = {
   items: [], isLoading: false, error: null
  };
const handlePendingContacts = state => { state.isLoading = true;};
const handleRejectedContacts = ( state, { payload }) => { 
   state.isLoading = false;
   state.error = payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: builder => {
   builder
      //Отримати контакти
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {//успішне завершення запиту
         state.isLoading = false;
         state.error = null;
         state.items = payload;
      })
      //додати контакт
      .addCase(addContact.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.error = null;
         state.items.push(payload);
      })
      //видалити контакт
      .addCase(delContact.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.error = null;
         state.items = state.items.filter(el => el.id !== payload.id)
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, delContact.pending), handlePendingContacts)//старт запиту
      //неуспіх звершення запиту 
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, delContact.rejected), handleRejectedContacts);
   }
  });  

export const contactsReducer = contactsSlice.reducer;
