import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReducer from "./redusers/ContactSlice";
import userReducer from "./redusers/UserAuthSlice";
export const rootReducer = combineReducers({ contactReducer, userReducer });
export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
