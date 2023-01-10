import React, { useRef } from "react";
import { useState } from "react";

export default function CarDetails() {
  const [data, setData] = useState([]);
  const modelRef = useRef();
  const yearRef  = useRef();
  const colorRef = useRef();


  const resetForm = () => {
    modelRef.current.value = "Lamborghini";
    yearRef.current.value  = 2025;
    colorRef.current.value = "White and Black";
  };
  
  const addData = () => {
    const newCar = {
      model: modelRef.current.value,
      year: yearRef.current.value,
      color: colorRef.current.value,
    };
    setData((curent) => [...curent, newCar]);
    resetForm();
  };

  return (
    <div>
      <div>
        <input type="text" ref={modelRef} />
        <input type="number" ref={yearRef} />
        <input type="text" ref={colorRef} />
        <button onClick={addData}>Submit</button>
      </div>
      <ul>
        {data.map((data) => (
          <li>{`Model: ${data.model} | Color: ${data.color} | Year: ${data.year}`}</li>
        ))}
      </ul>
    </div>
  );
}
