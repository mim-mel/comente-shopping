import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import mockData from "./data/mockData";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import { createContext } from "react";

export const MockDataContext = React.createContext();

function App() {
  return (
    <MockDataContext.Provider value={mockData}>
      <BrowserRouter basename="comento-shop">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </MockDataContext.Provider>
  );
}

export default App;
