import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AuthPage } from "./Pages/AuthPage";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import axios from "axios";
import { userAuthSlice } from "./store/redusers/UserAuthSlice";

function App() {
  const { id } = useAppSelector((state) => state.userReducer);
  const localdata = localStorage.getItem("userData");
  const dispatch = useAppDispatch();
  const { authUser } = userAuthSlice.actions;
  useEffect(() => {
    if (localdata !== null) {
      let userId = parseInt(localdata);
      axios
        .get(
          "https://my-json-server.typicode.com/VladislavSakhno13/json-server/users"
        )
        .then((response) => {
          const userData = response.data.filter(
            (user: any) => user.id === userId
          );
          dispatch(authUser(userData));
        })
        .catch((response) => {
          console.error(response);
        });
    }
  }, []);

  return (
    <>
      {id === null ? (
        <AuthPage />
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
