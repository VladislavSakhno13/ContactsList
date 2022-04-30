import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Second />} />
      </Routes>
    </>
  );
}
const Second = () => {
  return <div>2</div>;
};
export default App;
