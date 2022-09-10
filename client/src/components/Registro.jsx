import React from "react";
import Nav from "./Nav";
import styles from '../styles/register.module.css'

function Registro() {
  return (
    <>
      <Nav />
      <form className={styles.body}>
        <h1 className={styles.title}>Registro</h1>
        <input className={styles.input1} type="text" placeholder="Nombre" />
        <input className={styles.input1} type="text" placeholder="Apellido" />
        <input className={styles.input1} type="number" placeholder="Edad" />
        <input className={styles.input1} type="text" placeholder="Correo Electronico" />
        <input className={styles.input1} type="text" placeholder="Contraseña" />
        <input className={styles.input1} type="text" placeholder="Confirmar Contraseña" />
      </form>
    </>
  );
}

export default Registro;
