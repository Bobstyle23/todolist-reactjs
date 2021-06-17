import React from "react";
import { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInput(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleInput} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
