import React from "react";
import Nav from "./Nav";
import styles from "../styles/login.module.css";

function Login() {
  return (
    <>
      <Nav />
      <div className={styles.body}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input1}
            placeholder="Correo Eletronico"
          />
          <input
            type="text"
            className={styles.input1}
            placeholder="Contraseña"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
