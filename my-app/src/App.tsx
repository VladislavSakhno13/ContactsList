import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Second />} />
      </Routes>
    </>
  );
}
const Home = () => {
  return <div>1</div>;
};
const Second = () => {
  return <div>2</div>;
};
export default App;
