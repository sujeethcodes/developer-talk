import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES

import Register from "./pages/register";

import Login from "./pages/login";

import Home from "./pages/home/index";

import Program from "./pages/language";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path=":id" element={<Program />} />
      </Routes>
    </Router>
  );
}

export default App;
