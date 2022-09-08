import React from "react";
import Nav from "./Nav";
import styles from '../styles/register.module.css'

function Registro() {
  return (
    <>
      <Nav />
      <form>
        <h1 className={styles.title}>Registro</h1>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="number" placeholder="Edad" />
        <input type="text" placeholder="Correo Electronico" />
        <input type="text" placeholder="Contraseña" />
        <input type="text" placeholder="Confirmar Contraseña" />
      </form>
    </>
  );
}

export default Registro;
