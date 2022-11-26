import React, { Component } from 'react'


 function Welcome({name, age}) {
   return (
     <>
       <p> Welcome, {name}!</p>
     {age &&  <Age age={age}/>}
     </>
   );
 }

Welcome.defaultProps = {
  name: "Suleyman",
};


function Age({age})  {
 
    return <p>"Your age is {age}."</p>;
  }



export default Welcome



