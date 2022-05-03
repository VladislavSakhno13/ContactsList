import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: number | null;
  login: string;
  password: string;
}
export const initialState: User = { id: null, login: "", password: "" };

export const userAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    authUser(state, action) {
      console.log("action - ", action.payload);
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },
    logout(state) {
      state.id = null;
      state.login = "";
      state.password = "";
    },
  },
});
export default userAuthSlice.reducer;
