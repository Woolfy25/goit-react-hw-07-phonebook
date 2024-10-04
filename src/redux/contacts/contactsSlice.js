// import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
