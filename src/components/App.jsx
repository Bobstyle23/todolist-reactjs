import React from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
