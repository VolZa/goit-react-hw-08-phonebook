import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk("contacts/fetchAll", 
   async (_, thunkAPI) => {
      try {
         const response = await axios.get("/contacts");
         return response.data;
      } catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

export const addContact = createAsyncThunk('contacts/addContact',
   async (contact, thunkAPI) => {
      try {
         const { data } = await axios.post('/contacts', contact);
         return data;
      } catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

export const delContact = createAsyncThunk ('contacts/deleteContact',
   async (contactId, thunkAPI) => {
      try {
         const {data} = await axios.delete(`/contacts/${contactId}`);
         return data;
      }  catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

