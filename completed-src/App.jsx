import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import LoginComponent from "./LoginComponent";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const updateItem = (index, text) => {
    let toUpdateItems = [...items];
    toUpdateItems[index] = text;
    setItems(toUpdateItems);
  };

  const deleteItem = (index) => {
    // needs to delete the item in the items array
    let toUpdateItems = [...items];
    toUpdateItems.splice(index, 1);
    setItems(toUpdateItems);
  };
  return (
    <div>
      <h1>{username}</h1>
      <LoginComponent
        visible={!loggedIn}
        setLoggedIn={setLoggedIn}
        setUsername={setUsername}
      ></LoginComponent>
      <div className={loggedIn ? "" : "hidden"}>
        <input
          onChange={(ev) => {
            let text = ev.target.value;
            setInputText(text);
          }}
          type="text"
        />
        <button
          onClick={() => {
            let itemsNew = [...items, inputText];
            setItems(itemsNew);
          }}
        >
          Add Item
        </button>
        {items.map((item, index) => (
          <CardComponent
            updateItem={updateItem}
            deleteItem={deleteItem}
            index={index}
            content={item}
          ></CardComponent>
        ))}
      </div>
      <button
        onClick={() => {
          setLoggedIn(false);
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default App;