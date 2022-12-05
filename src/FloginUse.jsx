import React, { useState } from "react";

export default function FloginUse() {
  const [info, setInfo] = useState({
    username: "",
    password: "",
    remember: false,
    login: false,
  });

  const control = (e) => {
    const { name, type, value, checked } = e.target;

    setInfo({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        name="username"
        type="text"
        id="username"
        value={info.username}
        onChange={control}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        id="password"
        value={info.password}
        onChange={control}
      />{" "}
      <br />
      <label htmlFor="remember">Remember: </label>
      <input
        name="remember"
        type="checkbox"
        id="remember"
        checked={info.remember}
        onClick={control}
      />
    </div>
  );
}
