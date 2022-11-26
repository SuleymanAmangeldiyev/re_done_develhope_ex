import React from 'react'


function hello(name){
  return <h1>"Hello, {name}"</h1>
}

function App() {
 
  return (
    <div>
     <h1>{hello("suleyman")}</h1>
    </div>
  );
}

export default App;

// the ex: 02 (jsx-02)

// Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string.