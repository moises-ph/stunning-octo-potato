import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../styles/dashNav.module.css";

function DashNav() {
  return (
    <nav className={style.nav}>
      <h1 className={style.title}>Express Entertainment</h1>
      <div className={style.links}>
        <NavLink to="/account/peliculas" className={style.link}>
          Peliculas
        </NavLink>
        <NavLink to="/account/series" className={style.link}>
          Series
        </NavLink>
        <NavLink to="/account/libros" className={style.link}>
          Libros
        </NavLink>
      </div>
    </nav>
  );
}

export default DashNav;
