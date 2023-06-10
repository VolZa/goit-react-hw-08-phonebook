import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { addContact, delContact, fetchContacts } from "redux/contacts/operations";

// import initContacts from "../constants";
const handlePendingContacts = state => { state.isLoading = true;};
const handleRejected = ( state, { payload }) => { 
   state.isLoading = false;
   state.error = payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
   items: [], isLoading: false, error: null
  },
  extraReducers: builder => {
   builder
      //Отримати контакти
      .addCase(fetchContacts.pending, handlePendingContacts) //старт запиту
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {//успішне завершення запиту
         state.isLoading = false;
         state.error = null;
         state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)//неуспіх звершення запиту 
      //додати контакт
      .addCase(addContact.pending, handlePendingContacts)
      .addCase(addContact.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.error = null;
         state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      //видалити контакт
      .addCase(delContact.pending, handlePendingContacts)
      .addCase(delContact.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.error = null;
         state.items = state.items.filter(el => el.id !== payload.id)
      })
      .addCase(delContact.rejected, handleRejected);
   }
  });  

export const contactsReducer = contactsSlice.reducer;
