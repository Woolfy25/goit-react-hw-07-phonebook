import { createSlice } from "@reduxjs/toolkit";

const filterInicialState = "";

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterInicialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
