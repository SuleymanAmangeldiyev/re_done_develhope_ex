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

// the ex: 41  (Context - 01)

// Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.