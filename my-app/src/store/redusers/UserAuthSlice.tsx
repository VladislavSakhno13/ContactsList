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
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },
  },
});
export default userAuthSlice.reducer;
