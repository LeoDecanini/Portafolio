import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
