import { useState } from "react";

 function useChangeEvent() {
  const [data, setData] = useState({
    username: "",
    password: "",
   
  });
  function changeHandler(event) {
    const { name, type, value} = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? '' : value,
      };
    });
  }

  return {
    data,
    onChangeEvent: changeHandler,
  };
}

export default function UserForm(){
 const { data, onChangeEvent } = useChangeEvent();

 return (
   <div className="App">
     <input
       type="text"
       name="username"
       value={data.username}
       onChange={onChangeEvent}
     />
     <input
       type="password"
       name="password"
       value={data.password}
       onChange={onChangeEvent}
     />
   </div>
 );}