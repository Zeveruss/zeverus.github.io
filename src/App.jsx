import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Formp from "./pages/form";
import Absen from "./pages/absen";

import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-emerald-300">
      <Router basename="/zeverus.github.io">
        <Routes>
          <Route path="zeverus.github.io/" element={<Home />}></Route>
          <Route path="zeverus.github.io/form" element={<Formp />}></Route>
          <Route path="zeverus.github.io/absen" element={<Absen />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
