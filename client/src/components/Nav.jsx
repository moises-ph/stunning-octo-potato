import React from "react";
import style from '../styles/nav.module.css'
import { NavLink } from "react-router-dom";
import Logo from "../imagenes/logo-fondo.png"

function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <img src={Logo} className={style.img} alt="" />
        <div className={style.links}>
          <NavLink to='/' className={style.link}>Home</NavLink>
          <NavLink to="/login" className={style.link}>
            Log in
          </NavLink>
          <NavLink to="/register" className={style.link}>
            Registro
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
