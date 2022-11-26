import React from 'react'


function add(a, b){
  return <h2>"The sum of {a} + {b} = {a + b}"</h2>
}

function App() {
 
  return (
    <div>
     <h1>{add(10, 5)}</h1>
    </div>
  );
}

export default App;

// the ex: 02 (jsx-05)

// Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag.