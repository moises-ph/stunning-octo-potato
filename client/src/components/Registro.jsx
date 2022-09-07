import React from "react";
import Nav from "./Nav";
import '../styles/register.module.css'

function Registro() {
  return (
    <>
      <Nav />
      <form>
        <h1>Registro</h1>
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
