import React, { useState, useEffect } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.getElementById(
      "counter"
    ).innerHTML = `This is from useEffect counter: ${count} times`;
  },[count]);

  return (
    <div>
      <h1 id="counter"></h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
