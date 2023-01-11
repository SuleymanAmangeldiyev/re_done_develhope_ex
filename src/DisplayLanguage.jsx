import React,{useState} from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage(){
  const[language, setLanguage]= useState('tkm')
 const  options = (e) => {
    setLanguage(
      e.target.value
    );
  }

    return (
      <div>
        <LanguageContext.Provider value={language}>
          <h1>Short code of language is "{language}".</h1>
        </LanguageContext.Provider>
        <select value={language} onChange={(e)=> options(e)}>
          <option value="en">English</option>
          <option value="tkm">Turkmen</option>
          <option value="rm">Romanian</option>
          <option value="cin">Chinese</option>
          <option value="rus">Rossian</option>
        </select>
      </div>
    );
  }

