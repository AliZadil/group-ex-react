import React, { useState, useEffect } from "react";
import NumberDisplay from './NumberDisplay.jsx'
import "./App.css";

function App() {
  return (
    <div>
      {NumberDisplay()}
    </div>
  );
}

export default App;