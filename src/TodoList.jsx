import React, { useRef, useState } from "react";

export default function TodoList({shows}) {
  const [items, setItems] = useState(["Work"]);
  const todoRef = useRef();

  const formADD = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    setItems((prevItems) => [...prevItems, newTodo]);
    todoRef.current.value = "";
  };

  const reset = () => {
    setItems([]);
    todoRef.current.value = "";
  };

  const remove = (item) => {
    setItems((prevItems) => {
      return prevItems.filter((todo) => todo !== item);
    });
  };


  return (
    <div>
      <form onSubmit={formADD}>
        <input type="text" ref={todoRef} />
        <button type="submit">Add</button>
      <button onClick={reset}>Reset</button>
      </form>

      <ul>
        
           {shows(items, remove)}
        
      </ul>
    </div>
  );
}
