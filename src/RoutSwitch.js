import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shopping from "./components/Shopping";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shopping />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;