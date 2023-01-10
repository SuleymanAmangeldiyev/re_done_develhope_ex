import React from 'react'
import GitHub from './GithubUser'
import { useState } from "react";

export default function GitHubuserList() {
  const [users, setUsers] = useState(["SuleymanAmangeldiyev"]);
  const [user, setUser] = useState("");
  const [ch, setCh] = useState(0);
  const [shw, setShow] = useState('');
  const adduers = ()=>{
     setUsers([...users, user])
  }
 
  const nexts = ()=>{
    if( ch < users.length ){
     setCh(ch + 1)
     setShow(users[ch])
    }
  }
  const last = () => {
    if (ch < users.length) {
      setCh(ch - 1);
      setShow(users[ch]);
    }
  };
 
 
  return (
    <div>
      <label htmlFor="users"></label>
      <input type="text" id="users" onChange={(e) => setUser(e.target.value)} />
      <br />
      <button onClick={adduers}>Add</button>
      <button onClick={last}>last</button>
      <button onClick={nexts}>next</button>
      <GitHub username={shw} />
    </div>
  );
}
