import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
  state = {
    language: "tkm",
  };
  options = (e) => {
    this.setState({
      language: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <LanguageContext.Provider value={this.state.language}>
          <h1>Short code of language is "{this.state.language}".</h1>
        </LanguageContext.Provider>
        <select value={this.state.language} onChange={this.options}>
          <option value="en">English</option>
          <option value="tkm">Turkmen</option>
          <option value="rm">Romanian</option>
          <option value="cin">Chinese</option>
          <option value="rus">Rossian</option>
        </select>
      </div>
    );
  }
}
