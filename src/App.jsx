import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Link } from 'react-router-dom';
import NumberDisplay from './NumberDisplay';
import CardComponent from './CardComponent.jsx';
import NotFound from './NotFound.jsx';
import Welcome from './WelcomeComponent.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/number' element={<NumberDisplay />} />
        <Route path="/card" element={<CardComponent content={"Card"} index={0} />} />
        <Route path='*' elemenet={<NotFound />} />
      </Routes>
      <br />
      <link to={'/'}>Home</link>
      <br />
      <link to={'/number'}>Number</link>
      <br />
      <link to={'/card'}>Card</link>
    </div>
  );
}

export default App;