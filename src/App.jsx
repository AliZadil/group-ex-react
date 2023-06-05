import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);

  useEffect(() => {console.log(inputText)},[inputText])
  useEffect(() => {console.log(items)},[items])

  return (
    <div>
      <input 
        type="text"
        onChange={(it) => setInputText(it.target.value)} 
      />
      <button 
        onClick = {() => {
          let updatedArray = [...items, inputText];
          setItem(updatedArray);
        }}
      > Add New Item
      </button>
      <br />
      <br />
      {items.map((item) => {
        return (
          <CardComponent
            content={item}
          ></CardComponent>
        )
      })}
    </div>
  );
}

export default App;
