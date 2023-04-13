import React, { useState, useEffect } from "react";
import { validation } from "../validation/validation";

import "./styles/form.css";
export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  console.log("length in Form:", Object.keys(errors).length);

  const handleChange = (e) => {
    setUserData(
      e.target.name === "email"
        ? {
            ...userData,
            email: e.target.value,
          }
        : { ...userData, password: e.target.value }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  useEffect(() => {
    validation(userData, errors, setErrors);
  }, [userData]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Email:</label>
      <input
        type={"text"}
        name={"email"}
        placeholder={"Your email..."}
        value={userData.email}
        onChange={(e) => handleChange(e)}
      ></input>
      {errors.email ? (
        <div>
          <span className={errors.email ? "warning" : ""}>{errors.email}</span>
        </div>
      ) : null}

      <label>Password:</label>
      <input
        type={"password"}
        name={"password"}
        placeholder={"Your password..."}
        value={userData.password}
        onChange={(e) => handleChange(e)}
      ></input>
      {errors.password ? (
        <div>
          <span className={errors.password ? "warning" : ""}>
            {errors.password}
          </span>
        </div>
      ) : null}
      <button disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
}
