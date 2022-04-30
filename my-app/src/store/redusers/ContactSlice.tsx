import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../../models/IContact";

interface ContactState {
  Contacts: IContact[];
}
export const initialState: ContactState = { Contacts: [] };
export const contactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.Contacts.push(action.payload);
    },
    deleteById(state, action) {
      state.Contacts.splice(action.payload, 1);
    },
  },
});
export default contactSlice.reducer;
