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
  interface user {
    id: number | undefined;
    name: string;
    phone: string;
  }
  useEffect(() => {
    if (localdata !== null) {
      let userId = parseInt(localdata);
      axios
        .get(
          "https://my-json-server.typicode.com/VladislavSakhno13/json-server/users"
        )
        .then((response) => {
          response.data.forEach((element: user) => {
            if (element.id === userId) {
              dispatch(authUser(element));
            }
          });
          const userData = response.data.filter(
            (user: user) => user.id === userId
          );
          const newArr = {
            id: 1,
            name: "",
            phone: "",
          };
          console.log(userData);
        })
        .catch((response) => {
          console.error(response);
        });
    }
  }, []);

  return (
    <>
      {id === null || id === undefined ? (
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
