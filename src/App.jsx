import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

import NumberDisplay from "./NumberDisplay";
import WelcomeComponent from "./WelcomeComponent";
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";
import Students from "./StudentsComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/number" element={<NumberDisplay />}></Route>
        <Route path="/" element={<WelcomeComponent />}></Route>
        <Route path="/card" element={<CardComponent />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/card">Card</Link>
      <br />
      <Link to="/number">Number</Link>
      <br />
      <Link to="/students">Students</Link>
    </div>
  );
}

export default App;
