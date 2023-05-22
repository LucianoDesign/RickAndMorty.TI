import React from "react";
import { useState } from "react";
import styles from './Form.module.css'
import { validateEmail, validatePassword } from "./validation";


export default function Form(props) {
  const {login} = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    if (property === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    } else if (property === "password") {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData)
  }

  return (
    <div className={styles.loginBox}>
      <h2>Login Rick and Morty App</h2>
      <form autocomplete="off">
        <div className={styles.userBox}>
          <input type="text" name="email" required="" value={userData.email} onChange={handleChange} />
          <label>
            Email<span>{` ${errors.email}`}</span>
          </label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name="password" required="" value={userData.password} onChange={handleChange} />
          <label>
            Password<span>{` ${errors.password}`}</span>
          </label>
        </div>
        <button onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}