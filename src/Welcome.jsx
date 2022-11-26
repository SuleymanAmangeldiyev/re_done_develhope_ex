import React, { Component } from 'react'


 function Welcome({name, age}) {
   return (
     <>
       <p> Welcome, {name}!</p>
      <Age age={age}/>
     </>
   );
 }

Welcome.defaultProps = {
  name: "Suleyman",
};


function Age({age})  {
 
    return (
      <p>
        {age > 18 ? `Your age is ${age}.` : ''} { age < 18 && `You are very young!`}
      </p>
    );
  }



export default Welcome



