import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
   name: "filter",
   // initialState: {
   //    value: "",
   // },
   initialState: "",
   reducers: {
      setValue(state, action) {
         // state.value = action.payload;
         return action.payload;
      },
   },
});   

export const { setValue } = filterSlice.actions;
// export const getFilter = ({ filter: { value } }) => value;
export const getFilter = state => state.filter;
// export const getFilter = (state) => state.filter.value;