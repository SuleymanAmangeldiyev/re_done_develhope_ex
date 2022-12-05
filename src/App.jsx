import React, { Component } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
export class App extends Component {
  render() {
  
 
    return (
      <div>
    <DisplayLanguage />       
       
      </div>
    );
  }
}

export default App;

// the ex: 42  (Context - 02)

// Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.