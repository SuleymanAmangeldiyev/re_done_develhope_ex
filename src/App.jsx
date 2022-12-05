import React, { Component } from "react";
import TodoList from "./TodoList";
export class App extends Component {
  render() {
  
    const show = (items, callback) => {
      return (
        <ul>
          { items.map((item) => (
              <li key={item}>
                {item} <button onClick={() => callback(item)}>Remove</button>
              </li>
            ))}
        </ul>
      );
    };
 
    return (
      <div>
       <TodoList shows={show}/>
       
       
      </div>
    );
  }
}

export default App;

// the ex: 40  (Render-Props-01)

// Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array