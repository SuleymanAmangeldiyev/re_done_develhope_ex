import { useState } from "react";

 function useChangeEvent() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
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
     <input
       type="checkbox"
       name="remember"
       checked={data.remember}
       onChange={onChangeEvent}
     />
   </div>
 );}