import React from "react";
import { useState } from "react";
import styles from './Form.module.css'


export default function Form() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
      });
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({ ...userData, [property]: value })}


  return (
    <div className={styles.loginBox}>
      <h2>Login Rick and Morty App</h2>
      <form>
        <div className={styles.userBox}>
          <input type="text" name="email" required="" value={userData.email} onChange={handleChange}/>
          <label>Email</label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name="password" required="" value={userData.password} onChange={handleChange}/>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
