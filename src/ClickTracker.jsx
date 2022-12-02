import React, { Component } from "react";

export class ClickTracker extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      cliked: ''
   }
 }
  

 click = (e) => {
  this.setState({
    cliked: e.target.textContent,
  })
  
}
 
        render() { 
    
    
   
   
    return (
      <div>
        <h1> {this.state.cliked}</h1>
        <button onClick={this.click}>button 1</button>
        <button onClick={this.click}>button 2</button>
        <button onClick={this.click}>button 3</button>
      </div>
    );
  }
}

export default ClickTracker;
