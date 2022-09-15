import React from "react";
import logo from "../logo.svg";
import style from "../styles/error404.module.css";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className={style.body}>
        <img src={logo} className={style.logo}/>
        <h1 className={style.error}>Error 404, pagina no econtrada</h1>
        <NavLink to="/" className={style.link}>Volver al home</NavLink>
      </div>
    </>
  );
}

export default Error404;
