import { useState } from "react";

export default function ClickCounter() {
  let [count, setCount] = useState(0);
  const addingOne = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addingOne}>count up</button>
    </div>
  );
}