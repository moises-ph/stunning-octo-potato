import React from "react";
import Nav from "./Nav";
import '../styles/login.css'

function Login() {
  return (
    <>
      <Nav />
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Correo Eletronico" />
        <input type="text" placeholder="Contraseña" />
      </form>
    </>
  );
}

export default Login;
