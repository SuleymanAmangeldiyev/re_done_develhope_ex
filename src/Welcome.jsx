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

export class Age extends Component {
  render() {
    return <p>"Your age is {this.props.age}."</p>;
  }
}


export default Welcome



